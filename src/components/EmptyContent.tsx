import type { FC } from 'react';

import { Box, Typography } from '@mui/material';

const EmptyContent: FC = () => {
  return (
    <Box className="flex w-full h-full items-center justify-center">
      <Typography className="text-zinc-400 italic">目前尚無內容</Typography>
    </Box>
  );
};

export default EmptyContent;
