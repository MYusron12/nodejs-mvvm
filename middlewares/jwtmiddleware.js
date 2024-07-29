import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config();

export const jwtMiddleware = async (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Ambil token dari header Authorization
  
  if (!token) {
    return res.status(401).json({ message: 'Token not provided' });
  }

  try {
    // Verifikasi token dengan API otentikasi
    const response = await axios.post('http://localhost:3000/api/auth/verify', { token });

    if (response.data.valid) {
      // Token valid, simpan informasi pengguna dalam req.user
      req.user = response.data.user; // Simpan informasi pengguna jika diperlukan
      next();
    } else {
      res.status(401).json({ message: 'Invalid token' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Authentication error', error: error.message });
  }
};
