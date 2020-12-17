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
        <S.Title>Juntos Filmes</S.Title>
        <S.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
          vel corrupti, voluptate totam consectetur iure tenetur optio culpa.
        </S.Description>
        <S.Button onClick={handleFindMovie}>Procurar um filme</S.Button>
      </S.Container>

      <S.Image src={popcornImage} alt="Balde de pipoca roxo" />
    </S.Wrapper>
  );
};

export default Landing;
