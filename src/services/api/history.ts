import { WatchDate } from '../../models/watchDate';
import HttpService from '../http';

type WatchDatesResponseBody = WatchDate[];

export const fetchWatchDates = async (
  headers: Record<string, string>,
  movieId: number
): Promise<WatchDatesResponseBody> => {
  return HttpService.get(`history/movies/${movieId}`, {
    headers
  }).json<WatchDatesResponseBody>();
};

export const deleteWatchDate = async (
  headers: Record<string, string>,
  watchDateId: number
): Promise<void> => {
  return HttpService.delete(`history/${watchDateId}/movies`, {
    headers
  }).json<void>();
};

type CreateWatchDateRequestBody = {
  movieId: number;
  viewingDate: string;
};

type CreateWatchDateResponseBody = {
  id: number;
  movieId: number;
  viewingDate: string;
};

export const addWatchDate = async (
  headers: Record<string, string>,
  body: CreateWatchDateRequestBody
): Promise<CreateWatchDateResponseBody> => {
  return HttpService.post(`history`, {
    headers,
    json: body
  }).json<CreateWatchDateResponseBody>();
};
