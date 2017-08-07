package com.asiainfo.ocdp.stream.manager

import java.io.File

import akka.actor.Actor
import com.asiainfo.ocdp.stream.common.Logging
import com.asiainfo.ocdp.stream.constant.CommonConstant

import scala.sys.process._

/**
 * Created by leo on 8/24/15.
 */
class Task extends Actor with Logging {

  def receive = {
    case taskCmd: TaskCommand => {
      try {
        logInfo("Start task id : " + taskCmd.taskId)
        System.setProperty("user.dir",s"${CommonConstant.ocspConfPath}")
        logInfo("work dir: " + System.getProperty("user.dir"))
        taskCmd.cmd #>> new File(CommonConstant.appLogFile + "_" + taskCmd.taskId + ".out") !
      } finally {
        context.stop(self)
      }
    }
  }

}
