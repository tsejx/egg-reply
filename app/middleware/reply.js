const HTTP_CODE = {
  // 1xx
  CONTINUE: 100,
  // 2xx
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  // 3xx
  MOVED_PERMANENTLY: 301,
  FOUND: 302,
  SEE_OTHER: 303,
  NOT_MODIFIED: 304,
  // 4xx
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  REQUEST_TIME_OUT: 408,
  CONFLICT: 409,
  GONE: 410,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  IM_A_TEAPOT: 418,
  // 5xx
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIME_OUT: 504,
};

/**
 * 通用响应
 * @param {*} code 业务自定义状态码（传 null 时删除 code 字段）
 * @param {*} data 请求数据（一般为数组或对象，但其他类型没有校验）
 * @param {*} success 是否操作成功
 * @param {*} msg 请求状态描述
 * @param {*} extra 全局附加数据，字段、内容不定
 * @return
 */
const response = ({ code, data, success, msg, extra }) => {
  const payload = {
    code: typeof code === 'number' ? code : HTTP_CODE.OK,
    data: data || null,
    success: typeof success === 'boolean' ? success : code === HTTP_CODE.OK,
    msg: msg && typeof msg === 'string' ? msg : (code === HTTP_CODE.OK || success ? '成功' : '失败'),
  };

  if (code === null) {
    delete payload.code;
  }

  if (extra) {
    payload.extra = extra;
  }

  return payload;
};

/**
 * 请求成功
 */
const success = ctx => (data, msg, extra) => {
  ctx.status = HTTP_CODE.OK;
  ctx.body = response({ code: HTTP_CODE.OK, data, success: true, msg, extra });
};

/**
 * 请求异常（对应的是 HTTP 状态码 400 参数错误）
 * @return
 */
const fail = ctx => (code, msg) => {
  code = typeof code === 'number' ? code : !Number.isNaN(+code) && +code !== 0 ? +code : HTTP_CODE.BAD_REQUEST;

  ctx.status = HTTP_CODE.BAD_REQUEST;
  ctx.body = response({ code, data: null, msg, extra: null });
};

/**
 * 系统异常（对应的是 HTTP 状态码 500 服务器内部错误）
 * @return
 */
const exception = ctx => (code, msg) => {
  code = typeof code === 'number' ? code : !Number.isNaN(+code) && +code !== 0 ? +code : HTTP_CODE.INTERNAL_SERVER_ERROR;

  ctx.status = HTTP_CODE.INTERNAL_SERVER_ERROR;
  ctx.body = response({ code, data: null, msg, extra: null });
};

// 200
const ok = ctx => (data, extra) => {
  ctx.status = HTTP_CODE.OK;
  ctx.body = response({ code: null, data, msg: '成功', extra });
};

// 201
const created = ctx => (data, extra) => {
  ctx.status = HTTP_CODE.CREATED;
  ctx.body = response({ code: null, data, msg: '成功', extra });
};

// 204
const noContent = ctx => () => {
  ctx.status = HTTP_CODE.NO_CONTENT;
  ctx.body = null;
};

// 400
const badRequest = ctx => (data, msg, extra) => {
  ctx.status = HTTP_CODE.BAD_REQUEST;
  ctx.body = response({ code: null, data, msg, extra });
};

// 401
const unauthorized = ctx => (data, msg, extra) => {
  ctx.status = HTTP_CODE.UNAUTHORIZED;
  ctx.body = response({ code: null, data, msg, extra });
};

// 403
const forbidden = ctx => (data, msg, extra) => {
  ctx.status = HTTP_CODE.FORBIDDEN;
  ctx.body = response({ code: null, data, msg, extra });
};

// 404
const notFound = ctx => (data, msg, extra) => {
  ctx.status = HTTP_CODE.NOT_FOUND;
  ctx.body = response({ code: null, data, msg, extra });
};

// 409
const conflict = ctx => (data, msg, extra) => {
  ctx.status = HTTP_CODE.CONFLICT;
  ctx.body = response({ code: null, data, msg, extra });
};

// 500
const serverError = ctx => (data, msg, extra) => {
  ctx.status = HTTP_CODE.INTERNAL_SERVER_ERROR;
  ctx.body = response({ code: null, data, msg, extra });
};

// Custom
const reply = ctx => params => {
  params = typeof params === 'object' && params !== null ? params : {};

  let { status, code, success, data, msg, extra } = params;

  // 状态码为 200，success 字段必然为 true
  if (status === HTTP_CODE.OK) {
    success = true;
  }

  ctx.status = status || HTTP_CODE.OK;
  ctx.body = response({ code, data, success, msg, extra });
};

// 捕捉错误
const catchFunc = ctx => (code, err, msg, extra) => {
  const isErrorStack = typeof err === 'object' && err instanceof Error;
  const error = isErrorStack
    ? {
      errorName: err.name,
      errorMessage: err.message,
    }
    : {
      error: !err ? err : `${err}`,
    };

  if (typeof code !== 'number' && typeof code !== 'string') {
    code = HTTP_CODE.INTERNAL_SERVER_ERROR;
  }

  ctx.status = HTTP_CODE.INTERNAL_SERVER_ERROR;
  ctx.body = response({ code, data: error, success: false, msg, extra });
};

module.exports = function() {
  return async function(ctx, next) {
    ctx.HTTP_CODE = HTTP_CODE;

    // 通用型
    ctx.success = success(ctx);
    ctx.fail = fail(ctx);
    ctx.exception = exception(ctx);
    ctx.reply = reply(ctx);
    ctx.catch = catchFunc(ctx);

    // 2xx
    ctx.ok = ok(ctx);
    ctx.created = created(ctx);
    ctx.noContent = noContent(ctx);
    // 4xx
    ctx.badRequest = badRequest(ctx);
    ctx.unauthorized = unauthorized(ctx);
    ctx.forbidden = forbidden(ctx);
    ctx.notFound = notFound(ctx);
    ctx.conflict = conflict(ctx);
    // 5xx
    ctx.serverError = serverError(ctx);

    await next();
  };
};
