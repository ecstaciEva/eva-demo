import type { AppProps } from 'next/app';
import Head from 'next/head';

import Providers from '@/components/Providers';
import SideMenu from '@/components/SideMenu';

import { Box, Container } from '@mui/material';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{`Eva's Blog`}</title>
      </Head>
      <Providers>
        <Container className="flex">
          <SideMenu />
          <Box className="flex-1">
            <Component {...pageProps} />
          </Box>
        </Container>
      </Providers>
    </>
  );
}
