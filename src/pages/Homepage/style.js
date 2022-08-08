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
      background: #212529;
      padding: 10px 20px;
      border: transparent;
      border-radius: 4px;
      color: white;

      &:hover {
        cursor: pointer;
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
