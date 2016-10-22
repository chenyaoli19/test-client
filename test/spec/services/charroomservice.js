'use strict';

describe('Service: charRoomService', function () {

  // load the service's module
  beforeEach(module('myAppApp'));

  // instantiate service
  var charRoomService;
  beforeEach(inject(function (_charRoomService_) {
    charRoomService = _charRoomService_;
  }));

  it('should do something', function () {
    expect(!!charRoomService).toBe(true);
  });

});
