import {
  LuLayoutDashboard,
  LuHandCoins,
  LuWalletMinimal,
  LuLogOut,
} from 'react-icons/lu';

export const SIDE_MENU_DATA = [
  {
    id: 1,
    label: "menu.dashboard",
    name: "dashboard",
    icon: LuLayoutDashboard,
    path: '/dashboard',
  },
  {
    id: 2,
    label: "menu.income",
    name: "income",
    icon: LuWalletMinimal,
    path: '/income',
  },
  {
    id: 3,
    label: "menu.expense",
    name: "expense",
    icon: LuHandCoins,
    path: '/expense',
  },
  {
    id: 6,
    label: "menu.logout",
    icon: LuLogOut,
    path: 'logout',
  },
];
