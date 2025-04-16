import styled from "styled-components";
import { cores } from "../../styles";

export const SectionComoFunciona = styled.section`
    text-align: center;
    font-family: 'Helvetica Neue', sans-serif;
    padding: 80px 20px;

    h1 {
        font-size: 3rem;
        font-weight: 800;
        color: ${cores.azulFonteClaro};
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        margin-bottom: 40px;
    }

    p {
        font-size: 1.1rem;
        color: #333;
        max-width: 700px;
        margin: 0 auto 20px auto;
        line-height: 1.6;
    }

    strong {
        color: ${cores.azulFonteClaro};
        font-weight: 500;
    }

    a {
        color: #004060;
        text-decoration: underline;
        font-weight: 500;
    }

    a:hover {
        color: #0077aa;
        text-decoration: none;
    }
`;

export const ComoFuncionaConteudo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
    margin-top:100px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .col-esquerda img {
        max-width: 100%;
    }

    .col-direita {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .bloco {
        display: flex;
        align-items: flex-start;
        gap: 20px;
        background-color: #fdd9ac;
        border: 1px solid #d8c1a3;
        padding: 15px;
        border-radius: 8px;

        img {
        width: 40px;
        height: 40px;
        }

        h3 {
        color: #d46c0a;
        margin: 0 0 5px;
        }

        p {
        margin: 0;
        color: #5a3921;
        }
  }
`;