import styled from "styled-components";

export const H11 = styled.h1`
  font-size: var(--heading1);
`;

export const H12 = styled.h1`
  font-size: var(--heading3);
  color: var(--secColor);
`;

export const DivLogo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;
