import styled from 'styled-components';

export const Wrapper = styled.main`
  max-width: 70rem;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  max-width: 20rem;
  height: 25rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 800px) {
    order: 2;
  }
`;

export const Title = styled.h1`
  font-size: 3.2rem;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  letter-spacing: 0.2px;
  line-height: 26px;
  margin: 2rem 0;
`;

export const Button = styled.button`
  width: 100%;
  height: 3.75rem;
  background-color: #9000ff;
  color: #ffffff;
  font-size: 1.2rem;
  letter-spacing: 0.2px;
  padding-top: 24px;
  padding-bottom: 24px;
  border: 0;
  border-radius: 4px;
  box-shadow: rgba(153, 102, 255, 0.5) 0px 12px 26px -4px;
  transition: 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: none;
    transition: 0.2s;
  }
`;

export const Image = styled.img`
  height: 25rem;

  @media (max-width: 800px) {
    order: 1;
    height: 15rem;
  }
`;
