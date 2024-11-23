import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Books() {
  const NomeL = localStorage.getItem("title");
  const img = localStorage.getItem("img");
  const InfoL = localStorage.getItem("description");
  const Autor = localStorage.getItem("author");
  const Editora = localStorage.getItem("publisher");
  const Pags = localStorage.getItem("pageCount");
  const navigate = useNavigate();

  const [isFavorite, setFavorite] = useState(false);
  const [favList, setFavList] = useState([]);
  // adicionar/remover dos favoritos
  function switchFav(isFavorite) {
    const favState = !isFavorite;
    setFavorite(favState);
    let updatedFavList = [...favList];

    if (favState) {
      updatedFavList.push({
        title: NomeL,
        img: img,
        description: InfoL,
        author: Autor,
        publisher: Editora,
        pageCount: Pags,
      });
    } else {
      updatedFavList = updatedFavList.filter((book) => book.title !== NomeL);
    }
    console.log(updatedFavList)
    setFavList(updatedFavList);
    localStorage.setItem("favList", JSON.stringify(updatedFavList));
  }


  useEffect(() => {
    const storedFavList = localStorage.getItem("favList");
    if (storedFavList) {
      setFavList(JSON.parse(storedFavList));
      // Verifica se o livro atual já está nos favoritos
      const isBookFavorited = JSON.parse(storedFavList).some(
        (book) => book.title === NomeL
      );
      setFavorite(isBookFavorited);
    }
  }, [NomeL]);

  return (
    <div className="geral">
      <div className="LvEImgs">
        <img className="livro" src={img} alt="Livro" />
      </div>

      <div className="infosL">
        <div className="tituloL">
          <p className="txtNL">{NomeL}</p>
          <div className="s2">
            {isFavorite == true ? (
              <img
                src="./favVer.png"
                className="fav"
                alt=""
                onClick={() => switchFav(isFavorite)}
              />
            ) : (
              <img
                src="./favBla.png"
                className="fav"
                alt=""
                onClick={() => switchFav(isFavorite)}
              />
            )}
          </div>
        </div>

        <div className="resumoL">
          <p className="txtI">{InfoL}</p>
        </div>

        <div className="caracteristicas">
          <div className="itens">
            <li className="txtn">{Autor}</li>
            <p className="txta">autor</p>
          </div>

          <div className="itens">
            <li className="txtn">{Editora}</li>
            <p className="txta">editora</p>
          </div>

          <div className="itens">
            <li className="txtn">{Pags}</li>
            <p className="txta">paginas</p>
          </div>
        </div>

        <div className="botoesL">
          <button className="botaoL">
            <p className="txtb">Onde</p>
          </button>
          <button className="botaoL">
            <p className="txtb">Alugar</p>
          </button>
        </div>
      </div>
    </div>
  );
}
