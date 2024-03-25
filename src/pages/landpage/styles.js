import { Link } from "react-router-dom";
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

  .hidden {
    display: none;
  }

  .scale-in-tr {
    -webkit-animation: scale-in-tr 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: scale-in-tr 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  .scale-out-tr {
    -webkit-animation: scale-out-tr 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: scale-out-tr 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @keyframes scale-in-tr {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
      opacity: 0.95;
    }
  }

  @keyframes scale-out-tr {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
      opacity: 0.95;
    }
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
      opacity: 1;
    }
  }

  @media (min-width: 800px) {
    p {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  }
`;

export const Header = styled.nav`
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

  > ul {
    display: none;
  }

  > .buttons {
    display: none;
  }

  > button {
    background: transparent;
    height: 2.4rem;
  }

  @media (min-width: 800px) {
    padding: 3.2rem 6.4rem;

    #openMenuButton {
      display: none;
    }

    > ul {
      display: flex;
      gap: 4rem;
      list-style: none;

      a {
        color: ${({ theme }) => theme.COLORS.BLACK};
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
      align-items: center;

      gap: 4rem;
    }

    > svg {
      display: none;
    }
  }
`;

export const LinkButton = styled(Link)`
  text-decoration: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  color: ${({ theme }) => theme.COLORS.BLACK};

  &:first-child:hover {
    transform: scale(1.1);
  }

  &:last-child {
    background: ${({ theme }) => theme.COLORS.ORANGE_600};
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 1rem 3.6rem;
    border-radius: 6rem;
  }

  &:last-child:hover {
    background: ${({ theme }) => theme.COLORS.ORANGE_HOVER};
  }
`;

export const HeaderMenu = styled.div`
  position: fixed;
  top: 5.6rem;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 1);
  width: 100%;
  height: 50%;

  display: grid;
  place-items: center;
  place-content: center;
  gap: 3.2rem;

  > a {
    color: ${({ theme }) => theme.COLORS.BLACK};
    text-decoration: none;
    font-weight: bold;
  }

  > a:nth-child(3) {
    margin-bottom: 3.2rem;
  }

  > button {
    background: transparent;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  > button:last-child {
    background: ${({ theme }) => theme.COLORS.ORANGE_600};
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 1rem 3.6rem;
    border-radius: 6rem;
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
