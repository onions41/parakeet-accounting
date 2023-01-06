import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"

export default function LogoLink({ palette }) {
  return (
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
            fontSize: 25,
            fontWeight: 600,
            color: palette.text.primary
          }}
        >
          Parakeet Accounting
        </Typography>
      </Stack>
    </Link>
  )
}
