import { z } from 'zod';

export const WatchDateSchema = z.object({
  id: z.number(),
  date: z.string(),
  movieId: z.number()
});
export const PromiseWatchDateSchema = z.promise(WatchDateSchema);
export type WatchDate = z.infer<typeof WatchDateSchema>;
