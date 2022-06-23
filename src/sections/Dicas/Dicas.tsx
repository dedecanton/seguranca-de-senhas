import React from "react";
import Section from "../../components/Section";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperButton from "../../components/SwiperButton";
import Slider from "../../components/Slider";

const dicas = [
  {title: ' Evite as senhas mais comuns e óbvias', text: 'Precisamos mesmo dizer para não usar a palavra senha como sua senha? Aparentemente sim. A empresa 4iQ, que monitora ameaças de roubo de identidade na deepweb, descobriu recentemente uma compilação de combinações de email/senha (mais de 1,4 bilhão delas) e fez um relatório sobre as senhas mais comuns. Dentre as senhas mais usadas estão: "123456", "123456789", "qwerty", "111111", "password", "123123", dentre outras.'},
  {title: 'Evite as substituições mais comuns', text:'Mudar de senha para senh@ ou 5enha não enganará os cibercriminosos atuais. Não recomendamos usar nenhuma palavra comum com apenas uma substituição de número ou símbolo.'},
  {title: ' Não use padrões de teclado comuns', text: 'Já falamos de senhas como 1235678 e qwerty, mas usar outros padrões de teclado realmente não melhora muito, mesmo se parecerem complexos. Dê uma olhada em 1qazxsw2 em seu teclado. Ela pode parecer complexa e aleatória, mas ainda assim é um padrão identificável. Há, na realidade, dicionários de senhas na deepweb que listam esses padrões comuns, o que significa que um cibercriminoso sempre os tentará em primeiro lugar. Escolha uma frase e selecione a primeira, a segunda ou a última letra de cada palavra Frase: “O Cravo brigou com a Rosa debaixo de uma sacada” Senha: “?OCbcaRddus”. Outra forma é inventar um padrão de substituição próprio Padrão: substituir “o” por “0” e duplicar as letras “s” e “r” Frase: “Sol, astro-rei do Sistema Solar” Senha: “SS0l, asstrr0-rrei d0 SSisstema SS0larr”.'},
  {title: 'Evite usar a mesma senha para vários serviços, especialmente bancários e de cartão de crédito', text:'Como dissemos acima, você precisa diversificar. Caso alguém descubra uma de suas senhas, ela não comprometa todas as outras. Não se esqueça também das contas vinculadas. Se você usou suas credenciais do Google ou Facebook para entrar em outros serviços, então todos eles estarão vulneráveis se um deles for invadido.'},
  {title: 'Quanto maior, melhor', text: 'Conversamos muito sobre o que não deve ser feito. Agora, vamos falar sobre algumas coisas que você deve fazer. Senhas mais longas serão mais difíceis de quebrar, especialmente se você misturar letras maiúsculas e minúsculas e adicionar alguns números e símbolos. Mesmo se usar um monte de palavras aleatórias, como PoloCavaloBandeiraCanada, ela será uma senha mais complicada.'},
  {title: 'Considere usar um gerenciador de senhas', text: 'Não podemos nos lembrar de todas as nossas senhas diferentes. Por isso, ter um gerenciador de senha é uma ótima ideia. Ele armazena todas as suas senhas, para que tudo que você precise fazer seja se lembrar de uma senha mestra. Você pode também configurar o gerenciador de senha para alterar suas senhas automaticamente, mantendo tudo mais seguro. A Avast oferece um gerenciador de senha gratuito que protege muito bem a sua vida digital.'},
  {title: 'Use a autenticação de 2 fatores quando estiver disponível', text:'Muitos serviços online agora oferecem autenticação de 2 fatores, que pode evitar que alguém acesse sua conta, mesmo se descobrir sua senha. A autenticação de 2 fatores significa simplesmente que há uma etapa de verificação além de inserir seu nome de usuário e senha. Por exemplo, se você entrar em seu site de banco com um dispositivo novo ou desconhecido, o banco enviará um código de verificação por mensagem de texto ou email, antes de permitir que você entre na conta. Muitos bancos agora exigem autenticação de 2 fatores, enquanto empresas como a Google disponibilizam isso como uma opção.'},
  {title: 'Evite introduzir senhas quando utiliza redes Wi-Fi inseguras (como redes num aeroporto ou num café)', text: 'Desde o começo da internet hackers invadem computadores através da rede a qual estiver conectado, com isso, jamais utilize senhas enquanto estiver conectado em redes públicas. Assim você evitará cair no golpe mais utilizado pelos hackers.'}
]

const Dicas = () => {
  return (
    <Section
      id="dicas"
      sectionClassName="bg-gray-100"
      className="flex-col space-y-5 text-primary text-center"
    >
      <h2 className="text-2xl md:text-3xl lg:text-5xl uppercase my-5">
        Dicas para segurança em senhas
      </h2>

      <Slider elements={dicas}/>

    </Section>
  );
};

export default Dicas;
