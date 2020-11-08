import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mdiCar } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { startLogout } from "../actions/auth";
import { infoCategoriesData,infoCategoriesMsg } from "../actions/info";
import { peticiones } from "../api/peticiones";

export const SideBar = ({ children }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [Categories, setCategories] = useState([]);
  const UserProfileImg = useSelector(
    (state) => state.info.providerData[0].photoURL
  );

  const UserProfileName = useSelector(
    (state) => state.info.providerData[0].displayName
  );

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const handleToggleClickMenu = () => {
    let wrapper = document.querySelector(".wrapper");
    wrapper.classList.toggle("collapse");
  };

  const customStyle = {
    marginLeft: "1rem",
  };

  useEffect(() => {
    peticiones("http://localhost:9000/api/categories", "GET")
      .then((result) => {
        setCategories(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const handleClickLinkCategory = (index) => {
    history.push(`/Panel/categoryID/${index + 1}`);

     peticiones("http://localhost:9000/api/listings", "GET").then((result) => {
       let finder = result.filter(({ categoryId }) => categoryId === index+1);
       if (finder.length > 0) {
         dispatch(infoCategoriesData(finder))
       } else {
        dispatch(infoCategoriesMsg ("No hay resultados para esta categoria"))
       }
     });
  };
  return (
    <div>
      <div className="header">
        <div className="header-menu">
          <div className="title">
            Eshop<span>Web</span>
          </div>
          <div onClick={handleToggleClickMenu} className="sidebar-btn">
            <FontAwesomeIcon icon={["fas", "bars"]} />
          </div>
          <ul>
            <li>
              <a onClick={handleLogout} href="#">
                <FontAwesomeIcon icon={["fas", "power-off"]} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="sidebar">
        <div className="sidebar-menu">
          <center className="profile">
            <img src={UserProfileImg} alt="" />
            <p>{UserProfileName}</p>
          </center>
          {Categories.map((dato, index) => {
            return (
              <li
                onClick={(e) => {
                  e.preventDefault();
                  handleClickLinkCategory(index);
                }}
                key={index}
                className="item"
              >
                <Link to={`/Panel/categoryID/${index + 1}`}  className="menu-btn">
                  <FontAwesomeIcon icon={["fas", `${dato.icon}`]} />

                  <span style={{ marginLeft: customStyle.marginLeft }}>
                    {dato.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </div>
      </div>
      <div className="main-container">{children}</div>
    </div>
  );
};
