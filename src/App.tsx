import Header from "./components/Header"
import Inicio from "./components/Inicio"
import WhatsAppButton from "./components/WhatsAppButton"
import { GlobalCss } from "./styles"

function App() {

  return (
    <>
      <GlobalCss/>
      <Header/>
      <Inicio/>
      <WhatsAppButton />
    </>
  )
}

export default App
