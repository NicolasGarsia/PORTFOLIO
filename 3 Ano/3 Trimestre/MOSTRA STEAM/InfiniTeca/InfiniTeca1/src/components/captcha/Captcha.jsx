import React, { useState, useEffect } from 'react';
import "./captcha.css"


const Captcha = () => {
  const [captcha, setCaptcha] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isValid, setIsValid] = useState(null);


  const generateCaptcha = () => {
    const randomCaptcha = Math.random().toString(36).substring(2, 8);
    setCaptcha(randomCaptcha);
    setUserInput('');
    setIsValid(null);
  };


  useEffect(() => {
    generateCaptcha();
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput === captcha) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div >
          <label >Digite o Captcha: </label>
          <strong >{captcha}</strong>
        </div>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Digite o Captcha"
          required
        />
       
       
      </form>
      <div className="botoes">
      <button className="CaptchaButton" type="submit">Verificar</button>
      {isValid === true && <p style={{ color: 'green' }}>Captcha correto!</p>}
      {isValid === false && <p style={{ color: 'red' }}>Captcha incorreto. Tente novamente.</p>}
      <button className="CaptchaButton" onClick={generateCaptcha}>Novo Captcha</button>
      </div>
    </div>
  );
};


export default Captcha;
