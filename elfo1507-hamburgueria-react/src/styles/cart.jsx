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
  padding: 20px;
`;

export const CartContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  @media (min-width: 768px) {
    width: 300px;
  }
`;

export const EmptyCart = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--grey4);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  p {
    font-weight: bold;
  }
`;

export const CartTotalValue = styled.div`
  flex-direction: column;
  background-color: var(--grey4);
  height: 50px;
  display: flex;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 5px;
  }
`;

export const CartRemoveAll = styled.button`
  width: 100%;
  padding: 5px 5px;
  background-color: var(--grey3);
`;

export const CartCard = styled.li`
  display: flex;
  background-color: var(--grey4);
  border: 1px var(--grey3) solid;
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

export const AddItems = styled.span`
  font-size: 9px;
  color: var(--grey2);
`;

export const CartItemsCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 3px;
  button {
    color: var(--grey2);
  }

  p {
    font-size: 9px;
    color: var(--grey2);
  }
`;
