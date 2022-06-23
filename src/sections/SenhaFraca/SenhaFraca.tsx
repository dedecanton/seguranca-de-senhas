import React from "react";
import Section from "../../components/Section";

const SenhaFraca = () => {
  return (
    <Section
      id="senha-fraca"
      sectionClassName="bg-white"
      className="flex-col space-y-5 text-primary text-center"
    >
      <h2 className="text-2xl md:text-3xl lg:text-5xl uppercase my-5">
        O que é uma senha fraca?
      </h2>
      <div className="content-container flex flex-col-reverse xl:flex-row-reverse justify-between items-center space-x-10">
        <div className="content-text flex-1 text-lg text-justify space-y-4 px-10">
          <p>
            Senhas curtas e simples exigem menos esforços dos hackers. Na
            verdade, eles têm bancos de dados com as palavras, frases e
            combinações de números mais comuns que eles podem usar para comparar
            a sua senha e encontrar uma semelhança rápida.
          </p>
          <p>
            Algumas das senhas mais comuns são nomes de times de futebol,
            qualquer variante de 123456789 e QWERTY. Evite pensar em temas
            comuns para criar sua senha e frase secreta, como essas abaixo:
          </p>

          <ul className="ml-4">
            <li className="list-disc">Data de aniversário</li>
            <li className="list-disc">Números de telefone</li>
            <li className="list-disc">Nomes de filmes e times esportivos</li>
            <li className="list-disc">Disfarces simples de palavras comuns, por ex. “$enh@”)</li>
          </ul>
          <p>
            Os cibercriminosos aprimoram suas técnicas constantemente para
            garantir invasões bem-sucedidas e gerar receita e lucro
            consistentes. Se sua senha for adivinhada ou roubada, você pode não
            desconfiar, e só ficar sabendo quando compras ilegítimas forem
            feitas e descontadas da sua conta bancária ou cartão de crédito. E
            ainda mais desafiadora é a situação em que você pode não ser afetado
            diretamente. Os dados acessados na invasão da sua conta podem ser
            usados para subir na cadeia de contatos, permitindo que um invasor
            tenha acesso a dados e recursos gerenciados por outra pessoa.
          </p>
        </div>
        <div className="max-w-xl lg:flex-1 flex items-center justify-center ">
          <img src="/images/password.svg" className="max-w-none w-full" />
        </div>
      </div>
    </Section>
  );
};

export default SenhaFraca;
