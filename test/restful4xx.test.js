'use strict';

const mock = require('egg-mock');

describe('test/restful4xx.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/reply-test',
    });
    return app.ready();
  });

  after(() => app.close());

  afterEach(mock.restore);

  it('should GET /restful4xx/badRequestNoneParam', () => {
    return app
      .httpRequest()
      .get('/restful4xx/badRequestNoneParam')
      .expect({
        success: false,
        data: null,
        msg: '失败',
      })
      .expect(400);
  });

  it('should GET /restful4xx/badRequestOneParamObject', () => {
    return app
      .httpRequest()
      .get('/restful4xx/badRequestOneParamObject')
      .expect({
        success: false,
        data: { error: 'exception' },
        msg: '失败',
      })
      .expect(400);
  });

  it('should GET /restful4xx/badRequestTwoParams', () => {
    return app
      .httpRequest()
      .get('/restful4xx/badRequestTwoParams')
      .expect({
        success: false,
        data: null,
        msg: '错误',
      })
      .expect(400);
  });

  it('should GET /restful4xx/badRequestTwoParamsEmptyString', () => {
    return app
      .httpRequest()
      .get('/restful4xx/badRequestTwoParamsEmptyString')
      .expect({
        success: false,
        data: { error: 'exception' },
        msg: '失败',
      })
      .expect(400);
  });

  it('should GET /restful4xx/badRequestTwoParamsNull', () => {
    return app
      .httpRequest()
      .get('/restful4xx/badRequestTwoParamsNull')
      .expect({
        success: false,
        data: { error: 'exception' },
        msg: '失败',
      })
      .expect(400);
  });

  it('should GET /restful4xx/badRequestThreeParams', () => {
    return app
      .httpRequest()
      .get('/restful4xx/badRequestThreeParams')
      .expect({
        success: false,
        data: null,
        msg: '错误',
        extra: { token: '123' },
      })
      .expect(400);
  });

  it('should GET /restful4xx/unauthorizedNoneParam', () => {
    return app
      .httpRequest()
      .get('/restful4xx/unauthorizedNoneParam')
      .expect({
        success: false,
        data: null,
        msg: '失败',
      })
      .expect(401);
  });

  it('should GET /restful4xx/unauthorizedOneParamObject', () => {
    return app
      .httpRequest()
      .get('/restful4xx/unauthorizedOneParamObject')
      .expect({
        success: false,
        data: { error: 'exception' },
        msg: '失败',
      })
      .expect(401);
  });

  it('should GET /restful4xx/unauthorizedTwoParams', () => {
    return app
      .httpRequest()
      .get('/restful4xx/unauthorizedTwoParams')
      .expect({
        success: false,
        data: null,
        msg: '错误',
      })
      .expect(401);
  });

  it('should GET /restful4xx/unauthorizedTwoParamsEmptyString', () => {
    return app
      .httpRequest()
      .get('/restful4xx/unauthorizedTwoParamsEmptyString')
      .expect({
        success: false,
        data: { error: 'exception' },
        msg: '失败',
      })
      .expect(401);
  });

  it('should GET /restful4xx/unauthorizedTwoParamsNull', () => {
    return app
      .httpRequest()
      .get('/restful4xx/unauthorizedTwoParamsNull')
      .expect({
        success: false,
        data: { error: 'exception' },
        msg: '失败',
      })
      .expect(401);
  });

  it('should GET /restful4xx/unauthorizedThreeParams', () => {
    return app
      .httpRequest()
      .get('/restful4xx/unauthorizedThreeParams')
      .expect({
        success: false,
        data: null,
        msg: '错误',
        extra: { token: '123' },
      })
      .expect(401);
  });

  it('should GET /restful4xx/forbiddenNoneParam', () => {
    return app
      .httpRequest()
      .get('/restful4xx/forbiddenNoneParam')
      .expect({
        success: false,
        data: null,
        msg: '失败',
      })
      .expect(403);
  });

  it('should GET /restful4xx/forbiddenOneParamObject', () => {
    return app
      .httpRequest()
      .get('/restful4xx/forbiddenOneParamObject')
      .expect({
        success: false,
        data: { error: 'exception' },
        msg: '失败',
      })
      .expect(403);
  });

  it('should GET /restful4xx/forbiddenTwoParams', () => {
    return app
      .httpRequest()
      .get('/restful4xx/forbiddenTwoParams')
      .expect({
        success: false,
        data: null,
        msg: '错误',
      })
      .expect(403);
  });

  it('should GET /restful4xx/forbiddenTwoParamsEmptyString', () => {
    return app
      .httpRequest()
      .get('/restful4xx/forbiddenTwoParamsEmptyString')
      .expect({
        success: false,
        data: { error: 'exception' },
        msg: '失败',
      })
      .expect(403);
  });

  it('should GET /restful4xx/forbiddenTwoParamsNull', () => {
    return app
      .httpRequest()
      .get('/restful4xx/forbiddenTwoParamsNull')
      .expect({
        success: false,
        data: { error: 'exception' },
        msg: '失败',
      })
      .expect(403);
  });

  it('should GET /restful4xx/forbiddenThreeParams', () => {
    return app
      .httpRequest()
      .get('/restful4xx/forbiddenThreeParams')
      .expect({
        success: false,
        data: null,
        msg: '错误',
        extra: { token: '123' },
      })
      .expect(403);
  });

  it('should GET /restful4xx/notFoundNoneParam', () => {
    return app
      .httpRequest()
      .get('/restful4xx/notFoundNoneParam')
      .expect({
        success: false,
        data: null,
        msg: '失败',
      })
      .expect(404);
  });

  it('should GET /restful4xx/notFoundOneParamObject', () => {
    return app
      .httpRequest()
      .get('/restful4xx/notFoundOneParamObject')
      .expect({
        success: false,
        data: { error: 'exception' },
        msg: '失败',
      })
      .expect(404);
  });

  it('should GET /restful4xx/notFoundTwoParams', () => {
    return app
      .httpRequest()
      .get('/restful4xx/notFoundTwoParams')
      .expect({
        success: false,
        data: null,
        msg: '错误',
      })
      .expect(404);
  });

  it('should GET /restful4xx/notFoundTwoParamsEmptyString', () => {
    return app
      .httpRequest()
      .get('/restful4xx/notFoundTwoParamsEmptyString')
      .expect({
        success: false,
        data: { error: 'exception' },
        msg: '失败',
      })
      .expect(404);
  });

  it('should GET /restful4xx/notFoundTwoParamsNull', () => {
    return app
      .httpRequest()
      .get('/restful4xx/notFoundTwoParamsNull')
      .expect({
        success: false,
        data: { error: 'exception' },
        msg: '失败',
      })
      .expect(404);
  });

  it('should GET /restful4xx/notFoundThreeParams', () => {
    return app
      .httpRequest()
      .get('/restful4xx/notFoundThreeParams')
      .expect({
        success: false,
        data: null,
        msg: '错误',
        extra: { token: '123' },
      })
      .expect(404);
  });

  it('should GET /restful4xx/conflictNoneParam', () => {
    return app
      .httpRequest()
      .get('/restful4xx/conflictNoneParam')
      .expect({
        success: false,
        data: null,
        msg: '失败',
      })
      .expect(409);
  });

  it('should GET /restful4xx/conflictOneParamObject', () => {
    return app
      .httpRequest()
      .get('/restful4xx/conflictOneParamObject')
      .expect({
        success: false,
        data: { error: 'exception' },
        msg: '失败',
      })
      .expect(409);
  });

  it('should GET /restful4xx/conflictTwoParams', () => {
    return app
      .httpRequest()
      .get('/restful4xx/conflictTwoParams')
      .expect({
        success: false,
        data: null,
        msg: '错误',
      })
      .expect(409);
  });

  it('should GET /restful4xx/conflictTwoParamsEmptyString', () => {
    return app
      .httpRequest()
      .get('/restful4xx/conflictTwoParamsEmptyString')
      .expect({
        success: false,
        data: { error: 'exception' },
        msg: '失败',
      })
      .expect(409);
  });

  it('should GET /restful4xx/conflictTwoParamsNull', () => {
    return app
      .httpRequest()
      .get('/restful4xx/conflictTwoParamsNull')
      .expect({
        success: false,
        data: { error: 'exception' },
        msg: '失败',
      })
      .expect(409);
  });

  it('should GET /restful4xx/conflictThreeParams', () => {
    return app
      .httpRequest()
      .get('/restful4xx/conflictThreeParams')
      .expect({
        success: false,
        data: null,
        msg: '错误',
        extra: { token: '123' },
      })
      .expect(409);
  });
});
