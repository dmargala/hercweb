'use strict';

/* Controllers */

var hercwebControllers = angular.module('hercwebControllers', []);

hercwebControllers.controller('MemberListCtrl', ['$scope', 'Member',
  function($scope, Member) {
	$scope.members = Member.query();
    $scope.orderProp = 'member';
  }]);

hercwebControllers.controller('MemberDetailCtrl', ['$scope', '$routeParams', 'Member',
  function($scope, $routeParams, Member) {
      $scope.member = Member.get({memberId: $routeParams.memberId});
  }]);

