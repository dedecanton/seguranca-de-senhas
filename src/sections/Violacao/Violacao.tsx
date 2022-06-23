import React from "react";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import Section from "../../components/Section";
import useModal from "../../hooks/UseModal";

const cardsViolacoes = [
  {
    title: "Força bruta",
    text: "Aqui, o objetivo é adivinhar a combinação. Para isso, o criminoso usa um software que testa o máximo de opções no menor tempo possível. Alguns usam filtros e máscaras para reduzir o espaço de ataque, o que permite chegar à senha ainda mais rapidamente. Por isso, códigos menores (com menos de 9 caracteres) são mais vulneráveis.",
  },
  {
    title: "Dicionário",
    text: "Nesse ataque, o invasor usa um dicionário e tenta uma lista de palavras. Se o código for uma palavra, a única maneira de escapar é se ela for muito incomum ou se juntar vários termos, como ArvoreMetalVermelhoFita, que reduz a quantidade de variações.",
  },
  {
    title: "Phishing",
    text: "O phishing é usado para enganar, intimidar ou pressionar por meio de engenharia social. Ele traz comunicações falsas e instrui a clicar em um link, que leva a um site enganoso para que o usuário insira a senha e o criminoso a consiga facilmente. Essas mensagens também podem vir por telefone. Começam com uma gravação e, se a vítima não desligar, é conectada ao golpista. Durante a conversa, ele tenta fazê-la entregar seus dados sigilosos, incluindo as senhas.",
  },
];

const Violacao = () => {

  

  return (
    <Section
      id="violacao"
      sectionClassName="bg-white"
      className="flex-col space-y-5 text-white text-center bg-primary rounded-3xl m-10 px-10 max-w-5xl"
    >
      <h2 className="text-2xl md:text-3xl lg:text-5xl uppercase my-5">
        Como os cibercriminosos violam senhas?
      </h2>
      <p className="text-lg text-center">
        Existem várias táticas de violação de senhas, mas a mais fácil é
        comprá-las na dark web. Códigos usados há muitos anos e para vários
        serviços têm grandes chances de estarem comprometidos. Se não estiverem,
        os invasores precisam usar algum método para descobri-los. Veja os
        principais deles a seguir!
      </p>

      <ul className="flex flex-col space-y-10 lg:flex-row lg:space-y-0 lg:space-x-10 lg:pt-4">
      {cardsViolacoes.map((violacao, index) => (
        <Card key={index} violacao={violacao}/>
      ))}
      </ul>
      
    </Section>
  );
};

export default Violacao;
