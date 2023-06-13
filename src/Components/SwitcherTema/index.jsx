import React from "react";
import themeOn from "../../assets/images/themeOn.svg";
import themeOf from "../../assets/images/themeOff.svg";
import { Icone } from "../UI";

const claro = <Icone src={themeOn} alt="Tema claro" />
const escuro = <Icone src={themeOf} alt="Tema escuro" />

export default ({ tema }) => (tema ? escuro : claro)