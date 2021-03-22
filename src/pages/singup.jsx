import Image from 'next/image';

import { PropTypes } from 'prop-types';
import Footer from '../components/commons/Footer';
import Menu from '../components/commons/Menu';

import Text from '../components/foundation/Text';
import Button from '../components/commons/Button';
import Grid from '../components/foundation/layout/Grid';
import Box from '../components/foundation/layout/Box';

import { InvestViewLogo } from '../assets/images/investviewlogo01';
import BoxForm from '../components/commons/BoxForm';

// interface Props {
//   toggleTheme(): void;
// }
// const Home: React.FC = () => {
const SingUp = ({ toggleTheme }) => (
  <Box
    flex={1}
    display="flex"
    flexWrap="wrap"
    flexDirection="column"
    justifyContent="space-between"
    // backgroundImage="url(/images/bubbles.svg)"
    // backgroundRepeat="no-repeat"
    // backgroundPosition="bottom right"
  >
    <Menu toggleTheme={toggleTheme} />

    <Grid.Container>
      <Grid.Row
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <InvestViewLogo />
        <Text variant="subTitle" tag="h1" color="text.head1" textAlign="center">
          Controle seus investimentos em um único lugar
        </Text>
      </Grid.Row>
    </Grid.Container>
    <Grid.Container>
      <BoxForm variant="primary.main">
        <Text variant="title" tag="h1" color="text.head2">
          SingUp
        </Text>
      </BoxForm>
    </Grid.Container>

    <Footer />
  </Box>
);

export default SingUp;

SingUp.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
