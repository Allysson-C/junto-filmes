export interface IResponseProps {
  Response: boolean;
  Search: IMovieProps[];
  totalResults: string;
  Error?: string;
}

export interface IMovieProps {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IFormProps {
  hasMovies: boolean;
}

export interface IInputProps {
  hasError: boolean;
}

export interface IButtonProps {
  hidden: boolean;
}
