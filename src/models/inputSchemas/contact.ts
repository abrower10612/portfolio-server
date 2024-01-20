import { z } from 'zod';

export const contactInputSchema = z
  .object({
    firstName: z.string({
      required_error: 'First name is required',
    }),
    lastName: z.string({
      required_error: 'Last name is required',
    }),
    email: z.string({
      required_error: 'Email address is required',
    }),
    message: z.string({ required_error: 'Message is required' }),
    phone: z.string().optional(),
  })
  .strict();
