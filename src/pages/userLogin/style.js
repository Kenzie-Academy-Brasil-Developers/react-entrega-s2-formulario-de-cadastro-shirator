import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
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
`;

export const FormContainer = styled.div`
  width: 370px;
  background: var(--grey-3);
  padding: 30px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 431px) {
    width: 220px;
  }

  small {
    margin-bottom: 32px;
  }

  button {
    background: var(--grey-1);
    padding: 15px 16px;
    border: transparent;
    border-radius: 4px;
    color: var(--grey-0);
    width: 100%;
  }

  button:hover {
    cursor: pointer;
  }

  color: var(--grey-0);

  h3 {
    font-size: 18px;
    line-height: 28px;
    text-align: center;
  }
  p {
    color: var(--grey-1);
    font-size: 12px;
  }

  form {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
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
      background: var(--color-primary);
      border-radius: 4px;
      padding: 15px 22px;
      border: transparent;

      color: var(--grey-0);

      margin-bottom: 20px;
    }
  }
`;
