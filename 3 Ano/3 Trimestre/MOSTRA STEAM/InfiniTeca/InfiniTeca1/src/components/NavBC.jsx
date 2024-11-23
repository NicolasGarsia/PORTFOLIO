import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavBC({ User, Email }) {
  const navigate = useNavigate();

  return (
    <div id="Nav2">
      <div id="Box2">
      <img src="logo.jpeg" alt="Logo" id="logo" />  
      </div>

      <div className="nav-area2">
        <ul>
        <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/Perfil")}>Perfil</li>
          <li onClick={() => navigate("/Config")}>Config</li>
          <li onClick={() => navigate("/Favoritos")}>Favoritos</li>
          <li onClick={() => navigate("/Sobre")}>Sobre Nos</li>

        </ul>
      </div>
    </div>
  );
}
