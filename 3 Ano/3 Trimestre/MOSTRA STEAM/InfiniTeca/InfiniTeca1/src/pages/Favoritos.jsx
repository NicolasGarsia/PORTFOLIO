import NavB from "../components/NavB";
import Favoritos from "../components/favoritos/fav.jsx";
import "../css/nav.css"
import "../css/favoritos.css"


export default function Home(){
    return(

        <>
        <NavB 
        User = "@Garsa"
        />

        <Favoritos/>

        </>

    )
}
