import React from "react";
import { useNavigate } from "react-router-dom";

export default function Books({ NomeL,tempo }) {
  const navigate = useNavigate();

  return (
    <>
      <h2 id="txt"> Seus Livros </h2>

      <div id="estante">
        <div className="Book" onClick={() => navigate("/Livro")}>
          <img className="livro" src="Livro.jpg" alt="Nome Livro" />
          <p>{NomeL}</p>
          <p>Devolução: {tempo} </p>
        </div>
      </div>
    </>
  );
}
