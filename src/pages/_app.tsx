import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import Head from 'next/head';
import { Container } from '@mui/material';
import SideMenu from '@/components/SideMenu';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MooBiz 讀墨管理後台</title>
      </Head>
      <Container>
        <SideMenu />
        <Component {...pageProps} />
      </Container>
    </>
  );
}
