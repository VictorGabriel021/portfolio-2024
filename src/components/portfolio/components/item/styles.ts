import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  background: linear-gradient(180deg, #a276ec 0%, #ffffc1 100%);

  @media (max-width: 800px) {
    grid-template-columns: 100%;
  }
`;

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: #1d004d;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 10px;
`;
