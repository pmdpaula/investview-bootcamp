import { typographyVariants } from './typographyVariants'
import { breakpoints } from './index'

export const colors = {
  background: {
    main: {
      color: '#cfd8dc'
    },
    secondary: {
      color: '#eceff1'
    }
  },
  text: {
    head1: {
      color: '#000a12'
    },
    head2: {
      color: '#263238'
    },
    main: {
      color: '#29434E'
    }
  },
  borders: {
    main: {
      color: '#ffad42'
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
  }
  // shadowBox: {},
  // modes: {
  //   dark: {}
  // }
}

// export const breakpoints = {
//   xs: 0,
//   sm: 480,
//   md: 768,
//   lg: 992,
//   xl: 1200
// }

export default {
  title: 'light',
  colors,
  typographyVariants,
  breakpoints,
  borderRadius: '6px',
  transition: '200ms ease-in-out',
  fontFamily: "'Roboto', sans-serif",
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)'
}

// interface ColorsProps {
//   title: string
//   background: {
//     light: {
//       color: string
//     }
//     main: {
//       color: string
//     }
//   }
//   borders: {
//     main: {
//       color: string
//     }
//   }
//   primary: {
//     main: {
//       color: string
//       contrastText: string
//     }
//   }
//   secondary: {
//     main: {
//       color: string
//       contrastText: string
//     }
//   }
//   tertiary: {
//     main: {
//       color: string
//       contrastText: string
//     }
//     light: {
//       color: string
//       contrastText: string
//     }
//   }
// }

// interface BreakpointsProps {
//   xs: number
//   sm: number
//   md: number
//   lg: number
//   xl: number
// }

// export interface ThemeProps {
//   colors: ColorsProps
//   breakpoints: BreakpointsProps
//   borderRadius: string
//   transition: string
//   fontFamily: string
//   boxShadow: string
// }