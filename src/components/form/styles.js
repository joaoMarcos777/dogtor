import styled from "styled-components";

export const Container = styled.form`
  a {
    text-decoration: none;
    text-align: center;
  }

  > h1 {
    text-align: center;
    font-weight: 600;
    font-size: 3.2rem;
    line-height: 6.4rem;
  }

  @media (min-width: 800px) {
    max-width: 60rem;

    > h1 {
      text-align: center;
      font-weight: 600;
      font-size: 4.8rem;
      line-height: 7.3rem;
    }
  }
`;
