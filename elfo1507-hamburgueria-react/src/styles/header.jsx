import styled from "styled-components";

const HeaderStyle = styled.header`
  background-color: var(--grey3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: fixed;
  top: 0;
  width: 100%;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export default HeaderStyle;
