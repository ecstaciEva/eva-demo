import { type FC } from 'react';

const ErrorPage: FC = () => {
  return null;
};

export const getStaticProps = () => {
  return {
    redirect: {
      destination: '/',
    },
  };
};

export default ErrorPage;
