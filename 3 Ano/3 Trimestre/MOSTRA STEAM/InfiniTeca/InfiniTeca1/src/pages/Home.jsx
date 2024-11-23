import NavB from "../components/NavB";
import "../css/nav.css";
import "../css/home.css";
import Liv from "../components/home1/Livros";
import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate()
  const [isLoggedOn, setIsLoggedOn] = useState("default");

  useEffect(() => {
    setIsLoggedOn(sessionStorage.getItem("isLoggedOn"));
  }, []);

  useEffect(() => {
    if (isLoggedOn == "true") {
      return console.log("logado");
    } else if (isLoggedOn == "default") {
      console.log('await')
    } else (redirect())
  }, [isLoggedOn]);

  const redirect = () => {
    navigate('./SignIn')
  }
  return (
    <>
      <NavB User="@Garsa" />
      <Liv />
    </>
  );
}
