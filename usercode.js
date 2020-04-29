const { Client } = require('pg')

const func = (data, callback) => {
  const client = new Client({
    connectionString: data.url,
  })
  client.connect()

  client.query(data.query, (err, res) => {
    data.lang = 'java_script'
    data.err = err
    data.res = res
    client.end()
  })
  callback(data);
};

module.exports = (data, callback) => {
  func(data, callback)
};
