import { ContainerCuboInfos, ContainerDescricoes, ContainerSobreMim, DivFotoSobre, DivTexto, Section } from "./styles";
import {motion} from 'framer-motion';
import { useInView } from "react-intersection-observer";
import imagemSobreMim from "../../assets/images/imagem-sobre-mim.png"

const SobreMim = () => {

    const {ref, inView} = useInView({
        triggerOnce: false,
        threshold: 0.2
    });
    return (
        <>
        <Section id="sobre-mim">
            <motion.div
            ref={ref}
            initial={{opacity: 0, y: 50}}
            animate={inView ? {opacity: 1, y:0} : {}}
            transition={{ duration: 1.5 }}
            >
                <ContainerSobreMim className="container">
                    <DivTexto>
                        <h1>Conheça Quem É A Responsável Por Cuidar De Parte Importante Da Sua Família</h1>
                    </DivTexto>
                    <div>
                        <DivFotoSobre>
                            <img src={imagemSobreMim} alt="imagemSobreMim" />
                            <ContainerDescricoes>
                                <ContainerCuboInfos style={{borderLeft: '0px'}}>
                                    <h3>ME CHAMO IASMIM CASTRO BESSA</h3>
                                    <div className="texto">
                                        <strong>
                                            Daí que veio a ideia do nome, como um trocadilho. <br /> 
                                            Acredito que a vida possa sim ser mais leve, se possível, transmitirei isso a você 
                                            e espero me tornar a veterinária da sua família.
                                        </strong>
                                    </div>
                                </ContainerCuboInfos>
                                <ContainerCuboInfos>
                                    <h3>SOU VETERINÁRIA SAÚDE!</h3>
                                    <div className="texto">
                                        <strong>
                                            Prefiro trabalhar de forma focada na prevenção do que remediar a situação, então irei fazer de 
                                            tudo para que seu pet não necessite de maiores intervenções.
                                        </strong>
                                    </div>
                                </ContainerCuboInfos>
                                <ContainerCuboInfos style={{borderRight: '0px'}}>
                                    <h3>APAIXONADA POR TODOS OS ANIMAIS!</h3>
                                    <div className="texto">
                                        <strong>
                                            Por mais que eu tenha um grande fascínio pelos pets não convencionais e exóticos, adoro conhecer e
                                            aprender a respeito de todos os animais domésticos.
                                        </strong>
                                    </div>
                                </ContainerCuboInfos>
                        </ContainerDescricoes>
                        </DivFotoSobre>
                    </div>
                </ContainerSobreMim>
            </motion.div>
        </Section>
        </>
    );
}


export default SobreMim;