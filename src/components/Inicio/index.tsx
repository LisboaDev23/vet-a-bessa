import fraseInicio from "../../assets/images/atendimento-veterinario.png"
import imagemInicio from "../../assets/images/foto-principal.png"
import { BotaoAgendeAqui, ContainerInicio, Section } from "./styles";

const Inicio = () => {


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
                    <a href="https://wa.me/551185999831211?text=Ola!%20vim%20pelo%20seu%20site%20e%20queria%20mais%20informações">
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