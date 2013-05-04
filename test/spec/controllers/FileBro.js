'use strict';

describe('Controller: FileBroCtrl', function () {

  // load the controller's module
  beforeEach(module('FileBroWSApp'));

  var FileBroCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FileBroCtrl = $controller('FileBroCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
