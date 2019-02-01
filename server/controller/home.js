const { commonResponse } = require('../config')

module.exports = {
  category: async (ctx, next) => {
    ctx.body = {
      ...commonResponse,
      data: [
        {
          name: '张三张三张三张三张三张三张三张三张三',
          children: Array.from({ length: 100 }, (item, index) => ({ name: `张三${index + 1}` }))
        },
        {
          name: '李四',
          children: Array.from({ length: 90 }, (item, index) => ({ name: `李四${index + 1}` }))
        },
        {
          name: '王二',
          children: Array.from({ length: 80 }, (item, index) => ({ name: `王二${index + 1}` }))
        },
        {
          name: '徐一',
          children: Array.from({ length: 70 }, (item, index) => ({ name: `徐一${index + 1}` }))
        },
        {
          name: '陈五',
          children: Array.from({ length: 60 }, (item, index) => ({ name: `陈五${index + 1}` }))
        },
      ]
    }
  }
}