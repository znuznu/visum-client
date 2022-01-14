export interface ReviewFromPage {
  id: number;
  grade: number;
  content: string;
  movie: {
    id: number;
    title: string;
    releaseDate: string;
    metadata: {
      posterUrl?: string;
    };
  };
  creationDate: string;
  updateDate: string;
}

export interface Review {
  id: number;
  content: string;
  // TODO Date
  updateDate: string;
  // TODO Date
  creationDate: string;
  grade: number;
  movieId: number;
}
