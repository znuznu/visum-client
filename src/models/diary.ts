export type DiaryMovie = {
  id: number;
  title: string;
  grade: number | null;
  isFavorite: boolean;
  isRewatch: boolean;
  posterUrl: string | null;
  releaseDate: string;
  reviewId: number | null;
};

export type DiaryDay = {
  day: number;
  movie: DiaryMovie;
};

export enum Month {
  JANUARY = 'JAN',
  FEBRUARY = 'FEB',
  MARCH = 'MAR',
  APRIL = 'APR',
  MAY = 'MAY',
  JUNE = 'JUN',
  JULY = 'JUL',
  AUGUST = 'AUG',
  SEPTEMBER = 'SEP',
  OCTOBER = 'OCT',
  NOVEMBER = 'NOV',
  DECEMBER = 'DEC'
}

export type DiaryMonth = {
  month: Month;
  days: DiaryDay[];
};

export type DiaryYear = {
  year: number;
  months: DiaryMonth[];
};

export type DiaryFiltersInput = {
  year: number;
  genreId: number | null;
  grade: number | null;
};
