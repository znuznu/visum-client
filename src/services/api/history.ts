import { API_URL } from '../../config';
import { WatchDate } from '../../models/watchDate';
import HttpService from '../http';

type WatchDatesResponseBody = WatchDate[];

export const fetchWatchDates = async (
  headers: Record<string, string>,
  movieId: number
): Promise<WatchDatesResponseBody> => {
  return HttpService.get(`${API_URL}/api/history/movies/${movieId}`, {
    headers
  }).json<WatchDatesResponseBody>();
};

export const deleteWatchDate = async (
  headers: Record<string, string>,
  watchDateId: number
): Promise<void> => {
  return HttpService.delete(`${API_URL}/api/history/${watchDateId}/movies`, {
    headers
  }).json<void>();
};
