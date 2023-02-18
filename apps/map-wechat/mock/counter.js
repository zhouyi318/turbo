const Mock = require('mockjs')

module.exports = {
  'POST /userList': function (req, res) {
    setTimeout(() => {
      res.json({
        code: 0,
        data: Mock.mock({
          'list|10': [
            {
              userId: '@guid',
              name: '@name',
              email: '@email'
            }
          ]
        })
      })
    }, 1000)
  },
}
