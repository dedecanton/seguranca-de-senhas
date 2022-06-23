import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/layout";
import Inicio from "./sections/Inicio";
import Problema from "./sections/Problema";
import SenhaFraca from "./sections/SenhaFraca";
import Violacao from "./sections/Violacao";

function App() {
  return (
    <Layout>
      <Inicio />
      <Problema />
      <SenhaFraca />
      <Violacao />
    </Layout>
  );
}

export default App;
