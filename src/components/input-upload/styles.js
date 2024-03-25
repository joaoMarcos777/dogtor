import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  height: 4.8rem;
  margin-top: 1.6rem;

  > label {
    position: absolute;

    width: 100%;
    height: 4.8rem;
    display: flex;
    align-items: center;
    gap: 1.6rem;
    padding: 0 1.6rem;

    border: 0.1rem solid ${({ theme }) => theme.COLORS.ORANGE_600};
    border-radius: 0.8rem;

    cursor: pointer;

    input {
      font-family: "Poppins", sans-serif;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.8rem;
      color: ${({ theme }) => theme.COLORS.BROWN_300};

      cursor: pointer;
    }

    input::file-selector-button {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BROWN_300};
    }
  }
`;
