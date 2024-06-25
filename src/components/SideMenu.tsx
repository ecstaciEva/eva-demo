import { type FC } from 'react';

import { Box, Typography } from '@mui/material';

interface SideMenuProps {
  className?: string;
}

const SideMenu: FC<SideMenuProps> = ({ className }) => {
  return (
    <Box className={className}>
      <Typography>{`Eva's blog`}</Typography>
    </Box>
  );
};

export default SideMenu;
