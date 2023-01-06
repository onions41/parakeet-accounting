// Module imports
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import useTheme from "@mui/material/styles/useTheme"

// Internal imports
import links from "./links"
import LogoLink from "./LogoLink"

export default function DesktopMenu() {
  const { palette } = useTheme()

  return (
    <Box
      sx={{
        position: "sticky",
        top: "0",
        height: "91px",
        padding: "24px 0",
        backgroundColor: palette.background.default,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      {/* Logo Link on the Left */}
      <LogoLink palette={palette} />

      {/* Links on the Right */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={5}
      >
        {links.map((link, index) =>
          index === links.length - 1 ? (
            // The last link which is colored
            <Button
              key={`desktop-link-${index}`}
              href={link.href}
              variant="contained"
              sx={{
                px: 3,
                py: 1
              }}
            >
              <Typography
                fontFamily="'Alighty Nesia Bold', sans-serif"
                fontWeight={600}
                fontSize={18}
                textTransform="none"
                component="h2"
              >
                Contact us
              </Typography>
            </Button>
          ) : (
            // Regular links to the left of the colored link
            <DesktopMenuLink
              key={`desktop-link-${index}`}
              href={link.href}
              palette={palette}
            >
              {link.name}
            </DesktopMenuLink>
          )
        )}
      </Stack>
    </Box>
  )
}

// The regular links to the right
function DesktopMenuLink({ href, palette, children }) {
  return (
    <Link
      href={href}
      underline="hover"
      color={palette.text.primary}
    >
      <Typography
        fontFamily="'Alighty Nesia Bold', sans-serif"
        fontWeight={600}
        fontSize={18}
        component="h2"
      >
        {children}
      </Typography>
    </Link>
  )
}
