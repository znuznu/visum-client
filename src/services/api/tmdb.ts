import { API_URL } from '../../config';
import { Page } from '../../models/page';
import { TmdbMovie, TmdbPageMovie } from '../../models/tmdb';
import HttpService from '../http';

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
  return HttpService.get(`${API_URL}/api/tmdb/movies/${tmdbId}`, {
    headers
  }).json<TmdbMovie>();
};
