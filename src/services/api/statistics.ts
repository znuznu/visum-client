import { API_URL } from '../../config';
import { DecadeMovie } from '../../models/statistics';
import { Pair } from '../../models/utils';
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
  highestRatedMoviesPerDecade: Pair<number, DecadeMovie[]>[];
}

export const fetchAllTimeStatistics = async (
  headers: Record<string, string>
): Promise<FetchAllTimeStatisticsResponseBody> => {
  return HttpService.get(`${API_URL}/api/statistics/years`, {
    headers
  }).json<FetchAllTimeStatisticsResponseBody>();
};
