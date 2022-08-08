import styled from "styled-components";

export const HomepageContainer = styled.div`
  height: 100vh;
  width: 80vw;
  color: white;

  header {
    display: flex;
    justify-content: space-between;
    padding: 30px 0;
    border-bottom: 1px solid #868e96;

    button {
      background: var(--grey-3);
      padding: 10px 20px;
      border: transparent;
      border-radius: 4px;
      color: white;
      transition: background 0.1s linear;

      &:hover {
        cursor: pointer;
        background: var(--grey-2);
      }
    }
  }

  div {
    padding: 45px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #868e96;
    margin-bottom: 30px;

    p {
      color: #868e96;
    }
  }
`;
