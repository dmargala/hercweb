'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {
 
  beforeEach(module('hercwebFilters'));
 
  describe('checkmark', function() {
 
    it('should convert boolean values to unicode checkmark or cross',
        inject(function(checkmarkFilter) {
      expect(checkmarkFilter(true)).toBe('\u2713');
      expect(checkmarkFilter(false)).toBe('\u2718');
    }));
  });

  describe('ordinal', function() {

  	it('should convert integer values to ordinal representation',
  		inject(function(ordinalFilter) {
  	  expect(ordinalFilter(1)).toBe('1st');
  	  expect(ordinalFilter(2)).toBe('2nd');
  	  expect(ordinalFilter(3)).toBe('3rd');
  	  expect(ordinalFilter(4)).toBe('4th');
  	  expect(ordinalFilter(22)).toBe('22nd');
  	  expect(ordinalFilter(43)).toBe('43rd');
  	  expect(ordinalFilter(11)).toBe('11th');
  	  expect(ordinalFilter(12)).toBe('12th');
  	  expect(ordinalFilter(13)).toBe('13th');
  	}));
  });
});


