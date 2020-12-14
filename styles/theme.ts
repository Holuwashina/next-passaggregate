import { createMuiTheme } from '@material-ui/core/styles';
import { grey, indigo, orange } from '@material-ui/core/colors';
import 'fontsource-goldman';
import 'fontsource-roboto';

const theme = createMuiTheme({
    //Global
    spacing: 2,

    // Customizing the palette
    palette: {
        primary: {
            main: '#5f0937',
        },
        secondary: {
            main: '#3455ea',
        },
    },

    typography: {
        h1: {
            fontFamily: ['Goldman', 'Roboto'].join(','),
            fontWeight: 700,
            letterSpacing: '0.05em',
            fontSize: '1rem',
            textTransform: 'uppercase',
        },

        h2: {
            fontFamily: ['Goldman', 'Roboto'].join(','),
            fontWeight: 700,
            letterSpacing: '0.05em',
            fontSize: '0.6rem',
            textTransform: 'uppercase',
            '@media (min-width:600px)': {
                fontSize: '0.8rem',
            }
        },

        h3: {
            fontWeight: 700,
            letterSpacing: '0.05em',
            fontSize: '0.7rem',
            textTransform: 'capitalize',
        },

        body1: {
            fontWeight: 600,
            letterSpacing: '0.05em',
            fontSize: '0.7rem',
            '@media (min-width:600px)': {
                fontSize: '0.9rem',
            }
        },

        body2: {
            fontWeight: 600,
            letterSpacing: '0.05em',
            fontSize: '0.7rem',
        },
    },

    // Overriding components settings
    overrides: {
        MuiTypography: {
            gutterBottom: {
                marginBottom: '1em',
            },
            colorTextPrimary: {
                color: orange[900],
            },
            colorTextSecondary: {
                color: grey[50],
            },
        },

        MuiSvgIcon: {
            root: {
                fontSize: '1.1rem',
            },
        },

        MuiButton: {
            root: {
                fontWeight: 700,
                letterSpacing: '0.1em',
            },
            containedSizeSmall: {
                fontSize: '0.65rem',
            },
            containedPrimary: {
                backgroundColor: indigo[900],
                '&:hover': {
                    backgroundColor: 'red !important',
                },
            },
            textSizeSmall: {
                fontSize: '0.6rem',
            },
            textPrimary: {
                color: indigo[900],
                '&:hover': {
                    color: indigo[500],
                },
            },
        },

        MuiGrid: {
            container: {
                width: '100% !important'
            },
        },

        MuiIconButton: {
            label: {
                color: 'white',
            },
        },

        MuiTab: {
            root: {
                fontSize: '0.6rem',
                fontWeight: 700,
            },
            textColorInherit: {
                color: '#5f0937',
                opacity: '0.8',
            },
        },

        MuiTabs: {
            root: {
                marginTop: 10,
                marginBottom: 10,
            },
        },

        MuiFormLabel: {
            root: {
                color: 'red',
                fontSize: '0.8rem',
                fontWeight: 600,
                '@media (min-width:600px)': {
                    fontSize: '0.9rem',
                }
            },
        },

        MuiFormControlLabel: {
            root: {
                '& span': {
                    color: 'red',
                    fontSize: '.7rem',
                },
            },
        },

        MuiMenuItem: {
            root: {
                fontSize: '0.7rem',
                fontWeight: 700,
            },
        },

        MuiInputBase: {
            input: {
                textTransform: 'uppercase',
                color: 'red',
                fontSize: '0.6rem',
                fontWeight: 600,
                '@media (min-width:600px)': {
                    fontSize: '0.7rem',
                }
            },
        },
    },

    // Overriding components settings with its props
    props: {
        MuiButton: {
            color: 'primary',
            variant: 'contained',
            size: 'small',
        },
        MuiTypography: {
            color: 'primary',
        },
    },
});

export default theme;

// React-icons styling
export const themeIcon = {
    size: '2em',
    color: 'green',
    style: {
        marginBottom: 10,
    }
}