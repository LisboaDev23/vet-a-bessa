import fraseInicio from "../../assets/images/atendimento-veterinario.png"
import imagemInicio from "../../assets/images/imagem-inicio 1.png"
import { ContainerInicio, Section } from "./styles";

export const Inicio = () => {


    return (
        <>
        <Section>
            <ContainerInicio className="container">
                <div style={{marginTop:"125px"}}>
                    <img src={fraseInicio} />
                </div>
                <div>
                    <img src={imagemInicio} />
                </div>
            </ContainerInicio>
        </Section>
        </>
    )
}

export default Inicio;