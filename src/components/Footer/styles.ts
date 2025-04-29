import styled from "styled-components";
import { cores, dimensoes } from "../../styles";

export const Rodape = styled.footer`
    background-color: ${cores.laranja};
`;

export const ContainerFooter = styled.div`
    padding-top: 35px;
    padding-bottom: 35px;
    display: flex;
    justify-content: center;

    img {
        max-height: 40px;
        max-width: 40px;
    }

    a {
        text-decoration: none;
        color: ${cores.branco};
    }

    a:hover {
        color: ${cores.amarelo};
        }
    

    h3 {
            margin-bottom: 24px;
    }

    .redes-sociais {
        margin-right: 140px;

        li {
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            
            #insta {
                max-height: 26px;
                max-width: 26px;
            }
            #face {
                max-height: 18px;
                max-width: 18px;
                margin-left: 3px;
                margin-right: 6px;
            }
        }
    }

    .contato {
        div {
            display: flex;
            align-items: center;
        }
    }

    @media (max-width: ${dimensoes.mobile}) {
        display: block;
        text-align: center;

        .redes-sociais {
            margin-right: 0px;
            ul {
                display: flex;
                justify-content: center;

                li {
                    padding: 5px;
                }
            }
        }

        .contato {
            div {
                justify-content: center;
            }
        }
    }
`;

export const Commerce = styled.div`
    text-align: center;
    p {
        font-size: 12px;
        color: ${cores.branco};
    }
`;