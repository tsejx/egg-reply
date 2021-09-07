'use strict';

const Controller = require('egg').Controller;

class Restful4xxController extends Controller {
  async badRequestNoneParam () {
    this.ctx.badRequest()
  }

  async badRequestOneParamObject () {
    this.ctx.badRequest({ error: 'exception' })
  }

  async badRequestTwoParams () {
    this.ctx.badRequest(null, '错误')
  }

  async badRequestTwoParamsEmptyString () {
    this.ctx.badRequest({ error: 'exception' }, '')
  }

  async badRequestTwoParamsNull () {
    this.ctx.badRequest({ error: 'exception' }, null)
  }

  async badRequestThreeParams () {
    this.ctx.badRequest(null, '错误', { token: '123' })
  }

  async unauthorizedNoneParam () {
    this.ctx.unauthorized()
  }

  async unauthorizedOneParamObject () {
    this.ctx.unauthorized({ error: 'exception' })
  }

  async unauthorizedTwoParams () {
    this.ctx.unauthorized(null, '错误')
  }

  async unauthorizedTwoParamsEmptyString () {
    this.ctx.unauthorized({ error: 'exception' }, '')
  }

  async unauthorizedTwoParamsNull () {
    this.ctx.unauthorized({ error: 'exception' }, null)
  }

  async unauthorizedThreeParams () {
    this.ctx.unauthorized(null, '错误', { token: '123' })
  }

  async forbiddenNoneParam () {
    this.ctx.forbidden()
  }

  async forbiddenOneParamObject () {
    this.ctx.forbidden({ error: 'exception' })
  }

  async forbiddenTwoParams () {
    this.ctx.forbidden(null, '错误')
  }

  async forbiddenTwoParamsEmptyString () {
    this.ctx.forbidden({ error: 'exception' }, '')
  }

  async forbiddenTwoParamsNull () {
    this.ctx.forbidden({ error: 'exception' }, null)
  }

  async forbiddenThreeParams () {
    this.ctx.forbidden(null, '错误', { token: '123' })
  }

  async notFoundNoneParam () {
    this.ctx.notFound()
  }

  async notFoundOneParamObject () {
    this.ctx.notFound({ error: 'exception' })
  }

  async notFoundTwoParams () {
    this.ctx.notFound(null, '错误')
  }

  async notFoundTwoParamsEmptyString () {
    this.ctx.notFound({ error: 'exception' }, '')
  }

  async notFoundTwoParamsNull () {
    this.ctx.notFound({ error: 'exception' }, null)
  }

  async notFoundThreeParams () {
    this.ctx.notFound(null, '错误', { token: '123' })
  }

  async conflictNoneParam () {
    this.ctx.conflict()
  }

  async conflictOneParamObject () {
    this.ctx.conflict({ error: 'exception' })
  }

  async conflictTwoParams () {
    this.ctx.conflict(null, '错误')
  }

  async conflictTwoParamsEmptyString () {
    this.ctx.conflict({ error: 'exception' }, '')
  }

  async conflictTwoParamsNull () {
    this.ctx.conflict({ error: 'exception' }, null)
  }

  async conflictThreeParams () {
    this.ctx.conflict(null, '错误', { token: '123' })
  }
}

module.exports = Restful4xxController;
