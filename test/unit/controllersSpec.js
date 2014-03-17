'use strict';

/* jasmine specs for controllers go here */
describe('HERCWeb controllers', function() {

  describe('MemberListCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(module('hercwebApp'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/memberinfo.json').
          respond({'members':[{fullname: 'John Smith'}, {fullname: 'Jane Smith'}]});

      scope = $rootScope.$new();
      ctrl = $controller('MemberListCtrl', {$scope: scope});
    }));


    it('should create "members" model with 2 members fetched from xhr', function() {
      expect(scope.members).toBeUndefined();
      $httpBackend.flush();

      expect(scope.members).toEqual([{fullname: 'John Smith'},
                                   {fullname: 'Jane Smith'}]);
    });


    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('member');
    });
  });

  describe('MemberDetailCtrl', function(){
  });

});
