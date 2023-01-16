// Module imports
import Container from "@mui/system/Container"
import Box from "@mui/material/Box"
import styled from "@mui/material/styles/styled"

// Internal imports
import Menu from "./menu/Menu"
import Home from "./home/Home"
import Services from "./services/Services"
import QboAdvisor from "./qboAdvisor/QboAdvisor"
import Footer from "./footer/Footer"

// Prevents anchor links from colliding with the sticky DesktopMenu (> lg)
const SectionBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    "&:target": {
      marginTop: "-80px",
      paddingTop: "80px" // height of the menu container
    }
  }
}))

export default function App() {
  return (
    <Box sx={{}}>
      <Container
        maxWidth="xxl"
        sx={{ padding: "0 25px" }}
      >
        <Menu />
        <SectionBox id="home">
          <Home />
        </SectionBox>
        <SectionBox id="services">
          <Services />
        </SectionBox>
        <SectionBox id="qbo-advisor">
          <QboAdvisor />
        </SectionBox>
      </Container>
      <SectionBox id="contact-us">
        <Footer />
      </SectionBox>
    </Box>
  )
}
