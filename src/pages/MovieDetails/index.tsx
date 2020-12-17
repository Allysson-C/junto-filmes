import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import { toast } from 'react-toastify';

import * as S from './styles';

import Header from '../../components/Header';
import RatingProgressBar from '../../components/RatingProgressBar';
import { IMovieDetailsProps } from './interface';
import api from '../../services/omdb-api';

const MovieDetails: React.FC = () => {
  const location = useLocation<{ id: string }>();
  const [movie, setMovie] = useState<IMovieDetailsProps>();
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
  const [isFavorite, setIsFavorite] = useState(false);
  const history = useHistory();

  // If the movie id has not been found in the local storage, perform the search in the api.
  useEffect(() => {
    async function getMovieDetails() {
      const favorite = favoriteMovies?.find(
        (item) => item.Id === location.state.id,
      );

      if (favorite) {
        setIsFavorite(true);
        setMovie(favorite);
      } else {
        setIsFavorite(false);
        try {
          const response = await api.get<IMovieDetailsProps>(
            `?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${location.state.id}`,
          );

          // Standardization of valuation ratings.
          const updatedRatings = response.data.Ratings.map((rating) => {
            let value;

            value = rating.Value.replace('%', '');

            if (rating.Value.includes('/')) {
              value = rating.Value.substring(0, rating.Value.indexOf('/'));
              value = value.replace('.', '');
            }

            return { ...rating, UpdatedValue: value };
          });

          setMovie({
            ...response.data,
            Ratings: updatedRatings,
            Id: location.state.id,
          });
        } catch (err) {
          toast.error(
            'There is a problem with the return of the information. please try again.',
          );
        }
      }
    }

    getMovieDetails();
  }, [location, favoriteMovies]);

  function handleFavoriteMovie() {
    // Removes the movie from local storage if found in favorites
    if (isFavorite) {
      setIsFavorite(false);
      const updatedFavoriteMovies = favoriteMovies?.filter(
        (item) => item.Id !== location.state.id,
      );

      localStorage.setItem(
        '@JuntoSegurosChallenge:movies',
        JSON.stringify(updatedFavoriteMovies),
      );
    } else {
      // Add the movie to the local storage if it was not found.
      setIsFavorite(true);

      if (movie) {
        const updatedFavoriteMovies = favoriteMovies
          ? [...favoriteMovies, movie]
          : [movie];

        localStorage.setItem(
          '@JuntoSegurosChallenge:movies',
          JSON.stringify(updatedFavoriteMovies),
        );
      }
    }
  }

  return (
    <S.Wrapper>
      <Header handleBackPage={history.goBack} />

      <S.Content>
        <S.ImageContainer>
          <S.FavoriteButton
            isFavorite={isFavorite}
            onClick={handleFavoriteMovie}
          >
            <AiFillHeart />
          </S.FavoriteButton>
          <S.Image src={movie?.Poster} />
          <S.GeneralInfo>
            <span>Language:</span>
            {movie?.Language}
          </S.GeneralInfo>
        </S.ImageContainer>
        <S.DescriptionContainer>
          <h1>{movie?.Title}</h1>
          <S.SubTitlesContainer>
            <S.SubTitle>{movie?.Production}</S.SubTitle>
            <S.SubTitle>
              <span>Released date:</span>
              {movie?.Released}
            </S.SubTitle>
            <S.SubTitle>
              <span>Rated: </span>
              {movie?.Rated}
            </S.SubTitle>
            <S.SubTitle>
              <span>Runtime: </span>
              {movie?.Runtime}
            </S.SubTitle>
          </S.SubTitlesContainer>

          <S.GeneralInfoContainer>
            <S.GeneralInfo>
              <span>Starring:</span>
              {movie?.Actors}
            </S.GeneralInfo>

            <S.GeneralInfo>
              <span>Summary:</span>
              {movie?.Plot}
            </S.GeneralInfo>
          </S.GeneralInfoContainer>

          <S.DirectionInfoContainer>
            <S.DirectionInfo>
              <span>Director:</span>
              {movie?.Director}
            </S.DirectionInfo>

            <S.DirectionInfo>
              <span>Writer(s):</span>
              {movie?.Writer}
            </S.DirectionInfo>

            <S.DirectionInfo>
              <span>Genre(s):</span>
              {movie?.Genre}
            </S.DirectionInfo>
          </S.DirectionInfoContainer>
          <S.RatingsContainer>
            {movie?.Ratings.map((rating) => (
              <RatingProgressBar
                key={rating.Source}
                label={rating.Source}
                value={Number(rating.UpdatedValue)}
              />
            ))}
          </S.RatingsContainer>
        </S.DescriptionContainer>
      </S.Content>
    </S.Wrapper>
  );
};

export default MovieDetails;
