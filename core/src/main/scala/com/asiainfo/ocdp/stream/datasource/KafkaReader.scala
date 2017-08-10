package com.asiainfo.ocdp.stream.datasource

import java.util
//import scala.language.implicitConversions
import scala.collection.JavaConverters._

import com.asiainfo.ocdp.stream.common.Logging
import com.asiainfo.ocdp.stream.config.{DataInterfaceConf, TaskConf}
import com.asiainfo.ocdp.stream.constant.{CommonConstant, DataSourceConstant}
import org.apache.kafka.clients.consumer.{ConsumerConfig, ConsumerRecord, KafkaConsumer}
import org.apache.kafka.clients.CommonClientConfigs
import org.apache.kafka.common.{PartitionInfo, TopicPartition}
import org.apache.kafka.common.serialization.StringDeserializer
import org.apache.spark.streaming.StreamingContext
import org.apache.spark.streaming.dstream.{DStream, InputDStream}
import org.apache.spark.streaming.kafka010.{ConsumerStrategies, KafkaUtils, LocationStrategies}


/**
  * Created by rainday on 7/24/17.
  */
class KafkaReader(ssc: StreamingContext, conf: DataInterfaceConf, kerberos_enable: Boolean, latest: Boolean) extends Logging {

  val mDsConf = conf.getDsConf
  val mSSC = ssc
  val mKerberosEnable = kerberos_enable
  val mFromLatest = latest

  val mTopicsSet = {
    if(CommonConstant.MulTopic) conf.getTopicSet()
    else conf.get(DataSourceConstant.TOPIC_KEY).split(DataSourceConstant.DELIM).map(_.trim).filter(!_.isEmpty).toSet
  }

  val mGroupId = mDsConf.get(DataSourceConstant.GROUP_ID_KEY)

  val mProtocol = if (mKerberosEnable) "SASL_PLAINTEXT" else "PLAINTEXT"
    /**
      * using 0.10.0 kafka API
      * auto.offset.reset ==> earliest, latest, none(throw exception when can not read the offset)
      * kafka store offset in replicated, partitioned log, no more store offset in zookeeper
      * after poll the data, kafka-010 KafkaUtils api will commit the offsets, i.e. AT MOST ONCE
      */
  val mKafkaParams = Map[String, Object](ConsumerConfig.AUTO_OFFSET_RESET_CONFIG -> "earliest"
      , ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG -> classOf[StringDeserializer]
      , ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG -> classOf[StringDeserializer]
      , ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG -> "false"
      , CommonClientConfigs.SECURITY_PROTOCOL_CONFIG -> mProtocol
      , "client.id" -> mGroupId
      , CommonClientConfigs.BOOTSTRAP_SERVERS_CONFIG -> mDsConf.get(DataSourceConstant.BROKER_LIST_KEY)
      //      , "sasl.mechanism" -> "GSSAPI"
      , ConsumerConfig.GROUP_ID_CONFIG -> mGroupId)

  def createStreamMulData(taskConf: TaskConf): DStream[ConsumerRecord[String, String]] = {

    //val preferredHosts = LocationStrategies.PreferConsistent

    val offsets =  if (mFromLatest) {

      logInfo("Init Kafka Stream using latest offset: brokers->" + mDsConf.get(DataSourceConstant.BROKER_LIST_KEY)
        + "; topic->" + mTopicsSet
        + "; protocol->" + mProtocol
        + " ; " + "group.id->" + mGroupId)

       getLatestOffset()

    } else {

      logInfo("Init Kafka Stream : brokers->" + mDsConf.get(DataSourceConstant.BROKER_LIST_KEY)
        + "; topic->" + mTopicsSet
        + "; protocol->" + mProtocol
        + " ; " + "group.id->" + mGroupId)

      checkOffset()
    }

    logInfo("create kafka Stream with offset: ")
    for (offset <- offsets) {
      logInfo("offset, topic : " + offset._1.topic() + ", partition: " + offset._1.partition() + " offset: " + offset._2)
    }

    KafkaUtils.createDirectStream[String, String](
        mSSC,
        LocationStrategies.PreferBrokers,
        ConsumerStrategies.Subscribe[String, String](mTopicsSet, mKafkaParams, offsets))

  }

  def getOffset(consumer : KafkaConsumer[String, String], topicPartitionList: collection.mutable.ListBuffer[TopicPartition]) : collection.mutable.Map[TopicPartition, Long] = {
    val offsets = collection.mutable.Map[TopicPartition, Long]()
    for (topicPartition <- topicPartitionList) {
      val offset = consumer.position(topicPartition)
      offsets.put(topicPartition, offset)
      logInfo("offset, topic : " + topicPartition.topic() + ", partition: " + topicPartition.partition() + " offset: " + offset)
    }
    offsets
  }

  def getLatestOffset() : collection.mutable.Map[TopicPartition, Long] = {

    val consumer = new KafkaConsumer[String, String](new util.HashMap[String, Object](mKafkaParams.asJava))

    val topicPartitionList = new collection.mutable.ListBuffer[TopicPartition]()
    mTopicsSet.map( topic => {
      val partitionInfos = consumer.partitionsFor(topic).asScala.map(partitionInfo => {
        topicPartitionList.append(new TopicPartition(topic, partitionInfo.partition()))
      } )
    })

    consumer.assign(topicPartitionList.toList.asJava)

    consumer.seekToEnd(topicPartitionList.toList.asJava)

    logInfo("get latest offset: ")
    val offsets = getOffset(consumer, topicPartitionList)

    consumer.close()

    offsets
  }

  def checkOffset() : collection.mutable.Map[TopicPartition, Long] = {

    val consumer = new KafkaConsumer[String, String](new util.HashMap[String, Object](mKafkaParams.asJava))

    val topicPartitionList = new collection.mutable.ListBuffer[TopicPartition]()
    mTopicsSet.map( topic => {
      val partitionInfos = consumer.partitionsFor(topic).asScala.map(partitionInfo => {
        //topicPartitionList.add(new TopicPartition(topic, partitionInfo.partition()))
        topicPartitionList.append(new TopicPartition(topic, partitionInfo.partition()))
      } )
    })

    consumer.assign(topicPartitionList.toList.asJava)

    logInfo("get current offset: ")
    val curOffsets = getOffset(consumer, topicPartitionList)

    consumer.seekToBeginning(topicPartitionList.toList.asJava)
    logInfo("get earlist offset: ")
    val earliestOffsets = getOffset(consumer, topicPartitionList)

    consumer.seekToEnd(topicPartitionList.toList.asJava)

    logInfo("get latest offset: ")
    val latestOffsets = getOffset(consumer, topicPartitionList)

    val resOff = curOffsets.map(offset => {
      val cur = offset._2
      val earliest = earliestOffsets.get(offset._1).get
      val latest = latestOffsets.get(offset._1).get
      val off = if (cur < earliest) {
        logWarning("offset in kafka is OUT of RANGE, current offset: "
          + cur + " using the earliest offset: " + earliest
          + " in topic: " + offset._1.topic() + " partition: " + offset._1.partition())
        earliest
      } else if (cur > latest) {
        logWarning("offset in kafka is OUT of RANGE, current offset: "
          + cur + " using the latest offset: " + latest
          + " in topic: " + offset._1.topic() + " partition: " + offset._1.partition())
        latest
      } else cur
      (offset._1, off)
    })

    consumer.close()

    resOff
  }

}


