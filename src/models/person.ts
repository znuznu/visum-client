export interface Person {
  id: number;
  name: string;
  forename: string;
}

export interface PageDirector extends Person {}
export interface PageActor extends Person {}

interface PersonMovie {
  id: number;
  title: string;
  releaseDate: string;
  shouldWatch: boolean;
  favorite: boolean;
}
export interface Director extends Person {
  movies: PersonMovie[];
}

export interface Actor extends Person {
  movies: PersonMovie[];
}
