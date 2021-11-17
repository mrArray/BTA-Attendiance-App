import * as SQLite from 'expo-sqlite'
import { BaseModel, types } from 'expo-sqlite-orm'
 
export default class Attendance extends BaseModel {
  constructor(obj) {
    super(obj)
  }
 
  static get database() {
    return async () => SQLite.openDatabase('students.db')
  }
 
  static get tableName() {
    return 'AttendedStudents'
  }
 
  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true },       // For while only supports id as primary key
      username: { type: types.TEXT, not_null: true },
      timestamp: { type: types.TEXT},
      present: { type: types.TEXT }
    }
  }

  static get_AttendedStudents() {
     const sql = `SELECT * FROM ${this.tableName} `
    const params = []
    return this.repository.databaseLayer.executeSql(sql, params).then(({ rows }) => rows)
  }
  
}
