import styled, { DefaultTheme } from 'styled-components'
import { Text } from '../../foundation/Text'

// const FooterWrapper = styled.footer<{ theme: DefaultTheme }>`
const FooterWrapper = styled.footer`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding-right: 28px;
  padding-left: 28px;
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: ${({ theme }) => theme.colors.primary.main.color};
    text-decoration: none;
    transition: 0.3s;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
  }
`

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Footer = props => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img
          src="https://www.alura.com.br/assets/img/alura-logo.svg"
          alt="Logo Alura"
        />
      </a>
      <Text variant="paragraph1" tag="p" color="text.main">
        Orgulhosamente criado durante o{' '}
        <a href="https://www.alura.com.br/">
          <Text variant="paragraph1" tag="span" color="text.head1">
            Bootcamp Alura JAM Stack
          </Text>
        </a>
      </Text>
    </FooterWrapper>
  )
}

export default Footer
