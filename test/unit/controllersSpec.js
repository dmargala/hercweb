'use strict';

/* jasmine specs for controllers go here */
describe('HERCWeb controllers', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('hercwebApp'));
  beforeEach(module('hercwebServices'));

  describe('MemberListCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/members/members.json').
          respond([{fullname: 'John Smith'}, {fullname: 'Jane Smith'}]);

      scope = $rootScope.$new();
      ctrl = $controller('MemberListCtrl', {$scope: scope});
    }));


    it('should create "members" model with 2 members fetched from xhr', function() {
      expect(scope.members).toEqualData([]);
      $httpBackend.flush();

      expect(scope.members).toEqualData(
        [{fullname: 'John Smith'}, {fullname: 'Jane Smith'}]);
    });


    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('member');
    });
  });

  describe('MemberDetailCtrl', function(){
    var scope, $httpBackend, ctrl;
 
    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/members/Smith.json').respond({name:'John Smith'});
 
      $routeParams.memberId = 'Smith';
      scope = $rootScope.$new();
      ctrl = $controller('MemberDetailCtrl', {$scope: scope});
    }));
 
 
    it('should fetch member detail', function() {
      expect(scope.member).toEqualData({});
      $httpBackend.flush();
 
      expect(scope.member).toEqualData({name:'John Smith'});
    });
  });

});
