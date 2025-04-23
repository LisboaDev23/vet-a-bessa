import { ContainerFooter } from "./styles";
import whatsLogo from "../../assets/images/whats-logo.png"

const Footer = () => {

    return (
        <>
        <footer>
            <ContainerFooter className="container">
                <div className="menu">
                    <h3>Menu</h3>
                    <ul>
                        <li>
                            <a href="#">Início</a>
                        </li>
                        <li>
                            <a href="#sobre-mim">Sobre mim</a>
                        </li>
                        <li>
                            <a href="#como-funciona">Como funciona</a>
                        </li>
                        <li>
                            <a href="#consulta">Agende uma consulta</a>
                        </li>
                    </ul>
                </div>
                <div className="redes-sociais">
                    <h3>Redes Sociais</h3>
                    <ul>
                        <li>
                            <img src="" alt="instagram" />
                            <a href="https://www.instagram.com/vetabessa?igsh=MWx2Z2h6Zjd1bTMxNA==">@vetabessa</a>
                        </li>
                        <li>
                            <img src="" alt="facebook" />
                            <a href="">vetabessa</a>
                        </li>
                    </ul>
                </div>
                <div className="contato">
                    <h3>Contato</h3>
                    <div>
                        <img src={whatsLogo} alt="whats-app" />
                        <a href="https://wa.me/551185999831211?text=Ola!%20vim%20pelo%20seu%20site%20e%20queria%20mais%20informações">
                            (85) 99983-1211
                        </a>
                    </div>
                </div>
            </ContainerFooter>
        </footer>
        </>
    )
}


export default Footer;