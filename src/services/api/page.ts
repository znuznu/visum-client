import { API_URL } from '../../config';
import { Page } from '../../models/page';
import HttpService from '../http';

interface PageSearchParams {
  sort: string;
  search: string;
  limit: number;
  offset: number;
}

export const fetchPage = async <T extends unknown>(
  resource: string,
  headers: Record<string, string>,
  params: PageSearchParams
): Promise<Page<T>> => {
  return HttpService.get(`${API_URL}/api/${resource}`, {
    headers,
    searchParams: {
      sort: params.sort,
      search: params.search,
      limit: params.limit.toString(),
      offset: params.offset.toString()
    }
  }).json<Page<T>>();
};
