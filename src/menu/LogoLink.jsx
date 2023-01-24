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
            width="40px"
            height="40px"
            style={{ position: "relative", bottom: 4 }}
            src={`${process.env.PUBLIC_URL}/favicon.svg`}
          />
          {/* Company Name */}
          <Typography
            component="h1"
            sx={{
              fontFamily: "'Axios Pro', sans-serif",
              fontSize: menuBp ? 25 : 20,
              fontWeight: 600,
              color: palette.text.primary
            }}
          >
            Parakeet Accounting
          </Typography>
        </Stack>
      </Link>
    </Box>
  )
}
