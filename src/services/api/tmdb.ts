import { Page } from 'models/page';
import { PromiseTmdbMovieSchema, TmdbMovie, TmdbPageMovie } from 'models/tmdb';

import HttpService from 'services/http';

import { API_URL } from 'config';

interface PageSearchParams {
  search: string;
  pageNumber: number;
}

export const searchTmdbMovie = async (
  headers: Record<string, string>,
  params: PageSearchParams
): Promise<Page<TmdbPageMovie>> => {
  return HttpService.get(`${API_URL}/api/tmdb/movies/search`, {
    headers,
    searchParams: {
      pageNumber: params.pageNumber.toString(),
      search: params.search
    }
  }).json<Page<TmdbPageMovie>>();
};

export const fetchTmdbMovie = async (
  headers: Record<string, string>,
  tmdbId: number
): Promise<TmdbMovie> => {
  return PromiseTmdbMovieSchema.parse(
    HttpService.get(`${API_URL}/api/tmdb/movies/${tmdbId}`, {
      headers
    }).json<TmdbMovie>()
  );
};

export const fetchUpcomingMovies = async (
  headers: Record<string, string>,
  pageNumber: number
): Promise<Page<TmdbPageMovie>> => {
  return HttpService.get(`${API_URL}/api/tmdb/movies/upcoming`, {
    headers,
    searchParams: {
      pageNumber: pageNumber.toString()
    }
  }).json<Page<TmdbPageMovie>>();
};
