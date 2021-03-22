import { useContext } from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import get from 'lodash/get';

import { PropTypes } from 'prop-types';
import Text from '../../foundation/Text';

const OuterBoxStyle = css`
  /* padding-right: 16px;
  padding-left: 16px; */
  /* flex-basis: 0;
  flex-grow: 1; */
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: visible; */
  max-width: 80%;
  background-color: ${({ theme, variant }) =>
    get(theme, `colors.${variant}.color`)};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const OutterBox = styled.div`
  ${OuterBoxStyle}
`;

const HeaderBoxStyle = css`
  position: relative;
  top: -70px;
  background-color: ${({ theme, variant }) =>
    get(theme, `colors.${variant}.color`)};
  border-radius: ${({ theme }) => theme.borderRadius}
    ${({ theme }) => theme.borderRadius} 0 0;
  width: 98%;
`;

const HeaderBox = styled.div`
  ${HeaderBoxStyle}
`;

const BoxForm = ({ variant, children, ...props }) => (
  <OutterBox variant={variant}>
    <HeaderBox variant="secondary.main">{children}</HeaderBox>
  </OutterBox>
);

export default BoxForm;

BoxForm.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
