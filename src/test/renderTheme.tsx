import { render } from '.'
import { ThemeProvider } from 'styled-components'
import { dark, light } from 'src/styles/theme'
import { ReactNode } from 'react'

export const renderTheme = (component: ReactNode) => {
    return render(
        <ThemeProvider theme={light}>
            {component}
        </ThemeProvider>
    )
}