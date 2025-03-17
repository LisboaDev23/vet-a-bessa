import styled from "styled-components";
import { cores } from "../../styles";

export const Cabecalho = styled.header`
    background-color: ${cores.azulEscuro};
`;
export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const LogoComSlogan = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
        margin-left: 18.38px;
    }
`;
export const ListaMenu = styled.div`
    display: flex;
    align-items: center; 
    justify-content: center;
    ul{
        display: flex;
        justify-content: center;
        list-style: none;
        padding: 0;
        gap: 40px;
    }
    li {
        position: relative;
        text-align: center;
    }
    a {
        text-decoration: none;
        color:${cores.amareloClaro};
        font-size: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;

        h3{
            font-size: 17px;
            font-weight: 100;
            font-family: 'Inter', sans-serif; 
        }
    }  
    li::before {
        content: "";
        position: absolute;
        top: -10px; /* Ajusta a posição do traço acima do texto */
        left: 50%;
        width: 100%; /* Tamanho da linha */
        height: 2px;
        background-color:${cores.amareloClaro}; /* Cor do traço */
        transform: translateX(-50%);
    }
`;