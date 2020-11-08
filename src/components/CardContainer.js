import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";

export const CardContainer = ({ data, msgError }) => {
  console.log(data);

  return (
    <>
      <div id="column" className="column-display">
        {data.length > 0 ? (
          data.map((dato, index) => {
            return (
              <div key={index} id="card-info" className="card">
                <img src={dato.images[0].url} alt="vitateach" />
                <div className="card-body">
                  {/* <h6>{dato.name}</h6> */}
                  <p>{dato.title}</p>
                  <div>
                    <FontAwesomeIcon icon={["far", "heart"]} />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h1>{msgError}</h1>
        )}
      </div>
    </>
  );
};
