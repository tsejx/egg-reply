'use strict';

const mock = require('egg-mock');

describe('test/restful5xx.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/reply-test',
    });
    return app.ready();
  });

  after(() => app.close());

  afterEach(mock.restore);

  it('should GET /restful5xx/serverErrorNoneParam', () => {
    return app
      .httpRequest()
      .get('/restful5xx/serverErrorNoneParam')
      .expect({
        success: false,
        data: null,
        msg: '失败',
      })
      .expect(500);
  });

  it('should GET /restful5xx/serverErrorOneParamObject', () => {
    return app
      .httpRequest()
      .get('/restful5xx/serverErrorOneParamObject')
      .expect({
        success: false,
        data: { error: 'runTimeException' },
        msg: '失败',
      })
      .expect(500);
  });

  it('should GET /restful5xx/serverErrorTwoParams', () => {
    return app
      .httpRequest()
      .get('/restful5xx/serverErrorTwoParams')
      .expect({
        success: false,
        data: null,
        msg: '错误',
      })
      .expect(500);
  });

  it('should GET /restful5xx/serverErrorTwoParamsEmptyString', () => {
    return app
      .httpRequest()
      .get('/restful5xx/serverErrorTwoParamsEmptyString')
      .expect({
        success: false,
        data: { error: 'runTimeException' },
        msg: '失败',
      })
      .expect(500);
  });

  it('should GET /restful5xx/serverErrorTwoParamsNull', () => {
    return app
      .httpRequest()
      .get('/restful5xx/serverErrorTwoParamsNull')
      .expect({
        success: false,
        data: { error: 'runTimeException' },
        msg: '失败',
      })
      .expect(500);
  });

  it('should GET /restful5xx/serverErrorThreeParams', () => {
    return app
      .httpRequest()
      .get('/restful5xx/serverErrorThreeParams')
      .expect({
        success: false,
        data: null,
        msg: '错误',
        extra: { token: '123' },
      })
      .expect(500);
  });
});
