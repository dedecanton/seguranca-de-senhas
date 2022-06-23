import React from "react";
import Section from "../../components/Section";

const Inicio = () => {
  return (
    <>
    <Section
      id="inicio"
      className="min-h-screen max-h-screen flex-col space-y-5 lg:space-y-10 text-center text-primary "
      sectionClassName="bg-cover bg-opacity-25"
    >   
        <img className="sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-xl p-10" src="/images/background.svg" alt="" />
        <h1 className="text-2xl md:text-3xl lg:text-5xl uppercase">
          Segurança de senhas
        </h1>

        <div className="infos text-xs lg:text-sm">
          <p>
            Pesquisa feita por André Canton, Arthur Vassoler, Bruno Abido,
            Guilherme Bortolotti, Gustavo Pedroso e Lucas Reginato
          </p>
          <p>Grupo Orientado pela professora Suellen Spinello Sotille</p>
        </div>

        <a
          href="#problema"
          className="text-lg transition-all px-8 py-4 border-2 border-primary rounded hover:text-white hover:bg-primary hover:scale-105"
        >
          Saiba mais!
        </a>
    </Section>
    </>
  );
};

export default Inicio;
