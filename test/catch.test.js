'use strict';

const mock = require('egg-mock');

describe('test/catch.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/reply-test',
    });
    return app.ready();
  });

  after(() => app.close());

  afterEach(mock.restore);

  it('should GET /catch/noneParam', () => {
    return app
      .httpRequest()
      .get('/catch/noneParam')
      .expect({
        code: 500,
        success: false,
        data: {},
        msg: '失败',
      })
      .expect(500);
  });

  it('should GET /catch/throwErrorNull', () => {
    return app
      .httpRequest()
      .get('/catch/throwErrorNull')
      .expect({
        code: 500,
        success: false,
        data: {
          errorMessage: 'Hello world!',
          errorName: 'Error'
        },
        msg: '失败',
      })
      .expect(500);
  });

  it('should GET /catch/throwErrorCode', () => {
    return app
      .httpRequest()
      .get('/catch/throwErrorCode')
      .expect({
        code: 1001,
        success: false,
        data: {
          errorMessage: 'Hello world!',
          errorName: 'Error'
        },
        msg: '失败',
      })
      .expect(500);
  });

  it('should GET /catch/throwNull', () => {
    return app
      .httpRequest()
      .get('/catch/throwNull')
      .expect({
        code: 1002,
        success: false,
        data: {
          error: null
        },
        msg: '失败',
      })
      .expect(500);
  });

  it('should GET /catch/throwString', () => {
    return app
      .httpRequest()
      .get('/catch/throwString')
      .expect({
        code: 1003,
        success: false,
        data: {
          error: 'Fail'
        },
        msg: '失败',
      })
      .expect(500);
  });
});
