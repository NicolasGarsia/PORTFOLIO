import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import BookSearch from "./Apilivro";

export default function NavBP({ User }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  return (
    <div id="Nav1">
      <div id="Box1">
        <div className="user">
        <img src="logo.jpeg" alt="Logo" id="logo" />
        </div>

        <input
          type="search"
          className="search"
          id="1"
          placeholder="Pesquise aqui..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="nav-area">
        <ul>
        <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/Perfil")}>Perfil</li>
          <li onClick={() => navigate("/Config")}>Config</li>
          <li onClick={() => navigate("/Favoritos")}>Favoritos</li>
          <li onClick={() => navigate("/Sobre")}>Sobre Nos</li>

        </ul>
      </div>
      <BookSearch query={query} />
    </div>
    
  );
}
