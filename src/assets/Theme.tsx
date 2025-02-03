import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#124227',
        },
        background: {
            default: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: "'Roboto', sans-serif",
        h1: {
            fontSize: '3rem', // Default font size
            fontWeight: 700,
            '@media (max-width:1200px)': {
                fontSize: '2.5rem', // Medium screens (desktop)
            },
            '@media (max-width:900px)': {
                fontSize: '2rem', // Small screens (tablet)
            },
            '@media (max-width:600px)': {
                fontSize: '1.75rem', // Extra-small screens (mobile)
            },
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 600,
            '@media (max-width:1200px)': {
                fontSize: '1.75rem',
            },
            '@media (max-width:900px)': {
                fontSize: '1.5rem',
            },
            '@media (max-width:600px)': {
                fontSize: '1.25rem',
            },
        },
        h3: {
            fontSize: '1.5rem',
            fontWeight: 500,
            '@media (max-width:1200px)': {
                fontSize: '1.25rem',
            },
            '@media (max-width:900px)': {
                fontSize: '1.1rem',
            },
            '@media (max-width:600px)': {
                fontSize: '1rem',
            },
        },
        body1: {
            fontSize: '1rem',
            '@media (max-width:1200px)': {
                fontSize: '0.95rem',
            },
            '@media (max-width:900px)': {
                fontSize: '0.9rem',
            },
            '@media (max-width:600px)': {
                fontSize: '0.85rem',
            },
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#FFFFFF', // Custom background color
                },
            },
        },
    },
});
