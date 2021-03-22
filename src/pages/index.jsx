import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { PropTypes } from 'prop-types';
import Footer from '../components/commons/Footer';
import Menu from '../components/commons/Menu';

import Text from '../components/foundation/Text';
import Button from '../components/commons/Button';
import Grid from '../components/foundation/layout/Grid';
import Box from '../components/foundation/layout/Box';
import Navbar from '../components/commons/Navbar';
import websitePageHOC from '../components/wrappers/WebsitePage/hoc/index';

// interface Props {
//   toggleTheme(): void;
// }
// const Home: React.FC = () => {
const Home = ({ toggleTheme }) => (
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
    {/* <Navbar /> */}
    {/* <Menu toggleTheme={toggleTheme} /> */}

    <Grid.Container
      marginTop={{
        xs: '32px',
        md: '75px',
      }}
    >
      <Grid.Row
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          // marginRight: '100px'
        }}
        marginRight={{
          md: '20px',
          lg: '80px',
        }}
      >
        {/* <Grid.Col
            offset={{ xs: 0, md: 1 }}
            value={{ xs: 12, md: 5 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
          > */}
        <Text
          variant="title"
          tag="h1"
          color="text.head1"
          textAlign={{
            xs: 'center',
            md: 'right',
          }}
        >
          Controle seus investimentos em um único lugar
        </Text>

        <Text
          variant="paragraph1"
          tag="p"
          color="text.primary"
          textAlign={{
            xs: 'center',
            md: 'right',
          }}
        >
          Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan
          disputationi eu sit. Vide electram sadipscing et per. Per aumento de
          cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im
          ampola pa arma uma pindureta.
        </Text>

        <Button
          variant="secondary.main"
          margin={{
            xs: 'auto',
            md: 'initial',
          }}
          display="block"
        >
          <Text variant="buttonText">Cadastrar</Text>
        </Button>
      </Grid.Row>

      <Grid.Row
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Image
          src="/charts-main-lg.png"
          alt="Charts"
          layout="intrinsic"
          width={650}
          height={486 / (800 / 650)}
        />
        {/* </Grid.Col> */}
        {/* <Grid.Col value={{ xs: 12, md: 6 }}></Grid.Col> */}
      </Grid.Row>
    </Grid.Container>

    {/* <Footer /> */}
  </Box>
);

export default websitePageHOC(Home, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
    menuProps: {
      display: true,
    },
    footerProps: {
      display: true,
    },
  },
});

Home.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
