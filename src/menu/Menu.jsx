// Module imports
import useMediaQuery from "@mui/material/useMediaQuery"
import useTheme from "@mui/material/styles/useTheme"

// Internal imports
import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu"

export default function Menu() {
  const theme = useTheme()
  // Either mobile or desktop
  // Screen width >= lg is desktop, otherwise mobile
  // lg breakpoint is set at 1024 (check theme file)
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"))

  return isMobile ? <MobileMenu /> : <DesktopMenu />
}
