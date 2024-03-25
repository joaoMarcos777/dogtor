import styled from "styled-components";

export const Container = styled.button`
  margin-top: 2rem;

  width: 100%;

  background: none;
  border: none;

  font-weight: 300;
  font-size: 1.4rem;
  line-height: 2.1rem;
  color: ${({ theme }) => theme.COLORS.BROWN_500};

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    filter: brightness(0.5);
  }

  @media (min-width: 800px) {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`;
