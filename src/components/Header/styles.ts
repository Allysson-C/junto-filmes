import styled, { css } from 'styled-components';
import { IBackButtonProps } from './interface';

export const Header = styled.header`
  width: 100%;
  height: 4.5rem;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StartContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BrandImage = styled.img`
  height: 3.25rem;
`;

export const BrandText = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
`;

export const BackButton = styled.button<IBackButtonProps>`
  background: transparent;
  outline: 0;
  border: 0;
  height: 2.5rem;
  width: 5rem;
  color: #9000ff;
  font-size: 1.2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    !props.hasBackPage &&
    css`
      display: none;
    `}
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FavoriteButton = styled.button`
  background: transparent;
  outline: 0;
  border: 0;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 1.5rem;
  color: #9000ff;
  margin-right: 0.5rem;

  &:hover {
    color: rgba(144, 0, 255, 0.8);
  }
`;

export const UserName = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 22px;
  color: #9000ff;
  margin-right: 0.5rem;
`;

export const UserButtonImage = styled.img`
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 50%;
  border: 1px solid #9000ff;
  background-color: #f2f2f2;
  cursor: pointer;
`;
