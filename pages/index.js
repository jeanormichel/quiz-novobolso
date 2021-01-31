import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title> Novo Bolso Quiz</title>
        <meta name="title" content="Quiz Novo Bolso" />
        <meta name="description" content="Teste o seu conhecimentos sobre suas finanças, vamos ver se você está mais perto de ganhar ou perder dinheiro!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quiz-novobolso.vercel.app/" />
        <meta property="og:title" content="Quiz Novo Bolso" />
        <meta property="og:description" content="Teste o seu conhecimentos sobre suas finanças, vamos ver se você está mais perto de ganhar ou perder dinheiro!" />
        <meta property="og:image" content="" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://quiz-novobolso.vercel.app/" />
        <meta property="twitter:title" content="Quiz Novo Bolso" />
        <meta property="twitter:description" content="Teste o seu conhecimentos sobre suas finanças, vamos ver se você está mais perto de ganhar ou perder dinheiro!" />
        <meta property="twitter:image" content="" />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('fazendo uma submissao por meio do react');
            }}
            >
              <input
                onChange={function (infosDoEvento) {
                  console.log(infosDoEvento.target.value);
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Digite seu nome aqui!"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/jeanormichel" />
    </QuizBackground>
  );
}
