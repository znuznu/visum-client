import { z } from 'zod';

export const GenreSchema = z.object({
  id: z.number(),
  type: z.string()
});
export type Genre = z.infer<typeof GenreSchema>;
