import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/layout';
import Inicio from './sections/Inicio';
import Problema from './sections/Problema';

function App() {
  return (
    <Layout>
      <Inicio/>
      <Problema/>
    </Layout>
  );
}

export default App;
