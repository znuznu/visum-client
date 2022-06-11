import {
  Actor,
  Director,
  PromiseActorSchema,
  PromiseDirectorSchema
} from 'models/person';

import HttpService from 'services/http';

import { API_URL } from 'config';

export const fetchDirector = async (
  headers: Record<string, string>,
  id: number
): Promise<Director> => {
  return PromiseDirectorSchema.parse(
    HttpService.get(`${API_URL}/api/directors/${id}`, {
      headers
    }).json<Director>()
  );
};

export const fetchActor = async (
  headers: Record<string, string>,
  id: number
): Promise<Actor> => {
  return PromiseActorSchema.parse(
    HttpService.get(`${API_URL}/api/actors/${id}`, {
      headers
    }).json<Actor>()
  );
};
