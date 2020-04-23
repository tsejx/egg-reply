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

const response = (data, code = HTTP_CODE.OK) => {
  const type = typeof data;
  return {
    code,
    success: code === HTTP_CODE.OK,
    [typeof data === 'string' ? 'msg' : 'data']: data,
  };
};

// 200
const ok = (ctx) => (data) => {
  ctx.status = HTTP_CODE.OK;
  ctx.body = response(data);
};

// 201
const created = (ctx) => (data) => {
  ctx.status = HTTP_CODE.CREATED;
  ctx.body = response(data);
};

// 204
const noContent = (ctx) => () => {
  ctx.status = HTTP_CODE.NO_CONTENT;
  ctx.body = null;
};

// 400
const badRequest = (ctx) => (data) => {
  ctx.status = HTTP_CODE.BAD_REQUEST;
  ctx.body = response(data, HTTP_CODE.BAD_REQUEST);
};

// 401
const unauthorized = (ctx) => (data) => {
  ctx.status = HTTP_CODE.UNAUTHORIZED;
  ctx.body = response(data, HTTP_CODE.UNAUTHORIZED);
};

// 403
const forbidden = (ctx) => (data) => {
  ctx.status = HTTP_CODE.FORBIDDEN;
  ctx.body = response(data, HTTP_CODE.FORBIDDEN);
};

// 404
const notFound = (ctx) => (data) => {
  ctx.status = HTTP_CODE.NOT_FOUND;
  ctx.body = data ? response(data, HTTP_CODE.NOT_FOUND) : null;
};

// 409
const conflict = (ctx) => (data) => {
  ctx.status = HTTP_CODE.CONFLICT;
  ctx.body = response(data, HTTP_CODE.CONFLICT);
};

// 500
const serverError = (ctx) => (data) => {
  ctx.status = HTTP_CODE.INTERNAL_SERVER_ERROR;
  ctx.body = response(data, HTTP_CODE.INTERNAL_SERVER_ERROR);
};

// Custom
const reply = (ctx) => (code, data) => {
  ctx.status = code;
  ctx.body = response(data, code);
};

// 捕捉错误
const catchFunc = (ctx) => (err, data) => {
  const isErrorStack = typeof err === 'object' && err instanceof Error;
  const error = isErrorStack
    ? {
        errors: {
          name: err.name,
          message: err.message,
        },
      }
    : {
        errors: !err ? err : `${err}`,
      };

  const extra = response(data);

  ctx.status = HTTP_CODE.NOT_IMPLEMENTED;
  ctx.body = Object.assign({}, error, extra);
};

module.exports = function reply() {
  return async function (ctx, next) {
    // Common
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
