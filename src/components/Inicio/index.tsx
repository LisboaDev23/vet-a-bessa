import fraseInicio from "../../assets/images/atendimento-veterinario.png"
import imagemInicio from "../../assets/images/imagem-inicio 1.png"
import { BotaoAgendeAqui, ContainerInicio, Section } from "./styles";

export const Inicio = () => {


    return (
        <>
        <Section id="inicio">
            <ContainerInicio className="container">
                <div className="divFrase">
                    {/* <h4>Atendimento veterinario no conforto do seu lar.</h4>
                    <br />
                    <br />
                    <h4>Trazendo mais segurança para seu pet</h4> */}
                    <img src={fraseInicio} alt="fraseInicio"/>
                    <a href="#">
                        <BotaoAgendeAqui>Agende aqui!</BotaoAgendeAqui>
                    </a>
                </div>
                <div className="imagemInicio">
                    <img src={imagemInicio} alt="imagemInicio"/>
                </div>
            </ContainerInicio>
        </Section>
        </>
    )
}

export default Inicio;