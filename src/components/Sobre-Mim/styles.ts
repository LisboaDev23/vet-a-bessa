import styled from "styled-components";
import { cores, dimensoes } from "../../styles";

export const Section = styled.section`
    background-color: ${cores.azulEscuro};
    padding-bottom: 100px;
`;
export const ContainerSobreMim = styled.div`
    
`;

export const DivTexto = styled.div`
    h1 {
        color: ${cores.amareloClaro};
        text-align: center;
        padding-top:65px;
        padding-bottom: 65px;
        font-size: 38px;
    }
    max-width: 802px;
    margin: 0 auto;

    @media (max-width: ${dimensoes.mobile}) {
        h1 {
            font-size: 16px;
        }
    }
`;

export const ContainerDescricoes = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 0px;
    
    div {
        text-align: center;
    }

    @media (max-width: ${dimensoes.mobile}) {
        display: block;
    }
`;

export const DivFotoSobre = styled.div`
    border: 2px solid ${cores.azulEscuro};

    img {
        width: 100%;
    }
`;

export const ContainerCuboInfos = styled.div`
    padding: 40px;
    border: 5px solid ${cores.azulEscuro};
    background-color: #FFFF;

    h3 {
        color: #000;
        margin-bottom: 21px;
        font-weight: 900;
        font-size: 25px;
    }

    .texto {
        margin: 0 auto;
        padding: 20px;
        text-align: left;
        color: ${cores.azulEscuro};
}

    strong {
        font-size: 18px;
    }

    @media (max-width: ${dimensoes.mobile}) {
        padding: 10px;
        border: 2px solid ${cores.azulEscuro};
        h3 {
            font-size: 12px;
        }
        .texto {
            padding: 0px;
        }

        strong {
            font-size: 12px;
        }
    }
`;