import { Router } from 'express';
const router = Router();
import { getAllUser, getUserById, createUser, deleteUserById, updateUser } from '../controllers/userController.js';

router.get('/users', getAllUser);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.delete('/users/:id', deleteUserById);
router.put('/users/:id', updateUser);

export default router;
