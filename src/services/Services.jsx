/* eslint-disable indent */
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import useTheme from "@mui/material/styles/useTheme"
import useMediaQuery from "@mui/material/useMediaQuery"

export default function Services() {
  const { palette, breakpoints } = useTheme()
  const xxl = useMediaQuery(breakpoints.up("xxl"), { noSsr: true })
  const xl = useMediaQuery(breakpoints.up("xl"), { noSsr: true })
  const lg = useMediaQuery(breakpoints.up("lg"), { noSsr: true })
  const md = useMediaQuery(breakpoints.up("md"), { noSsr: true })
  const sm = useMediaQuery(breakpoints.up("sm"), { noSsr: true })
  const widths = { xxl, xl, lg, md, sm }

  return (
    <Box
      sx={{
        boxSizing: "content-box",
        // Control responsive widths here
        width: xxl
          ? "auto"
          : lg
          ? "800px"
          : md
          ? "auto"
          : sm
          ? "325px"
          : "auto",
        padding: "90px 0",
        margin: "0 auto"
      }}
    >
      {/* "Our Professional Services" */}
      <Typography
        component="h1"
        textAlign="center"
        fontSize={lg ? "2.25rem" : md ? "1.90rem" : "1.55rem"}
        fontWeight="700"
        lineHeight="1.25"
        margin="0 auto 10px"
      >
        {"Our Professional "}
        <span style={{ color: palette.secondary.light }}>Services</span>
      </Typography>
      {/* Responsive grid */}
      <Outer widths={widths}>
        <Inner widths={widths}>
          <Card
            palette={palette}
            widths={widths}
            title={"Tax Services"}
            iconImage={
              <img
                width="100%"
                src={process.env.PUBLIC_URL + "/assets/tax-icon.svg"}
              />
            }
          >
            Using our expert knowledge of the Canadian tax system, we make sure
            you and your business are in good standing with CRA while also
            maximizing tax savings.
          </Card>
          <Card
            palette={palette}
            widths={widths}
            title={"Financial Statements"}
            iconImage={
              <img
                width="100%"
                src={process.env.PUBLIC_URL + "/assets/financial-statement-icon.svg"}
              />
            }
          >
            Are you raising capital, applying for a loan, or selling a business?
            We provide the accurate financial statements you need to demonstrate
            your vision and profitability.
          </Card>
        </Inner>
        <Inner widths={widths}>
          <Card
            palette={palette}
            widths={widths}
            title={"Business Consulting"}
            iconImage={
              <img
                width="100%"
                src={process.env.PUBLIC_URL + "/assets/consulting-icon.svg"}
              />
            }
          >
            Some business activities are financially complex to execute, e.g.
            acquiring another company or selling equity. Let the experts at
            Parakeet Accounting help you plan the best course of action.
          </Card>
          <Card
            palette={palette}
            widths={widths}
            title={"Books Setup & Cleanup"}
            iconImage={
              <img
                width="100%"
                src={process.env.PUBLIC_URL + "/assets/bookkeeping-cleanup-icon.svg"}
              />
            }
          >
            Automate your bookkeeping! Your business systems may be able to
            integrate with bookkeeping software such as QuickBooks
            <sup style={{ fontSize: "0.5rem" }}>TM</sup>. We&apos;ll help you
            take advantage of technology to automate.
          </Card>
        </Inner>
      </Outer>
    </Box>
  )
}

function Outer({ widths, children }) {
  const { xxl } = widths
  return (
    <Stack
      direction={xxl ? "row" : "column"}
      sx={{
        justifyContent: "space-around",
        alignItems: "center"
      }}
    >
      {children}
    </Stack>
  )
}

function Inner({ widths, children }) {
  const { xxl, md } = widths
  return (
    <Stack
      direction={md ? "row" : "column"}
      sx={{
        width: xxl ? "50%" : "100%",
        justifyContent: "space-around",
        alignItems: "center"
      }}
    >
      {children}
    </Stack>
  )
}

function Card({ palette, widths, title, iconImage, children }) {
  const { xl, lg, md } = widths

  return (
    <Box sx={{ width: md ? "50%" : "100%" }}>
      {/* Dotted line box */}
      <Stack
        spacing={2}
        sx={{
          height: xl ? "300px" : lg ? "auto" : md ? "350px" : "auto",
          padding: "40px 24px",
          margin: "48px 24px 0",
          border: `2px ${palette.secondary.main} dashed`,
          borderRadius: "8px",
          alignItems: "center"
        }}
      >
        {/* Circle border */}
        <Box
          sx={{
            width: "60px",
            height: "60px",
            padding: "15px",
            // marginBottom: "10px",
            // border: `2px ${palette.secondary.light} solid`,
            // borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {iconImage}
        </Box>
        {/* Title */}
        <Typography
          textAlign="center"
          fontSize="1.2rem"
          fontWeight="700"
          color={palette.secondary.main}
        >
          {title}
        </Typography>
        <Typography textAlign="center">{children}</Typography>
      </Stack>
    </Box>
  )
}
