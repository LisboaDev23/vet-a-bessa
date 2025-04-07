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
      <WhatsAppButton />
    </>
  )
}

export default App
