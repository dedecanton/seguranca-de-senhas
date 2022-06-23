import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/layout";
import Inicio from "./sections/Inicio";
import Problema from "./sections/Problema";
import SenhaFraca from "./sections/SenhaFraca";
import Violacao from "./sections/Violacao";
import Dicas from "./sections/Dicas";

function App() {
  return (
    <Layout>
      <Inicio />
      <Problema />
      <SenhaFraca />
      <Violacao />
      <Dicas />
    </Layout>
  );
}

export default App;
