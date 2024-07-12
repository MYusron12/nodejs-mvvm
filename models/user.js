const db = require('../helpers/service')

class User {
  static async fetchAllUser() {
    const [rows] = await db.execute('select id, name, address, username, password from user')
    return rows
  }

  static async findUserById(id) {
    const [rows] = await db.execute('select name, address, username, password from user where id = ?', [id])
    return rows[0] 
  }

  static async deleteUserById(id) {
    const [result] = await db.execute('delete from user where id = ?', [id])
    return result.affectedRows
  }

  static async createUser(user) {
    const { name, username, address, password } = user
    const [result] = await db.execute(
      'insert into user (name, username, address, password) values (?,?,?,?)',
      [name, username, address, password]
    )
    return result.insertId
  }
}

module.exports = User