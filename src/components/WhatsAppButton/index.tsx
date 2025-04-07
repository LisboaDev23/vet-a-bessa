import { Button } from "./styles";


const WhatsAppButton = () => {
    return (
      <Button
        href="https://wa.me/551185999831211?text=Ola!%20vim%20pelo%20seu%20site%20e%20queria%20mais%20informações"
        target="_blank"
        aria-label="Fale conosco no WhatsApp"
      >
        📞
      </Button>
    );
  };
  
  export default WhatsAppButton;