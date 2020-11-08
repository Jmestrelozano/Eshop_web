import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { infoCategoriesMsg } from "../actions/info";
import { CardContainer } from "../components/CardContainer";

export const CategoriesScreen = () => {
  const { infoCategoriesData } = useSelector((state) => state.categoy);
  const { infoMsgCategories } = useSelector((state) => state.categoy);

  return (
    <>
      <h1>Categorias</h1>
      {infoCategoriesData === undefined ? (
        console.log("cargando....")
      ) : (
        <CardContainer data={infoCategoriesData} msgError={infoMsgCategories} />
      )}
    </>
  );
};
