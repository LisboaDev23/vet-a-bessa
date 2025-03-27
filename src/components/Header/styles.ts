import styled from "styled-components";
import { cores } from "../../styles";

export const Cabecalho = styled.header`
    background-color: ${cores.azulEscuro};
    position: fixed;
    top: 0; 
    left: 0;
    width: 100%; 
    z-index: 1000; 
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
    
    @media (max-width: 768px) {
        img {
            max-width: 110px;
        }
    }
`;
export const ListaMenu = styled.div<{ $menuAberto: boolean }>`
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

    @media (max-width: 836px) {
        position: absolute;
        top: 94px; /* Ajuste para ficar abaixo do header */
        left: 0;
        width: 100%;
        background-color: ${cores.azulEscuro};
        flex-direction: column;

        ul {
            flex-direction: column;
            gap: 20px;
            padding: 20px 0;
        }
        /* Suavização da abertura */
        max-height: ${({ $menuAberto }) => ($menuAberto ? "300px" : "0")};
        overflow: hidden;
        transition: max-height 0.5s ease-in-out;
    }
`;

export const BotaoHamburguer = styled.button`
    display: none;
    background: none;
    border: none;
    color: ${cores.amareloClaro};
    font-size: 32px;
    cursor: pointer;

    @media (max-width: 836px) {
        display: block; 
    }
`;