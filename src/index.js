import * as r from 'ramda';

const upperFirst = (str) => str.charAt(0).toUpperCase() + str.substr(1);
// const isObject = (obj) => Object.prototype.toString.call(obj) === '[object Object]';

const longhand = (coreProp, prop) => {
  return r.reduce((result, key) => {
    const k = `${coreProp}${upperFirst(key)}`;
    const v = prop[key];

    // if (isObject(v)) {
    //   return {
    //     ...result,
    //     ...longhand(k, v),
    //   }
    // } else {
    return {
      ...result,
      [k]: v,
    };
    // }
  }, {}, r.keys(prop));
};

export default longhand;
