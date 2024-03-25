import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  > h1 {
    font-size: 2rem;
    line-height: 3rem;
    color: ${({ theme }) => theme.COLORS.BROWN_700};
  }

  &:nth-child(2) {
    h1 {
      color: ${({ theme }) => theme.COLORS.ORANGE_600};
    }
  }

  &:last-child {
    h1 {
      color: ${({ theme }) => theme.COLORS.BLUE_600};
    }
  }

  @media (min-width: 800px) {
    > h1 {
      font-size: 3.2rem;
      line-height: 4.9rem;
    }

    &:first-child {
      grid-column: 1/4;
      text-align: center;
    }

    &:last-child {
      grid-column: 3;
    }
  }
`;
