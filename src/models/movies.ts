import { z } from 'zod';

import { GenreSchema } from './genre';
import { PersonSchema } from './person';
import { ReviewSchema } from './reviews';

const CastMemberSchema = z.object({
  id: z.number(),
  name: z.string(),
  forename: z.string(),
  posterUrl: z.string().nullable(),
  character: z.string().nullable(),
  roleOrder: z.number()
});
export type CastMember = z.infer<typeof CastMemberSchema>;

export interface MovieFromPage {
  id: number;
  title: string;
  releaseDate: string;
  creationDate: string;
  metadata: {
    posterUrl?: string;
  };
  isFavorite: boolean;
  isToWatch: boolean;
}

const MovieMetadataSchema = z.object({
  tmdbId: z.number(),
  imdbId: z.string().nullable().optional(),
  originalLanguage: z.string(),
  tagline: z.string(),
  overview: z.string(),
  budget: z.number(),
  revenue: z.number(),
  runtime: z.number(),
  posterUrl: z.string().nullable().optional()
});
export type MovieMetadata = z.infer<typeof MovieMetadataSchema>;

export const MovieSchema = z.object({
  id: z.number(),
  title: z.string(),
  // TODO Date
  releaseDate: z.string(),
  actors: z.array(CastMemberSchema),
  directors: z.array(PersonSchema),
  genres: z.array(GenreSchema),
  // TODO
  viewingHistory: z.array(z.any()),
  metadata: MovieMetadataSchema,
  isFavorite: z.boolean(),
  isToWatch: z.boolean(),
  // TODO Date
  creationDate: z.string(),
  review: ReviewSchema.nullable().optional()
});
export const PromiseMovieSchema = z.promise(MovieSchema);
export type Movie = z.infer<typeof MovieSchema>;
