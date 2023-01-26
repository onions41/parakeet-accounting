// Module imports
import { useState, useEffect } from "react"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import useTheme from "@mui/material/styles/useTheme"
import { scrollIntoView, scrollTo } from "seamless-scroll-polyfill"

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
        height: "120px",
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
            <DesktopMenuBtn
              key={`desktop-link-${index}`}
              href={link.href}
            >
              {link.name}
            </DesktopMenuBtn>
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

// The regular links to the left
function DesktopMenuLink({ href, palette, children }) {
  const [anchorEl, setAnchorEl] = useState(null)

  useEffect(() => {
    setAnchorEl(document.getElementById(href))
  }, [href])

  const handleClick = (event) => {
    event.preventDefault()
    scrollTo(window, {
      behavior: "smooth",
      top:
        anchorEl.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        80 // offset in px
    })
  }

  return (
    <Link
      onClick={handleClick}
      href="" // Makes the cursor change to a hand on hover
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

// The regular links to the right
function DesktopMenuBtn({ href, children }) {
  const [anchorEl, setAnchorEl] = useState(null)

  useEffect(() => {
    setAnchorEl(document.getElementById(href))
  }, [href])

  const handleClick = (event) => {
    event.preventDefault()
    scrollIntoView(anchorEl, { behavior: "smooth", block: "start" })
  }

  return (
    <Button
      onClick={handleClick}
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
        {children}
      </Typography>
    </Button>
  )
}
