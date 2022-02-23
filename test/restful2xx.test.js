'use strict';

const mock = require('egg-mock');

describe('test/restful2xx.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/reply-test',
    });
    return app.ready();
  });

  after(() => app.close());

  afterEach(mock.restore);

  it('should GET /restful2xx/okNoneParam', () => {
    return app
      .httpRequest()
      .get('/restful2xx/okNoneParam')
      .expect({
        success: false,
        data: null,
        msg: '成功',
      })
      .expect(200);
  });

  it('should GET /restful2xx/okOneParamArray', () => {
    return app
      .httpRequest()
      .get('/restful2xx/okOneParamArray')
      .expect({
        success: false,
        data: [
          { id: 1, name: 'Ben' },
          { id: 2, name: 'Tom' },
          { id: 3, name: 'Jack' },
        ],
        msg: '成功',
      })
      .expect(200);
  });

  it('should GET /restful2xx/okOneParamObject', () => {
    return app
      .httpRequest()
      .get('/restful2xx/okOneParamObject')
      .expect({
        success: false,
        data: {
          id: 1,
          name: 'Tome',
          age: 20,
        },
        msg: '成功',
      })
      .expect(200);
  });

  it('should GET /restful2xx/okOneParamNull', () => {
    return app
      .httpRequest()
      .get('/restful2xx/okOneParamNull')
      .expect({
        success: false,
        data: null,
        msg: '成功',
      })
      .expect(200);
  });

  it('should GET /restful2xx/okTwoParamNull', () => {
    return app
      .httpRequest()
      .get('/restful2xx/okTwoParamNull')
      .expect({
        success: false,
        data: [
          { id: 1, name: 'Ben' },
          { id: 2, name: 'Tom' },
          { id: 3, name: 'Jack' },
        ],
        msg: '成功',
      })
      .expect(200);
  });

  it('should GET /restful2xx/createdNoneParam', () => {
    return app
      .httpRequest()
      .get('/restful2xx/createdNoneParam')
      .expect({
        success: false,
        data: null,
        msg: '成功',
      })
      .expect(201);
  });

  it('should GET /restful2xx/createdOneParamArray', () => {
    return app
      .httpRequest()
      .get('/restful2xx/createdOneParamArray')
      .expect({
        success: false,
        data: [
          { id: 1, name: 'Ben' },
          { id: 2, name: 'Tom' },
          { id: 3, name: 'Jack' },
        ],
        msg: '成功',
      })
      .expect(201);
  });

  it('should GET /restful2xx/createdOneParamObject', () => {
    return app
      .httpRequest()
      .get('/restful2xx/createdOneParamObject')
      .expect({
        success: false,
        data: { id: 1, name: 'Ben' },
        msg: '成功',
      })
      .expect(201);
  });

  it('should GET /restful2xx/createdTwoParams', () => {
    return app
      .httpRequest()
      .get('/restful2xx/createdTwoParams')
      .expect({
        success: false,
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
      .expect(201);
  });

  it('should GET /restful2xx/noContent', () => {
    return app
      .httpRequest()
      .get('/restful2xx/noContent')
      .expect({})
      .expect(204);
  });
});
