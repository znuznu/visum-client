export interface TmdbPageMovie {
  tmdbId: number;
  title: string;
  releaseDate: string;
  posterUrl: string;
}

export interface TmdbPeople {
  id: number;
  name: string;
  forename: string;
}

export interface TmdbMovie {
  id: string;
  title: string;
  releaseDate: string;
  genres: string[];
  metadata: {
    tmdbId: number;
    imdbId: string;
    originalLanguage: string;
    tagline: string;
    overview: string;
    budget: number;
    revenue: number;
    runtime: number;
    posterUrl: string;
  };
  actors: TmdbPeople[];
  directors: TmdbPeople[];
}
