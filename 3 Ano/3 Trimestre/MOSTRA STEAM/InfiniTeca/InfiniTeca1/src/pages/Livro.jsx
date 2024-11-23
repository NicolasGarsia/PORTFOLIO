import Books from "../components/livros/Books";
import NavB from "../components/NavB";
import "../css/livro.css"
import "../css/nav.css"

export default function Livro() {
  return (
    <>
        <NavB 
        User = "@Garsa"
        />
        <Books />

    </>
  );
}
