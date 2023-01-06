// Module imports
import { useState } from "react"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import Box from "@mui/system/Box"
import useTheme from "@mui/material/styles/useTheme"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import IconButton from "@mui/material/IconButton"
import MenuRoundedIcon from "@mui/icons-material/MenuRounded"

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

      {/* Hamberger menu on the right */}
      <IconButton
        id="mobile-menu-button"
        aria-controls={open ? "mobile menu" : undefined}
        aria-haspopup="true"
        aria-label="open mobile menu"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          color: palette.text.primary,
          position: "fixed",
          right: 25,
          top: 25
        }}
      >
        <MenuRoundedIcon />
      </IconButton>
      <Menu
        id="mobile-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "mobile-menu-button"
        }}
      >
        {links.map((link, index) =>
          index === links.length - 1 ? (
            // The last link which is colored
            <Link
              href={link.href}
              underline="none"
              color={palette.text.primary}
              key={`mobile-link-${index}`}
            >
              <MenuItem>
                <Typography
                  fontFamily="'Alighty Nesia Bold', sans-serif"
                  fontWeight={600}
                  fontSize={18}
                  component="h2"
                >
                  Contact us
                </Typography>
              </MenuItem>
            </Link>
          ) : (
            // Regular links to the left of the colored link
            <MobileMenuLink
              key={`mobile-link-${index}`}
              href={link.href}
              handleClose={handleClose}
              palette={palette}
            >
              {link.name}
            </MobileMenuLink>
          )
        )}
      </Menu>
    </Box>
  )
}

// Regular menu links
function MobileMenuLink({ href, handleClose, children, palette }) {
  return (
    <Link
      href={href}
      underline="none"
      color={palette.text.primary}
    >
      <MenuItem onClick={handleClose}>
        <Typography
          fontFamily="'Alighty Nesia Bold', sans-serif"
          fontWeight={600}
          fontSize={18}
          component="h2"
        >
          {children}
        </Typography>
      </MenuItem>
    </Link>
  )
}
