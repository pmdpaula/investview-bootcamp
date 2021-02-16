import { typographyVariants } from './typographyVariants'
import { breakpoints } from './index'

export const colors = {
  backgroundColor: '#000a12',
  text: {
    head1: {
      color: '#819CA9'
    },
    head2: {
      color: '#263238'
    },
    main: {
      color: '#cfd8dc'
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
  }
  // shadowBox: {
  //   boxShadow: '0px 4px 10px rgba(255, 255, 255, 0.75)'
  // }
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
  title: 'dark',
  colors,
  typographyVariants,
  breakpoints,
  borderRadius: '12px',
  transition: '200ms ease-in-out',
  fontFamily: "'Roboto', sans-serif",
  boxShadow: '0px 2px 6px rgba(255, 255, 255, 0.5)'
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
