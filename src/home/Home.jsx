import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import useTheme from "@mui/material/styles/useTheme"
import useMediaQuery from "@mui/material/useMediaQuery"

export default function Home() {
  const { palette, breakpoints } = useTheme()
  const xl = useMediaQuery(breakpoints.up("xl"), { noSsr: true })
  const lg = useMediaQuery(breakpoints.up("lg"), { noSsr: true })
  const md = useMediaQuery(breakpoints.up("md"), { noSsr: true })

  return (
    <Box
      sx={{
        boxSizing: "content-box",
        width: lg ? "auto" : md ? "600px" : "auto",
        height: xl ? "545px" : lg ? "480px" : "auto",
        padding: "72px 0 90px",
        margin: "0 auto",
        display: "flex",
        flexDirection: lg ? "row" : "column",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      {/* Left Side */}
      <Box
        sx={{
          width: lg ? "42%" : "auto",
          height: lg ? "100%" : "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        {/* Top left text */}
        <Stack
          spacing={2.5}
          sx={{ width: "100%", alignItems: lg ? "start" : "center" }}
        >
          {/* Glide Through Challenges with Ease. */}
          <Typography
            component="h1"
            textAlign={lg ? "left" : "center"}
            fontSize={xl ? "3rem" : lg ? "2.25rem" : "1.88rem"}
            fontWeight="700"
            lineHeight="1.25"
          >
            {"Glide Through Challenges "}
            <span style={{ color: palette.primary.main }}>with Ease.</span>
          </Typography>
          <Typography
            textAlign={lg ? "left" : "center"}
            fontSize={xl ? "1.3rem" : "1.13rem"}
          >
            Taxation | Accounting | Business Advisory
          </Typography>
          <Typography
            textAlign={lg ? "left" : "center"}
            fontSize={xl ? "1.13rem" : "1rem"}
          >
            Into the Cloud! Our accounting practice is up-to-date with the
            latest technologies. We integrate cloud systems with financial
            workflows to stay ahead of the flock.
          </Typography>
          {/* CPA Logo */}
          <Box
            sx={{
              width: xl ? "180px" : lg ? "160px" : "150px"
            }}
          >
            <img src="https://parakeetbucket.s3.us-west-2.amazonaws.com/cpa-logo.svg" />
          </Box>
          <Typography
            textAlign={lg ? "left" : "center"}
            fontSize={xl ? "1.13rem" : "1rem"}
          >
            We also speak 中文
          </Typography>
        </Stack>

        {/* Our Satisfied Clients */}
        <Stack
          spacing={2}
          sx={{ width: "100%", paddingTop: lg ? "0" : "45px" }}
        >
          <Typography
            textAlign="center"
            textTransform="uppercase"
            fontSize="0.9rem"
            fontWeight="700"
            color={palette.text.secondary}
          >
            Our Satisfied Clients
          </Typography>
          {/* Client logos */}
          <Stack
            direction="row"
            spacing={4}
            sx={{
              width: lg ? "auto" : "100%",
              justifyContent: lg ? "start" : "center",
              alignItems: "center"
            }}
          >
            <Box sx={{ flexBasis: "23%", flexShrink: "1" }}>
              <img src="https://parakeetbucket.s3.us-west-2.amazonaws.com/mando-kids-logo.svg" />
            </Box>
            <Box sx={{ flexBasis: "36%", flexShrink: "1" }}>
              <img src="https://parakeetbucket.s3.us-west-2.amazonaws.com/bio-international-logo.svg" />
            </Box>
            <Box sx={{ flexBasis: "20%", flexShrink: "1" }}>
              <img src="https://parakeetbucket.s3.us-west-2.amazonaws.com/mall-ads-logo.svg" />
            </Box>
            <Box sx={{ flexBasis: "21%", flexShrink: "1" }}>
              <img src="https://parakeetbucket.s3.us-west-2.amazonaws.com/yum-ice-logo.svg" />
            </Box>
          </Stack>
        </Stack>
      </Box>

      {/* Right Side */}
      <Box
        sx={{
          width: lg ? "58%" : "100%",
          height: lg ? "100%" : "auto",
          paddingTop: lg ? "0" : "72px",
          display: "flex",
          alignItems: "center"
        }}
      >
        {/* Home image. Should be 3:2 or wider. */}
        <Box sx={{ flexGrow: "1" }}>
          <img src="https://parakeetbucket.s3.us-west-2.amazonaws.com/two_birds.svg" />
        </Box>
      </Box>
    </Box>
  )
}
