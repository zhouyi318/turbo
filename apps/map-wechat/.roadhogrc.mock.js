const mock = {}

require('fs').readdirSync(require('path').join(__dirname + '/mock')).forEach(function(file) {
  Object.assign(mock, require('./mock/' + file))
})

const proxy = {}
//add your proxy here
Object.assign(mock, proxy)

module.exports = mock
