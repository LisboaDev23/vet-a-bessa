import { ContainerCuboInfos, ContainerDescricoes, ContainerSobreMim, DivTexto, Section } from "./styles";
import imagemSobreMim from "../../assets/images/imagem-sobre-mim.png"
import { cores } from "../../styles";

const SobreMim = () => {


    return (
        <>
        <Section id="sobre-mim">
            <ContainerSobreMim className="container">
                <DivTexto>
                    <h1>Conheça Quem É A Responsável Por Cuidar De Parte Importante Da Sua Família</h1>
                </DivTexto>
                <div>
                    <div>
                        <img style={{width: "100%", borderBottom: `2px solid${cores.laranja}`}} src={imagemSobreMim} alt="imagemSobreMim" />
                        <ContainerDescricoes>
                        <ContainerCuboInfos>
                            <h3>Me chamo Iasmim Castro Bessa</h3>
                            <p>
                                Daí que veio a ideia do nome, como uma forma de trocadilho. 
                                Acredito que a vida possa sim ser mais leve e, se possível, transmitirei isso a você 
                                e espero me tornar a veterinária da sua família.
                            </p>
                        </ContainerCuboInfos>
                        <ContainerCuboInfos>
                            <h3>Sou veterinária saúde!</h3>
                            <p>
                                Prefiro trabalhar de forma focada na prevenção do que remediar a situação, então irei fazer de 
                                tudo para que seu pet não necessite de maiores intervenções.
                            </p>
                        </ContainerCuboInfos>
                        <ContainerCuboInfos>
                            <h3>Apaixonada por todos os animais</h3>
                            <p>
                                Por mais que eu tenha um grande fascínio pelos pets não convencionais e exóticos, adoro conhecer e
                                aprender a respeito de todos os animais domésticos.
                            </p>
                        </ContainerCuboInfos>
                    </ContainerDescricoes>
                    </div>
                </div>
            </ContainerSobreMim>
        </Section>
        </>
    );
}


export default SobreMim;