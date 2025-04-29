import fraseInicio from "../../assets/images/atendimento-veterinario.png"
import imagemInicio from "../../assets/images/foto-principal.png"
import { BotaoAgendeAqui, ContainerInicio, Section } from "./styles";
import {motion} from 'framer-motion';
import { useInView } from "react-intersection-observer";


const Inicio = () => {

    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.2
    });
    return (
        <>
        <Section id="inicio">
            <motion.div
                ref={ref}
                initial={{opacity: 0, y: 50}}
                animate={inView ? {opacity: 1, y:0} : {}}
                transition={{ duration: 1.5 }}        
            >
                <ContainerInicio className="container">
                    <div className="divFrase">
                        <img src={fraseInicio} alt="fraseInicio"/>
                        <a href="https://wa.me/551185999831211?text=Ola!%20vim%20pelo%20seu%20site%20e%20queria%20mais%20informações">
                            <BotaoAgendeAqui>Agende aqui!</BotaoAgendeAqui>
                        </a>
                    </div>
                    <div className="imagemInicio">
                        <img src={imagemInicio} alt="imagemInicio"/>
                    </div>
                </ContainerInicio>
            </motion.div>
        </Section>
        </>
    )
}

export default Inicio;