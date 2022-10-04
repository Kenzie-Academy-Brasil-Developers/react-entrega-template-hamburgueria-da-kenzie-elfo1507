import styled from "styled-components";

export const ProdList = styled.ul`
  width: 90%;
  display: flex;
  flex-wrap: nowrap;
  margin-top: 50px;
  gap: 20px;
  overflow-x: auto;
  @media (min-width: 768px) {
    flex-wrap: wrap;
    overflow-x: none;
  }
`;

export const Prod = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3px;
  background-color: var(--grey4);
  border: 1px solid var(--grey3);
  width: 200px;
  padding: 10px;
  @media (min-width: 768px) {
    width: 30%;
  }
`;

export const ImgItem = styled.img`
  width: 175px;
  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const TituloProd = styled.h3`
  font-size: var(--heading3);
`;

export const PrecoProd = styled.span`
  font-size: 13px;
  color: var(--mainColor);
`;

export const TipoProd = styled.p`
  font-size: 11px;
  color: var(--grey2);
`;
