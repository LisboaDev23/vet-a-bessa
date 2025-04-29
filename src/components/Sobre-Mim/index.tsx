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
                        <h1>Oi, prazer! Deixe-me contar quem sou eu e por que seu pet já é especial para mim</h1>
                    </DivTexto>
                    <div>
                        <DivFotoSobre>
                            <img src={imagemSobreMim} alt="imagemSobreMim" />
                            <ContainerDescricoes>
                                <ContainerCuboInfos style={{borderLeft: '0px'}}>
                                    <h3>ME CHAMO IASMIM CASTRO BESSA</h3>
                                    <div className="texto">
                                        <strong>
                                            O nome é um trocadilho mesmo: ser veterinária à "Bessa", porque quando eu cuido, é com tudo. Com carinho, atenção e amor de verdade. Quero ser aquela vet que você e seu pet confiam de olhos fechados.
                                        </strong>
                                    </div>
                                </ContainerCuboInfos>
                                <ContainerCuboInfos>
                                    <h3>SOU VETERINÁRIA SAÚDE!</h3>
                                    <div className="texto">
                                        <strong>
                                            A saúde do seu pet é meu compromisso.
                                            Acredito que prevenir é o melhor cuidado, por isso, estou aqui para garantir que ele tenha uma vida longa e feliz, sem surpresas no caminho.
                                        </strong>
                                    </div>
                                </ContainerCuboInfos>
                                <ContainerCuboInfos style={{borderRight: '0px'}}>
                                    <h3>APAIXONADA POR TODOS OS ANIMAIS!</h3>
                                    <div className="texto">
                                        <strong>
                                            Minha paixão vai além dos pets tradicionais, sou fascinada por todos, incluindo os silvestres e exóticos. Cada animal tem sua beleza e história, e adoro aprender e cuidar de todos, sem exceção.
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