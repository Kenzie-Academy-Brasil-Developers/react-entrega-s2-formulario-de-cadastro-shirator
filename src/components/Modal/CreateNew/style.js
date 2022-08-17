import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;

export const Modal = styled.div`
  width: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  animation: 1s ${fadeInAnimation};

  p {
    margin-top: 5px !important;
    color: red !important;
  }

  .cabecalho {
    background: var(--grey-2);
    padding: 20px;
    color: var(--grey-0);
    border-radius: 4px 4px 0px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      color: var(--grey-1);
      background: none;
      border: none;

      &:hover {
        cursor: pointer;
      }
    }
  }

  form {
    color: var(--grey-0);
    display: flex;
    flex-direction: column;
    background: var(--grey-3);
    width: 100%;

    label {
      display: flex;
      flex-direction: column;
      padding: 15px 22px;
      font-size: 12px;

      input,
      select {
        padding: 15px;
        background: var(--grey-2);
        border: 1px solid var(--grey-0);
        border-radius: 4px;
        margin-top: 20px;
        color: var(--grey-0);

        &::placeholder {
          color: var(--grey-0);
        }
      }
    }

    button {
      color: var(--grey-0);
      background: var(--color-primary);
      padding: 20px;
      font-size: 16px;
      font-weight: 600;
      border-radius: 4px;
      width: 90%;
      margin: 0 auto;
      margin-bottom: 30px;

      &:hover {
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 545px) {
    width: 300px;
  }

  @media screen and (max-width: 415px) {
    width: 230px;
  }
`;
