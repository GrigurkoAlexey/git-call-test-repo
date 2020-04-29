const https = require('https');

const func = (data, callback) => {
  https
    .get('https://reqres.in/api/users?page=1', (resp) => {
      let body = '';
      resp.on('data', (chunk) => {
        body += chunk;
      });
      resp.on('end', () => {
        data.lang = 'java_script';
        data.res = JSON.parse(body);
        callback(data);
      });
    })
    .on('error', (err) => {
      callback(data, err);
    });
};

module.exports = (data, callback) => {
  func(data, callback);
};
