const User = require('../models/user')

class UserViewModel{
  async getAllUser() {
    return await User.fetchAllUser()
  }

  async getUserById(id) {
    return await User.findUserById(id) 
  }

  async deleteUserById(id) {
    return await User.deleteUserById(id)
  }

  async createUser(user) {
    const userId = await User.createUser(user)
    return await User.findUserById(userId)
  }
}

module.exports = new UserViewModel()