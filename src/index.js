const upperFirst = (str) => str.charAt(0).toUpperCase() + str.substr(1);

const longhand = (coreProp, prop) => {
  return Object.keys(prop).reduce((result, key) => {
    const k = `${coreProp}${upperFirst(key)}`;
    const v = prop[key];

    return {
      ...result,
      [k]: v,
    };
  }, {});
};

export default longhand;
