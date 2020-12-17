import React, { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

import * as S from './styles';

import { IResponseProps, IMovieProps } from './interface';
import api from '../../services/omdb-api';
import Header from '../../components/Header';
import MovieItem from '../../components/MovieItem';

const Home: React.FC = () => {
  const [movies, setMovies] = useState<IMovieProps[]>();
  const [inputError, setInputError] = useState('');
  const [inputSearchValue, setinputSearchValue] = useState('');
  const [totalResults, setTotalResults] = useState('');
  const [page, setPage] = useState(1);

  // Make the call to the api, searching for the films according to the value
  // entered.
  async function handleSubmitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Checks if there is a typed value, if no error is returned.
    if (!inputSearchValue) {
      setInputError('Enter the name of the movie');
      return;
    }

    try {
      const response = await api.get<IResponseProps>(
        `?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${inputSearchValue}&page=1`,
      );

      if (response.data.Error) {
        toast.error('Movie not found.');
        return;
      }

      setMovies(response.data.Search);
      setTotalResults(response.data.totalResults);
      setPage(page + 1);

      setInputError('');
    } catch (err) {
      toast.error(
        'There is a problem with the return of the information. please try again.',
      );
    }
  }

  // Load the next result page, until all results are returned.
  async function handleNextMovies() {
    if (movies?.length !== undefined && movies?.length < Number(totalResults)) {
      try {
        const response = await api.get<IResponseProps>(
          `?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${inputSearchValue}&page=${page}`,
        );

        setMovies([...movies, ...response.data.Search]);
        setPage(page + 1);
        setInputError('');
      } catch (err) {
        toast.error(
          'There is a problem with the return of the information. please try again.',
        );
      }
    }
  }

  return (
    <S.Wrapper>
      <Header />

      <S.InputForm
        data-testid="form"
        hasMovies={movies?.length !== 0 && movies?.length !== undefined}
        onSubmit={handleSubmitSearch}
      >
        <S.InputContainer>
          <S.Input
            type="text"
            placeholder="Enter the name of the movie"
            value={inputSearchValue}
            hasError={!!inputError}
            onChange={(e) => setinputSearchValue(e.target.value)}
          />
          {inputError && <S.Error>{inputError}</S.Error>}
        </S.InputContainer>

        <S.InputButton type="submit">Search</S.InputButton>
      </S.InputForm>

      <S.MovieListContainer data-testid="movie-list-container">
        {movies?.map((movie) => (
          <MovieItem
            key={movie.imdbID}
            imdbID={movie.imdbID}
            Poster={movie.Poster}
            Title={movie.Title}
            Type={movie.Type}
            Year={movie.Year}
          />
        ))}
      </S.MovieListContainer>
      <S.NextMoviesButtom
        hidden={
          !!(
            movies?.length === undefined ||
            movies?.length === Number(totalResults)
          )
        }
        onClick={handleNextMovies}
      >
        More movies
      </S.NextMoviesButtom>
    </S.Wrapper>
  );
};

export default Home;
