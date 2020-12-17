export interface IMovieDetailsProps {
  Id: string;
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Type: string;
  Actors: string;
  Plot: string;
  Language: string;
  Poster: string;
  Production: string;
  Ratings: IRatingProps[];
}

export interface IRatingProps {
  Source: string;
  Value: string;
  UpdatedValue: string;
}

export interface IFavoriteButtonProps {
  isFavorite: boolean;
}
