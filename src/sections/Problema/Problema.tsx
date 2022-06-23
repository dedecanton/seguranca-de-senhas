import React from "react";
import Section from "../../components/Section";

const Problema = () => {
  return (
    <Section
      id="problema"
      sectionClassName="bg-primary rounded-b-3xl"
      className="flex-col space-y-5 text-white text-center "
    >
      <h2 className="text-2xl md:text-3xl lg:text-5xl uppercase my-5">
        Qual é o problema?
      </h2>
      <div className="content-container flex flex-col-reverse xl:flex-row justify-between items-center space-x-10">
        <div className="content-text flex-1 text-lg text-justify space-y-4 px-10">
          <p >
            Com o crescimento das ciberameaças, os usuários precisam ficar mais
            espertos na hora de definir as senhas das diferentes contas online.
          </p>
          <p>
            Com a crescente sofisticação das ameaças modernas, muitas vezes
            gastamos tempo discutindo tecnologia e estratégias de ponta para
            proteger as atuais redes complexas, em evolução e altamente
            distribuídas. Porém, os esforços diários de cibersegurança
            geralmente se resumem a algo muito mais simples: senhas. Senhas
            simples ou inadequadas são um alvo fácil para os cibercriminosos.
            Acessar uma rede com senha roubada é muito mais fácil do que tentar
            invadir a rede por meio de protocolos de segurança de borda.
          </p>
          <p>
            A ideia é promover uma melhor higiene de cibersegurança, alterando
            senhas fáceis de adivinhar ou trocando senhas antigas que possam ter
            sido comprometidas por meio de alguma violação de dados. Pense nisso
            como se fosse uma manutenção, por exemplo, quando você testa e
            substitui as baterias do detector de fumaça doméstico.{" "}
          </p>
          <p>
            {" "}
            Agir de forma diligente quando se trata de criar senhas fortes e
            atualizá-las regularmente é um passo de defesa básica para a
            proteção das suas informações pessoais e corporativas.{" "}
          </p>
          <p>
            Usar senhas fortes e adotar uma estratégia de senhas que você possa
            gerenciar com facilidade, mas que as outras pessoas não consigam
            adivinhar com facilidade, é um esforço de cibersegurança essencial
            em que cada funcionário e pessoa dentro da empresa desempenha um
            papel fundamental.
          </p>
        </div>
        <div className="max-w-xl lg:flex-1 flex items-center justify-center ">
          <img src="/images/problema.svg" className="max-w-none w-full" />
        </div>
      </div>
    </Section>
  );
};

export default Problema;
