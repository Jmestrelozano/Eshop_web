import React from "react";
import { useSelector } from "react-redux";
import { CardContainer } from "../components/CardContainer";


const PanelScreen = () => {
  const UsuarioWelcome = useSelector((state) => state.auth.name);

  return (
    <>
      <div className="container">
        <h1>Bienvenido {UsuarioWelcome}</h1>
       
      </div>
    </>
  );
};

export default PanelScreen;
