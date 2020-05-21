const https = require('https');

const func = (data) => {
  data.foo = 'hello'
  return data
};

module.exports = (data) => {
  func(data)
};
