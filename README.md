# egg-reply

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-reply.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-reply
[travis-image]: https://img.shields.io/travis/eggjs/egg-reply.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-reply
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-reply.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-reply?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-reply.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-reply
[snyk-image]: https://snyk.io/test/npm/egg-reply/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-reply
[download-image]: https://img.shields.io/npm/dm/egg-reply.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-reply

Restful API 接口响应结构定义 Egg 中间件，支持符合标准 HTTP 状态码 Restful API 标准和业界比较通用的 JSON 型 Restful API 标准。

## 依赖说明

1. 接口响应的 HTTP 状态码固定为 200

| 字段    | 说明         |     |
| :------ | :----------- | :-- |
| code    |              |     |
| success |              |     |
| data    |              |     |
| msg     | 请求状态描述 |     |

### 依赖的 egg 版本

| egg-reply 版本 | egg 1.x |
| -------------- | ------- |
| 1.x            | 😁      |
| 0.x            | ❌      |

### 依赖的插件

<!--

如果有依赖其它插件，请在这里特别说明。如

- security
- multipart

-->

## 开启插件

```js
// config/plugin.js
exports.reply = {
  enable: true,
  package: 'egg-reply',
};
```

## 使用场景

方便定义前后端通信的数据结构，定义标准化的接口返回结构。

```ts
import { Controller } from 'egg';

class OrderController extends Controller {
  public async index() {
    this.ctx.success([
      { id: 1, name: 'Ben' },
      { id: 2, name: 'Tom' },
      { id: 3, name: 'Jack' },
    ]);
    // Output:
    // {
    //   { id: 1, name: 'Ben' },
    //   { id: 2, name: 'Tom' },
    //   { id: 3, name: 'Jack' }
    // }
  }
}
```

## API

### ctx.success

表示接口处理成功，HTTP 状态码默认 200，`code` 字段默认 200, `success` 为 `true`。

语法：

```ts
this.ctx.success(data?: any, msg?: string, extra?: any)
```

| 参数    | 说明                         |
| :------ | :--------------------------- |
| `data`  | 请求数据                     |
| `msg`   | 请求状态描述                 |
| `extra` | 全局附加数据，字段、内容不定 |

### ctx.fail

表示请求失败，HTTP 状态码默认 400，`code` 字段默认 400, `success` 为 `false`。

语法：

```ts
this.ctx.fail(code?: string, msg?: string)
```

| 参数   | 说明                                                                                       |
| :----- | :----------------------------------------------------------------------------------------- |
| `code` | 业务自定义状态码（必须为数字类型，否则会转为数字类型，若转换后为 `NaN` 或 `0` 则定为 400） |
| `msg`  | 请求状态描述                                                                               |

### ctx.exception

表示服务端请求处理失败，HTTP 状态码默认 500，`code` 字段默认 500, `success` 为 `false`。

语法：

```ts
this.ctx.exception(code?: string, msg?: string)
```

| 参数   | 说明                                                                                       |
| :----- | :----------------------------------------------------------------------------------------- |
| `code` | 业务自定义状态码（必须为数字类型，否则会转为数字类型，若转换后为 `NaN` 或 `0` 则定为 400） |
| `msg`  | 请求状态描述                                                                               |

### ctx.ok

HTTP 状态码为 200，通常用于 HTTP GET 请求的结果，表示成功，。

```ts
this.ctx.ok(data?: any, extra?: any)
```

| 参数    | 说明                         |
| :------ | :--------------------------- |
| `data`  | 请求数据                     |
| `extra` | 全局附加数据，字段、内容不定 |

### ctx.created

HTTP 状态码为 201，通常用于 HTTP POST 请求的结果，表示已在服务器上成功创建了一个或多个新资源。

```ts
this.ctx.created(data?: any, extra?: any)
```

| 参数    | 说明                         |
| :------ | :--------------------------- |
| `data`  | 请求数据                     |
| `extra` | 全局附加数据，字段、内容不定 |

### ctx.noContent

