import { render } from '.'
import { ThemeProvider } from 'styled-components'
import theme from 'src/styles/theme'
import { ReactNode } from 'react'

export const renderTheme = (component: ReactNode) => {
    return render(
        <ThemeProvider theme={theme}>
            {component}
        </ThemeProvider>
    )
}