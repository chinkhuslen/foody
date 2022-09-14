import {createTheme, ThemeProvider} from "@mui/material"
import { useMemo } from "react"
// styled sudal

const theme = createTheme({
    palette:{
        primary:{
            main:'#00ffff',
            dark:'#00ff00',
            light:'#ff00ff',
        },
        secondary:{
            main:'#ffff00',
            dark:'#00ff00',
            light:'#ff0000',
        }
    },
    breakpoints:{
        values:{
            xs:0,
            sm:600,
            md:900,
            lg:1200,
            xl:1536
        }
    }

})

export function CustomTheme({ children }){
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}