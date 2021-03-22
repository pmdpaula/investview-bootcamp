import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

import SEO from '../../commons/SEO';
import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import Modal from '../../commons/Modal';

import Grid from '../../foundation/layout/Grid/index';
import Text from '../../foundation/Text/index';
import Navbar from '../../commons/Navbar/index';

export const WebsitePageContext = createContext({
  toggleModalCadastro: () => {},
});

export default function WebsitePageWrapper({
  children,
  seoProps,
  menuProps,
  footerProps,
}) {
  const [isModalOpen, setModalState] = useState(false);

  return (
    <WebsitePageContext.Provider
      value={{
        teste: true,
        toggleModalCadastro: () => {
          setModalState(!isModalOpen);
        },
      }}
    >
      <SEO {...seoProps} />
      <Grid.Container
        display="flex"
        flex="1"
        flexDirection="column"
        // alignItens="space-around"
      >
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setModalState(false);
          }}
        >
          {propsDoModal => <Text propsDoModal={propsDoModal}>Modal</Text>}
        </Modal>
        {menuProps.display && (
          // <Menu
          //   onCadastrarClick={() => setModalState(true)}
          //   show={menuProps.display}
          // />
          <Navbar
            onCadastrarClick={() => setModalState(true)}
            show={menuProps.display}
          />
        )}
        <main>{children}</main>
        <Footer show={footerProps.display} />
      </Grid.Container>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true,
  },
  footerProps: {
    display: true,
  },
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  footerProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};
