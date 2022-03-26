import ky from 'ky';
import { API_URL } from '../config';

export interface ResponsePromise extends Promise<Response> {
  arrayBuffer: () => Promise<ArrayBuffer>;
  blob: () => Promise<Blob>;
  formData: () => Promise<FormData>;
  json: <T>() => Promise<T>;
  text: () => Promise<string>;
}

export declare type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'head' | 'delete';

export type SearchParamsOption = Record<string, string> | URLSearchParams | undefined;

export interface Options extends Omit<RequestInit, 'headers'> {
  method?: HttpMethod;
  headers?: HeadersInit;
  json?: unknown;
  parseJson?: (text: string) => unknown;
  searchParams?: SearchParamsOption;
  fetch?: (input: RequestInfo, init?: RequestInit) => Promise<Response>;
}

// Simple wrapper around Ky in order to be loosely coupled
const api = ky.create({
  prefixUrl: `${API_URL}/api/`,
  hooks: {
    beforeError: [
      async (error) => {
        const { response } = error;
        const cloneResponse = await response.clone().json();

        error.name = cloneResponse.code;
        error.message = cloneResponse.message;

        return error;
      }
    ]
  }
});

class HttpService {
  static post(url: URL | string | Request, options?: Options): ResponsePromise {
    return api.post(url, options);
  }

  static get(url: URL | string | Request, options?: Options): ResponsePromise {
    return api.get(url, options);
  }

  static put(url: URL | string | Request, options?: Options): ResponsePromise {
    return api.put(url, options);
  }

  static delete(url: URL | string | Request, options?: Options): ResponsePromise {
    return api.delete(url, options);
  }
}

export default HttpService;
