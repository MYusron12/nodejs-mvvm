import axios from 'axios';
export const jwtMiddleware = async (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; 
  if (!token) return res.status(401).json({ message: 'Token not provided' })
  try {
    const response = await axios.post('http://localhost:3000/api/auth/verify', { token });
    if (response.data.valid) {
      req.user = response.data.user; 
      next();
    } else {
      res.status(401).json({ message: 'Invalid token' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Authentication error', error: error.message });
  }
};
