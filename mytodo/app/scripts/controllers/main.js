'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.featureModels = [];
    $scope.eFeatureModels = [];
    $scope.creating = false;
    
    $scope.createFeatureModel = function () {
      $scope.creating= true;
    };
    
    $scope.saveFeatureModel = function () { 
      $scope.featureModels.push($scope.featureModel);
      $scope.reset();
      $scope.creating= false;  
    };
    
    $scope.reset = function() {
        $scope.featureModel.title = "";
        $scope.featureModel.description = "";
    };
    
    $scope.removeFeatureModel = function (index) {
      $scope.todos.splice(index, 1);
    };
  });

