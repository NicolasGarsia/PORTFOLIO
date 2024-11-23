import NavBC from "../components/NavBC";
import "../css/nav.css";
import "../css/aluguel.css";
import Aluguel from "../components/aluguel/aluguel.jsx";
import { React, useState, useEffect } from "react";

export default function Home() {
  return (
    <>
      <NavBC User="@Garsa" />
      <Aluguel/>
    </>
  );
}
