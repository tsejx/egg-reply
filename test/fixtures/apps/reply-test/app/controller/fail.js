'use strict';

const Controller = require('egg').Controller;

class FailController extends Controller {
  async noneParam() {
    this.ctx.fail();
  }

  async oneParamNumber() {
    this.ctx.fail(1001);
  }

  async onParamZero() {
    this.ctx.fail(0);
  }

  async oneParamString() {
    this.ctx.fail('1001');
  }

  async oneParamsNotNumberString() {
    this.ctx.fail('hello');
  }

  async oneParamNull() {
    this.ctx.fail(null);
  }

  async twoParams() {
    this.ctx.fail(2001, '操作失败');
  }

  async twoParamsNull() {
    this.ctx.fail(2002, null);
  }

  async twoParamsEmptyString() {
    this.ctx.fail(2003, '');
  }

  async twoParamsObject() {
    this.ctx.fail(3001, { error: 'error' });
  }
}

module.exports = FailController;
