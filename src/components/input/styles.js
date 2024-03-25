import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.6rem;

  > label {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: ${({ theme }) => theme.COLORS.ORANGE_600};
  }

  > input {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: ${({ theme }) => theme.COLORS.BLACK};

    height: 4.8rem;
    padding: 1.2rem;

    border: 0.1rem solid ${({ theme }) => theme.COLORS.ORANGE_600};
    border-radius: 0.8rem;

    &::placeholder {
      font-family: "Poppins", sans-serif;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.8rem;

      color: ${({ theme }) => theme.COLORS.BROWN_300};
    }

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
