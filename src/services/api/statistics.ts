import { API_URL } from '../../config';
import { StatsMovie } from '../../models/statistics';
import { Pair } from '../../models/helpers';
import HttpService from '../http';

export interface FetchAllTimeStatisticsResponseBody {
  totalRuntimeInHours: number;
  averageRatePerYear: Pair<number, number>[];
  reviewCount: number;
  movieCount: {
    perYear: Pair<number, number>[];
    perGenre: Pair<string, number>[];
    perOriginalLanguage: Pair<string, number>[];
  };
  highestRatedMoviesPerDecade: Pair<number, StatsMovie[]>[];
}

export const fetchAllTimeStatistics = async (
  headers: Record<string, string>
): Promise<FetchAllTimeStatisticsResponseBody> => {
  return HttpService.get(`${API_URL}/api/statistics/years`, {
    headers
  }).json<FetchAllTimeStatisticsResponseBody>();
};

export interface FetchYearStatisticsResponseBody {
  movieCount: number;
  reviewCount: number;
  totalRuntimeInHours: number;
  highestRatedMovies: {
    released: StatsMovie[];
    older: StatsMovie[];
  };
  movieCountPerGenre: Pair<string, number>[];
}

export const fetchYearStatistics = async (
  headers: Record<string, string>,
  year: number
): Promise<FetchYearStatisticsResponseBody> => {
  return HttpService.get(`${API_URL}/api/statistics/years/${year}`, {
    headers
  }).json<FetchYearStatisticsResponseBody>();
};
