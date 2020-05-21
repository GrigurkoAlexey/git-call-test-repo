const https = require('https');

module.exports = (data) => {
  return new Promise(resolve, () => {
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
    resolve(data)
  })
};
