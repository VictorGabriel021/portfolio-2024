import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  background: linear-gradient(180deg, #5d25bb 0%, #ffffc1 100%);
  padding-bottom: 25px;

  @media (max-width: 800px) {
    grid-template-columns: 100%;
  }
`;
