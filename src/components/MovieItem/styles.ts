import styled from 'styled-components';

export const MovieListItem = styled.div`
  max-width: 20%;
  min-width: 11.875rem;
  background: #9000ff;
  border-radius: 1rem;
  cursor: pointer;
  position: relative;
  margin: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(153, 102, 255, 0.5) 0px 12px 26px -4px;

  > span {
    position: absolute;
    width: 100%;
    height: 100%;
    color: #ffffff;
    font-size: 1.6rem;
    font-weight: 400;
    background: #9000ff;
    border-radius: 1rem;
    z-index: -1;
    opacity: 0;
    transition: 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    top: -0.5rem;
    > span {
      z-index: 1;
      opacity: 0.9;
    }
  }
`;

export const MovieListItemImage = styled.img`
  width: 100%;
  flex: 1;
  border-radius: 1rem 1rem 0 0;
  margin-bottom: 0.5rem;
`;

export const MovieListItemTitle = styled.h2`
  color: #ffffff;
  text-align: center;
  font-size: 1.4rem;
  margin: 0 0.5rem;
`;

export const MovieListItemDescriptionContainer = styled.div`
  width: 100%;
  margin: 1rem 0;

  display: flex;
  justify-content: space-around;
`;

export const MovieListItemDescription = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  color: #ffffff;
  letter-spacing: 0.22px;

  span {
    font-weight: 700;
    margin-right: 0.2rem;
  }
`;
