import { createTheme, Theme } from '@material-ui/core'
import { red } from '@material-ui/core/colors'

const theme: Theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
})

export default theme
