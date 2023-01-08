// Module imports
import useMediaQuery from "@mui/material/useMediaQuery"

// Internal imports
import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu"

export default function Menu() {
  // Either mobile or desktop
  // Screen width >= lg is desktop, otherwise mobile
  // lg breakpoint is set at 1024 (check theme file)
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("lg"), { noSsr: true })

  return isMobile ? <MobileMenu /> : <DesktopMenu />
}
