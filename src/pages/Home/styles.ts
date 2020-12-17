import styled, { css } from 'styled-components';
import { IButtonProps, IInputProps, IFormProps } from './interface';

export const Wrapper = styled.main`
  flex: 1;
  max-width: 70rem;
  padding: 0 0 1.5rem 0;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputForm = styled.form<IFormProps>`
  width: 100%;
  max-width: 60rem;
  display: flex;
  padding: 1.5rem;
  transition: 0.2s;

  padding-top: calc((100vh - 7.5rem) / 2);

  ${(props) =>
    props.hasMovies &&
    css`
      padding-top: 1.5rem;
    `}
`;

export const InputContainer = styled.div`
  flex: 1;
  max-width: 60rem;
  margin-right: 16px;
`;

export const Input = styled.input<IInputProps>`
  flex: 1;
  width: 100%;
  height: 3.75rem;
  border: 1px solid rgb(207, 218, 225);
  border-radius: 4px;
  padding: 8px;

  font-size: 1.8rem;
  font-weight: 300;
  color: rgb(24, 10, 51);

  ${(props) =>
    props.hasError &&
    css`
      border-color: #c53030;
    `}

  &:focus {
    outline: 0;
    border-color: #9000ff;
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 0.5rem;
  letter-spacing: 0.2px;
`;

export const InputButton = styled.button`
  height: 3.75rem;
  background-color: #9000ff;
  color: #ffffff;
  font-size: 1.2rem;
  letter-spacing: 0.2px;
  padding: 24px;
  border: 0;
  border-radius: 4px;
  transition: 0.2s;
  outline: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
    transition: 0.2s;
  }
`;

export const MovieListContainer = styled.div`
  flex: 1;
  width: 100%;
  padding: 1.5rem 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

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

export const NextMoviesButtom = styled.button<IButtonProps>`
  height: 3.75rem;
  background: transparent;
  font-size: 1.2rem;
  letter-spacing: 0.2px;
  padding: 24px;
  border-radius: 4px;
  border: 1px solid #9000ff;
  color: #9000ff;
  transition: 0.2s;
  outline: 0;
  display: ${(props) => (props.hidden === false ? 'flex' : 'none')};

  align-items: center;
  justify-content: center;

  &:hover {
    background: #9000ff;
    color: #ffffff;
    opacity: 0.8;
    transition: 0.2s;
  }
`;
