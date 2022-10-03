import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  padding: 50px 10px;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 50px 100px;
  }
`;
