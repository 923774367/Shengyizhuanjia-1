(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopCtrl',['$scope','localStorageService','$state',function ($scope,localStorageService,$state) {
    $scope.shop={};

    $scope.editShop=function (titleValue,propertyValue) {
      $state.go('app.shop-edit',{
        title:titleValue,
        property:propertyValue
      });
    };

    $scope.$on('$stateChangeSuccess',function () {
      $scope.shop=localStorageService.get('Shop',{
        name:'刘智勇',
        name1:'刘智勇',
        phone:'18650715138',
        phone1:'18650327647',
        createTime:'2017-9-28 15:30:00',
        email:'690284618@qq.com',
        hylx:'111',
      });
    });
  }])
})();
