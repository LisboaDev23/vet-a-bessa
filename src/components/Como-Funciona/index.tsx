import { Bloco, ComoFuncionaConteudo, SectionComoFunciona } from "./styles";

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
                            <a target="_blank" href="https://wa.me/551185999831211?text=Ola!%20vim%20pelo%20seu%20site%20e%20queria%20mais%20informações"> e agendar a consulta do seu baby!</a>
                        </p>
                    </div>
                    <ComoFuncionaConteudo>
                        <Bloco className="consulta-clinica">
                            <img src="" alt="" />
                            <h3>Consulta Clínica</h3>
                            <p>Atendimento para cães e gatos.</p>
                        </Bloco>
                        
                        <Bloco className="atendimento-silvestre">
                            <img src="" alt="" />
                            <h3>Atendimento Silvestre</h3>
                            <p>Roedores, aves e répteis.</p>
                        </Bloco>

                        <Bloco className="vacinas">
                            <img src="" alt="" />
                            <h3>Vacinas</h3>
                            <p>Imunizações essenciais e reforços.</p>
                        </Bloco>
                        <Bloco className="cuidados-paliativos">
                            <img src="" alt="" />
                            <h3>Cuidados Paliativos</h3>
                            <p>Tratamento para evitar qualquer tipo de problema que o pet venha a ter.</p>
                        </Bloco>
                    </ComoFuncionaConteudo>
                </div>
            </SectionComoFunciona>
        </>
    )
}


export default ComoFunciona;