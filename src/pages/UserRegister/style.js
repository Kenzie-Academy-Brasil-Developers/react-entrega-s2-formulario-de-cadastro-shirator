import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;

export const Container = styled.div`
  animation: 1s ${fadeInAnimation};
  button:hover {
    cursor: pointer;
  }

  input {
    color: var(--grey-0);
  }

  input:focus {
    color: var(--grey-0);
  }
`;

export const Header = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  button {
    background: var(--grey-3);
    padding: 10px 16px;
    border: transparent;
    border-radius: 4px;
    color: var(--grey-0);
    transition: background 0.1s linear;

    &:hover {
      background: var(--grey-2);
    }
  }
`;

export const FormContainer = styled.div`
  width: 370px;
  height: 1050px;
  background: var(--grey-3);
  padding: 30px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 431px) {
    width: 220px;
  }

  color: var(--grey-0);

  .formHeader {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h3 {
      font-size: 18px;
      line-height: 28px;
    }
    p {
      margin-top: 22px;
      color: var(--grey-1);
      font-size: 12px;
    }
  }

  form {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 300px;

    input,
    select {
      margin: 22px 0 26px;
      background: var(--grey-2);
      padding: 0 16px;
      height: 48px;
      border: transparent;
      border-radius: 4px;
      color: var(--grey-0);
    }

    option {
      color: var(--grey-0);
    }

    label {
      display: flex;
      flex-direction: column;
      font-size: 12px;
    }

    p {
      color: var(--negative);
      margin-bottom: 10px;
      position: relative;
      bottom: 20px;
    }

    button {
      background: var(--color-primary-negative);
      border-radius: 4px;
      padding: 15px 22px;
      border: transparent;
      color: var(--grey-0);
      margin-bottom: 20px;
      transition: background 0.1s linear;

      &:hover {
        background: var(--negative);
      }
    }
  }
`;
