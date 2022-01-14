import { API_URL } from '../../config';
import { Movie } from '../../models/movies';
import HttpService from '../http';

// TODO
export interface UpdateMovieResponseBody {}

// TODO
export interface UpdateMovieRequestBody {}

export const fetchMovie = async (
  headers: Record<string, string>,
  id: number
): Promise<Movie> => {
  return HttpService.get(`${API_URL}/api/movies/${id}`, {
    headers
  }).json<Movie>();
};

export const updateMovie = async (
  headers: Record<string, string>,
  movie: UpdateMovieRequestBody,
  movieId: number
): Promise<UpdateMovieResponseBody> => {
  return HttpService.put(`${API_URL}/api/movies/${movieId}`, {
    headers,
    json: movie
  }).json<UpdateMovieResponseBody>();
};