HTTP 状态码为 204，表示服务器已成功完成请求，并且在响应有效负载正文中没有要发送的内容。服务器可能希望以 `entity-headers` 的形式返回更新的元信息，如果存在，应该将其应用于当前文档的活动视图（如果有的话）。

```ts
this.ctx.noContent();
```

### ctx.badRequest

HTTP 状态码为 400，表示请求参数错误。

```ts
this.ctx.badRequest(data?: any, msg?: string, extra?: any);
```

| 参数    | 说明                         |
| :------ | :--------------------------- |
| `data`  | 请求数据                     |
| `msg`   | 请求状态描述                 |
| `extra` | 全局附加数据，字段、内容不定 |

### ctx.unauthorized

HTTP 状态码为 401，表示请求需要身份验证。

```ts
this.ctx.unauthorized(data?: any, msg?: string, extra?: any);
```

| 参数    | 说明                         |
| :------ | :--------------------------- |
| `data`  | 请求数据                     |
| `msg`   | 请求状态描述                 |
| `extra` | 全局附加数据，字段、内容不定 |

### ctx.forbidden

HTTP 状态码为 403，表示没有权限访问该请求，服务器收到请求但拒绝提供服务。

```ts
this.ctx.forbidden(data?: any, msg?: string, extra?: any);
```

| 参数    | 说明                         |
| :------ | :--------------------------- |
| `data`  | 请求数据                     |
| `msg`   | 请求状态描述                 |
| `extra` | 全局附加数据，字段、内容不定 |

### ctx.notFound

HTTP 状态码为 404，表示用户请求的资源不存在。

```ts
this.ctx.notFound(data?: any, msg?: string, extra?: any);
```

| 参数    | 说明                         |
| :------ | :--------------------------- |
| `data`  | 请求数据                     |
| `msg`   | 请求状态描述                 |
| `extra` | 全局附加数据，字段、内容不定 |

### ctx.conflict

HTTP 状态码为 409，表示因为请求存在冲突无法处理。例如通过手机号码提供注册功能得 API，当用户提交的手机号已存在时，必须返回此状态码。

```ts
this.ctx.conflict(data?: any, msg?: string, extra?: any);
```

| 参数    | 说明                         |
| :------ | :--------------------------- |
| `data`  | 请求数据                     |
| `msg`   | 请求状态描述                 |
| `extra` | 全局附加数据，字段、内容不定 |

### ctx.serverError

HTTP 状态码为 500，在服务器出错时跑出，对于所有的 500 错误，都应该提供完整的错误信息支持，方便追踪调试。

```ts
this.ctx.serverError(data?: any, msg?: string, extra?: any);
```

| 参数    | 说明                         |
| :------ | :--------------------------- |
| `data`  | 请求数据                     |
| `msg`   | 请求状态描述                 |
| `extra` | 全局附加数据，字段、内容不定 |

### ctx.reply

自定义响应数据内容

```ts
this.ctx.reply({ status, code, data, success, msg, extra });
```

| 参数      | 说明                                                                                       |
| :-------- | :----------------------------------------------------------------------------------------- |
| `status`  | HTTP 状态码（如果不传则默认设为 `200`）                                                    |
| `code`    | 业务自定义状态码（必须为数字类型，否则会转为数字类型，若转换后为 `NaN` 或 `0` 则定为 400） |
| `data`    | 请求数据                                                                                   |
| `success` | 请求是否处理成功（如果 `status` 为 `200` 则必为 `true`）                                   |
| `msg`     | 请求状态描述                                                                               |
| `extra`   | 全局附加数据，字段、内容不定                                                               |

### ctx.catch

捕捉错误时使用，HTTP 状态码为 500

| 参数    | 说明                                                                                       |
| :------ | :----------------------------------------------------------------------------------------- |
| `code`  | 业务自定义状态码（必须为数字类型，否则会转为数字类型，若转换后为 `NaN` 或 `0` 则定为 400） |
| `err`   | 异常实例                                                                                   |
| `msg`   | 请求状态描述                                                                               |
| `extra` | 全局附加数据，字段、内容不定                                                               |

```ts
try {
  throw new Error('Hello world!');
} catch (err) {
  this.ctx.catch(err);
}
```

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
