/*
 * @Descripttion: 
 * @Author: pengpeng
 * @Date: 2021-06-05 13:25:22
 * @LastEditors: pengpeng
 * @LastEditTime: 2021-06-05 13:36:33
 */
const mysql=require('mysql')

const MYSQL_CONFIG = require('./db')

let pools = {}

// 创建连接池
// 判断是否存在连接池
if (!pools.hasOwnProperty('data')) {
  pools['data'] = mysql.createPool(MYSQL_CONFIG)
}

// 查询
// sql 是sql语句
// values 是sql语句中的具体值
// sql values 可查看官方文档 https://github.com/mysqljs/mysql#performing-queries

const query = (sql, values) => {
  return new Promise((resolve,reject) => {
    // 初始化连接池
    pools['data'].getConnection((err,connection) => {
      if(err){
        console.log(err,'数据库链接失败')
      }else{
        console.log('数据库链接成功')
        connection.query(sql,values,(err,results) => {
          if(err){
            reject(err)
          }else{
            connection.release();
            resolve({
              status: 200,
              results
            })
          }
        })
      }
    })
  })
}
module.exports = { query };