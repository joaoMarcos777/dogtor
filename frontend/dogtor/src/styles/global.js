import * as styled from "styled-components";

export const GlobalStyles = styled.createGlobalStyle`
  @font-face {
    font-family: "Bogart";
    src: url("../../public/fonts/bogart/Bogart-Regular-trial.ttf")
      format("truetype");
    font-weight: 400;
  }

  @font-face {
    font-family: "Bogart";
    src: url("../../public/fonts/bogart/Bogart-Bold-trial.ttf")
      format("truetype");
    font-weight: bold;
  }

  @font-face {
    font-family: "Bogart";
    src: url("../../public/fonts/bogart/Bogart-Light-trial.ttf")
      format("truetype");
    font-weight: 300;
  }

  @font-face {
    font-family: "Bogart";
    src: url("../../public/fonts/bogart/Bogart-Extralight-trial.ttf")
      format("truetype");
    font-weight: 200;
  }

  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body * {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.FONTS.FF_PRIMARY};
  }
`;
