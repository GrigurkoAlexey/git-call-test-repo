const https = require('https');

const func = (data) => {
  https
    .get('https://reqres.in/api/users?page=1', (resp) => {
      data.res = resp;
      console.log(data);
    })
    .on('error', (err) => {
      console.log('Error: ' + err.message);
    });
    data.lang = 'java_script';
    return data;
};

module.exports = (data) => {
  func(data)
};
