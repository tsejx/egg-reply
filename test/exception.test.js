'use strict';

const mock = require('egg-mock');

describe('test/exception.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/reply-test',
    });
    return app.ready();
  });

  after(() => app.close());

  afterEach(mock.restore);

  it('should GET /exception/noneParam', () => {
    return app
      .httpRequest()
      .get('/exception/noneParam')
      .expect({
        code: 500,
        success: false,
        data: null,
        msg: '失败',
      })
      .expect(500);
  });

  it('should GET /exception/oneParamNumber', () => {
    return app
      .httpRequest()
      .get('/exception/oneParamNumber')
      .expect({
        code: 1001,
        success: false,
        data: null,
        msg: '失败',
      })
      .expect(500);
  });

  it('should GET /exception/onParamZero', () => {
    return app
      .httpRequest()
      .get('/exception/onParamZero')
      .expect({
        code: 0,
        success: false,
        data: null,
        msg: '失败',
      })
      .expect(500);
  });

  it('should GET /exception/oneParamString', () => {
    return app
      .httpRequest()
      .get('/exception/oneParamString')
      .expect({
        code: 1001,
        success: false,
        data: null,
        msg: '失败',
      })
      .expect(500);
  });

  it('should GET /exception/oneParamsNotNumberString', () => {
    return app
      .httpRequest()
      .get('/exception/oneParamsNotNumberString')
      .expect({
        code: 500,
        success: false,
        data: null,
        msg: '失败',
      })
      .expect(500);
  });

  it('should GET /exception/oneParamNull', () => {
    return app
      .httpRequest()
      .get('/exception/oneParamNull')
      .expect({
        code: 500,
        success: false,
        data: null,
        msg: '失败',
      })
      .expect(500);
  });

  it('should GET /exception/twoParams', () => {
    return app
      .httpRequest()
      .get('/exception/twoParams')
      .expect({
        code: 2001,
        success: false,
        data: null,
        msg: '操作失败',
      })
      .expect(500);
  });

  it('should GET /exception/twoParamsNull', () => {
    return app
      .httpRequest()
      .get('/exception/twoParamsNull')
      .expect({
        code: 2002,
        success: false,
        data: null,
        msg: '失败',
      })
      .expect(500);
  });

  it('should GET /exception/twoParamsEmptyString', () => {
    return app
      .httpRequest()
      .get('/exception/twoParamsEmptyString')
      .expect({
        code: 2003,
        success: false,
        data: null,
        msg: '失败',
      })
      .expect(500);
  });

  it('should GET /exception/twoParamsObject', () => {
    return app
      .httpRequest()
      .get('/exception/twoParamsObject')
      .expect({
        code: 3001,
        success: false,
        data: null,
        msg: '失败',
      })
      .expect(500);
  });
});
