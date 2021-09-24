/*
 * @Descripttion: 
 * @Author: pengpeng
 * @Date: 2021-06-05 13:20:49
 * @LastEditors: pengpeng
 * @LastEditTime: 2021-06-07 08:45:56
 */
const QUERY = `select * from t_user WHERE id = ?`;
const FUZZY_QUERY =  `SELECT * FROM t_user WHERE name LIKE '%白%'`;
// const FUZZY_QUERY =  `SELECT * FROM t_user WHERE ' limit ? offset ?'`; // 按分页查询
const INSERT = `INSERT INTO t_user SET ?`;
const UPDATE = 'UPDATE t_user SET name = ?, age = ?, height = ? WHERE id = ?'
// const UPDATE = 'UPDATE t_user SET `name`= ?, `age` = ?, `height` = ? WHERE `id` = ?';
const DELETE = `DELETE FROM t_user WHERE id=?`;

module.exports = {
  QUERY,
  FUZZY_QUERY,
  INSERT,
  UPDATE,
  DELETE
}