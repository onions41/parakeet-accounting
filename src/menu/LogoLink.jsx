import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import useTheme from "@mui/material/styles/useTheme"
import useMediaQuery from "@mui/material/useMediaQuery"
import Box from "@mui/material/Box"

export default function LogoLink({ palette }) {
  const { breakpoints } = useTheme()
  const menuBp = useMediaQuery(breakpoints.up("menu"), { noSsr: true })

  return (
    <Box sx={{ width: menuBp ? "auto" : "200px" }}>
      <Link
        href="/"
        underline="none"
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
        >
          {/* Logo */}
          <img
            width="110px"
            style={{ position: "relative", bottom: 4 }}
            src={process.env.PUBLIC_URL + "/assets/round-bird-smarter.svg"}
          />
          {/* Company Name */}
          <Typography
            component="h1"
            sx={{
              fontFamily: "'Axios Pro', sans-serif",
              fontSize: menuBp ? 28 : 22,
              fontWeight: 600,
              color: palette.grey["700"],
              position: "relative",
              top: menuBp ? 24 : 10,
              right: menuBp ? 40 : 0
            }}
          >
            Parakeet Accounting
          </Typography>
        </Stack>
      </Link>
    </Box>
  )
}
