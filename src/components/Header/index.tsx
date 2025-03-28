import { useState } from "react";
import logo from "../../assets/images/logo-clara 1.png"
import slogan from "../../assets/images/Vet à Bessa.png"
import { 
    Container, 
    Cabecalho,
    LogoComSlogan,
    ListaMenu,
    BotaoHamburguer 
} from "./styles";

const Header = () => {

    const [menuAberto, setMenuAberto] = useState(false);
    const alternarMenu = () => setMenuAberto(!menuAberto);

    return (
        <Cabecalho>
            <Container className="container">
                <LogoComSlogan>
                    <img src={logo} alt="logo" />
                    <img src={slogan} alt="slogan" style={{marginLeft:"18.38px"}}/>
                </LogoComSlogan>
                <BotaoHamburguer onClick={alternarMenu}>
                    ☰
                </BotaoHamburguer>
                <ListaMenu $menuAberto={menuAberto}>
                    <ul>
                        <li>
                            <a href="#">
                                <h3>Início</h3>
                            </a>
                        </li>
                        <li>
                            <a href="#sobre-mim">
                                <h3>Sobre mim</h3>
                            </a>
                        </li>
                        <li>
                            <a href="#como-funciona">
                                <h3>Como funciona</h3>
                            </a>
                        </li>
                        <li>
                            <a href="#consulta">
                                <h3>Consulta</h3>
                            </a>
                        </li>
                    </ul>
                </ListaMenu>
            </Container>
        </Cabecalho>
    )
}


export default Header;