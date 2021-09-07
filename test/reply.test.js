'use strict';

const mock = require('egg-mock');

describe('test/reply.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/reply-test',
    });
    return app.ready();
  });

  after(() => app.close());

  afterEach(mock.restore);

  it('should GET /reply/noneParam', () => {
    return app
      .httpRequest()
      .get('/reply/noneParam')
      .expect({
        code: 200,
        success: false,
        data: null,
        msg: '失败',
      })
      .expect(200);
  });

  it('should GET /reply/oneParamEmptyString', () => {
    return app
      .httpRequest()
      .get('/reply/oneParamEmptyString')
      .expect({
        code: 200,
        success: false,
        data: null,
        msg: '失败',
      })
      .expect(200);
  });

  it('should GET /reply/oneParamNull', () => {
    return app
      .httpRequest()
      .get('/reply/oneParamNull')
      .expect({
        code: 200,
        success: false,
        data: null,
        msg: '失败',
      })
      .expect(200);
  });

  it('should GET /reply/oneParamCode', () => {
    return app
      .httpRequest()
      .get('/reply/oneParamCode')
      .expect({
        code: 1001,
        success: false,
        data: null,
        msg: '失败',
      })
      .expect(200);
  });

  it('should GET /reply/oneParamStatus', () => {
    return app
      .httpRequest()
      .get('/reply/oneParamStatus')
      .expect({
        code: 200,
        success: true,
        data: null,
        msg: '成功',
      })
      .expect(200);
  });

  it('should GET /reply/oneParamSuccessFalsy', () => {
    return app
      .httpRequest()
      .get('/reply/oneParamSuccessFalsy')
      .expect({
        code: 200,
        success: false,
        data: null,
        msg: '失败',
      })
      .expect(200);
  });

  it('should GET /reply/oneParamSuccessTruthy', () => {
    return app
      .httpRequest()
      .get('/reply/oneParamSuccessTruthy')
      .expect({
        code: 200,
        success: true,
        data: null,
        msg: '成功',
      })
      .expect(200);
  });

  it('should GET /reply/oneParamMsgString', () => {
    return app
      .httpRequest()
      .get('/reply/oneParamMsgString')
      .expect({
        code: 200,
        success: false,
        data: null,
        msg: '错误',
      })
      .expect(200);
  });

  it('should GET /reply/oneParamDataArray', () => {
    return app
      .httpRequest()
      .get('/reply/oneParamDataArray')
      .expect({
        code: 200,
        success: false,
        data: [
          { id: 1, name: 'Ben' },
          { id: 2, name: 'Tom' },
        ],
        msg: '失败',
      })
      .expect(200);
  });

  it('should GET /reply/oneParamDataObject', () => {
    return app
      .httpRequest()
      .get('/reply/oneParamDataObject')
      .expect({
        code: 200,
        success: false,
        data: {
          id: 1,
          name: 'Ben',
        },
        msg: '失败',
      })
      .expect(200);
  });

  it('should GET /reply/allParams', () => {
    return app
      .httpRequest()
      .get('/reply/allParams')
      .expect({
        code: 1001,
        success: true,
        data: [
          { id: 1, name: 'Ben' },
          { id: 2, name: 'Tom' },
        ],
        msg: '成功',
        extra: {
          token: '123',
        },
      })
      .expect(400);
  });
});
