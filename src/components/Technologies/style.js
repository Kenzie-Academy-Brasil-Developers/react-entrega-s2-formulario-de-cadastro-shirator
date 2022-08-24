import styled from "styled-components";

export const Tech = styled.div`
  background: var(--grey-4);
  height: 80px;
  display: flex;
  align-items: center;

  .tech-title {
    margin-left: 30px;
    font-weight: 700;
    line-height: 22px;
    color: #fff;
  }

  div {
    display: flex;
    align-items: center;
    gap: 50px;
    margin-right: 30px;

    svg {
      color: var(--grey-1);
    }
  }
`;
