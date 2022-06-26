import { z } from 'zod';

import { Movie, PromiseMovieSchema } from 'models/movies';

import HttpService from 'services/http';

import { API_URL } from 'config';

export const fetchMovie = async (
  headers: Record<string, string>,
  id: number
): Promise<Movie> => {
  return PromiseMovieSchema.parse(
    HttpService.get(`${API_URL}/api/movies/${id}`, {
      headers
    }).json<Movie>()
  );
};

export interface CreateMovieRequestBody {
  isFavorite: boolean;
  isToWatch: boolean;
  tmdbId: number;
}

const CreateMovieResponseSchema = z.object({
  // For now, we just need the id to redirect the user
  id: z.number()
});
const PromiseCreateMovieResponseSchema = z.promise(CreateMovieResponseSchema);
export type CreateMovieResponse = z.infer<typeof CreateMovieResponseSchema>;

export const createMovie = async (
  headers: Record<string, string>,
  movie: CreateMovieRequestBody
): Promise<CreateMovieResponse> => {
  return PromiseCreateMovieResponseSchema.parse(
    HttpService.post(`${API_URL}/api/movies`, {
      headers,
      json: movie
    }).json<CreateMovieResponse>()
  );
};

export const markMovieAsFavorite = async (
  headers: Record<string, string>,
  movieId: number
): Promise<void> => {
  return HttpService.put(`${API_URL}/api/movies/${movieId}/favorite`, {
    headers
  }).json<void>();
};

export const removeMovieFromFavorite = async (
  headers: Record<string, string>,
  movieId: number
): Promise<void> => {
  return HttpService.delete(`${API_URL}/api/movies/${movieId}/favorite`, {
    headers
  }).json<void>();
};

export const addMovieToWatchlist = async (
  headers: Record<string, string>,
  movieId: number
): Promise<void> => {
  return HttpService.put(`${API_URL}/api/movies/${movieId}/watchlist`, {
    headers
  }).json<void>();
};

export const removeMovieFromWatchlist = async (
  headers: Record<string, string>,
  movieId: number
): Promise<void> => {
  return HttpService.delete(`${API_URL}/api/movies/${movieId}/watchlist`, {
    headers
  }).json<void>();
};

export const deleteMovie = async (
  headers: Record<string, string>,
  movieId: number
): Promise<void> => {
  return HttpService.delete(`${API_URL}/api/movies/${movieId}`, {
    headers
  }).json<void>();
};
