export interface Page<T> {
  current: number;
  size: number;
  totalElements: number;
  content: T[];
  totalPages: number;
  first: boolean;
  last: boolean;
}
