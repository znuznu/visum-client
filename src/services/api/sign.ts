import HttpService from 'services/http';

import { API_URL } from 'config';

export interface SignInRequestBody {
  username: string;
  password: string;
}

export interface SignInResponseBody {
  token: string;
}

export interface SignUpRequestBody {
  username: string;
  password: string;
  registrationKey: string;
}

export const signUp = async (body: SignUpRequestBody) => {
  return HttpService.post(`${API_URL}/api/accounts/sign-up`, { json: body });
};

export const signIn = async (body: SignInRequestBody): Promise<SignInResponseBody> => {
  return HttpService.post(`${API_URL}/api/accounts/sign-in`, {
    json: body
  }).json<SignInResponseBody>();
};
