import styled, { css } from 'styled-components'
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia'
import { TextStyleVariants } from '../../../foundation/Text'

export const MenuWrapper = styled.nav`
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 8px 28px;
  margin-bottom: 8px;
  background-color: #29434e;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  height: 75px;

  ${breakpointsMedia({
    xs: css`
      height: 100px;
    `,
    md: css`
      justify-content: flex-start;
      /* margin-top: 32px; */
      /* margin-left: auto;
      margin-right: auto; */

      /* width: 100%; */
      height: 75px;
      /* padding: 4px 16px; */
      /* max-width: 768px; */
    `,
    lg: css`
      padding-right: 68px;
      padding-left: 68px;
      /* max-width: 1160px; */
    `,
    xl: css`
      /* max-width: 1222px; */
      padding-right: 120px;
      padding-left: 120px;
    `
  })}
`

MenuWrapper.LeftSide = styled.div`
  padding: 0;
  margin: 0;
  order: 1;
  ${breakpointsMedia({
    md: css`
      width: 131px;
      height: 32px;
      margin-right: 16px;
    `
  })}
  ${breakpointsMedia({
    md: css`
      order: initial;
    `
  })}
`

MenuWrapper.CentralSide = styled.div`
  padding: 0;
  margin: 8px 0 0 0;
  order: 3;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-top: 17px; */
  border-top: 1px solid #cfd8dc;
  /* border-bottom: 1px solid #CFD8DC; */
  padding: 6px;

  ${breakpointsMedia({
    md: css`
      max-width: 332px;
      justify-content: space-between;
      flex: 1;
      order: initial;
      border: none;
      margin: 0px;
      padding-top: 0;
      padding-bottom: 0;
    `
  })}
  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: #cfd8dc;
    transition: 200ms ease-in-out;
    ${breakpointsMedia({
      xs: css`
        ${TextStyleVariants.smallestException}
      `,
      md: css`
        ${TextStyleVariants.paragraph1}
      `
    })}
    &:hover,
    &:focus {
      font-weight: 500;
      color: #070c0e;
    }
  }
`

MenuWrapper.RightSide = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex: 1;
  order: 2;
  justify-content: flex-end;
  ${breakpointsMedia({
    md: css`
      order: initial;
      font-weight: 800;
    `
  })}
`
