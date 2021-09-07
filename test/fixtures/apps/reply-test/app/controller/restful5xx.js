'use strict';

const Controller = require('egg').Controller;

class Restful5xxController extends Controller {
  async serverErrorNoneParam () {
    this.ctx.serverError()
  }

  async serverErrorOneParamObject () {
    this.ctx.serverError({ error: 'runTimeException' })
  }

  async serverErrorTwoParams () {
    this.ctx.serverError(null, '错误')
  }

  async serverErrorTwoParamsEmptyString () {
    this.ctx.serverError({ error: 'runTimeException' }, '')
  }

  async serverErrorTwoParamsNull () {
    this.ctx.serverError({ error: 'runTimeException' }, null)
  }

  async serverErrorThreeParams () {
    this.ctx.serverError(null, '错误', { token: '123' })
  }
}

module.exports = Restful5xxController;
