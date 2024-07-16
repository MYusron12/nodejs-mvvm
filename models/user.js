import db from '../helpers/service.js';

export const fetchAllUser = async () => {
  const [rows] = await db.execute('select id, name, address, username, password from user');
  return rows;
};

export const findUserById = async (id) => {
  const [rows] = await db.execute('select name, address, username, password from user where id = ?', [id]);
  return rows[0];
};

export const deleteUserById = async (id) => {
  const [result] = await db.execute('delete from user where id = ?', [id]);
  return result.affectedRows;
};

export const createUser = async (user) => {
  const { name, username, address, password } = user;
  const [result] = await db.execute(
    'insert into user (name, username, address, password) values (?,?,?,?)',
    [name, username, address, password]
  );
  return result.insertId;
};

export const updateUserById = async (id, user) => {
  const { name, username, address, password } = user;
  const [result] = await db.execute(
    'update user set name = ?, username = ?, address = ?, password = ? where id = ?',
    [name, username, address, password, id]
  );
  return result.affectedRows;
};