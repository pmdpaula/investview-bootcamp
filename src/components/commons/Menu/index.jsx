import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Logo } from '../../../theme/Logo'
import { Text } from '../../foundation/Text'
import { Button } from '../Button'
import { MenuWrapper } from './styles/MenuWrapper'
import SwitchMode from '../SwitchMode'

// interface Props {
//   toggleTheme(): void;
// }

const Menu = ({ toggleTheme }) => {
  // const { colors } = useContext(ThemeContext)

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide as="ul">
        {' '}
        {/* MenuWrapper.CentralSide */}
        {[
          { url: '/', name: 'Home' },
          { url: '/faq', name: 'Perguntas Frequentes' },
          { url: '/sobre', name: 'Sobre' }
        ].map(link => (
          <li key={link.url}>
            <Text variant="smallestException" tag="a" href={link.url}>
              {link.name}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>

      <MenuWrapper.RightSide>
        <SwitchMode toggleTheme={toggleTheme} />
        <Button
          type="button"
          variant="primary.main"
          style={{ margin: '0 8px' }}
        >
          <Text variant="buttonText">Entrar</Text>
        </Button>
        <Button type="button" variant="secondary.main">
          <Text variant="buttonText">Cadastrar</Text>
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}

export default Menu
