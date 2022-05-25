import { API_URL } from 'config';
import { Actor, Director } from 'models/person';
import HttpService from 'services/http';

export const fetchDirector = async (
  headers: Record<string, string>,
  id: number
): Promise<Director> => {
  return HttpService.get(`${API_URL}/api/directors/${id}`, {
    headers
  }).json<Director>();
};

export const fetchActor = async (
  headers: Record<string, string>,
  id: number
): Promise<Actor> => {
  return HttpService.get(`${API_URL}/api/actors/${id}`, {
    headers
  }).json<Actor>();
};
