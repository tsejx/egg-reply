'use strict';

const mock = require('egg-mock');

describe('test/success.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/reply-test',
    });
    return app.ready();
  });

  after(() => app.close());

  afterEach(mock.restore);

  it('should GET /success/noneParam', () => {
    return app.httpRequest()
      .get('/success/noneParam')
      .expect({
        code: 200,
        success: true,
        data: null,
        msg: '成功',
      })
      .expect(200);
  });

  it('should GET /success/oneParamArray', () => {
    return app.httpRequest()
      .get('/success/oneParamArray')
      .expect({
        code: 200,
        success: true,
        data: [
          { id: 1, name: 'Ben' },
          { id: 2, name: 'Tom' },
          { id: 3, name: 'Jack' },
        ],
        msg: '成功',
      })
      .expect(200);
  });

  it('should GET /success/oneParamObject', () => {
    return app.httpRequest()
      .get('/success/oneParamObject')
      .expect({
        code: 200,
        success: true,
        data: {
          id: 1,
          name: 'Ben',
          age: 12,
        },
        msg: '成功',
      })
      .expect(200);
  });

  it('should GET /success/oneParamNumber', () => {
    return app.httpRequest()
      .get('/success/oneParamNumber')
      .expect({
        code: 200,
        success: true,
        data: 100,
        msg: '成功',
      })
      .expect(200);
  });

  it('should GET /success/oneParamNull', () => {
    return app.httpRequest()
      .get('/success/oneParamNull')
      .expect({
        code: 200,
        success: true,
        data: null,
        msg: '成功',
      })
      .expect(200);
  });

  it('should GET /success/twoParams', () => {
    return app.httpRequest()
      .get('/success/twoParams')
      .expect({
        code: 200,
        success: true,
        data: [
          { id: 1, name: 'Ben' },
          { id: 2, name: 'Tom' },
          { id: 3, name: 'Jack' },
        ],
        msg: '操作成功',
      })
      .expect(200);
  });

  it('should GET /success/twoParamsNull', () => {
    return app.httpRequest()
      .get('/success/twoParamsNull')
      .expect({
        code: 200,
        success: true,
        data: [
          { id: 1, name: 'Ben' },
          { id: 2, name: 'Tom' },
          { id: 3, name: 'Jack' },
        ],
        msg: '成功',
      })
      .expect(200);
  });

  it('should GET /success/twoParamsEmptyString', () => {
    return app.httpRequest()
      .get('/success/twoParamsEmptyString')
      .expect({
        code: 200,
        success: true,
        data: [
          { id: 1, name: 'Ben' },
          { id: 2, name: 'Tom' },
          { id: 3, name: 'Jack' },
        ],
        msg: '成功',
      })
      .expect(200);
  });

  it('should GET /success/threeParams', () => {
    return app.httpRequest()
      .get('/success/threeParams')
      .expect({
        code: 200,
        success: true,
        data: [
          { id: 1, name: 'Ben' },
          { id: 2, name: 'Tom' },
          { id: 3, name: 'Jack' },
        ],
        msg: '成功',
        extra: {
          token: '123',
        },
      })
      .expect(200);
  });

  it('should GET /success/threeParamsNull', () => {
    return app.httpRequest()
      .get('/success/threeParamsNull')
      .expect({
        code: 200,
        success: true,
        data: [
          { id: 1, name: 'Ben' },
          { id: 2, name: 'Tom' },
          { id: 3, name: 'Jack' },
        ],
        msg: '操作成功',
      })
      .expect(200);
  });
});
