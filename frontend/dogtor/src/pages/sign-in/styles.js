import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1.6rem;

  @media (min-width: 1100px) {
    display: grid;
    justify-content: stretch;
    padding: 0;

    grid-template-areas:
      "header header header"
      "image form form";
  }
`;

export const Image = styled.img`
  grid-area: image;

  @media (min-width: 1100px) {
    justify-self: center;
  }
`;

export const Form = styled.form`
  grid-area: form;

  margin-top: 2rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1 {
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 4.8rem;
  }

  @media (min-width: 1100px) {
    max-width: 43.1rem;

    > h1 {
      font-weight: 600;
      font-size: 4.8rem;
      line-height: 7.3rem;
    }
  }
`;
