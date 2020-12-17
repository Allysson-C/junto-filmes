import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GiBrokenHeart } from 'react-icons/gi';

import Header from '../../components/Header';
import MovieItem from '../../components/MovieItem';
import { IMovieDetailsProps } from '../MovieDetails/interface';

import * as S from './styles';

const Favorite: React.FC = () => {
  const history = useHistory();
  // Check the local storage, if you have favorite movies, populate the state.
  const [favoriteMovies, setFavoriteMovies] = useState<IMovieDetailsProps[]>(
    () => {
      const localFavoriteMovies = localStorage.getItem(
        '@JuntoSegurosChallenge:movies',
      );

      if (localFavoriteMovies) {
        return JSON.parse(localFavoriteMovies);
      }

      return [];
    },
  );

  return (
    <S.Wrapper>
      <Header handleBackPage={history.goBack} />
      <S.Content>
        {favoriteMovies.length > 0 && (
          <S.MovieListContainer>
            {favoriteMovies.map((favorite) => (
              <MovieItem
                key={favorite.Id}
                imdbID={favorite.Id}
                Poster={favorite.Poster}
                Title={favorite.Title}
                Type={favorite.Type}
                Year={favorite.Year}
              />
            ))}
          </S.MovieListContainer>
        )}
        {favoriteMovies.length === 0 && (
          <S.EmptyFavoritesContainer>
            <GiBrokenHeart />
            <S.EmptyFavoritesText>No favorites found</S.EmptyFavoritesText>
          </S.EmptyFavoritesContainer>
        )}
      </S.Content>
    </S.Wrapper>
  );
};

export default Favorite;
