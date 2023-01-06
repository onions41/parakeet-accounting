// Module imports
import { createTheme } from "@mui/material/styles"

// Internal imports
import palette from "./palette"

const theme = createTheme({
  palette,
  breakpoints: {
    values: {
      zero: 0,
      lg: 1024, // This is the transition point between desktop and mobile screen widths
      xl: 1280
    }
  }
})

export default theme
