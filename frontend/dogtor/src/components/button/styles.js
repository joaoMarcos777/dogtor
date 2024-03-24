import styled from "styled-components";

export const Container = styled.button`
  margin-top: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 4.8rem;

  padding: 1.2rem;

  background: ${({ theme, $primary, $secondary }) =>
    $primary && !$secondary ? theme.COLORS.ORANGE_600 : "transparent"};
  border: 0.1rem solid ${({ theme }) => theme.COLORS.ORANGE_600};
  border-radius: 0.8rem;

  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: ${({ theme, $primary, $secondary }) =>
    $primary && !$secondary ? theme.COLORS.WHITE : theme.COLORS.BROWN_500};

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${({ theme, $primary, $secondary }) =>
      $primary && !$secondary ? "transparent" : theme.COLORS.ORANGE_600};
    color: ${({ theme, $primary, $secondary }) =>
      $primary && !$secondary ? theme.COLORS.BROWN_500 : theme.COLORS.WHITE};
  }

  @media (min-width: 800px) {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`;
