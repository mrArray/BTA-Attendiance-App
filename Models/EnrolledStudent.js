import * as SQLite from 'expo-sqlite'
import { BaseModel, types } from 'expo-sqlite-orm'
 
export default class EnrolledStudent extends BaseModel {
  constructor(obj) {
    super(obj)
  }
 
  static get database() {
    return async () => SQLite.openDatabase('students.db')
  }
 
  static get tableName() {
    return 'EnrolledStudent'
  }
 
  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true },       // For while only supports id as primary key
      username: { type: types.TEXT, not_null: true },
      Enrolled: { type: types.TEXT, not_null: true },
      timestamp: { type: types.INTEGER, default: () => Date.now() }
    }
  }

  static get_SelectedStudent() {
    const sql = `SELECT * FROM ${this.tableName} `
    const params = []
    return this.repository.databaseLayer.executeSql(sql, params).then(({ rows }) => rows)
  }
}
