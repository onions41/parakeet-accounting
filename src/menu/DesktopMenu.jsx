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
        spacing={6}
      >
        <DesktopMenuLink
          href={links[0].href}
          palette={palette}
        >
          <Box width={75}>{links[0].name}</Box>
        </DesktopMenuLink>
        <DesktopMenuLink
          href={links[1].href}
          palette={palette}
        >
          {links[1].name}
        </DesktopMenuLink>

        {/* QuickBooks Advisor Link */}
        <DesktopMenuLink
          href={links[2].href}
          palette={palette}
        >
          <Box sx={{ fontSize: 16, lineHeight: 1.1 }}>
            QuickBooks<sup style={{ fontSize: 8 }}>TM</sup><br />Advisor
          </Box>
        </DesktopMenuLink>

        {/* Contact Us Button */}
        <DesktopMenuBtn href={links[3].href}>{links[3].name}</DesktopMenuBtn>
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
        textAlign="center"
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
