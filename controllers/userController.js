const userViewModel = require('../viewmodel/userViewModel')
const userView = require('../views/userView')

class UserController{
  async getAllUser(req, res) {
    try {
      const users = await userViewModel.getAllUser()
      res.send(userView.render(users))
    } catch(e) {
      res.status(500).send(e.toString())
    }
  }

  async getUserById(req, res) {
    try {
      const user = await userViewModel.getUserById(req.params.id)
      res.send(userView.renderDetail(user))
    } catch (e) {
      res.status(500).send(e.toString())
    }
  }

  async deleteUserById(req, res) {
    try {
      const affectedRows = await userViewModel.deleteUserById(req.params.id)
      if (affectedRows > 0) {
        res.status(200).send(userView.renderDeleteResponse('200', 'User has been delete'))
      } else {
        res.status(400).send(userView.renderDeleteResponse('400', 'User not found'))
      }
    } catch (e) {
      res.status(500).send(userView.renderDeleteResponse('500', e.toString()))
    }
  }

  async createUser(req, res) {
    const { name, username, address, password } = req.body
    if (!name || !username || !address || !password) {
      return res.status(400).send('Required')
    }
    try {
      const user = await userViewModel.createUser({
        name, username, address, password
      })
      res.send(userView.renderDetail(user))
    } catch (e) {
      res.status(500).send(e.toString())
    }
  }
}

module.exports = new UserController()