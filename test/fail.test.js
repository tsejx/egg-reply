'use strict';

const mock = require('egg-mock');

describe('test/fail.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/reply-test',
    });
    return app.ready();
  });

  after(() => app.close());

  afterEach(mock.restore);

  it('should GET /fail/noneParam', () => {
    return app
      .httpRequest()
      .get('/fail/noneParam')
      .expect({
        code: 400,
        success: false,
        data: null,
        msg: '失败',
      })
      .expect(400);
  });

  it('should GET /fail/oneParamNumber', () => {
    return app
      .httpRequest()
      .get('/fail/oneParamNumber')
      .expect({
        code: 1001,
        success: false,
        data: null,
        msg: '失败',
      })
      .expect(400);
  });

  it('should GET /fail/onParamZero', () => {
    return app
      .httpRequest()
      .get('/fail/onParamZero')
      .expect({
        code: 0,
        success: false,
        data: null,
        msg: '失败',
      })
      .expect(400);
  });

  it('should GET /fail/oneParamString', () => {
    return app
      .httpRequest()
      .get('/fail/oneParamString')
      .expect({
        code: 1001,
        success: false,
        data: null,
        msg: '失败',
      })
      .expect(400);
  });

  it('should GET /fail/oneParamsNotNumberString', () => {
    return app
      .httpRequest()
      .get('/fail/oneParamsNotNumberString')
      .expect({
        code: 400,
        success: false,
        data: null,
        msg: '失败',
      })
      .expect(400);
  });

  it('should GET /fail/oneParamNull', () => {
    return app
      .httpRequest()
      .get('/fail/oneParamNull')
      .expect({
        code: 400,
        success: false,
        data: null,
        msg: '失败',
      })
      .expect(400);
  });

  it('should GET /fail/twoParams', () => {
    return app
      .httpRequest()
      .get('/fail/twoParams')
      .expect({
        code: 2001,
        success: false,
        data: null,
        msg: '操作失败',
      })
      .expect(400);
  });

  it('should GET /fail/twoParamsNull', () => {
    return app
      .httpRequest()
      .get('/fail/twoParamsNull')
      .expect({
        code: 2002,
        success: false,
        data: null,
        msg: '失败',
      })
      .expect(400);
  });

  it('should GET /fail/twoParamsEmptyString', () => {
    return app
      .httpRequest()
      .get('/fail/twoParamsEmptyString')
      .expect({
        code: 2003,
        success: false,
        data: null,
        msg: '失败',
      })
      .expect(400);
  });

  it('should GET /fail/twoParamsObject', () => {
    return app
      .httpRequest()
      .get('/fail/twoParamsObject')
      .expect({
        code: 3001,
        success: false,
        data: null,
        msg: '失败',
      })
      .expect(400);
  });
});
