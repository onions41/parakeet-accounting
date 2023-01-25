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
            width="52px"
            height="52px"
            style={{ position: "relative", bottom: 4 }}
            src="https://parakeetbucket.s3.us-west-2.amazonaws.com/round-bird-logo.svg"
          />
          {/* Company Name */}
          <Typography
            component="h1"
            sx={{
              fontFamily: "'Axios Pro', sans-serif",
              fontSize: menuBp ? 26 : 22,
              fontWeight: 600,
              color: palette.grey["800"]
            }}
          >
            Parakeet Accounting
          </Typography>
        </Stack>
      </Link>
    </Box>
  )
}
