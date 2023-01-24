// External imports
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Divider from "@mui/material/Divider"
import useTheme from "@mui/material/styles/useTheme"
import useMediaQuery from "@mui/material/useMediaQuery"

// Internal imports
import Top from "./Top"
import Bottom from "./Bottom"

export default function Footer() {
  // Load theme
  const { palette, breakpoints } = useTheme()
  const xxl = useMediaQuery(breakpoints.up("xxl"), { noSsr: true })
  const xl = useMediaQuery(breakpoints.up("xl"), { noSsr: true })
  const lg = useMediaQuery(breakpoints.up("lg"), { noSsr: true })
  const md = useMediaQuery(breakpoints.up("md"), { noSsr: true })
  const menuBp = useMediaQuery(breakpoints.up("menu"), { noSsr: true })
  const sm = useMediaQuery(breakpoints.up("sm"), { noSsr: true })
  const widths = { xxl, xl, lg, md, menuBp, sm }

  return (
    <Container
      maxWidth={false}
      sx={{
        color: palette.footer.contrastText,
        backgroundColor: palette.footer.main
      }}
    >
      <Container
        maxWidth="xxl"
        sx={{ padding: "70px 25px", marginTop: "90px" }}
      >
        <Stack spacing={5}>
          {/* Contact Us */}
          <Top
            palette={palette}
            widths={widths}
          />
          <Divider
            variant="middle"
            sx={{ borderColor: palette.grey["700"] }}
          />
          {/* Copyright */}
          <Bottom
            palette={palette}
            widths={widths}
          />
        </Stack>
      </Container>
    </Container>
  )
}
