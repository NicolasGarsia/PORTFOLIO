import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Config from './pages/Config';
import Livro from './pages/Livro'
import Signup from './pages/SignUp.jsx';
import SignIn from './pages/SignIn';
import Aluguel from './pages/Aluguel';
import Infos from './pages/Infos.jsx';
import Favoritos from './pages/Favoritos.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';

function App() {

  return (
    <>
    <Router>
      <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/SignIn' element={<SignIn/>} />
      <Route path='/SignUp' element={<Signup/>} />
      <Route path='/Perfil' element={<Perfil/>} />
      <Route path='/Config' element={<Config/>} />
      <Route path='/Livro' element={<Livro/>} />
      <Route path='/Aluguel' element={<Aluguel/>} />
      <Route path='/Sobre' element={<Infos/>} />
      <Route path='/Favoritos' element={<Favoritos/>} />
      <Route path='/ForgotPassword' element={<ForgotPassword />} />


      </Routes>
    </Router>
      
    </>
  )
}

export default App
