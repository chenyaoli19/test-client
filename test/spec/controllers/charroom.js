'use strict';

describe('Controller: CharroomCtrl', function () {

  // load the controller's module
  beforeEach(module('myAppApp'));

  var CharroomCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CharroomCtrl = $controller('CharroomCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
