import styled from "styled-components";
import { cores } from "../../styles";

export const SectionComoFunciona = styled.section`
    text-align: center;
    font-family: 'Helvetica Neue', sans-serif;
    padding: 80px 20px;
    background-color: ${cores.amareloClaro};

    h1 {
        font-size: 3rem;
        font-weight: 800;
        color: ${cores.azulFonteClaro};
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        margin-bottom: 40px;
    }

    p {
        font-size: 1.1rem;
        color: ${cores.azulEscuro};
        max-width: 700px;
        margin: 0 auto 20px auto;
    }

    strong {
        color: ${cores.azulFonteClaro};
        font-weight: 500;
    }

    a {
        color: ${cores.azulFonteClaro};
        text-decoration: underline;
        font-weight: 500;
    }

    a:hover {
        color: ${cores.azulEscuro};
        text-decoration: none;
    }
`;

export const ComoFuncionaConteudo = styled.div`
    display: flex;
    gap: 10px;
    max-width: 100%;    
    justify-content: center;

    img {
        max-width: 88px;
        max-height: 75px;
    }

    h3 {
        margin-bottom: 12px;
        font-size: 14px;
    }

    .consulta-clinica {
        border-radius: 20px;
        background-color: ${cores.azulEscuro};

        p, h3 {
            color: ${cores.branco};
        }
    }

    .atendimento-silvestre {
        border-radius: 20px;
        background-color: ${cores.verdeSilvestre};

        p, h3 {
            color: ${cores.branco};
        }
    }

    .cuidados-paliativos {
        border-radius: 20px;
        background-color: ${cores.verdeCuidadosPaliativos};

        p, h3 {
            color: ${cores.branco};
        }
    }

    .vacinas {
        background-color: ${cores.laranja};
        border-radius: 20px;
        
        p, h3 {
            color: ${cores.branco};
        }
    }

`;

export const Bloco = styled.div`
    padding: 16px;
    max-width: 180px;
    p {
        font-size: 11px;
        margin-bottom: 0px;
    }
`;  