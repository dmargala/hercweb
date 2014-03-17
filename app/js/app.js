'use strict';

/* App Module */

var hercwebApp = angular.module('hercwebApp', [
  'ngRoute',
  'hercwebAnimations',
  'hercwebControllers',
  'hercwebFilters',
  'hercwebServices'
]);

hercwebApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/members', {
        templateUrl: 'partials/member-list.html',
        controller: 'MemberListCtrl'
      }).
      when('/members/:memberId', {
        templateUrl: 'partials/member-detail.html',
        controller: 'MemberDetailCtrl'
      }).
      otherwise({
        redirectTo: '/members'
      });
  }]);
