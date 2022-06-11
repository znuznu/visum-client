import { z } from 'zod';

export const ReviewFromPageSchema = z.object({
  id: z.number(),
  grade: z.number(),
  content: z.string(),
  creationDate: z.date(),
  updateDate: z.date(),
  movie: z.object({
    id: z.number(),
    title: z.string(),
    releaseDate: z.date(),
    metadata: z.object({
      posterUrl: z.string().optional()
    })
  })
});
export type ReviewFromPage = z.infer<typeof ReviewFromPageSchema>;

export const ReviewSchema = z.object({
  id: z.number(),
  content: z.string(),
  // TODO Date
  updateDate: z.string(),
  // TODO Date
  creationDate: z.string(),
  grade: z.number(),
  movieId: z.number()
});
export const PromiseReviewSchema = z.promise(ReviewSchema);
export type Review = z.infer<typeof ReviewSchema>;
