import type { AppProps } from 'next/app';
import Head from 'next/head';

import SideMenu from '@/components/SideMenu';

import { Container } from '@mui/material';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{`Eva's Blog`}</title>
      </Head>
      <Container>
        <SideMenu />
        <Component {...pageProps} />
      </Container>
    </>
  );
}
