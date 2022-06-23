import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-white py-10 px-5">
      <div className="container  mx-auto flex flex-col items-center justify-center text-center space-y-2">
        <p className="text-sm">
          Pesquisa feita para a disciplina "Desafio da Profissão", ministrada
          pela professora Suellen Spinello Sotille
        </p>
        <p className="text-sm">
          Estudantes: André Canton, Arthur Vassoler, Bruno
          Abido, Guilherme Bortolotti, Gustavo Pedroso e Lucas Reginato
        </p>
        <p className="text-sm">Ciência da Computação - IMED Passo Fundo/RS</p>

        <div className="images flex items-center justify-center pt-5">
          <div className="image w-20 rounded-l-xl">
            <img className=" rounded-l-xl" src="/images/lobao.jpg" alt="" />
          </div>
          <div className="image w-20 rounded-r-xl">
            <img className=" rounded-r-xl" src="/images/imed.png" alt="" />
          </div>
        </div>

        <p className="pt-5 text-sm">Site desenvolvido por <a className="underline" target={"_blank"} href="https://www.linkedin.com/in/andre-canton/">André Luís Lorini Canton</a></p>
      </div>
    </footer>
  );
};

export default Footer;
