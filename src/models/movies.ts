import { Genre } from './genre';
import { Person } from './person';
import { Review } from './reviews';

export interface MovieFromPage {
  id: number;
  title: string;
  releaseDate: string;
  creationDate: string;
  metadata: {
    posterUrl?: string;
  };
  isFavorite: boolean;
  isToWatch: boolean;
}

export interface Movie {
  id: number;
  title: string;
  // TODO Date
  releaseDate: string;
  actors: Person[];
  directors: Person[];
  genres: Genre[];
  review?: Review;
  // TODO Date
  creationDate: string;
  viewingHistory: [];
  metadata: MovieMetadata;
  isFavorite: boolean;
  isToWatch: boolean;
}

interface MovieMetadata {
  tmdbId: number;
  imdbId?: string;
  originalLanguage: string;
  tagline: string;
  overview: string;
  budget: number;
  revenue: number;
  runtime: number;
  posterUrl: string;
}
