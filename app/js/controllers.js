'use strict';

/* Controllers */

var hercwebControllers = angular.module('hercwebControllers', []);

hercwebControllers.controller('MemberListCtrl', ['$scope', '$http',
  function($scope, $http) {
  	$http.get('data/memberinfo.json').success(function(data) {
		$scope.members = data['members'];
	});

	$scope.orderProp = 'member';
  }]);

hercwebControllers.controller('MemberDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('data/members/' + $routeParams.memberId + '.json').success(function(data) {
      $scope.member = data;
    });
  }]);
