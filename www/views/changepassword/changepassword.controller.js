(function () {
  'use strict';
  angular.module('starter.controllers').controller('ChangePasswordCtrl',['$scope','popupService',function ($scope,popupService) {
    $scope.user = {
      oldPassword:'',
      password:'',
      confirmPassword:''
    };
    $scope.save = function (valid) {
      if($scope.changePasswordForm.oldPassword.$error.required){
        popupService.toast('jiumimabitian');
        return;
      }

        console.log($scope.changePasswordForm.$valid);
        if($scope.changePasswordForm.$valid){
          console.log('save');
          popupService.toast('dsflsdflsfldl');
        }


    };
  }]);
})();
