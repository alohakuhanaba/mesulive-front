module.exports = {
  viteFinal: (config, {configType}) => {
    if (configType === 'PRODUCTION') {
      config.base = './';
    }

    return config;
  },
};