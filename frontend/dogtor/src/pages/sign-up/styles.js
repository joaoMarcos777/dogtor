import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 1.6rem;

  @media (min-width: 1100px) {
    > div {
      margin: 3.2rem 6.4rem 0;

      display: flex;
      gap: 17rem;

      img {
        width: 100%;
      }
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
