import { Commerce, ContainerFooter, Rodape } from "./styles";
import whatsLogo from "../../assets/images/whats-logo.png"
import instaLogo from "../../assets/images/instagram-logo.png"
import faceLogo from "../../assets/images/facebook-logo.png"

const Footer = () => {

    return (
        <>
        <Rodape>
            <ContainerFooter className="container">
                <div className="redes-sociais">
                    <h3>Redes Sociais</h3>
                    <ul>
                        <li>
                            <img id="insta" src={instaLogo} alt="instagram" />
                            <a href="https://www.instagram.com/vetabessa?igsh=MWx2Z2h6Zjd1bTMxNA==">@vetabessa</a>
                        </li>
                        <li>
                            <img id="face" src={faceLogo} alt="facebook" />
                            <a href="https://www.facebook.com/share/18xS6qqzkt/">vetabessa</a>
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
            <Commerce className="container">
                <p>Desenvolvido por Gabriel Lisboa</p>
            </Commerce>
        </Rodape>
        </>
    )
}


export default Footer;