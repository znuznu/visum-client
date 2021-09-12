import ky from 'ky';

export interface ResponsePromise extends Promise<Response> {
  arrayBuffer: () => Promise<ArrayBuffer>;
  blob: () => Promise<Blob>;
  formData: () => Promise<FormData>;
  json: <T>() => Promise<T>;
  text: () => Promise<string>;
}

export declare type HTTPMethod = 'get' | 'post' | 'put' | 'patch' | 'head' | 'delete';

export type SearchParamsOption = Record<string, string> | URLSearchParams | undefined;

export interface Options extends Omit<RequestInit, 'headers'> {
  method?: HTTPMethod;
  headers?: HeadersInit;
  json?: unknown;
  parseJson?: (text: string) => unknown;
  searchParams?: SearchParamsOption;
  fetch?: (input: RequestInfo, init?: RequestInit) => Promise<Response>;
}

// Simple wrapper around Ky in order to be loosely coupled
class HttpService {
  static post(url: URL | string | Request, options?: Options): ResponsePromise {
    return ky.post(url, options);
  }
}

export default HttpService;
