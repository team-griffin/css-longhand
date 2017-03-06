import upperFirst from 'lodash.upperfirst';
import reduce from 'lodash.reduce';

const longhand = (coreProp, prop) => {
  return reduce(prop, (result, value, key) => {
    return {
      ...result,
      [`${coreProp}${upperFirst(key)}`]: value,
    };
  }, {
  });
};

export default longhand;