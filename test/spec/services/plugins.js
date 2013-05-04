'use strict';

describe('Service: plugins', function () {

  // load the service's module
  beforeEach(module('FileBroWSApp'));

  // instantiate service
  var plugins;
  beforeEach(inject(function (_plugins_) {
    plugins = _plugins_;
  }));

  it('should do something', function () {
    expect(!!plugins).toBe(true);
  });

});
