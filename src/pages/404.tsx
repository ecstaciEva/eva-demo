import { type FC, useEffect } from 'react';
import { useRouter } from 'next/router';

const ErrorPage: FC = () => {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    router.replace('/');
  }, [router]);

  return null;
};

export default ErrorPage;
