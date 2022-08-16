import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;

export const HomepageContainer = styled.div`
  width: 80vw;
  color: white;
  animation: 1s ${fadeInAnimation};

  header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #868e96;
    margin-bottom: 50px;
  }

  button {
    background: var(--grey-3);
    height: fit-content;
    padding: 10px;
    border: transparent;
    border-radius: 4px;
    color: white;
    transition: background 0.1s linear;

    svg {
      width: 20px;
      height: 20px;
    }
    &:hover {
      cursor: pointer;
      background: var(--grey-2);
    }
  }

  div {
    display: flex;
    justify-content: space-between;

    h3 {
      margin-bottom: 50px;
    }
    p {
      color: #868e96;
    }
  }

  .techs {
    background: var(--grey-3);
    display: flex;
    flex-direction: column;
    padding: 30px;
    border-radius: 4px;
    gap: 30px;
  }
`;
