import styled from "styled-components";

export const CartTitle = styled.h4`
  padding: 5px 0;
  color: white;
  background-color: var(--mainColor);
  width: 100%;
  display: flex;
  justify-content: center;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

export const CartContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  @media (min-width: 768px) {
    width: 20%;
  }
`;

export const EmptyCart = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--grey3);
  border-left: 2px var(--grey2) solid;
  border-right: 2px var(--grey2) solid;
  border-bottom: 2px var(--grey2) solid;
`;

export const CartTotalValue = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--mainColor);
  height: 50px;
  color: white;
  display: flex;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const CartRemoveAll = styled.button`
  margin-top: -11px;
  width: 100%;
  padding: 5px 5px;
  background-color: var(--grey3);
`;

export const CartCard = styled.li`
  display: flex;
  background-color: var(--grey3);
  border: 1px var(--grey2) solid;
  width: 100%;
  height: 70px;
`;

export const CardImg = styled.img`
  width: 70px;
`;

export const CartItems = styled.ul`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 5px;
`;
