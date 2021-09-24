/*
 * @Descripttion: 
 * @Author: pengpeng
 * @Date: 2021-06-05 13:37:16
 * @LastEditors: pengpeng
 * @LastEditTime: 2021-06-07 08:37:40
 */
const router =require('@koa/router')()
const {query} = require('./dbPool')
const {QUERY,FUZZY_QUERY,INSERT,UPDATE,DELETE} = require('./sql')

//查询
// 测试时可简单创建 string: name, number: id, 自增主键id
router.get('/search', async ctx => {
  const res = ctx.request.query
  const {name='',age=0,height=0,id} = res
  const queryData = [
    id
  ]
  const data = await query(FUZZY_QUERY,queryData);
  ctx.body = {
      data,
  };
});

// 新增
router.post('/add',async ctx => {
  const res = ctx.request.body
  const {name='',age=0,height=0} = res
  if(name){
    const queryData = {
      name,age,height
    }
    const data = await query(INSERT, queryData)
    if(data && data.status && data.status === 200){
      ctx.body = {
        status: 200,
        msg: "新增成功"
      }
    }else{
      ctx.body = data
    }
  }
})

// 更新
router.post('/update', async ctx => {
  const res = ctx.request.body
  const {name='',age=0,height=0,id}=res
  if(name&&id){
    const queryData = [
      name,age,height,id
    ]
    const data =await query(UPDATE,queryData)
    if(data && data.status && data.status === 200){
      ctx.body = {
        status: 200,
        msg: "操作成功",
      };
    } else {
        ctx.body = data;
    }
  }
})

module.exports = router;