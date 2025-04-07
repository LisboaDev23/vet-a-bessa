import styled from "styled-components";
import { cores } from "../../styles";

export const Section = styled.section`
    background-color: ${cores.azulEscuro};
`;

export const ContainerSobreMim = styled.div`
    
`;

export const DivTexto = styled.div`
    h1 {
        color: ${cores.amareloClaro};
        text-align: center;
        padding-top:65px;
        padding-bottom: 65px;
        font-size: 40px;
    }
    max-width: 802px;
    margin: 0 auto;
    --margin-bottom: 62px;
`;

export const ContainerDescricoes = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: -4px;
    
    div {
        text-align: center;
    }
`;

export const ContainerCuboInfos = styled.div`
    padding: 24px;
    border: 2px solid ${cores.laranja};
    background-color: #FFFF;

    h3,p {
        color: ${cores.laranja};
    }
`;