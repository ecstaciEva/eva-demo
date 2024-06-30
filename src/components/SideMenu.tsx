import { type FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import config from '@/config';

import { Box, List, ListItem, Typography } from '@mui/material';

interface SideMenuProps {
  className?: string;
}

const SideMenu: FC<SideMenuProps> = ({ className }) => {
  const router = useRouter();
  const [currentPathname, setCurrentPathname] = useState('');

  useEffect(() => {
    if (!router.isReady) return;
    setCurrentPathname(router.pathname);
  }, [router.isReady, router.pathname]);

  return (
    <Box
      className={clsx(
        'max-w-[250px] min-w-[250px] h-[100vh]',
        'overflow-hidden p-3',
        'bg-gray-200',
        'flex flex-col justify-center',
        className
      )}
    >
      <Box className={clsx('h-[50vh]', 'flex flex-col justify-between')}>
        <Box>
          <Link href="/" className="decoration-gray-700">
            <Typography
              component="h1"
              className={clsx('px-4', 'text-2xl text-gray-700')}
            >{`Eva's Blog`}</Typography>
          </Link>

          {/* <SelfInfoList className="mt-6" /> */}
        </Box>

        <List className="mb-12">
          {config.SideMenuList.map(({ label, path }, index) => (
            <Link key={index} href={path} passHref className="no-underline">
              <ListItem
                className={clsx('cursor-pointer', {
                  'text-gray-600': path !== currentPathname,
                  'text-gray-900': path === currentPathname,
                })}
              >
                {label}
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Box>
  );
};

// interface SelfInfoListProps {
//   className?: string;
// }

// const SelfInfoList: FC<SelfInfoListProps> = ({ className }) => {
//   return (
//     <List
//       sx={{
//         '& > li': {
//           padding: '0rem 1rem',
//         },
//       }}
//       className={className}
//     >
//       <ListItem>
//         <MuiLink href={LinkedInUrl}>LinkedIn</MuiLink>
//       </ListItem>
//       <ListItem>Email : evayu.f2e@gmail.com</ListItem>
//     </List>
//   );
// };

export default SideMenu;
