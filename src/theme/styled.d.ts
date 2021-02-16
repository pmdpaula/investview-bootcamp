/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'

import theme from './index'
// import themeLight from './light'

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
