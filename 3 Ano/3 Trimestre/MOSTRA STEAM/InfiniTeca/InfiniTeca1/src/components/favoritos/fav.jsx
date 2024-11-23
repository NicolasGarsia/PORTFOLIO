import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Favoritos() {
  const navigate = useNavigate();
  const [favList, setFavList] = useState([]);

  useEffect(() => {
    const storedFavList = localStorage.getItem("favList");
    if (storedFavList) {
      setFavList(JSON.parse(storedFavList));
    }
  }, []);

  async function navTo(title) {
    //pegar nome do livro, usar de pesquisa na api e definir informações dele no local storage
    try {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes",
        {
          params: {
            q: title,
            key: "AIzaSyBxi0tqzLWnUObpkcY8GHQodlkBYKlEeyI",
            maxResults: 1,
          },
        }
      );
      const book = response.data.items[0]; // Pega o primeiro livro da resposta
      // Certifica-se de que o livro e o volumeInfo existam
      if (book && book.volumeInfo) {
        // Armazena informações do livro no localStorage
        localStorage.setItem(
          "img",
          book.volumeInfo.imageLinks?.thumbnail || ""
        );
        localStorage.setItem("title", book.volumeInfo.title || "");
        localStorage.setItem(
          "description",
          book.volumeInfo.description || ""
        );
        localStorage.setItem(
          "author",
          book.volumeInfo.authors?.join(", ") || ""
        );
        localStorage.setItem(
          "publisher",
          book.volumeInfo.publisher || ""
        );
        localStorage.setItem(
          "pageCount",
          book.volumeInfo.pageCount || ""
        );
        if (window.location.href != "http://localhost:5173") {
          navigate("../Livro");
        } else {
          navigate("./Livro");
        }
      }
    } catch (err) {
      console.error("Erro ao buscar o livro:", err);
    }
  }

  const handleBookClick = (book) => {
    navTo(book.title);
  };

  return (
    <>
      <div className="containerLista">
        <h1 className="nomelista">Listas</h1>
        <hr />
        <h3 className="nomelista1">
          Personalize sua experiência com sua lista de desejos
        </h3>
      </div>
      <br />
      <br />
      <hr />
      <div className="containerLista1">
        <h1 className="nomelista">Clique no coração para salvar</h1>
        <h3 className="nomelista1">
          Armazene os livros que você ama em uma página
        </h3>
      </div>
      <div id="estante" className="estant">
        {favList.length > 0 ? (
          favList.map((book, index) => (
            <div
              className="Book1"
              onClick={() => handleBookClick(book)}
              key={index}
            >
              <img className="livroh" src={book.img} alt="Nome Livro" />
              <p>{book.title}</p>
            </div>
          ))
        ) : (
          <p>Nenhum livro favoritado</p>
        )}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <div className="recomendocoes">
        <h1 className="reco">Você Também Pode Gostar</h1>
        </div>  
        <div id="estante" className="favestant">
    <div className="favBook1" onClick={() => navigate("/Livro")}>
      <img className="favlivroh" src="quarta capa.png" alt="Nome Livro" />
      <p>Quarta Capa</p>
      <p>Disponiveis (02/05)</p>
    </div>
    <div className="favBook1" onClick={() => navigate("/Livro")}>
      <img className="favlivroh" src="solo.png" alt="Nome Livro" />
      <p>Solo</p>
      <p>Disponiveis (02/05)</p>
    </div>
    <div className="favBook1" onClick={() => navigate("/Livro")}>
      <img className="favlivroh" src="mestre.png" alt="Nome Livro" />
      <p>Mestre do tempo</p>
      <p>Disponiveis (02/05)</p>
    </div>
    <div className="favBook1" onClick={() => navigate("/Livro")}>
      <img className="favlivroh" src="roxo.png" alt="Nome Livro" />
      <p>A garota de roxo</p>
      <p>Disponiveis (02/05)</p>
    </div>
    
    
      </div>
    </>
  );
}
