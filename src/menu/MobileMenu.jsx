// Module imports
import { useState, useEffect } from "react"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import Box from "@mui/system/Box"
import useTheme from "@mui/material/styles/useTheme"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import IconButton from "@mui/material/IconButton"
import MenuRoundedIcon from "@mui/icons-material/MenuRounded"
import { scrollIntoView } from "seamless-scroll-polyfill"

// Internal imports
import links from "./links"
import LogoLink from "./LogoLink"

export default function MobileMenu() {
  const { palette } = useTheme()

  // Hooks for Menu
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box
      sx={{
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

      {/* Hamberger menu on the right */}
      <Box
        sx={{
          position: "fixed",
          right: "25px",
          borderRadius: "10px",
          boxShadow: 2,
          backgroundColor: palette.background.default,
          zIndex: 1
        }}
      >
        <IconButton
          id="mobile-menu-button"
          aria-controls={open ? "mobile menu" : undefined}
          aria-haspopup="true"
          aria-label="open mobile menu"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          size="medium"
          sx={{
            color: palette.text.secondary
          }}
        >
          <MenuRoundedIcon fontSize="inherit" />
        </IconButton>
      </Box>
      <Menu
        id="mobile-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "mobile-menu-button"
        }}
      >
        <MobileMenuLink
          href={links[0].href}
          handleClose={handleClose}
          palette={palette}
        >
          {links[0].name}
        </MobileMenuLink>
        <MobileMenuLink
          href={links[1].href}
          handleClose={handleClose}
          palette={palette}
        >
          {links[1].name}
        </MobileMenuLink>

        {/* QuickBooks Advisor Link */}
        <MobileMenuLink
          href={links[2].href}
          handleClose={handleClose}
          palette={palette}
        >
          <Box sx={{ fontSize: 16, lineHeight: 1.1 }}>
            QuickBooks<sup style={{ fontSize: 8 }}>TM</sup><br />Advisor
          </Box>
        </MobileMenuLink>

        {/* Contact Us Link */}
        <MobileMenuLink
          href={links[3].href}
          handleClose={handleClose}
          palette={palette}
        >
          {links[3].name}
        </MobileMenuLink>
      </Menu>
    </Box>
  )
}

// Regular menu links
function MobileMenuLink({ href, handleClose, children, palette }) {
  const [anchorEl, setAnchorEl] = useState(null)

  useEffect(() => {
    setAnchorEl(document.getElementById(href))
  }, [href])

  const handleClick = (event) => {
    event.preventDefault()
    scrollIntoView(anchorEl, { behavior: "smooth", block: "start" })
  }

  return (
    <Link
      onClick={handleClick}
      underline="none"
      color={palette.text.primary}
    >
      <MenuItem onClick={handleClose}>
        <Typography
          fontFamily="'Alighty Nesia Bold', sans-serif"
          fontWeight={600}
          fontSize={20}
          component="h2"
        >
          {children}
        </Typography>
      </MenuItem>
    </Link>
  )
}
