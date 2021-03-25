const fs = require('fs')

module.exports = async (data) => {
    data.body = "Hello Rebuild!";
    return data;
}; 
