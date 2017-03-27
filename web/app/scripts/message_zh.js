'use strict';
/**
 * Resource file for zh g18n
 */
angular.module('ocspApp').config(['$translateProvider', function($translateProvider) {
  $translateProvider.translations('zh', {
    'ocsp_web_common_000': '橘云流处理平台',
    'ocsp_web_common_001': '用户名',
    'ocsp_web_common_002': '密码',
    'ocsp_web_common_003': '登录',
    'ocsp_web_common_004': '退出',
    'ocsp_web_common_005': '时',
    'ocsp_web_common_006': '分',
    'ocsp_web_common_007': '下一步',
    'ocsp_web_common_008': '上一步',
    'ocsp_web_common_009': '保存',
    'ocsp_web_common_010': '上传',
    'ocsp_web_common_011': '名字',
    'ocsp_web_common_012': '描述',
    'ocsp_web_common_013': '基础配置',
    'ocsp_web_common_014': '搜索...',
    'ocsp_web_common_015': '开',
    'ocsp_web_common_016': '关',
    'ocsp_web_common_017': '请选择',
    'ocsp_web_common_018': '名字',
    'ocsp_web_common_019': '描述',
    'ocsp_web_common_020': '取消',
    'ocsp_web_common_021': '提交',
    'ocsp_web_common_022': '提交中...',
    'ocsp_web_common_023': '秒',
    'ocsp_web_common_024': '标签',
    'ocsp_web_common_025': '事件',
    'ocsp_web_common_026': '保存成功',
    'ocsp_web_common_027': '不能为空',
    'ocsp_web_common_028': '上传成功',
    'ocsp_web_common_029': '删除成功',
    'ocsp_web_common_030': '保存失败',
    'ocsp_web_common_031': '类型',
    'ocsp_web_common_032': '表单验证失败，请检查',
    'ocsp_web_common_033': '输出配置',
    'ocsp_web_common_034': '不是有效整数',
    'ocsp_web_common_035': '字段错误',

    'ocsp_web_user_manage_000':'用户管理',
    'ocsp_web_user_manage_001':'修改密码',
    'ocsp_web_user_manage_002':'当前密码',
    'ocsp_web_user_manage_003':'新密码',
    'ocsp_web_user_manage_004':'再次输入',
    'ocsp_web_user_manage_005':'密码错误，请重试',
    'ocsp_web_user_manage_006':'两次输入的密码不一致',
    'ocsp_web_user_manage_007':'用户登录过期',
    'ocsp_web_user_manage_008':'没有操作权限',

    'ocsp_web_system_manage_000':'系统管理',
    'ocsp_web_system_manage_001':'系统配置',
    'ocsp_web_system_manage_002':'请输入SPARK_HOME',
    'ocsp_web_system_manage_003':'新建数据源',
    'ocsp_web_system_manage_004':'新建数据源之后将无法删除，确认新建',

    'ocsp_web_label_manage_000':'标签管理',
    'ocsp_web_label_manage_001':'标签名字',
    'ocsp_web_label_manage_002':'标签实现类',
    'ocsp_web_label_manage_003':'标签参数',

    'ocsp_web_streams_manage_000':'作业流管理',
    'ocsp_web_streams_manage_001':'新建作业流',
    'ocsp_web_streams_manage_002':'作业流概要',
    'ocsp_web_streams_manage_003':'作业流配置',
    'ocsp_web_streams_manage_004':'请先选择一个作业流',
    'ocsp_web_streams_manage_005':'链接',
    'ocsp_web_streams_manage_006':'设置输入',
    'ocsp_web_streams_manage_007':'设置标签',
    'ocsp_web_streams_manage_008':'设置输出',
    'ocsp_web_streams_manage_009':'检查&提交',
    'ocsp_web_streams_manage_010':'Kafka topic',
    'ocsp_web_streams_manage_011':'输入源的字段',
    'ocsp_web_streams_manage_012':'输入源字段分隔符',
    'ocsp_web_streams_manage_013':'过滤条件',
    'ocsp_web_streams_manage_014':'作为主键的字段',
    'ocsp_web_streams_manage_015':'拖拽到这里',
    'ocsp_web_streams_manage_016':'添加输出事件',
    'ocsp_web_streams_manage_017':'事件名字',
    'ocsp_web_streams_manage_018':'需要输出的字段',
    'ocsp_web_streams_manage_019':'输出字段分隔符',
    'ocsp_web_streams_manage_020':'输出事件的时间间隔',
    'ocsp_web_streams_manage_021':'事件输出源',
    'ocsp_web_streams_manage_022':'输出到Codis中Key的前缀',
    'ocsp_web_streams_manage_023':'操作',
    'ocsp_web_streams_manage_024':'启动',
    'ocsp_web_streams_manage_025':'停止',
    'ocsp_web_streams_manage_026':'重启',
    'ocsp_web_streams_manage_027':'删除',
    'ocsp_web_streams_manage_028':'作业流运行状态',
    'ocsp_web_streams_manage_029':'作业流运行时间',
    'ocsp_web_streams_manage_030':'输出源配置',
    'ocsp_web_streams_manage_031':'输出事件',
    'ocsp_web_streams_manage_032':'已经停止',
    'ocsp_web_streams_manage_033':'正在启动',
    'ocsp_web_streams_manage_034':'正在运行',
    'ocsp_web_streams_manage_035':'正在停止',
    'ocsp_web_streams_manage_036':'正在重启',
    'ocsp_web_streams_manage_037':'作业流使能',
    'ocsp_web_streams_manage_038':'输入源',
    'ocsp_web_streams_manage_039':'重试次数',
    'ocsp_web_streams_manage_040':'订阅使能',
    'ocsp_web_streams_manage_041':'选择时间段',
    'ocsp_web_streams_manage_042':'可能值',
    'ocsp_web_streams_manage_043':'开始时间必须小于结束时间',
    'ocsp_web_streams_manage_044':'正在重试',
    'ocsp_web_streams_manage_045':'添加输入源',
    'ocsp_web_streams_manage_046':'用户自定义字段',
    'ocsp_web_streams_manage_047':'可用字段',
    'ocsp_web_streams_manage_048':'生成可用字段',
    'ocsp_web_streams_manage_049':'流程图',
    'ocsp_web_streams_case_field_name':'转义字段名',
    'ocsp_web_streams_case_expression':'case when表达式',
    'ocsp_web_streams_subscribe_type_none':'重复：无',
    'ocsp_web_streams_subscribe_type_day':'重复：每天',
    'ocsp_web_streams_subscribe_type_week':'重复：每周',
    'ocsp_web_streams_subscribe_type_month':'重复：每月',

    'ocsp_web_common_property_zookeeper_connect': 'zookeeper的连接地址',
    'ocsp_web_common_property_zk': 'zookeeper的连接地址',
    'ocsp_web_common_property_zkpath': 'Codis的proxy在zookeeper中路径',
    'ocsp_web_common_property_metadata_broker_list': 'Broker列表',
    'ocsp_web_common_property_receiveInterval': '流数据划分批次的时间间隔',
    'ocsp_web_common_property_numExecutors': 'executor的数量',
    'ocsp_web_common_property_driverMemory': 'driver的内存',
    'ocsp_web_common_property_executorMemory': '每个executor的内存',
    'ocsp_web_common_property_queue': 'Spark streaming应用程序运行在Yarn上的队列',
    'ocsp_web_common_property_filter': '过滤条件，必须符合Spark DateFrame过滤条件表达式的格式',
    'ocsp_web_common_property_retry': '作业流异常重启次数',

    'ocsp_web_dashboard_name' : '仪表盘',
    'ocsp_web_dashboard1' : '运行状态',
    'ocsp_web_dashboard2' : '时间统计(分)',
    'ocsp_web_dashboard3' : '丢掉数据和处理数据量',
    'ocsp_web_dashboard4' : '事件数量',
    'ocsp_web_dashboard5' : '处理每批次数据使用的时间',
    'ocsp_web_dashboard6' : '处理每批次数据使用的存储内存',

    'ocsp_web_dashboard_dropped': '丢掉数据',
    'ocsp_web_dashboard_reserved': '处理数据',
    'ocsp_web_dashboard_enabled_events': '启用事件',
    'ocsp_web_dashboard_disabled_events': '未启用事件'

  });
}]);
