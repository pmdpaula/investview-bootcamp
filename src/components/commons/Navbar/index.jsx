import { useState, useContext } from 'react';
import styled, { css, ThemeContext } from 'styled-components';

import { IconContext } from 'react-icons/lib';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import { NavWrapper, NavMenu } from './styles/NavbarStyles';

import { SidebarData } from './SidebarData';
import Link from '../Link/index';

// https://youtu.be/CXa0f4-dWi4

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const { colors } = useContext(ThemeContext);

  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: colors.primary.main.color }}>
        <NavWrapper>
          <NavWrapper.Bars>
            <Link href="#">
              <FaBars onClick={toggleSidebar} />
            </Link>
          </NavWrapper.Bars>
        </NavWrapper>
        <NavMenu sidebar={sidebar}>
          <NavMenu.Items>
            <NavMenu.Toggle onClick={toggleSidebar}>
              <Link href="#">
                <FaWindowClose />
                <span>Fechar</span>
              </Link>
            </NavMenu.Toggle>
            <hr />
            {SidebarData.map((item, index) => {
              const itemKey = `item${index}`;
              return (
                <NavMenu.Item key={itemKey} onClick={toggleSidebar}>
                  <Link href={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </NavMenu.Item>
              );
            })}
          </NavMenu.Items>
        </NavMenu>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
