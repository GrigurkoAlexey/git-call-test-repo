const https = require('https');

const func = async (data) => {
  https
    .get('https://reqres.in/api/users?page=1', (resp) => {
      let body = '';
      resp.on('data', (chunk) => {
        body += chunk;
      });
      resp.on('end', () => {
        data.lang = 'java_script';
        data.res = JSON.parse(body);
      });
    })
    .on('error', (err) => {
      data.err = err;
    });
    return data
};

module.exports = (data) => {
  func(data).then(data => {
    return data
  });
};
