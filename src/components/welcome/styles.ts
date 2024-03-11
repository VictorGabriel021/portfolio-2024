import styled from "styled-components";

export const Container = styled.div`
  background: radial-gradient(circle, #1d004d 35%, #000000 100%);
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  @media (max-width: 610px) {
    padding: 35px;
    width: -webkit-fill-available;
  }
`;

export const Title = styled.h1<{ fontSize: number }>`
  color: #fff;
  font-size: ${({ fontSize }) => `${fontSize}vw`};
  line-height: 9.6vw;
  font-weight: bold;
`;

export const Salutation = styled.p`
  font-weight: bold;
  color: #5d25bb;
  font-size: 1.2em;
  margin: 0 0 10px 10px;

  @media (min-width: 1600px) {
    font-size: 2.2em;
  }
`;

export const ContainerDescription = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const Description = styled.p`
  width: 70vh;
  margin: 10px 8vh 0 0;
  color: #fff;
  text-align: justify;
  text-indent: 25px;
  font-weight: 300;
  text-transform: uppercase;
  line-height: 1.2em;
  font-size: 1em;

  @media (max-width: 800px) {
    margin: 20px 0 0 0;
  }

  @media (min-width: 1600px) {
    font-size: 1.6em;
  }
`;

export const IconSpan = styled.span`
  display: inline-block;
  transition: transform 0.5s ease-in-out;

  &:hover {
    color: #5d25bb;
    transform: translatey(-0.2em);
  }
`;
