import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3.2rem;

  display: flex;
  flex-direction: column;

  img {
    min-width: 18.5rem;
    margin: 0 auto;
  }

  @media (min-width: 800px) {
    margin: 3.2rem 6.4rem 0;

    align-items: center;
    flex-direction: row;
    gap: 17rem;

    img {
      width: 100%;
    }

    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;
