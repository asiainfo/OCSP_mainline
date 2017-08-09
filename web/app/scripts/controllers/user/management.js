'use strict';

/**
 * For label management main page controller
 */
angular.module('ocspApp')
  .controller('UserManagementCtrl', ['$scope', '$http', '$rootScope', '$filter', 'Notification', 'hotkeys', function ($scope, $http, $rootScope, $filter, Notification, hotkeys) {
    $rootScope.init('user');
    function init() {
      $http.get('/api/user').success(function (data) {
        $scope.users = data;
      });
    }

    if($rootScope.isAdmin()) {
      init();
    }

    $scope.user = {
      name: $rootScope.username
    };
    $scope.shouldShowKerberosConfigure = false;

    var updateUserInfo = function(){
      $scope.user = {
        name: $rootScope.username
      };
      $http.get('/api/user/'+$rootScope.username).success(function(data){
        if(data!==null){
          $scope.user = data;
          $scope.user.name = $rootScope.username;
        }
      });
      $http.get('/api/prop').success(function(props){
        for(var index in props){
          if(props[index].name === 'ocsp.kerberos.enable'){
            $scope.shouldShowKerberosConfigure = Boolean(props[index].value==='true');
          }
        }
      });
    };

    updateUserInfo();

    $scope.message = null;
    $scope.styles = null;
    $scope.checkPassword = function(){
      if($scope.user.password !== undefined && $scope.user.password2 !== undefined && $scope.user.password === $scope.user.password2){
        $scope.message = null;
        $scope.styles = null;
        return true;
      }else{
        $scope.message = $filter('translate')('ocsp_web_user_manage_006');
        $scope.styles = "redBlock";
        return false;
      }
    };
    hotkeys.bindTo($scope).add({
      combo: 'enter',
      allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
      callback: function() {
        if($rootScope.isAdmin()){
          $scope.saveUsers();
        }else {
          $scope.save();
        }
      }
    });

    $scope.checkKeytabInput = function(e){
      let keyDownEvent=window.event||e;
      console.log(keyDownEvent.keyCode);
      if(keyDownEvent.keyCode===191||keyDownEvent.keyCode===220){
        keyDownEvent.preventDefault();
      }
    };

    $scope.isKerberosConfigCorrect = function(){
      if($scope.user.kafka_keytab === $scope.user.spark_keytab){
        $scope.message_kafak_spark_samekeytab = $filter('translate')('ocsp_web_user_manage_009');
        return false;
      }else{
        $scope.message_kafak_spark_samekeytab = null;
        return true;
      }
    };

    $scope.saveKerberosConfigure = function () {
      if(!$scope.isKerberosConfigCorrect()){
        return;
      }
      if ($scope.KerberosConfigForm.$invalid) {
        angular.forEach($scope.KerberosConfigForm.$error, function (field) {
          angular.forEach(field, function (errorField) {
            errorField.$setTouched();
          });
        });
        Notification.error($filter('translate')('ocsp_web_common_032'));
      } else {
        $http.put('/api/user/' + $scope.user.name, { "user": $scope.user }).success(function (data) {
          if (data.status) {
            Notification.success($filter('translate')('ocsp_web_common_026'));
          } else {
            Notification.error($filter('translate')('ocsp_web_common_030'));
          }
        });
      }
    };
    
    $scope.save = function(){
      if($scope.mainForm.$invalid){
        angular.forEach($scope.mainForm.$error, function (field) {
          angular.forEach(field, function(errorField){
            errorField.$setTouched();
          });
        });
        Notification.error($filter('translate')('ocsp_web_common_032'));
      }else if ($scope.checkPassword()) {
        $http.post('/api/user/change', {"user": $scope.user}).success(function (data) {
          if(data.status) {
            $scope.user = {
              name: $rootScope.username
            };
            Notification.success($filter('translate')('ocsp_web_common_026'));
          }else{
            Notification.error($filter('translate')('ocsp_web_common_030'));
          }
        });
      }
    };

    $scope.saveUsers = () => {
      if ($scope.mainForm.$invalid) {
        angular.forEach($scope.mainForm.$error, function (field) {
          angular.forEach(field, function(errorField){
            errorField.$setTouched();
          });
        });
        Notification.error($filter('translate')('ocsp_web_common_032'));
      }else {
        $http.put("/api/user", {users: $scope.users}).success(function(){
          Notification.success($filter('translate')('ocsp_web_common_026'));
        });
      }
    };

    $scope.remove = function(array, $index){
      array.splice($index,1);
    };

    $scope.add = function (array) {
      if(array !== undefined) {
        array.push({
          status: 1,
          output: {},
          userFields: []
        });
      }
    };
  }]);
