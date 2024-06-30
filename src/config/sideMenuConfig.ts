interface SideMenuItem {
  label: string;
  path: string;
}

const SideMenuList: SideMenuItem[] = [
  {
    label: '關於我',
    path: '/about',
  },
  {
    label: '文章列表',
    path: '/articles',
  },
  { label: '我的經歷', path: '/experience' },
];

export default SideMenuList;
