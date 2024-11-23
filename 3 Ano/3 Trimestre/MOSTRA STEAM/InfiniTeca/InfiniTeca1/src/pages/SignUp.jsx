import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/signup.css";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const submitCadastro = () => {
      localStorage.setItem("email", email);
      localStorage.setItem("senha", senha);
      navigate('/SignIn')
  };


  return (
    <>
      <div className="signBox">
      <div className="signLogoBox">
      <img className="signLogo" src="logo.jpeg" alt="Logo" id="logo" />
      </ div>
      <div className="caixa">
        <h1>Cadastre-se</h1>
        <form>
          
           <input
            type="text"
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
          />
        </form>
        <button
          className="signinEntrar"
          type="submit"
          onClick={() =>
            submitCadastro()
          }
        >
          Entrar
        </button>
        <p className="signinCadastro" onClick={() => navigate("/SignIn")}>Já tem conta? Faça login.</p>
      </div>
    </div>
    </>   

  );
}

export default Signup;
