import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/forgot.css";
import Captcha from "../components/captcha/Captcha";


function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("E-mail enviado para recuperação de senha:", email);
    window.alert("Instruções de recuperação de senha enviadas para seu e-mail!");
    navigate("/SignIn");
  };


  return (
    <div className="signBox">
    <div className="signLogoBox">
    <img className="signLogo" src="logo.jpeg" alt="Logo" id="logo" />
    </ div>
    <div className="caixa">
      <h1>Esqueci a Senha</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <Captcha/>
        <button type="submit" className="forgotEntrar">Enviar</button>
      </form>
      <p onClick={() => navigate('/SignIn')} className="forgotVolta">Voltar para o Login</p>
    </div>
    </div>
  );
}


export default ForgotPassword;


 