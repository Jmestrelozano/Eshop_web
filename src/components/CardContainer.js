import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { CardDataModal } from "./Modal";

export const CardContainer = ({ data, msgError }) => {
  console.log(data);

  return (
    <>
      <div id="column" className="column-display ">
        {data.length > 0 ? (
          data.map((dato, index) => {
            return (
              <>
                <div key={index} className="card">
                  <div className="circle">
                    <img src={dato.images[0].url} />
                  </div>
                  <div className="context">
                    <p>{dato.title}</p>
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <CardDataModal title="Detalles">
                  <div className="row">
                    <div className="container-modal">
                      <div className="container-photo ">
                        <img
                          style={{ width: "20rem" ,height:"22rem"}}
                          src={dato.images[0].url}
                        />
                      </div>
                      <div className="container-details ">
                        <div className="container-view-detail">
                          <div className="title">
                            <h1>Sofa super economico</h1>
                          </div>
                          <div className="detalles">
                            <h1>
                              <span>Color:</span>Blanco
                            </h1>
                            <p>
                              <span>Precio:</span>$123.000 pesos
                            </p>
                            <p>
                              mas informacion al <span>3005432345</span>
                            </p>
                          </div>
                          <div className="map-view">
                            <h1>AQUI VA EL MAPA</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardDataModal>
              </>
            );
          })
        ) : (
          <h1>{msgError}</h1>
        )}
      </div>
    </>
  );
};
