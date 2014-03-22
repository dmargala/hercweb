'use strict';

/* Controllers */

var hercwebControllers = angular.module('hercwebControllers', []);

hercwebControllers.controller('MemberListCtrl', ['$scope', 'Member',
  function($scope, Member) {
	$scope.members = Member.query();
    $scope.orderProp = 'member';
  }]);

hercwebControllers.controller('MemberDetailCtrl', ['$scope', '$location','$routeParams', 'Member',
  function($scope, $location, $routeParams, Member) {
      $scope.member = Member.get({memberId: $routeParams.memberId});
      $scope.switchToBillDetail = function(title) {
        $location.path('/bills/0' + title.split(' ').join(''));
      }
  }]);

hercwebControllers.controller('BillListCtrl', ['$scope', 'Bill',
  function($scope, Bill) {
    $scope.bills = Bill.query();
    $scope.orderProp = 'id';
  }]);

hercwebControllers.controller('BillDetailCtrl', ['$scope', '$routeParams', 'BillVotes',
  function($scope, $routeParams, BillVotes) {
      var billvotes = BillVotes.query(function() {
        $scope.bill = $.grep(billvotes, function(bill){ return bill['id'] === $routeParams.billId; })[0];
      });
  }]);
