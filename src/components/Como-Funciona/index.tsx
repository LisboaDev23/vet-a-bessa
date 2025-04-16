import { ComoFuncionaConteudo, SectionComoFunciona } from "./styles";

const ComoFunciona = () => {


    return (
        <>
            <SectionComoFunciona id="como-funciona">
                <div className="container">
                    <h1>Como Funciona?</h1>
                    <div>
                        <p>Ofereço atendimento veterinário <strong>personalizado e individualizado</strong>, no <strong>conforto do seu lar</strong>, <strong>afim de facilitar o
                        seu dia a dia</strong> e, também, trazer uma <strong>maior bem-estar</strong> ao seu pet.
                        </p>
                        <p>Basta tirar qualquer dúvida pelo nosso Whatsapp
                             <a target="_blank" href="https://wa.me/551185999831211?text=Ola!%20vim%20pelo%20seu%20site%20e%20queria%20mais%20informações">e agendar a consulta do seu baby!</a>
                        </p>
                    </div>
                    <ComoFuncionaConteudo>
                        <div className="col-esquerda">
                            <img src="" alt="Ícone de Fale Conosco" />
                        </div>

                        <div className="col-direita">
                            <div className="bloco">
                                <img src="" alt="Ícone de Fale Conosco" />
                                <div>
                                    <h3>Fale Comigo</h3>
                                    <p>Estou aqui para esclarecer dúvidas e ajudar a cuidar do seu pet.</p>
                                </div>
                            </div>
                            <div className="bloco">
                                <img src="" alt="Ícone de Serviços" />
                                <div>
                                    <h3>Serviços Oferecidos</h3>
                                    <p>Conheça os serviços disponíveis e escolha o melhor para as necessidades atuais do seu pet.</p>
                                </div>
                            </div>
                            <div className="bloco">
                                <img src="" alt="Ícone de Agendamento" />
                                <div>
                                    <h3>Agende uma Consulta</h3>
                                    <p>Agende uma consulta veterinária domiciliar e proporcione o melhor cuidado para o seu animalzinho.</p>
                                </div>
                            </div>
                        </div>
                    </ComoFuncionaConteudo>
                </div>
            </SectionComoFunciona>
        </>
    )
}


export default ComoFunciona;