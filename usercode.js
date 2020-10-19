const fs = require('fs')

module.exports = async (data) => {
    const text = await readFile()
    data.body = text;
    return data;
}; 

const readFile = async () => {
    return new Promise(resolve => {
      fs.readFile('test.txt', (err, data) => {
          if (err) {
            resolve('cannot read file')
          }
          resolve(data.toString())
      })
    })
  }
