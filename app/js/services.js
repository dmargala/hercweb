'use strict';

/* Services */

var hercwebServices = angular.module('hercwebServices', ['ngResource']);
 
hercwebServices.factory('Member', ['$resource',
  function($resource){
    return $resource('data/members/:memberId.json', {}, {
      query: {method:'GET', params:{memberId:'members'}, isArray:true}
    });
  }]);