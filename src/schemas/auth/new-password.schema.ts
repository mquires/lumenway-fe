import { z } from 'zod';

export const newPasswordSchema = z
  .object({
    password: z.string().min(8),
    repeatPassword: z.string().min(8),
  })
  .refine(data => data.password === data.repeatPassword, {
    path: ['repeatPassword'],
  });

export type TypeNewPasswordSchema = z.infer<typeof newPasswordSchema>;
