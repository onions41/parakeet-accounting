// Module imports
import Container from "@mui/system/Container"
import Box from "@mui/material/Box"
import styled from "@mui/material/styles/styled"

// Internal imports
import Menu from "./menu/Menu"

// Prevents anchor links from colliding with the sticky DesktopMenu (> lg)
const SectionBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    "&:target": {
      marginTop: "-91px",
      paddingTop: "91px" // height of the menu container
    }
  }
}))

export default function App() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        px: 3,
        border: "1px black solid" // Guideline, remove later
      }}
    >
      <Menu />
      <SectionBox id="qbo-advisor">Lets see what happes now</SectionBox>
    </Container>
  )
}
