import { Actor, Director } from '../../models/person';
import HttpService from '../http';

export const fetchDirector = async (
  headers: Record<string, string>,
  id: number
): Promise<Director> => {
  return HttpService.get(`directors/${id}`, {
    headers
  }).json<Director>();
};

export const fetchActor = async (
  headers: Record<string, string>,
  id: number
): Promise<Actor> => {
  return HttpService.get(`actors/${id}`, {
    headers
  }).json<Actor>();
};
