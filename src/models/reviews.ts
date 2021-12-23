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
