import { Bloco, ComoFuncionaConteudo, SectionComoFunciona } from "./styles";
import logoPrancheta from '../../assets/images/logo-prancheta.png'
import logoSilvestre from '../../assets/images/logo-silvestre.png'
import logoVacina from '../../assets/images/logo-vacina.png'
import logoCoracao from '../../assets/images/logo-coracao.png'
import fotoOzzy from '../../assets/images/foto-ozzy.png'
import {motion} from 'framer-motion';
import { useInView } from "react-intersection-observer";

const ComoFunciona = () => {

    const {ref, inView} = useInView({
        triggerOnce: false,
        threshold: 0.2
    });

    return (
        <>
            <SectionComoFunciona id="como-funciona">
                <motion.div
                    ref={ref}
                    initial={{opacity: 0, y: 50}}
                    animate={inView ? {opacity: 1, y:0} : {}}
                    transition={{ duration: 1.5 }}
                >
                    <div className="container">
                        <h1>Como Funciona?</h1>
                        <div>
                            <img src={fotoOzzy} alt="como-funciona" />
                            <p>Ofereço atendimento veterinário <strong>personalizado e individualizado</strong>, no <strong>conforto do seu lar</strong>, <strong>afim de facilitar o
                            seu dia a dia</strong> e, também, trazer uma <strong>maior bem-estar</strong> ao seu pet.
                            </p>
                            <p>Basta tirar qualquer dúvida pelo nosso Whatsapp
                                <a target="_blank" href="https://wa.me/551185999831211?text=Ola!%20vim%20pelo%20seu%20site%20e%20queria%20mais%20informações"> e agendar a consulta do seu baby!</a>
                            </p>
                            
                        </div>
                        <ComoFuncionaConteudo>
                            <Bloco className="consulta-clinica">
                                <img src={logoPrancheta} alt="logo-prancheta"/>
                                <h3>Consulta Clínica</h3>
                                <p>Atendimento para cães e gatos.</p>
                            </Bloco>
                            
                            <Bloco className="atendimento-silvestre">
                                <img src={logoSilvestre} alt="logo-silvestre"/>
                                <h3>Atendimento Silvestre</h3>
                                <p>Roedores, lagomorfos, aves e répteis.</p>
                            </Bloco>

                            <Bloco className="vacinas">
                                <img src={logoVacina} alt="logo-vacina" />
                                <h3>Vacinas</h3>
                                <p>Imunizações essenciais e reforços.</p>
                            </Bloco>
                            <Bloco className="cuidados-paliativos">
                                <img src={logoCoracao} alt="logo-coracao" />
                                <h3>Cuidados Preventivos</h3>
                                <p>Acompanhamento afim de evitar qualquer tipo de problema que o pet venha a ter.</p>
                            </Bloco>
                        </ComoFuncionaConteudo>
                    </div>
                </motion.div>
            </SectionComoFunciona>
        </>
    )
}


export default ComoFunciona;