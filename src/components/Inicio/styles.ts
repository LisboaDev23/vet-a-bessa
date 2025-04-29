import styled from "styled-components";
import { cores, dimensoes } from "../../styles";

export const Section = styled.section`
    background-color: ${cores.laranja};
    padding: 120px 20px 0 20px;

    @media (min-width: ${dimensoes.tablet}) {
        padding-top: 90px;
    }

    @media (max-width: ${dimensoes.mobile}) {
        padding-top: 40px;
    }
`;

export const ContainerInicio = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    .divFrase {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    img {
        width: 100%;
        max-width: 600px; /* Tamanho máximo da imagem */
        height: auto;
    }

    .imagemInicio {
        height: 600.9px;
    }

    @media (max-width: ${dimensoes.mobile}) {
        .imagemInicio {
            height: 374.9px;
        }
    }

    .imagemInicio img {
        width: 100%;
        max-width: 500px; /* Controla o tamanho da imagem */
        height: auto;
        opacity: 0; /* Suavização */
        transform: translateY(20px); /* Animação */
        animation: fadeInUp 1s ease-in-out forwards;
    }

    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Ajustes para tablets */
    @media (max-width: 1024px) {
        flex-direction: column;
        padding-top: 80px;

        .divFrase img {
            max-width: 400px; /* Reduz a imagem no tablet */
        }

        .imagemInicio img {
            max-width: 400px; /* Reduz a imagem da pessoa */
        }

        .divFrase {
            align-items: center; 
        }
    }

    /* Ajustes para celulares */
    @media (max-width: ${dimensoes.mobile}) {
        .divFrase img {
            max-width: 300px; /* Ajusta a imagem no mobile */
        }

        .imagemInicio img {
            max-width: 300px;
        }
    }

    /* Ajustes para telas muito pequenas */
    @media (max-width: 480px) {
        .divFrase img {
            max-width: 250px; /* Ajusta ainda mais no mobile pequeno */
        }

        .imagemInicio img {
            max-width: 250px;
        }
    }
`;

export const BotaoAgendeAqui = styled.button`
    margin-top: 42px;
    border-radius: 20px;
    padding: 11px 18px;
    color: ${cores.amareloClaro};
    background-color: ${cores.azulEscuro};
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    opacity: 0; /* Começa invisível */
    transform: translateY(20px); /* Começa deslocada */
    animation: fadeInUp 0.8s ease-in-out forwards;

    &:hover {
        background-color: #e67e00;
    }

    @media (max-width: ${dimensoes.tablet}) {
        margin-top: 28px;
    }
`;