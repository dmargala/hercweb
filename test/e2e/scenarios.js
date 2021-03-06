'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('HERCWeb App', function() {

  it('should redirect index.html to index.html#/members', function() {
    browser().navigateTo('app/index.html');
    expect(browser().location().url()).toBe('/members');
  });

  describe('Member list view', function() {

    beforeEach(function() {
      browser().navigateTo('app/index.html#/members');
    });


    it('should filter the member list as user types into the search box', function() {
      expect(repeater('.members li').count()).toBe(119);

      input('query').enter('huff');
      expect(repeater('.members li').count()).toBe(1);

      input('query').enter('democrat');
      expect(repeater('.members li').count()).toBe(83);
    });


    it('should be possible to control member order via the drop down select box', function() {
      input('query').enter('irvine'); //let's narrow the dataset to make the test assertions shorter

      expect(repeater('.members li', 'Member List').column('member.fullname')).
          toEqual(["Allan R. Mansoor",
                   "Mimi Walters"]);

      select('orderProp').option('District');

      expect(repeater('.members li', 'Member List').column('member.fullname')).
          toEqual(["Mimi Walters",
                   "Allan R. Mansoor"]);
    });

    it('should render member specific links', function() {
      input('query').enter('huff');
      element('.members li a').click();
      expect(browser().location().url()).toBe('/members/Huff');
    });

  });

  describe('Member detail view', function() {
 
    beforeEach(function() {
      browser().navigateTo('app/index.html#/members/Huff');
    });
 
 
    it('should display Bob Huff page', function() {
      expect(binding('member.fullname')).toBe('Bob Huff');
    });
  });

  describe('Bill list view', function() {

    beforeEach(function() {
      browser().navigateTo('app/index.html#/bills');
    });


    it('should filter the bill list as user types into the search box', function() {
      expect(repeater('.bills dl').count()).toBe(12);

      input('query').enter('Senate Floor');
      expect(repeater('.bills dl').count()).toBe(3);

      input('query').enter('Special Consent');
      expect(repeater('.bills dl').count()).toBe(1);
    });

  });

});
