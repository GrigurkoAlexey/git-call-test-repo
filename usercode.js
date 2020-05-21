const https = require('https');

const func = (data) => {
  return new Promise(resolve => {
    data.foo = 'hello'
    resolve(data)
  })
};

module.exports = (data) => {
  func(data).then(data => {
    return data
  })
};
