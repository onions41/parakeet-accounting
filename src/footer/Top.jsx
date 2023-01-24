import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import EmailIcon from "@mui/icons-material/Email"
import SmartphoneIcon from "@mui/icons-material/Smartphone"

export default function Top({ palette, widths }) {
  const { lg, md, sm } = widths

  return (
    <Stack
      direction={lg ? "row" : "column"}
      spacing={8}
      sx={{ justifyContent: "space-between" }}
    >
      {/* Left column */}
      <Stack
        spacing={4}
        sx={{
          flexBasis: lg ? "33%" : "auto",
          alignItems: lg ? "start" : "center"
        }}
      >
        {/* "Contact Us" */}
        <Typography
          component="h1"
          fontSize={lg ? "2.25rem" : md ? "1.90rem" : "1.55rem"}
          fontWeight="700"
          lineHeight="1"
        >
          {"Contact "}
          <span style={{ color: palette.primary.main }}>Us</span>
        </Typography>
        {/* "Parakeet Accounting is..." */}
        <Typography
          sx={{
            textAlign: lg ? "left" : "center",
            width: sm ? "325px" : "auto"
          }}
        >
          {
            "Parakeet Accounting Ltd. is a Canadian public accounting practice licenced by the Chartered Professional Accountants of British Columbia (CPABC)."
          }
        </Typography>
      </Stack>
      {/* Middle column */}
      <Stack
        spacing={4}
        sx={{
          flexBasis: lg ? "42%" : "auto",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Stack
          spacing={1}
          sx={{ alignItems: "center" }}
        >
          <EmailIcon />
          <ContactText widths={widths}>boyan.dong@outlook.com</ContactText>
        </Stack>
        <Stack
          spacing={1}
          sx={{ alignItems: "center" }}
        >
          <SmartphoneIcon />
          <ContactText widths={widths}>{"778-989-9321"}</ContactText>
        </Stack>
      </Stack>
      {/* Right column */}
      <Stack
        direction="column"
        spacing={1}
        sx={{
          flexBasis: lg ? "25%" : "auto",
          paddingBottom: lg ? "0" : "30px",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {/* Wechat logo */}
        <Box width="25px">
          <img src="https://parakeetbucket.s3.us-west-2.amazonaws.com/wechat-logo.svg" />
        </Box>
        {/* Wechat QR Code */}
        <Box
          sx={{
            padding: "10px",
            width: "120px",
            height: "120px",
            borderRadius: "10px",
            backgroundColor: palette.grey["400"]
          }}
        >
          <img src="https://parakeetbucket.s3.us-west-2.amazonaws.com/wechat-id-2.svg" />
        </Box>
      </Stack>
    </Stack>
  )
}

// Font for email address and phone number
function ContactText({ widths, children }) {
  const { sm } = widths

  return (
    <Typography
      fontFamily="'Alighty Nesia Bold', sans-serif"
      fontWeight={700}
      fontSize={sm ? "1.1rem" : "1rem"}
    >
      {children}
    </Typography>
  )
}
