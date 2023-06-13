import React from "react"
import alimentacao from "../assets/images/alimentacao.svg";
import outros from "../assets/images/outros.svg";
import saude from "../assets/images/alimentacao.svg";
import transporte from "../assets/images/saude.svg";
import utilidades from "../assets/images/utilidades.svg";
import { IconeTemaEscuro } from "./UI";

export default ( type ) => {
    const Images = {
        Restaurante: <IconeTemaEscuro src={alimentacao} alt="Restaurante" />,
        Saude: <IconeTemaEscuro src={saude} alt="Saude" />,
        Transporte: <IconeTemaEscuro src={transporte} alt="Transporte" />,
        Utilidades: <IconeTemaEscuro src={utilidades} alt="Utilidades" />,
        default: <IconeTemaEscuro src={outros} alt="Outros" />
    }

    return Images[type] || Images.default;
}