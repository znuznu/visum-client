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
}
