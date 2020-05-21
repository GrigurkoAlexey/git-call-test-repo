const func = require('./usercode')

const aaa = () => {
    let data = {}
    func(data).then(data => {
        console.log(data)
    })
}

aaa()