import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header"
    "main";

  p {
    font-family: ${({ theme }) => theme.FONTS.FF_SECONDARY};
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: ${({ theme }) => theme.COLORS.BROWN_300};
    text-align: justify;
  }

  @media (min-width: 800px) {
    p {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  }
`;

export const Navbar = styled.nav`
  grid-area: header;

  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1rem 1rem -1rem #e3e0e0;

  > h1 {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  @media (min-width: 800px) {
    padding: 3.2rem 6.4rem;

    > ul {
      display: flex;
      gap: 4rem;
      list-style: none;

      a {
        color: var(--base-black);
        text-decoration: none;
        position: relative;
      }

      a::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #000;

        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out;
      }

      a:hover::before {
        visibility: visible;
        transform: scaleX(0.5);
      }
    }

    > .buttons {
      display: flex;
      gap: 4rem;

      button {
        background: transparent;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
      }

      button:first-child:hover {
        transform: scale(1.1);
      }

      button:last-child {
        background: ${({ theme }) => theme.COLORS.ORANGE_600};
        color: ${({ theme }) => theme.COLORS.WHITE};
        padding: 1rem 3.6rem;
        border-radius: 6rem;
      }

      button:last-child:hover {
        background: ${({ theme }) => theme.COLORS.ORANGE_HOVER};
      }
    }
  }
`;

export const Content = styled.main`
  grid-area: main;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 800px) {
    gap: 4rem;
  }
`;

export const IntroSection = styled.section`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  place-content: center;
  place-items: center;
  gap: 2rem;
  padding: 2rem;

  > img {
    width: 27.9rem;
  }

  > .content {
    h1,
    h1 span {
      font-weight: 700;
      font-size: 3.2rem;
      line-height: 4.9rem;
      color: ${({ theme }) => theme.COLORS.BROWN_700};
    }
  }

  > .content {
    h1 span {
      color: ${({ theme }) => theme.COLORS.ORANGE_600};
    }
  }

  @media (min-width: 800px) {
    display: grid;
    gap: 0;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 6.4rem;
    margin-top: 3.2rem;

    > img {
      width: 100%;
      order: 2;
      justify-self: flex-end;
    }

    > .content {
      justify-self: flex-start;
      max-width: 66.5rem;
      order: 1;

      h1,
      h1 span {
        font-size: 4.8rem;
        line-height: 7.3rem;
      }
    }
  }
`;

export const CareULoveSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  > .bg-title {
    padding: 1.5rem 2rem;
    background-color: ${({ theme }) => theme.COLORS.BLUE_600};
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    align-items: center;
  }

  > img {
    width: 100%;
    object-fit: cover;
  }

  @media (min-width: 800px) {
    > .bg-title {
      padding: 0 6.4rem;
    }

    > .bg-title {
      h1 {
        font-size: 4.8rem;
        line-height: 7.3rem;
      }
    }
  }
`;

export const HowItWorksSection = styled.section`
  display: grid;
  grid-template-rows: repeat(3, max-content);
  gap: 2rem;
  padding: 2rem;

  @media (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 6.4rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  background: ${({ theme }) => theme.COLORS.ORANGE_600};
  padding: 1.6rem 0 3.2rem 0;

  > .bg-img {
    background-color: ${({ theme }) => theme.COLORS.BLUE_600};
    border: 0.5rem solid #ffffff;
    width: 8.3rem;
    height: 8.3rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  > .text {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    p {
      text-align: center;
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  }

  @media (min-width: 800px) {
    padding: 2rem 6.4rem;
    flex-direction: row;
    justify-content: flex-start;

    > .bg-img {
      width: 20rem;
      height: 20rem;
    }

    > .text {
      p {
        text-align: start;
      }
    }
  }
`;
