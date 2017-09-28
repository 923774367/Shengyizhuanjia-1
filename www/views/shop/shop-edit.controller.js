(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopEditCtrl',['$scope','$stateParams','localStorageService',function ($scope,$stateParams,localStorageService) {
    $scope.title = $stateParams.title;
    $scope.property = $stateParams.property;
    $scope.shop = localStorageService.get('Shop',{
      name:'刘智勇',
      ab:'',
      name1:'刘智勇',
      phone:'18650327647',
      phone1:'18650327647',
      createTime:'2017-9-28 15:30:00',
      email:'690284618@qq.com',
      hylx:'111'

    });
    $scope.save = function () {
      localStorageService.update('Shop',$scope.shop);
    };
  }]);
})();
