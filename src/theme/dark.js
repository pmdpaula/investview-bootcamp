import { typographyVariants } from './typographyVariants';
import { breakpoints, defaultStyles } from './index';

export const colors = {
  background: {
    primary: {
      color: '#000a12',
    },
    secondary: {
      color: '#102027',
    },
  },
  text: {
    head1: {
      color: '#819CA9',
    },
    head2: {
      color: '#263238',
    },
    primary: {
      color: '#cfd8dc',
    },
  },
  borders: {
    primary: {
      color: '#ffad42',
    },
  },
  primary: {
    main: {
      color: '#546E7A',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#F57C00',
      contrastText: '#29434E',
    },
  },
  tertiary: {
    main: {
      color: '#070C0E',
      contrastText: '#fff',
    },
    light: {
      color: '#819CA9',
      contrastText: '#fff',
    },
  },
};

export default {
  title: 'dark',
  colors,
  typographyVariants,
  breakpoints,
  defaultStyles,
};
