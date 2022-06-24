import { z } from 'zod';

export const PersonSchema = z.object({
  id: z.number(),
  name: z.string(),
  forename: z.string()
});
export type Person = z.infer<typeof PersonSchema>;

export type PageDirector = Person;
export type PageActor = Person;

const PersonMovieSchema = z.object({
  id: z.number(),
  title: z.string(),
  releaseDate: z.string(),
  shouldWatch: z.boolean(),
  favorite: z.boolean()
});

const DirectorSchema = PersonSchema.extend({
  movies: z.array(PersonMovieSchema),
  tmdbId: z.number().int(),
  posterUrl: z.string().optional().nullable()
});
export const PromiseDirectorSchema = z.promise(DirectorSchema);
export type Director = z.infer<typeof DirectorSchema>;

const ActorSchema = PersonSchema.extend({
  movies: z.array(PersonMovieSchema),
  tmdbId: z.number().int(),
  posterUrl: z.string().optional().nullable()
});
export const PromiseActorSchema = z.promise(ActorSchema);
export type Actor = z.infer<typeof ActorSchema>;
