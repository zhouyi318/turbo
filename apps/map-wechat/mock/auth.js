const Mock = require('mockjs')

module.exports = {
  'POST /authList': function (req, res) {
    setTimeout(() => {
      res.json({
        code: 0,
        data: Mock.mock({
          'authList|10': [
            {
              parent: 'root',
              name: '@title',
              description: '@paragraph',
              leaf: !!(Math.random > 0.5),
              isChecked: !!(Math.random > 0.5)
            },
          ]
        })
      })
    }, 1000)
  },
}
