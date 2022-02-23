'use strict';

module.exports = (app) => {
  // 执行单元测试命令会报错
  if (process.env.NODE_ENV !== 'test') {
    app.config.coreMiddleware.push('reply');
  }
};
