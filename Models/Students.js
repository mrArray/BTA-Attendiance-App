import * as SQLite from 'expo-sqlite'
import { BaseModel, types } from 'expo-sqlite-orm'
 
export default class Students extends BaseModel {
  constructor(obj) {
    super(obj)
  }
 
  static get database() {
    return async () => SQLite.openDatabase('students.db')
  }
 
  static get tableName() {
    return 'StudentsList'
  }
 
  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true },       // For while only supports id as primary key
      username: { type: types.TEXT, not_null: true },
      fullname: { type: types.TEXT },
      image: { type: types.TEXT },
      residential_address: { type: types.TEXT },
      // enrolled: { type: types.TEXT },
      timestamp: { type: types.INTEGER, default: () => Date.now() }
    }
  }

  static get_StudentsList() {
    const sql = `SELECT * FROM ${this.tableName} WHERE enrolled=?`
    const params = ['no']
    return this.repository.databaseLayer.executeSql(sql, params).then(({ rows }) => rows)
  }

  static get_to_attend(username) {
    const sql = `SELECT * FROM ${this.tableName} WHERE username=?`
   const params = [username]
   return this.repository.databaseLayer.executeSql(sql, params).then(({ rows }) => rows)
 }
}
