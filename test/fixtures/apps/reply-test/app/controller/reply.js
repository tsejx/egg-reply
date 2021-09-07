'use strict';

const Controller = require('egg').Controller;

class ReplyController extends Controller {
  async noneParam () {
    this.ctx.reply()
  }

  async oneParamEmptyString () {
    this.ctx.reply('')
  }

  async oneParamNull () {
    this.ctx.reply(null)
  }

  async oneParamCode () {
    this.ctx.reply({ code: 1001 })
  }

  async oneParamStatus () {
    this.ctx.reply({ status: 200 })
  }

  async oneParamSuccessFalsy () {
    this.ctx.reply({ success: false })
  }

  async oneParamSuccessTruthy () {
    this.ctx.reply({ success: true })
  }

  async oneParamMsgString () {
    this.ctx.reply({ msg: '错误' })
  }

  async oneParamDataArray () {
    this.ctx.reply({
      data: [
        { id: 1, name: 'Ben' },
        { id: 2, name: 'Tom' }
      ]
    })
  }

  async oneParamDataObject () {
    this.ctx.reply({
      data: {
        id: 1,
        name: 'Ben'
      }
    })
  }

  async allParams () {
    this.ctx.reply({
      status: 400,
      code: 1001,
      data: [
        { id: 1, name: 'Ben' },
        { id: 2, name: 'Tom' }
      ],
      success: true,
      extra: {
        token: '123'
      }
    })
  }
}

module.exports = ReplyController;
