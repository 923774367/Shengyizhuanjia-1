(function () {
  'use strict';
  angular.module('starter.controllers').controller('ProductAddCtrl',['$scope','CategoryService','$cordovaBarcodeScanner','$cordovaCamera','$cordovaImagePicker','$ionicActionSheet',
    function ($scope,CategoryService,$cordovaBarcodeScanner,$cordovaCamera,$cordovaImagePicker,$ionicActionSheet) {
    $scope.product={
      ID:0,
      Name:'',
      Barcode:'',
      //Images:['/views/product/img/1.jpg','/views/product/img/2.jpg','/views/product/img/3.jpg'],
      CategoryID:CategoryService.activeCategory.ID,
      Category:{
        ID:CategoryService.activeCategory.ID,
        Name:CategoryService.activeCategory.Name
      }
    };
    $scope.$on('CategoryUpdate',function (event,data) {
      console.log(data);
      $scope.product.CategoryID=CategoryService.activeCategory.ID;
      $scope.product.Category.ID=CategoryService.activeCategory.ID;
      $scope.product.Category.Name=CategoryService.activeCategory.Name;
    });
      $scope.scanBarcode = function () {
        $cordovaBarcodeScanner.scan().then(function (data) {
          $scope.product.Barcode = data.text;
        },
        function (error) {

        });
      }
  }]);
})();
