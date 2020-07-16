import React from "react";

const Header = () => {
  const handleLogout = () => {
    document.cookie = "nombre=";
    document.cookie = "apellido=";
    document.cookie = "fecnac=";
  };
  return (
    <header>
      <div className="header__menu">
        <div className="header__menu--profile">
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <a href="#logout" onClick={handleLogout}>
              Cerrar Sesión
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
