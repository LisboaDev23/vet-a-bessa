import styled from "styled-components";
import { cores } from "../../styles";

export const ContainerFooter = styled.div`
    padding-top: 35px;
    padding-bottom: 35px;
    display: flex;

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


    .menu {
        margin-right: 140px;

        li {
            margin-bottom: 10px;
        }
    }

    .redes-sociais {
        margin-right: 140px;

        li {
            margin-bottom: 10px;
        }
    }

    .contato {
        div {
            display: flex;
            align-items: center;
        }
    }
`;