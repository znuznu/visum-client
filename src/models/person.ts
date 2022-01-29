export interface Person {
  id: number;
  name: string;
  forename: string;
}

export interface PageDirector extends Person {}
export interface PageActor extends Person {}
