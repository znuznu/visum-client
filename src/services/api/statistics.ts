import { z } from 'zod';

import { getPairSchema } from 'models/common';
import { StatsMovieSchema } from 'models/statistics';

import HttpService from 'services/http';

import { API_URL } from 'config';

const FetchAllTimeStatisticsResponseSchema = z.object({
  totalRuntimeInHours: z.number(),
  averageRatingPerYear: z.array(getPairSchema(z.number(), z.number().nullable())),
  reviewCount: z.number(),
  movieCount: z.object({
    perYear: z.array(getPairSchema(z.number(), z.number())),
    perGenre: z.array(getPairSchema(z.string(), z.number())),
    perOriginalLanguage: z.array(getPairSchema(z.string(), z.number()))
  }),
  highestRatedMoviesPerDecade: z.array(
    getPairSchema(z.number(), z.array(StatsMovieSchema))
  )
});
const PromiseFetchAllTimeStatisticsResponseSchema = z.promise(
  FetchAllTimeStatisticsResponseSchema
);
type FetchAllTimeStatisticsResponse = z.infer<
  typeof FetchAllTimeStatisticsResponseSchema
>;

export const fetchAllTimeStatistics = async (
  headers: Record<string, string>
): Promise<FetchAllTimeStatisticsResponse> => {
  return PromiseFetchAllTimeStatisticsResponseSchema.parse(
    HttpService.get(`${API_URL}/api/statistics/years`, {
      headers
    }).json<FetchAllTimeStatisticsResponse>()
  );
};

const FetchYearStatisticsResponseSchema = z.object({
  movieCount: z.number(),
  reviewCount: z.number(),
  totalRuntimeInHours: z.number(),
  highestRatedMovies: z.object({
    released: z.array(StatsMovieSchema),
    older: z.array(StatsMovieSchema)
  }),
  movieCountPerGenre: z.array(getPairSchema(z.string(), z.number()))
});
const PromiseFetchYearStatisticsResponseSchema = z.promise(
  FetchYearStatisticsResponseSchema
);
type FetchYearStatisticsResponse = z.infer<typeof FetchYearStatisticsResponseSchema>;

export const fetchYearStatistics = async (
  headers: Record<string, string>,
  year: number
): Promise<FetchYearStatisticsResponse> => {
  return PromiseFetchYearStatisticsResponseSchema.parse(
    HttpService.get(`${API_URL}/api/statistics/years/${year}`, {
      headers
    }).json<FetchYearStatisticsResponse>()
  );
};
