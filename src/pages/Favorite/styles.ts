import styled from 'styled-components';

export const Wrapper = styled.main`
  flex: 1;
  max-width: 70rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 4rem 1.5rem;

  display: flex;
  align-items: flex-start;
`;

export const MovieListContainer = styled.div`
  flex: 1;
  width: 100%;
  padding: 1.5rem 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const EmptyFavoritesContainer = styled.div`
  flex: 1;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 12rem;
  color: #d6d6d6;
`;

export const EmptyFavoritesText = styled.p`
  margin-top: 1.5rem;
  font-size: 6rem;

  @media (max-width: 800px) {
    font-size: 3rem;
    text-align: center;
  }
`;
