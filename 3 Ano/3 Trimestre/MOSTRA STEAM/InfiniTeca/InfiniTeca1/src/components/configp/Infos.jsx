import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

export default function Infos({ Email, Senha }) {
  const [senhaOculta, setSenhaOculta] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false); 

  const navigate = useNavigate();

  const ocultarSenha = (senha) => {
    return '*'.repeat(senha.length);
  };

  useEffect(() => {
    setSenhaOculta(ocultarSenha(Senha));
  }, [Senha]);

  const alternarVisibilidade = () => {
    setMostrarSenha(!mostrarSenha);
  };

  return (
    <div className="box">
      
      <p className="ES">Seu Email</p>
      <div className="pswrd">
        <p className="snh"> {Email} </p>
      </div>

      <p className="ES">Altere sua Senha</p>
      <div className="pswrd">
        <p className="snh">
          {mostrarSenha ? Senha : senhaOculta}
        </p>
        
        <button className="bt2" onClick={alternarVisibilidade}>
          {mostrarSenha ? 'Ocultar' : 'Mostrar'}
        </button>
        <button className="bt1" onClick={() => navigate('../ForgotPassword')}> Alterar </button>
      </div>
    </div>
  );
}
