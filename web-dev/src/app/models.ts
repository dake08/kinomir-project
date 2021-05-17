import DateTimeFormat = Intl.DateTimeFormat;

export interface Film {
  id: number;
  name: string;
  img: string;
  secondName: string;
  description: string;
  kinorium: number;
  imbd: number;
  critics: number;
  country: string;
  time: string;
  worldPremiere: string;
  usaPremiere: string;
  ruPremiere: string;
  otherName: string;
  genres: string[];
  video: string;
}


export interface Comment {
  id: number;
  film: number;
  user: User;
  body: string;
  date: DateTimeFormat;
}

export interface Comment2 {
  id: number;
  film: number;
  user: number;
  body: string;
  date: DateTimeFormat;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface FavoriteFilm {
  id: number;
  author: string;
  name: string;
}
