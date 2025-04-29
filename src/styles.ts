import { createGlobalStyle } from "styled-components";

export const cores = {
    amareloClaro: '#F8DCBF',
    azulEscuro: '#001F3D',
    laranja: '#E87800',
    azulFonteClaro: '#004060',
    branco: '#fff',
    verdeSilvestre: '#5E6C2A',
    verdeCuidadosPaliativos: '#1E574C',
    amarelo: '#ffff00'
}

export const dimensoes = {
    desktop: '1024px',
    tablet: '768px',
    mobile: '480px'
}

export const GlobalCss = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    }

html {
    scroll-behavior: smooth;
    scroll-padding-top: 100px;
}

.container {
    max-width: 1151px;
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: ${dimensoes.mobile}) {
    .container {
      max-width: 86%;
    }
  }

  @media (max-width: ${dimensoes.tablet}) {
    .container {
      max-width: 86%;
    }
  }

  @media (min-width: 769px) and (max-width: ${dimensoes.desktop}) {
    .container {
      max-width: 93%;
    }
  }
}
`;