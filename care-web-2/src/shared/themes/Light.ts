
import { createTheme } from '@mui/material'

export const LightTheme = createTheme({
    palette: {
       
        primary: {
            main: '#d52b1e',
            light: '#FFFFFF',
            dark: '#82786F',
            contrastText: '#ffffff',
       
        },

        secondary: {
            main: '#AF9D95',
            light: '#AF9D95',
            dark: '#82786F',
            contrastText: '#ffffff'
        },

        background: {
            default: '#202124',
            paper: '#303134',
        }
        
    }
});