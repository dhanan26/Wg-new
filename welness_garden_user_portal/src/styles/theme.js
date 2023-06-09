

import { createTheme } from "@mui/material";
import './theme.css'


export const theme = createTheme({
    palette: {
        primary: {
            main: "#69C6AC", // Medium Aquamarine
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: "#00256D", //Cool Black 
        },
        buttonPrimary: {
            main: "#F67D6D", //Salmon 
            contrastText: '#FFFFFF',
        },
        buttonSecondary: {
            main: "#0187A4", //Pain color 
            contrastText: '#FFFFFF',
        },
        headerButtonPrimary: {
            main: "#5E8BFF" //naplesYellow
        },
        headerButtonSecondary: {
            main: "#EBECF0" //Bright Gray 
        },
        headerButtonMain: {
            main: "#FFD25E"
        },
        textPrimary: {
            main: "#333333" //Black
        },
        textSecondary: {
            main: "#FFFFFF" //White
        },
        cardActive:{
            main:"#E3EDFC"
        }
    },
    typography: {
        primaryTitle: {
            fontFamily: "AquawaxMedium",
            fontWeight: 500,
            fontSize: 40,
        },
        secondaryTitle: {
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: 32,
        },
        primaryText: {
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: 16
        },
        secondaryText: {
            fontFamily: "Rubik",
            fontWeight: 400,
            fontSize: 10
        }
    },
    fontFamily: {
        primary: "AquawaxMedium",
        secondary: "Poppins"
    }
})

