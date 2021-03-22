import styled, { css } from 'styled-components';

// interface NavWrapperProps {
//   background-color: string;
//   height: string;
//   display: string;
//   justify-content: string;
//   align-items: string;
// }

export const NavWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary.main.color};
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

NavWrapper.Bars = styled.div`
  margin-left: 2rem;
  font-size: 2rem;
  background: none;
`;

const NavMenuActive = css`
  left: 0;
  transition: 0.35s;
`;

export const NavMenu = styled.nav`
  background-color: ${({ theme }) => theme.colors.background.secondary.color};
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 0.85s;

  ${({ sidebar }) => sidebar && NavMenuActive}
`;

NavMenu.Items = styled.ul`
  width: 100%;
  position: relative;
  left: -25px;
`;

NavMenu.Toggle = styled.li`
  margin-left: 2rem;
  font-size: 2rem;
  background: none;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: start;
  align-items: center;
  /* left: -50px; */

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text.primary.color};
    font-size: 0.8em;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  span {
    margin-left: 16px;
    font-size: 0.8rem;
  }
`;

NavMenu.Item = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 0 8px 16px;
  list-style: none;
  height: 60px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text.primary.color};
    font-size: 1.2em;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: 0.5s;

    :hover {
      background-color: ${({ theme }) => theme.colors.secondary.main.color};
      color: ${({ theme }) => theme.colors.background.secondary.color};
      font-weight: 600;
      letter-spacing: 2px;
      box-shadow: 0px 0px 18px
        ${({ theme }) => theme.colors.secondary.main.color};
    }

    span {
      margin-left: 16px;
    }
  }
`;
