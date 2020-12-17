import styled, { css } from 'styled-components';
import { IFavoriteButtonProps } from './interface';

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

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  max-width: 18.75rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    align-items: center;
  }
`;

export const FavoriteButton = styled.button<IFavoriteButtonProps>`
  position: absolute;
  background: transparent;
  outline: 0;
  border: 0;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 2.5rem;
  color: ${(props) => (props.isFavorite ? '#9000ff' : '#d6d6d6')};

  right: -0.8rem;
  top: -0.8rem;
`;

export const Image = styled.img`
  max-width: 18.75rem;
  border-radius: 1rem;
  margin-bottom: 0.5rem;
`;

export const DescriptionContainer = styled.div`
  flex: 1;
  margin-left: 2rem;

  @media (max-width: 800px) {
    margin-left: 0;
    justify-content: center;
    align-items: center;

    h1 {
      text-align: center;
      line-height: 1.6rem;
    }
  }
`;

export const SubTitlesContainer = styled.div`
  margin-top: 0.5rem;

  display: flex;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    align-items: center;
    justify-content: center;
  }
`;

export const SubTitle = styled.p`
  span {
    border-left: 1px solid #180a33;
    font-weight: 400;
    margin: 0 0.5rem;
    padding-left: 0.5rem;
  }
`;

export const GeneralInfoContainer = styled.div`
  margin-top: 1.5rem;
`;

const InfoText = css`
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.22px;
  color: rgba(24, 10, 51, 0.8);
`;

export const GeneralInfo = styled.p`
  ${InfoText}
  margin-bottom: 1.5rem;

  span {
    font-weight: 700;
    margin-right: 0.5rem;
  }
`;

export const DirectionInfoContainer = styled.div`
  margin-top: 1.5rem;
`;

export const DirectionInfo = styled.p`
  ${InfoText}

  span {
    font-weight: 700;
    margin-right: 0.5rem;
  }
`;

export const RatingsContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  justify-content: space-between;
`;
