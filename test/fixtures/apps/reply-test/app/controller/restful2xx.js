'use strict';

const Controller = require('egg').Controller;

class Restful2xxController extends Controller {
  async okNoneParam() {
    this.ctx.ok();
  }

  async okOneParamArray() {
    this.ctx.ok([
      { id: 1, name: 'Ben' },
      { id: 2, name: 'Tom' },
      { id: 3, name: 'Jack' },
    ]);
  }

  async okOneParamObject() {
    this.ctx.ok({
      id: 1,
      name: 'Tome',
      age: 20,
    });
  }

  async okOneParamNull() {
    this.ctx.ok(null);
  }

  async okTwoParamNull() {
    this.ctx.ok([
      { id: 1, name: 'Ben' },
      { id: 2, name: 'Tom' },
      { id: 3, name: 'Jack' },
    ], null);
  }

  async createdNoneParam() {
    this.ctx.created();
  }

  async createdOneParamArray() {
    this.ctx.created([
      { id: 1, name: 'Ben' },
      { id: 2, name: 'Tom' },
      { id: 3, name: 'Jack' },
    ]);
  }

  async createdOneParamObject() {
    this.ctx.created({ id: 1, name: 'Ben' });
  }

  async createdTwoParams() {
    this.ctx.created([
      { id: 1, name: 'Ben' },
      { id: 2, name: 'Tom' },
      { id: 3, name: 'Jack' },
    ], {
      token: '123',
    });
  }

  async noContent() {
    this.ctx.noContent();
  }
}

module.exports = Restful2xxController;
