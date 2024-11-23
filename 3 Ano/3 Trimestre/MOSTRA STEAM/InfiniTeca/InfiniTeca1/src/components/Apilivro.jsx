import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BookSearch = ({ query }) => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    if (query) {
      handleSearch();
    }
  }, [query]);

  const handleSearch = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes",
        {
          params: {
            q: query,
            key: "AIzaSyBxi0tqzLWnUObpkcY8GHQodlkBYKlEeyI",
            maxResults:6
          },
        }
      );
      setBooks(response.data.items || []);
    } catch (err) {
      setError("Erro ao buscar livros");
    } finally {
      setLoading(false);;
    }
  };

  const setLocalStorage = (book) => {
    localStorage.setItem('img', book.volumeInfo.imageLinks.thumbnail)
    localStorage.setItem('title', book.volumeInfo.title)
    localStorage.setItem('description', book.volumeInfo.description)
    localStorage.setItem('author', book.volumeInfo.authors?.join(', '))
    localStorage.setItem('publisher', book.volumeInfo.publisher)
    localStorage.setItem('pageCount', book.volumeInfo.pageCount)
  }

  const handleBookClick = (book) => {
    console.log(book.volumeInfo)
    setSelectedBook(book);
    setLocalStorage(book)
    if(window.location.href != 'http://localhost:5173'){
      navigate('../Livro')
      setBooks([])
    }
    else{
      navigate('./Livro')
    }

  };

  return (
    <div>
      {error && <p>{error}</p>}
      <div>
        {books.length > 0 ? (
          <ul className="book-results">
            {books.map((book) => (
              <li key={book.id} onClick={() => handleBookClick(book)} className="book-item">
                {book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.thumbnail ? (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                    className="book-image"
                  />
                ) : (
                  <img src="./defImg.png" className="book-image"/>
                )}
                <p>
                  {`${book.volumeInfo.title.substring(0,25)}...`} by{" "}
                  {`${book.volumeInfo.authors?.join(", ").substring(0,15)}...`}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default BookSearch;
