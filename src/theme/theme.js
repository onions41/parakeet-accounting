// Module imports
import { createTheme } from "@mui/material/styles"

// Internal imports
import palette from "./palette"

const theme = createTheme({
  palette,
  breakpoints: {
    values: {
      zero: 0,
      lg: 1024, // Transition point between desktop and mobile screen widths
      xl: 1280,
      xxl: 1440 // Max width of the website
    }
  }
})

export default theme
