// As cores do site geral aqui 

import { createTheme } from '@mui/material'

export const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#d52b1e',
            light: '#FFFFFF',
            dark: '#000000',
            contrastText: '#ffffff',
       
        },

        secondary: {
            main: '#AF9D95',
            light: '#AF9D95',
            dark: '#82786F'
        },

        background: {
            default: '#f7f6f3',
            paper: '#202124',
        }
        
    }
});