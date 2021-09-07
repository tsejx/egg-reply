'use strict';

const Controller = require('egg').Controller;

class ExceptionController extends Controller {
  async noneParam () {
    this.ctx.exception()
  }

  async oneParamNumber() {
    this.ctx.exception(1001);
  }

  async onParamZero () {
    this.ctx.exception(0)
  }

  async oneParamString() {
    this.ctx.exception('1001');
  }

  async oneParamsNotNumberString() {
    this.ctx.exception('hello');
  }

  async oneParamNull() {
    this.ctx.exception(null);
  }

  async twoParams() {
    this.ctx.exception(2001, '操作失败');
  }

  async twoParamsNull() {
    this.ctx.exception(2002, null);
  }

  async twoParamsEmptyString() {
    this.ctx.exception(2003, '');
  }

  async twoParamsObject() {
    this.ctx.exception(3001, { error: 'error' });
  }
}

module.exports = ExceptionController;
