'use strict';

const Controller = require('egg').Controller;

class SuccessController extends Controller {
  async noneParam() {
    this.ctx.success();
  }

  async oneParamArray() {
    this.ctx.success([
      { id: 1, name: 'Ben' },
      { id: 2, name: 'Tom' },
      { id: 3, name: 'Jack' },
    ]);
  }

  async oneParamObject() {
    this.ctx.success({
      id: 1,
      name: 'Ben',
      age: 12,
    });
  }

  async oneParamNumber() {
    this.ctx.success(100);
  }

  async oneParamNull() {
    this.ctx.success(null);
  }

  async twoParams() {
    this.ctx.success([
      { id: 1, name: 'Ben' },
      { id: 2, name: 'Tom' },
      { id: 3, name: 'Jack' },
    ], '操作成功');
  }

  async twoParamsNull() {
    this.ctx.success([
      { id: 1, name: 'Ben' },
      { id: 2, name: 'Tom' },
      { id: 3, name: 'Jack' },
    ], null);
  }

  async twoParamsEmptyString() {
    this.ctx.success([
      { id: 1, name: 'Ben' },
      { id: 2, name: 'Tom' },
      { id: 3, name: 'Jack' },
    ], '');
  }

  async threeParams() {
    this.ctx.success([
      { id: 1, name: 'Ben' },
      { id: 2, name: 'Tom' },
      { id: 3, name: 'Jack' },
    ], null, {
      token: '123',
    });
  }

  async threeParamsNull() {
    this.ctx.success([
      { id: 1, name: 'Ben' },
      { id: 2, name: 'Tom' },
      { id: 3, name: 'Jack' },
    ], '操作成功', null);
  }
}

module.exports = SuccessController;
