import { sign } from 'jsonwebtoken';

export function generateToken(): string {
  const payload = {
    logged: true
  };

  const token = sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
}
