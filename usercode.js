const fs = require('fs')

module.exports = async (data) => {
    data.body = "Hello World!";
    return data;
}; 