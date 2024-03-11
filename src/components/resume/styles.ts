import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 20px;
  gap: 20px;

  @media (max-width: 930px) {
    grid-template-columns: 100%;
  }
`;

export const LinkContainer = styled.div`
  text-align: center;
  margin-top: 15px;

  a {
    &:hover {
      color: #5d25bb;
    }
  }
`;

export const WritingBy = styled.p`
  font-family: "Whisper", cursive;
  font-size: 26px;
`;

export const Description = styled.p`
  text-align: justify;
  margin-top: 5px;
  text-indent: 25px;
`;

export const PerfilImage = styled.img`
  border-radius: 5%;
  width: 65%;

  @media (max-width: 930px) {
    width: 40%;
  }

  @media (max-width: 600px) {
    width: 65%;
  }
`;
