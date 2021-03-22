import { typographyVariants } from './typographyVariants';
import { breakpoints, defaultStyles } from './index';

export const colors = {
  background: {
    primary: {
      color: '#cfd8dc',
    },
    secondary: {
      color: '#eceff1',
    },
  },
  text: {
    head1: {
      color: '#000a12',
    },
    head2: {
      color: '#263238',
    },
    primary: {
      color: '#29434E',
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
  title: 'light',
  colors,
  typographyVariants,
  breakpoints,
  defaultStyles,
};

// const ThemeLight: DefaultTheme = {
//   title: 'light',
//   colors,
//   typographyVariants,
//   breakpoints,
//   borderRadius: '6px',
//   transition: '200ms ease-in-out',
//   fontFamily: "'Roboto', sans-serif",
//   boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
// };

// export default ThemeLight;
