'use strict';

module.exports = app => {
  const { router, controller } = app;

  router.get('/success/noneParam', controller.success.noneParam);

  router.get('/success/oneParamArray', controller.success.oneParamArray);
  router.get('/success/oneParamObject', controller.success.oneParamObject);
  router.get('/success/oneParamNumber', controller.success.oneParamNumber);
  router.get('/success/oneParamNull', controller.success.oneParamNull);

  router.get('/success/twoParams', controller.success.twoParams);
  router.get('/success/twoParamsNull', controller.success.twoParamsNull);
  router.get('/success/twoParamsEmptyString', controller.success.twoParamsEmptyString);

  router.get('/success/threeParams', controller.success.threeParams);
  router.get('/success/threeParamsNull', controller.success.threeParamsNull);

  router.get('/fail/noneParam', controller.fail.noneParam);

  router.get('/fail/oneParamNumber', controller.fail.oneParamNumber);
  router.get('/fail/onParamZero', controller.fail.onParamZero)
  router.get('/fail/oneParamString', controller.fail.oneParamString);
  router.get('/fail/oneParamsNotNumberString', controller.fail.oneParamsNotNumberString);
  router.get('/fail/oneParamNull', controller.fail.oneParamNull);

  router.get('/fail/twoParams', controller.fail.twoParams);
  router.get('/fail/twoParamsNull', controller.fail.twoParamsNull);
  router.get('/fail/twoParamsEmptyString', controller.fail.twoParamsEmptyString);
  router.get('/fail/twoParamsObject', controller.fail.twoParamsObject);

  router.get('/exception/noneParam', controller.exception.noneParam);

  router.get('/exception/oneParamNumber', controller.exception.oneParamNumber);
  router.get('/exception/onParamZero', controller.exception.onParamZero)
  router.get('/exception/oneParamString', controller.exception.oneParamString);
  router.get('/exception/oneParamsNotNumberString', controller.exception.oneParamsNotNumberString);
  router.get('/exception/oneParamNull', controller.exception.oneParamNull);

  router.get('/exception/twoParams', controller.exception.twoParams);
  router.get('/exception/twoParamsNull', controller.exception.twoParamsNull);
  router.get('/exception/twoParamsEmptyString', controller.exception.twoParamsEmptyString);
  router.get('/exception/twoParamsObject', controller.exception.twoParamsObject);

  router.get('/restful2xx/okNoneParam', controller.restful2xx.okNoneParam);
  router.get('/restful2xx/okOneParamArray', controller.restful2xx.okOneParamArray);
  router.get('/restful2xx/okOneParamObject', controller.restful2xx.okOneParamObject);
  router.get('/restful2xx/okOneParamNull', controller.restful2xx.okOneParamNull);
  router.get('/restful2xx/okTwoParamNull', controller.restful2xx.okTwoParamNull);
  router.get('/restful2xx/createdNoneParam', controller.restful2xx.createdNoneParam);
  router.get('/restful2xx/createdOneParamArray', controller.restful2xx.createdOneParamArray);
  router.get('/restful2xx/createdOneParamObject', controller.restful2xx.createdOneParamObject);
  router.get('/restful2xx/createdTwoParams', controller.restful2xx.createdTwoParams);
  router.get('/restful2xx/noContent', controller.restful2xx.noContent);

  router.get('/restful5xx/serverErrorNoneParam', controller.restful5xx.serverErrorNoneParam);
  router.get('/restful5xx/serverErrorOneParamObject', controller.restful5xx.serverErrorOneParamObject);
  router.get('/restful5xx/serverErrorTwoParams', controller.restful5xx.serverErrorTwoParams);
  router.get('/restful5xx/serverErrorTwoParamsEmptyString', controller.restful5xx.serverErrorTwoParamsEmptyString);
  router.get('/restful5xx/serverErrorTwoParamsNull', controller.restful5xx.serverErrorTwoParamsNull);
  router.get('/restful5xx/serverErrorThreeParams', controller.restful5xx.serverErrorThreeParams);

  router.get('/restful4xx/badRequestNoneParam', controller.restful4xx.badRequestNoneParam);
  router.get('/restful4xx/badRequestOneParamObject', controller.restful4xx.badRequestOneParamObject);
  router.get('/restful4xx/badRequestTwoParams', controller.restful4xx.badRequestTwoParams);
  router.get('/restful4xx/badRequestTwoParamsEmptyString', controller.restful4xx.badRequestTwoParamsEmptyString);
  router.get('/restful4xx/badRequestTwoParamsNull', controller.restful4xx.badRequestTwoParamsNull);
  router.get('/restful4xx/badRequestThreeParams', controller.restful4xx.badRequestThreeParams);

  router.get('/restful4xx/unauthorizedNoneParam', controller.restful4xx.unauthorizedNoneParam);
  router.get('/restful4xx/unauthorizedOneParamObject', controller.restful4xx.unauthorizedOneParamObject);
  router.get('/restful4xx/unauthorizedTwoParams', controller.restful4xx.unauthorizedTwoParams);
  router.get('/restful4xx/unauthorizedTwoParamsEmptyString', controller.restful4xx.unauthorizedTwoParamsEmptyString);
  router.get('/restful4xx/unauthorizedTwoParamsNull', controller.restful4xx.unauthorizedTwoParamsNull);
  router.get('/restful4xx/unauthorizedThreeParams', controller.restful4xx.unauthorizedThreeParams);

  router.get('/restful4xx/forbiddenNoneParam', controller.restful4xx.forbiddenNoneParam);
  router.get('/restful4xx/forbiddenOneParamObject', controller.restful4xx.forbiddenOneParamObject);
  router.get('/restful4xx/forbiddenTwoParams', controller.restful4xx.forbiddenTwoParams);
  router.get('/restful4xx/forbiddenTwoParamsEmptyString', controller.restful4xx.forbiddenTwoParamsEmptyString);
  router.get('/restful4xx/forbiddenTwoParamsNull', controller.restful4xx.forbiddenTwoParamsNull);
  router.get('/restful4xx/forbiddenThreeParams', controller.restful4xx.forbiddenThreeParams);

  router.get('/restful4xx/notFoundNoneParam', controller.restful4xx.notFoundNoneParam);
  router.get('/restful4xx/notFoundOneParamObject', controller.restful4xx.notFoundOneParamObject);
  router.get('/restful4xx/notFoundTwoParams', controller.restful4xx.notFoundTwoParams);
  router.get('/restful4xx/notFoundTwoParamsEmptyString', controller.restful4xx.notFoundTwoParamsEmptyString);
  router.get('/restful4xx/notFoundTwoParamsNull', controller.restful4xx.notFoundTwoParamsNull);
  router.get('/restful4xx/notFoundThreeParams', controller.restful4xx.notFoundThreeParams);

  router.get('/restful4xx/conflictNoneParam', controller.restful4xx.conflictNoneParam);
  router.get('/restful4xx/conflictOneParamObject', controller.restful4xx.conflictOneParamObject);
  router.get('/restful4xx/conflictTwoParams', controller.restful4xx.conflictTwoParams);
  router.get('/restful4xx/conflictTwoParamsEmptyString', controller.restful4xx.conflictTwoParamsEmptyString);
  router.get('/restful4xx/conflictTwoParamsNull', controller.restful4xx.conflictTwoParamsNull);
  router.get('/restful4xx/conflictThreeParams', controller.restful4xx.conflictThreeParams);

  router.get('/reply/noneParam', controller.reply.noneParam);
  router.get('/reply/oneParamEmptyString', controller.reply.oneParamEmptyString);
  router.get('/reply/oneParamNull', controller.reply.oneParamNull);
  router.get('/reply/oneParamCode', controller.reply.oneParamCode);
  router.get('/reply/oneParamStatus', controller.reply.oneParamStatus);
  router.get('/reply/oneParamSuccessFalsy', controller.reply.oneParamSuccessFalsy);
  router.get('/reply/oneParamSuccessTruthy', controller.reply.oneParamSuccessTruthy);
  router.get('/reply/oneParamMsgString', controller.reply.oneParamMsgString);
  router.get('/reply/oneParamDataArray', controller.reply.oneParamDataArray);
  router.get('/reply/oneParamDataObject', controller.reply.oneParamDataObject);
  router.get('/reply/allParams', controller.reply.allParams);

  router.get('/catch/noneParam', controller.catch.noneParam);
  router.get('/catch/throwErrorNull', controller.catch.throwErrorNull);
  router.get('/catch/throwErrorCode', controller.catch.throwErrorCode);
  router.get('/catch/throwString', controller.catch.throwString);
  router.get('/catch/throwNull', controller.catch.throwNull);
};
