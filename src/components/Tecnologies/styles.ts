import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #1d004d;
  color: #fff;
  border-radius: 10px;
  margin: 20px;
  padding: 30px 10px;
`;

export const Content = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, 80px);
  justify-content: center;
  text-align: center;
`;
