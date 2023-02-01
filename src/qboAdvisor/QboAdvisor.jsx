import { useState, useEffect } from "react"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import useTheme from "@mui/material/styles/useTheme"
import useMediaQuery from "@mui/material/useMediaQuery"
import Link from "@mui/material/Link"
import { scrollIntoView } from "seamless-scroll-polyfill"

export default function Home() {
  const { palette, breakpoints } = useTheme()
  const xl = useMediaQuery(breakpoints.up("xl"), { noSsr: true })
  const lg = useMediaQuery(breakpoints.up("lg"), { noSsr: true })
  const md = useMediaQuery(breakpoints.up("md"), { noSsr: true })
  const sm = useMediaQuery(breakpoints.up("sm"), { noSsr: true })
  const widths = { xl, lg, md, sm }

  return (
    <Stack
      direction={lg ? "row" : "column"}
      sx={{
        boxSizing: "content-box",
        width: lg ? "auto" : md ? "600px" : "auto",
        height: xl ? "540px" : lg ? "580px" : "auto",
        padding: "110px 0",
        margin: "0 auto",
        justifyContent: "space-around",
        alignItems: "center"
      }}
    >
      {/* Left image */}
      <Box
        sx={{
          width: lg ? "38%" : "80%",
          height: lg ? "100%" : md ? "380px" : sm ? "320px" : "240px",
          backgroundImage:
            "url('https://parakeetbucket.s3.us-west-2.amazonaws.com/business-stock-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      {/* Right side */}
      <Stack
        sx={{
          justifyContent: "space-between",
          boxSizing: "border-box",
          width: lg ? "52%" : "100%",
          height: lg ? "100%" : "auto",
          paddingTop: lg ? "0" : "72px"
        }}
      >
        <Stack
          spacing={2.5}
          sx={{
            alignItems: lg ? "left" : "center"
          }}
        >
          {/* Quickbooks Solution Provider */}
          <Typography
            component="h1"
            textAlign={lg ? "left" : "center"}
            fontSize={md ? "1.2rem" : "1.1rem"}
            fontWeight={700}
          >
            <span style={{ color: palette.secondary.main }}>
              QuickBooks<sup style={{ fontSize: "0.5rem" }}>TM</sup>
            </span>
            {" Solution Provider"}
          </Typography>
          {/* Headline */}
          <Typography
            component="h2"
            textAlign={lg ? "left" : "center"}
            fontSize={lg ? "2.25rem" : md ? "1.90rem" : "1.55rem"}
            fontWeight="700"
            lineHeight="1.25"
          >
            {"Extract the Maximum Value out of your Business Data."}
          </Typography>
          {/* Content */}
          <Typography
            textAlign={md ? "left" : "center"}
            fontSize={md ? "1.1rem" : "1rem"}
          >
            Your business data is what gives value to your business. More
            accurate and up-to-date data means your company is worth
            <span style={{ fontWeight: "700" }}>{" more"}</span>. How else would
            investors and loan officers appraise your company&apos;s value?
          </Typography>
          <Typography
            textAlign={lg ? "left" : "center"}
            fontSize={md ? "1.1rem" : "1rem"}
          >
            Parakeet Accounting primarily works with QuickBooks
            <sup style={{ fontSize: "0.5rem" }}>TM</sup> and the wide range of
            enterprise systems that integrate with it, giving you the ability to
            generate and present a comprehensive snapshot of your business data
            at any point in time.
          </Typography>

          {/* Quickbooks logo */}
          <Box
            sx={{
              boxSizing: "content-box",
              width: xl ? "220px" : lg ? "200px" : "160px",
              padding: "8px 0px 16px"
            }}
          >
            <a
              href="https://quickbooks.intuit.com/ca/apps/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img width="100%" src="https://parakeetbucket.s3.us-west-2.amazonaws.com/qb-logo-horizontal-preferred.svg" />
            </a>
          </Box>
        </Stack>

        {/* Call to action */}
        <Typography
          textAlign={lg ? "left" : "center"}
          fontSize={xl ? "1.3rem" : "1.13rem"}
        >
          {"It all starts with a conversation - "}
          <CallToActionLink
            palette={palette}
            href="contact-us"
            widths={widths}
          >
            Contact us today!
          </CallToActionLink>
        </Typography>
      </Stack>
    </Stack>
  )
}

function CallToActionLink({ widths, href, palette, children }) {
  const { xl } = widths
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
      href=""
      underline="always"
      color={palette.text.primary}
      sx={{
        fontSize: xl ? "1.40rem" : "1.25rem",
        color: palette.grey["700"]
      }}
    >
      {children}
    </Link>
  )
}
