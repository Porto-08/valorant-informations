/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components'

import { dark, light } from './theme'

export type Theme = typeof light & typeof dark

declare module 'styled-components' {
  export interface DefaultTheme extends Theme { }
}
