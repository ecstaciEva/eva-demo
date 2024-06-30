import { FC, ReactNode } from 'react';

import mainTheme from '@/theme/theme';

import { ThemeProvider } from '@mui/material/styles';

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>;
};

export default Providers;
