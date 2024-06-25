import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import Head from 'next/head';
import { Container } from '@mui/material';
import SideMenu from '@/components/SideMenu';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Eva's Blog</title>
      </Head>
      <Container>
        <SideMenu />
        <Component {...pageProps} />
      </Container>
    </>
  );
}
