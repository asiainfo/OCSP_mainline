'use strict';
/**
 * Resource file for en g18n
 */
angular.module('ocspApp').config(['$translateProvider', function($translateProvider) {
  $translateProvider.translations('en', {
    'ocsp_web_common_000': 'OCSP',
    'ocsp_web_common_001': 'Username',
    'ocsp_web_common_002': 'Password',
    'ocsp_web_common_003': 'Sign in',
    'ocsp_web_common_004': 'Sign out',
    'ocsp_web_common_005': 'h',
    'ocsp_web_common_006': 'm',
    'ocsp_web_common_007': 'Next',
    'ocsp_web_common_008': 'Back',
    'ocsp_web_common_009': 'Save',
    'ocsp_web_common_010': 'Upload',
    'ocsp_web_common_011': 'Name',
    'ocsp_web_common_012': 'Description',
    'ocsp_web_common_013': 'Basic configuration',
    'ocsp_web_common_014': 'Searching...',
    'ocsp_web_common_015': 'on',
    'ocsp_web_common_016': 'of',
    'ocsp_web_common_017': 'None selected',
    'ocsp_web_common_018': 'Name',
    'ocsp_web_common_019': 'Description',
    'ocsp_web_common_020': 'Cancel',
    'ocsp_web_common_021': 'Submit',
    'ocsp_web_common_022': 'Submitting...',
    'ocsp_web_common_023': 's',
    'ocsp_web_common_024': 'Label',
    'ocsp_web_common_025': 'Event',
    'ocsp_web_common_026': 'Save successfully',
    'ocsp_web_common_027': 'Cannot be empty',
    'ocsp_web_common_028': 'Upload successfully',
    'ocsp_web_common_029': 'Delete successfully',
    'ocsp_web_common_030': 'Save failed',
    'ocsp_web_common_031': 'Category',
    'ocsp_web_common_032': 'Form validate failed, please double check',
    'ocsp_web_common_033': 'Output configuration',
    'ocsp_web_common_034': 'Invaild integer',
    'ocsp_web_common_035': 'Input error',

    'ocsp_web_user_manage_000':'User Management',
    'ocsp_web_user_manage_001':'Change password',
    'ocsp_web_user_manage_002':'Current password',
    'ocsp_web_user_manage_003':'New password',
    'ocsp_web_user_manage_004':'Retype new password',
    'ocsp_web_user_manage_005':'Password is wrong, please retry',
    'ocsp_web_user_manage_006':'The two passwords you entered did not match',
    'ocsp_web_user_manage_007':'Session expired',
    'ocsp_web_user_manage_008':'No permission',
    'ocsp_web_user_name':'User name',
    'ocsp_web_user_desc':'User description',
    'ocsp_web_user_old_password':'Old password',
    'ocsp_web_user_new_password':'New password',

    'ocsp_web_system_manage_000':'System Management',
    'ocsp_web_system_manage_001':'System configuration',
    'ocsp_web_system_manage_002':'Please input your SPARK_HOME first to continue.',
    'ocsp_web_system_manage_003':'New datasource',
    'ocsp_web_system_manage_004':'New datasource cannot be deleted, confirm?',

    'ocsp_web_label_manage_000':'Label management',
    'ocsp_web_label_manage_001':'Label Name',
    'ocsp_web_label_manage_002':'Label Implementation Class',
    'ocsp_web_label_manage_003':'Label Parameters',

    'ocsp_web_streams_manage_000':'Streams Management',
    'ocsp_web_streams_manage_001':'Add Streams',
    'ocsp_web_streams_manage_002':'Summary',
    'ocsp_web_streams_manage_003':'Configs',
    'ocsp_web_streams_manage_004':'Please choose a stream first',
    'ocsp_web_streams_manage_005':'QuickLinks',
    'ocsp_web_streams_manage_006':'Setup input source',
    'ocsp_web_streams_manage_007':'Setup label',
    'ocsp_web_streams_manage_008':'Setup output event',
    'ocsp_web_streams_manage_009':'Review&Submit',
    'ocsp_web_streams_manage_010':'Kafka topic',
    'ocsp_web_streams_manage_011':'Fields',
    'ocsp_web_streams_manage_012':'Delim',
    'ocsp_web_streams_manage_013':'Filter',
    'ocsp_web_streams_manage_014':'Unique key',
    'ocsp_web_streams_manage_015':'Drop label here',
    'ocsp_web_streams_manage_016':'Add output event',
    'ocsp_web_streams_manage_017':'Event name',
    'ocsp_web_streams_manage_018':'Fields for output',
    'ocsp_web_streams_manage_019':'Delim for output fields',
    'ocsp_web_streams_manage_020':'Interval of output event',
    'ocsp_web_streams_manage_021':'The source of output event',
    'ocsp_web_streams_manage_022':'The prefix of codis key',
    'ocsp_web_streams_manage_023':'Actions',
    'ocsp_web_streams_manage_024':'Start',
    'ocsp_web_streams_manage_025':'Stop',
    'ocsp_web_streams_manage_026':'Restart',
    'ocsp_web_streams_manage_027':'Delete',
    'ocsp_web_streams_manage_028':'Stream status',
    'ocsp_web_streams_manage_029':'Stream running time',
    'ocsp_web_streams_manage_030':'Output Interface Configuration',
    'ocsp_web_streams_manage_031':'Output',
    'ocsp_web_streams_manage_032':'Stopped',
    'ocsp_web_streams_manage_033':'Starting',
    'ocsp_web_streams_manage_034':'Running',
    'ocsp_web_streams_manage_035':'Stopping',
    'ocsp_web_streams_manage_036':'Restarting',
    'ocsp_web_streams_manage_037':'Event Enable',
    'ocsp_web_streams_manage_038':'Input Datasource',
    'ocsp_web_streams_manage_039':'Retries',
    'ocsp_web_streams_manage_040':'Audit enable',
    'ocsp_web_streams_manage_041':'Choose during time',
    'ocsp_web_streams_manage_042':'Valid value',
    'ocsp_web_streams_manage_043':'Start time should be earlier than end time',
    'ocsp_web_streams_manage_044':'Retrying',
    'ocsp_web_streams_manage_045':'Add input sources',
    'ocsp_web_streams_manage_046':'User fields',
    'ocsp_web_streams_manage_047':'Available fields',
    'ocsp_web_streams_manage_048':'Generate available fields',
    'ocsp_web_streams_manage_049':'Data flow',
    'ocsp_web_streams_case_field_name':'Escape field name',
    'ocsp_web_streams_case_expression':'Case when expression',
    'ocsp_web_streams_subscribe_type_none':'Repeat: None',
    'ocsp_web_streams_subscribe_type_day':'Repeat: Every Day',
    'ocsp_web_streams_subscribe_type_week':'Repeat: Every Week',
    'ocsp_web_streams_subscribe_type_month':'Repeat: Every Month',
    'ocsp_web_streams_chart':'Quota',

    'ocsp_web_common_property_zookeeper_connect': 'Zookeeper address',
    'ocsp_web_common_property_zk': 'Zookeeper address',
    'ocsp_web_common_property_zkpath': 'The proxy path for Codis in zookeeper',
    'ocsp_web_common_property_metadata_broker_list': 'Broker list',
    'ocsp_web_common_property_receiveInterval': 'The time interval at which streaming data will be divided into batches',
    'ocsp_web_common_property_numExecutors': 'The number of executor',
    'ocsp_web_common_property_driverMemory': 'The memory of driver',
    'ocsp_web_common_property_executorMemory': 'The memory of executor',
    'ocsp_web_common_property_queue': 'The queue for running spark application on Yarn',
    'ocsp_web_common_property_filter': 'The condition expression for DataFrame',
    'ocsp_web_common_property_retry': 'Number of retries after stream crashed',

    'ocsp_web_dashboard_name' : 'Dashboard',
    'ocsp_web_dashboard1' : 'Running Status',
    'ocsp_web_dashboard2' : 'Time Statistics(minute)',
    'ocsp_web_dashboard3' : 'Dropped and Reserved Data',
    'ocsp_web_dashboard4' : 'Number of Events',
    'ocsp_web_dashboard5' : 'Task Batch Running Time(second)',
    'ocsp_web_dashboard6' : 'Task Storage Memory(KB)',

    'ocsp_web_dashboard_memory_used': 'Storage Memory Used',
    'ocsp_web_dashboard_memory_available': 'Available Storage Memory',

    'ocsp_web_dashboard_dropped': 'Dropped',
    'ocsp_web_dashboard_reserved': 'Reserved',
    'ocsp_web_dashboard_enabled_events': 'Enabled events',
    'ocsp_web_dashboard_disabled_events': 'Disabled events'

  });
}]);
