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

export interface CreateMovieRequestBody {
  title: string;
  releaseDate: string;
  isFavorite: boolean;
  isToWatch: boolean;
  actors: {
    name: string;
    forename: string;
  }[];
  directors: {
    name: string;
    forename: string;
  }[];
  genres: {
    type: string;
  }[];
  metadata: {
    tmdbId: number;
    imdbId: string;
    originalLanguage: string;
    tagline: string;
    overview: string;
    budget: number;
    revenue: number;
    runtime: number;
    posterUrl: string;
  };
}

export interface CreateMovieResponseBody {
  // For now, we just need the id to redirect the user to the
  // newly created movie but other fields can be found inside
  // the response
  id: number;
}

export const createMovie = async (
  headers: Record<string, string>,
  movie: CreateMovieRequestBody
): Promise<CreateMovieResponseBody> => {
  return HttpService.post(`${API_URL}/api/movies`, {
    headers,
    json: movie
  }).json<CreateMovieResponseBody>();
};
