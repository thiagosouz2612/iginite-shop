//O arquivo _app.tsx, funciona com um contenier de todas as paginas da nossa aplicação
import Image from 'next/image'
import type { AppProps } from "next/app";
import { globalStyles } from "./styles/global";

import logoImg from '../assets/logo.svg';
import { Container, Header } from "./styles/pages/app";

  //Chamando todas as funções 
  globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
      <Image src={logoImg} alt="" />
      </Header>

      <Component {...pageProps} />;
    </Container>
  )
}
