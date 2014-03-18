'use strict';

/* Services */

var hercwebServices = angular.module('hercwebServices', ['ngResource']);
 
hercwebServices.factory('Member', ['$resource',
  function($resource){
    return $resource('data/members/:memberId.json', {}, {
      query: {method:'GET', params:{memberId:'members'}, isArray:true}
    });
  }]);

hercwebServices.factory('Bill', ['$resource',
  function($resource){
    return $resource('data/bills.json', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);

hercwebServices.factory('BillVotes', ['$resource',
  function($resource){
    return $resource('data/legvotes.json', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);