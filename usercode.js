const https = require('https');

const func = (data) => {
  data.foo = 'hello'
};

module.exports = (data) => {
  return func(data)
};
