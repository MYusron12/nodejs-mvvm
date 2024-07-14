import { fetchAllUser, findUserById, deleteUserById as deleteUserByIdFunction, createUser as createUserFunction,updateUserById as updateUserByIdFunction } from '../models/user.js';

export const getAllUser = async () => {
  return await fetchAllUser();
};

export const getUserById = async (id) => {
  return await findUserById(id);
};

export const deleteUserById = async (id) => {
  return await deleteUserByIdFunction(id);
};

export const createUser = async (user) => {
  const userId = await createUserFunction(user);
  return await findUserById(userId);
};

export const updateUserById = async (id, user) => {
  await updateUserByIdFunction(id, user);
  return await findUserById(id);
};