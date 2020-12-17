import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './styles';

import popcornImage from '../../assets/images/popcornImage.svg';

const Landing: React.FC = () => {
  const history = useHistory();

  const handleFindMovie = useCallback(() => {
    history.push('/Home');
  }, [history]);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Junto Filmes</S.Title>
        <S.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
          vel corrupti, voluptate totam consectetur iure tenetur optio culpa.
        </S.Description>
        <S.Button onClick={handleFindMovie}>Search for a movie</S.Button>
      </S.Container>

      <S.Image src={popcornImage} alt="Purple Popcorn Bucket" />
    </S.Wrapper>
  );
};

export default Landing;
