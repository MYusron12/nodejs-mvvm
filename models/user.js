import db from '../helpers/service.js';

export const fetchAllUser = async () => {
  const [rows] = await db.execute('select idx, name, address, username, password from users');
  return rows;
};

export const findUserById = async (id) => {
  const [rows] = await db.execute('select name, address, username, password from users where idx = ?', [id]);
  return rows[0];
};

export const deleteUserById = async (id) => {
  const [result] = await db.execute('delete from users where idx = ?', [id]);
  return result.affectedRows;
};

export const createUser = async (user) => {
  const { name, username, address, hashedPassword } = user;
  const [result] = await db.execute(
    'insert into users (name, username, address, password) values (?,?,?,?)',
    [name, username, address, hashedPassword]
  );
  return result.insertId;
};

export const updateUserById = async (id, user) => {
  const { name, username, address, hashedPassword } = user;
  const [result] = await db.execute(
    'update users set name = ?, username = ?, address = ?, password = ? where idx = ?',
    [name, username, address, hashedPassword, id]
  );
  return result.affectedRows;
};