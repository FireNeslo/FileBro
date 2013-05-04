'use strict';

describe('Service: filesystem', function () {

  // load the service's module
  beforeEach(module('FileBroWSApp'));

  // instantiate service
  var filesystem;
  beforeEach(inject(function (_filesystem_) {
    filesystem = _filesystem_;
  }));

  it('should do something', function () {
    expect(!!filesystem).toBe(true);
  });

});
