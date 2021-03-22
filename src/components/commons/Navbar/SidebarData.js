import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Sobre',
    path: '/about',
    icon: <BsIcons.BsInfo />,
    cName: 'nav-text',
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <AiIcons.AiFillDashboard />,
    cName: 'nav-text',
  },
  {
    title: 'Dados',
    path: '/data',
    icon: <RiIcons.RiChatNewFill />,
    cName: 'nav-text',
  },
  {
    title: 'Gráficos',
    path: '/graphs',
    icon: <BsIcons.BsGraphUp />,
    cName: 'nav-text',
  },
  {
    title: 'Perfil',
    path: '/profile',
    icon: <FaIcons.FaIdBadge />,
    cName: 'nav-text',
  },
];
