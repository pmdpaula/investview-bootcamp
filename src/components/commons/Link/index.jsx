/* eslint-disable import/prefer-default-export */
import NextLink from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import get from 'lodash/get';

const StyledLink = styled.a`
  color: inherit;
  ${({ theme, color }) =>
    color
      ? `color: ${get(theme, `colors.${color}.color`)}`
      : 'color: inherit;'};
  text-decoration: none;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

const Link = ({ href, children, ...props }) => (
  <NextLink href={href} passHref>
    <StyledLink {...props}>{children}</StyledLink>
  </NextLink>
);

export default Link;

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
