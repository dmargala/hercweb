'use strict';

/* Filters */

var hercwebFilters = angular.module('hercwebFilters', []);

hercwebFilters.filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});

hercwebFilters.filter('ordinal', function() {
  return function(number) {
  	var numberString = number + '',
  		ord = '';
    switch (numberString.slice(-1)) {
    	case '1':
    		ord = numberString.slice(-2) === '11' ? 'th' : 'st';
    		break; 
    	case '2':
    		ord = numberString.slice(-2) === '12' ? 'th' : 'nd';
    		break;
    	case '3':
    		ord = numberString.slice(-2) === '13' ? 'th' : 'rd';
    		break;
    	default:
    		ord = 'th';
    		break;
    }
    return numberString + ord;
  };
});