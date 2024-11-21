import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const login = (req, res) => {
  const { username, password } = req.body;

  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign({ role: 'admin' }, process.env.SECRET_KEY, { expiresIn: '1h' });
    return res.status(200).json({ token });
  }

  res.status(401).json({ message: 'Invalid credentials' });
};
