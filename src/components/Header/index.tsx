import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { AiFillHeart } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import * as S from './styles';

import popcornImage from '../../assets/images/popcornImage.svg';
import userIcon from '../../assets/images/userIcon.png';
import { IHeaderProps } from './interface';

const Header: React.FC<IHeaderProps> = ({ handleBackPage }) => {
  const history = useHistory();

  function handleFavoriteMovies() {
    history.push('/favorites');
  }

  return (
    <S.Header>
      <S.StartContainer>
        <S.Brand>
          <S.BrandImage src={popcornImage} alt="Purple popcorn bucket" />
          <S.BrandText>Junto Filmes</S.BrandText>
        </S.Brand>
        <S.BackButton hasBackPage={!!handleBackPage} onClick={handleBackPage}>
          <FiArrowLeft />
          Back
        </S.BackButton>
      </S.StartContainer>
      <S.UserContainer>
        <S.FavoriteButton onClick={handleFavoriteMovies}>
          <AiFillHeart />
        </S.FavoriteButton>
        <S.UserName>John doe</S.UserName>
        <S.UserButtonImage src={userIcon} alt="User image" />
      </S.UserContainer>
    </S.Header>
  );
};

export default Header;
