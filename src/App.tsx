import ComoFunciona from "./components/Como-Funciona"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Inicio from "./components/Inicio"
import SobreMim from "./components/Sobre-Mim"
import WhatsAppButton from "./components/WhatsAppButton"
import { GlobalCss } from "./styles"

function App() {

  return (
    <>
      <GlobalCss/>
      <Header/>
      <Inicio/>
      <SobreMim/>
      <ComoFunciona />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
