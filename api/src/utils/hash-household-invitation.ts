import { randomBytes, createHash } from 'node:crypto';

export const hashToken = async (token: string): Promise<string> => {
  return await createHash('sha256').update(token).digest('hex');
};
