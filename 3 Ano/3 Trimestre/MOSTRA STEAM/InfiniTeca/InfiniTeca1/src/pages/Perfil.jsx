import NavBP from "../components/NavBP";
import Books from "../components/perfil/Books";
import "../css/navp.css"
import "../css/perfil.css"

export default function Perfil() {
  return (
    <>
      <NavBP User="@Garsa" />
      <Books NomeL="PRETO E BRANCO"/>
    </>
  );
}
