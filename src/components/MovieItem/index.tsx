import React from 'react';
import { useHistory } from 'react-router-dom';
import { IMovieProps } from './interface';

import popcornImageRed from '../../assets/images/popcornImageRed.svg';

import * as S from './styles';

const MovieItem: React.FC<IMovieProps> = ({
  Title,
  Year,
  imdbID,
  Type,
  Poster,
}) => {
  const history = useHistory();

  function handleDetails() {
    history.push({
      pathname: '/movie-details',
      state: { id: imdbID },
    });
  }

  return (
    <S.MovieListItem onClick={handleDetails} data-testid="movie-list-item">
      <span>View more</span>

      <S.MovieListItemImage
        src={
          Poster !== 'N/A' && Poster !== undefined ? Poster : popcornImageRed
        }
        alt="Movie poster"
      />

      <S.MovieListItemTitle>{Title}</S.MovieListItemTitle>
      <S.MovieListItemDescriptionContainer>
        <S.MovieListItemDescription>
          <span>Type:</span>
          {Type}
        </S.MovieListItemDescription>
        <S.MovieListItemDescription>
          <span>Year:</span>
          {Year}
        </S.MovieListItemDescription>
      </S.MovieListItemDescriptionContainer>
    </S.MovieListItem>
  );
};

export default MovieItem;
