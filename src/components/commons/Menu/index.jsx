import { useContext } from 'react';
import { useRouter } from 'next/router';
import { ThemeContext } from 'styled-components';
import { PropTypes } from 'prop-types';
import Logo from '../../../theme/Logo';
import Text from '../../foundation/Text';
import Button from '../Button';
import { MenuWrapper } from './styles/MenuWrapper';
import SwitchMode from '../SwitchMode';

// interface Props {
//   toggleTheme(): void;
// }

const Menu = ({ toggleTheme }) => {
  // const { colors } = useContext(ThemeContext)
  const router = useRouter();

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide as="ul">
        {[
          { url: '/', name: 'Home' },
          { url: '/faq', name: 'Perguntas Frequentes' },
          { url: '/sobre', name: 'Sobre' },
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
        <Button
          type="button"
          variant="secondary.main"
          onClick={() => router.push('/singup')}
        >
          <Text variant="buttonText">Cadastrar</Text>
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
};

export default Menu;

Menu.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
