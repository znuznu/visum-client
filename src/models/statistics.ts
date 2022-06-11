import { z } from 'zod';

export const StatsMovieSchema = z.object({
  id: z.number(),
  title: z.string(),
  releaseDate: z.string(),
  grade: z.number(),
  posterUrl: z.string()
});
export type StatsMovie = z.infer<typeof StatsMovieSchema>;
