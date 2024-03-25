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
