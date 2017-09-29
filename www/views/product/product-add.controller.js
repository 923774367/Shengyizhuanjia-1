(function () {
  'use strict';
  angular.module('starter.controllers').controller('ProductAddCtrl',['$scope','CategoryService',function ($scope,CategoryService) {
    $scope.product = {
      ID:0,
      Name:'',
      CategoryID:CategoryService.activeCategory.ID,
      Category:{
        ID:CategoryService.activeCategory.ID,
        Name:CategoryService.activeCategory.Name
      }
    };
    $scope.$on('CategoryUpdate',function (event,data) {
      console.log(data);
      $scope.product.categoryID = CategoryService.activeCategory.ID;
      $scope.product.category.ID = CategoryService.activeCategory.ID;
      $scope.product.category.Name = CategoryService.activeCategory.Name;
    });
  }]);
})();
