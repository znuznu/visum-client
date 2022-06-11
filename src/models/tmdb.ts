import { z } from 'zod';

export interface TmdbPageMovie {
  tmdbId: number;
  title: string;
  releaseDate: string;
  posterUrl: string;
}

const TmdbPeopleSchema = z.object({
  id: z.number(),
  name: z.string(),
  forename: z.string()
});

const TmdbMovieSchema = z.object({
  id: z.string(),
  title: z.string(),
  releaseDate: z.string(),
  genres: z.array(z.string()),
  metadata: z.object({
    tmdbId: z.number(),
    imdbId: z.string(),
    originalLanguage: z.string(),
    tagline: z.string(),
    overview: z.string(),
    budget: z.number(),
    revenue: z.number(),
    runtime: z.number(),
    posterUrl: z.string()
  }),
  actors: z.array(TmdbPeopleSchema),
  directors: z.array(TmdbPeopleSchema)
});
export type TmdbMovie = z.infer<typeof TmdbMovieSchema>;
export const PromiseTmdbMovieSchema = z.promise(TmdbMovieSchema);
