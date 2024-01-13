import * as z from 'zod';

export const LoginSchema = z.object({
  name: z.string(),
  password: z.string(),
  email: z.string().email(),
});