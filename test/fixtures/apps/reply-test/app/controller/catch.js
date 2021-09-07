'use strict';

const Controller = require('egg').Controller;

class CatchController extends Controller {
  async noneParam () {
    this.ctx.catch()
  }

  async throwErrorNull () {
    try {
      throw new Error('Hello world!')
    } catch (e) {
      this.ctx.catch(null, e)
    }
  }

  async throwErrorCode () {
    try {
      throw new Error('Hello world!')
    } catch (e) {
      this.ctx.catch(1001, e)
    }
  }

  async throwNull () {
    try {
      throw new Error('Hello world!')
    } catch (e) {
      this.ctx.catch(1002, null)
    }
  }

  async throwString () {
    try {
      throw new Error('Hello world!')
    } catch (e) {
      this.ctx.catch(1003, 'Fail')
    }
  }
}

module.exports = CatchController;
