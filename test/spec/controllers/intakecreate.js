'use strict';

describe('Controller: IntakecreatectrlCtrl', function () {

  // load the controller's module
  beforeEach(module('waterintakeApp'));

  var IntakecreatectrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IntakecreatectrlCtrl = $controller('IntakecreatectrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
