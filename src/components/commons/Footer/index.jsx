import styled, { ThemeContext, css } from 'styled-components';
import { useState, useContext, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

import * as FaIcons from 'react-icons/fa';

import Text from '../../foundation/Text';
import Box from '../../foundation/layout/Box';

import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

// const FooterWrapper = styled.footer<{ theme: DefaultTheme }>`
const FooterWrapper = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 0.6rem 2.2rem;
  width: 100vw;
  height: 3.6rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* border-radius: 4px; */
  border-top: 1px solid ${({ theme }) => theme.colors.borders.primary.color}

  ${breakpointsMedia({
    lg: css`
      height: 4.8rem;
    `,
  })}

  }
`;

const Footer = props => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { colors, title } = useContext(ThemeContext);
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <FooterWrapper {...props}>
      {isMounted && (
        <ReactTooltip
          type={title === 'dark' ? 'light' : 'dark'}
          effect="solid"
          delayHide={300}
          border
          borderColor={colors.borders.primary.color}
          arrowColor={colors.borders.primary.color}
        />
      )}
      <Box>
        <Text
          color="background.main"
          tag="a"
          href="https://github.com/pmdpaula"
          variant="title"
          style={{ padding: '0 9px' }}
          data-tip="GitHub"
        >
          <FaIcons.FaGithubAlt />
        </Text>

        <Text
          color="background.main"
          tag="a"
          href="https://www.linkedin.com/in/pmdpaula/"
          variant="title"
          style={{ padding: '0 9px' }}
          data-tip="LinkedIn"
        >
          <FaIcons.FaLinkedin />
        </Text>
      </Box>
    </FooterWrapper>
  );
};

export default Footer;
