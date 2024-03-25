import styled from "styled-components";

export const Container = styled.div`
  max-width: 43.1rem;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    text-align: center;
  }
`;

export const Form = styled.form`
  border-bottom: 0.1rem solid #898383;
  padding-bottom: 4rem;

  > h1 {
    text-align: center;
    font-weight: 600;
    font-size: 3.2rem;
    line-height: 6.4rem;
  }

  @media (min-width: 800px) {
    max-width: 43.1rem;

    > h1 {
      text-align: center;
      font-weight: 600;
      font-size: 4.8rem;
      line-height: 7.3rem;
    }
  }
`;
