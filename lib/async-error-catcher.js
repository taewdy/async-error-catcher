const defaultHandler = (e) => {
  if (e.code === 404) {
      return '';
  }
  throw e;
};

const catcher = (obj, handler) => {
  const handleError = handler || defaultHandler;
  const inner = async (...param) => {
      let result = '';
      try {
          result = await obj(...param);
      } catch (e) {
          result = handleError(e);
      }
      return result;
  };
  return inner;
};

const catchers = (obj, handler) => {
  const newObj = {};
  Object.keys(obj).map((e) => {
      newObj[e] = catcher(obj[e], handler);
      return true;
  });
  return newObj;
};

module.exports = {
  catchers,
  catcher,
};
