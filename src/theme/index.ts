import { typographyVariants } from './typographyVariants'

export const colors = {
  background: {
    light: {
      color: '#FFFFFF'
    },
    main: {
      color: '#CFD8DC'
    }
  },
  borders: {
    main: {
      color: '#F1F1F1'
    }
  },
  primary: {
    main: {
      color: '#546E7A',
      contrastText: '#fff'
    }
  },
  secondary: {
    main: {
      color: '#F57C00',
      contrastText: '#29434E'
    }
  },
  tertiary: {
    main: {
      color: '#070C0E',
      contrastText: '#fff'
    },
    light: {
      color: '#819CA9',
      contrastText: '#fff'
    }
  },
  modes: {
    dark: {}
  }
}

export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200
}

export default {
  colors,
  typographyVariants,
  breakpoints,
  borderRadius: '12px',
  transition: '200ms ease-in-out',
  fontFamily: "'Roboto', sans-serif"
}
