// As cores do site geral aqui 

import { createTheme } from '@mui/material'

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: '#d52b1e',
            light: '#FFFFFF',
            dark: '#000000'
       
        },

        secondary: {
            main: '#AF9D95',
            light: '#AF9D95',
            dark: '#82786F'
        },

        background: {
            default: '#f7f6f3',
            paper: '#ffffff',
        }
        
    }
});