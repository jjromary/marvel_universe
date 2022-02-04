import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;
        margin-left: 1rem;
        margin-right: 1rem;
        background: #F5F5F5;
        color: #29292e;
        font: 400 16px Roboto, sans-serif;
    }

    html {
      @media (max-width: 1080px) {
          font-size: 93.75%; //15px
      }
      @media (max-width: 720px) {
          font-size: 87.5%; //14px
      }
    }
`;
