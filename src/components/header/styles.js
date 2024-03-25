import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  padding: 1.6rem;

  box-shadow: 0 1rem 1rem -1rem #e3e0e0;

  > a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.COLORS.BLACK};
  }

  @media (min-width: 800px) {
    padding: 3.2rem 6.4rem;
    justify-content: flex-start;
  }
`;
