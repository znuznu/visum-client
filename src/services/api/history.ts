import { z } from 'zod';

import { PromiseWatchDateSchema, WatchDate, WatchDateSchema } from 'models/watchDate';

import HttpService from 'services/http';

import { API_URL } from 'config';

const WatchDatesResponseSchema = z.array(WatchDateSchema);
const PromiseWatchDatesResponseSchema = z.promise(WatchDatesResponseSchema);
type WatchDatesResponse = z.infer<typeof WatchDatesResponseSchema>;

export const fetchWatchDates = async (
  headers: Record<string, string>,
  movieId: number
): Promise<WatchDatesResponse> => {
  return PromiseWatchDatesResponseSchema.parse(
    HttpService.get(`${API_URL}/api/history/movies/${movieId}`, {
      headers
    }).json<WatchDatesResponse>()
  );
};

export const deleteWatchDate = async (
  headers: Record<string, string>,
  watchDateId: number
): Promise<void> => {
  return HttpService.delete(`${API_URL}/api/history/${watchDateId}/movies`, {
    headers
  }).json<void>();
};

type CreateWatchDateRequestBody = {
  movieId: number;
  viewingDate: string;
};

type CreateWatchDateResponse = WatchDate;

export const addWatchDate = async (
  headers: Record<string, string>,
  body: CreateWatchDateRequestBody
): Promise<CreateWatchDateResponse> => {
  return PromiseWatchDateSchema.parse(
    HttpService.post(`${API_URL}/api/history`, {
      headers,
      json: body
    }).json<CreateWatchDateResponse>()
  );
};
