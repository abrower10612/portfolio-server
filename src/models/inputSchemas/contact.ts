import { z } from 'zod';

export const contactInputSchema = z
  .object({
    name: z.string({
      required_error: 'Name is required',
    }),
    email: z.string({
      required_error: 'Email address is required',
    }),
    message: z.string({ required_error: 'Message is required' }),
    phone: z.string().optional(),
  })
  .strict();
