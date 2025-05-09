import styled from "styled-components";
import { dimensoes } from "../../styles";

export const Button = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  text-decoration: none;
  z-index: 1000;

  img {
    max-width: 150px;
    max-height: 150px;
  }

  @media (max-width: ${dimensoes.mobile}) {
      img {
        max-width: 60px;
        max-height: 80px;
    }
    }
`;