import { createMuiTheme } from '@material-ui/core/styles';
import { primaryColor, neutralColor, secondaryColor, tertiaryColor } from './colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: "white"
        },
        secondary: {
            main: secondaryColor,
            contrastText: "white"
        },
        text: {
            main: neutralColor,
        },

        spacing: 8,

    },
});

export default theme