import * as UserViewModel from '../viewmodel/userViewModel.js';
import { render, renderDetail, renderDeleteResponse } from '../views/userView.js';

export const getAllUser = async (req, res) => {
  try {
    const users = await UserViewModel.getAllUser();
    res.send(render(users, "User fetched successfully", 200));
  } catch (e) {
    res.status(500).send(e.toString());
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await UserViewModel.getUserById(req.params.id);
    res.send(renderDetail(user, `User ${user.name} fetched successfully`, 200));
  } catch (e) {
    res.status(500).send(e.toString());
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const affectedRows = await UserViewModel.deleteUserById(req.params.id);
    if (affectedRows > 0) {
      res.status(200).send(renderDeleteResponse('200', 'User has been delete'));
    } else {
      res.status(400).send(renderDeleteResponse('400', 'User not found'));
    }
  } catch (e) {
    res.status(500).send(renderDeleteResponse('500', e.toString()));
  }
};

export const createUser = async (req, res) => {
  const { name, username, address, password } = req.body;
  if (!name || !username || !address || !password) {
    return res.status(400).send('Required');
  }
  try {
    const user = await UserViewModel.createUser({ name, username, address, password });
    res.send(renderDetail(user, `User ${user.name} created successfully`, 200));
  } catch (e) {
    res.status(500).send(e.toString());
  }
};

export const updateUser = async (req, res) => {
  const { name, username, address, password } = req.body;
  if (!name || !username || !address || !password) {
    return res.status(400).send('Required');
  }
  try {
    const user = await UserViewModel.updateUserById(req.params.id, { name, username, address, password });
    res.send(renderDetail(user, `User ${user.name} updated successfully`, 200));
  } catch (e) {
    res.status(500).send(e.toString());
  }
};