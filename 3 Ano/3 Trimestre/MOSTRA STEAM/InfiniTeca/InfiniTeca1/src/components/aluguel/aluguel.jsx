import React from "react";
import { useNavigate } from "react-router-dom";



export default function Aluguel() {


    return (
        <>
            <div className="aluguelbox" >
                <h2 className="aluguelNome">Nome do livro</h2>
                <div className="aluguelbox2">
                    <img className="aluguelimg" src="menino.png" alt="Nome Livro" />
                    <h1 className="aluguelInfo">Infos do Livro</h1>
                </div>
                <div className="aluguelboxB">
                    <p className="aluguelPrazo">Tempo Disponivel</p>
                    <button className="aluguelButton">Alugar</button>
                    <button className="aluguelButton">Alugar</button>
                </div>
            </div>

        </>
    );
}