import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import GradeIcon from "@mui/icons-material/Grade"
import WorkspacesIcon from "@mui/icons-material/Workspaces"
import IcecreamIcon from "@mui/icons-material/Icecream"
import { fontSize } from "@mui/system"

export default function Bottom({ palette, widths }) {
  const { lg, menuBp } = widths

  return (
    <Stack
      direction={lg ? "row" : "column"}
      spacing={lg ? 2 : 4}
      sx={{
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      {/* Left column */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
      >
        <img
          width="50px"
          height="50px"
          style={{ position: "relative", bottom: 4 }}
          src="https://parakeetbucket.s3.us-west-2.amazonaws.com/footer-logo-1.svg"
        />
        {/* Company Name */}
        <Typography
          component="h1"
          sx={{
            fontFamily: "'Axios Pro', sans-serif",
            fontSize: menuBp ? 22 : 18,
            fontWeight: 600
          }}
        >
          Parakeet Accounting Ltd.
        </Typography>
      </Stack>
      {/* Middle column */}
      <Typography
        sx={{
          textAlign: lg ? "left" : "center",
          fontSize: "0.9rem"
        }}
      >
        {`© ${new Date().getFullYear()} `}
        Parakeet Accounting Ltd. All Rights Reserved. <br /> QuickBooks is a
        registered trademark and/or registered service mark of Intuit Inc., used
        with permission
      </Typography>
      {/* Right column */}
      <Stack
        direction="row"
        spacing={2}
      >
        <CircleLinks palette={palette}>
          <GradeIcon fontSize="small" />
        </CircleLinks>
        <CircleLinks palette={palette}>
          <WorkspacesIcon fontSize="small" />
        </CircleLinks>
        <CircleLinks palette={palette}>
          <IcecreamIcon fontSize="small" />
        </CircleLinks>
      </Stack>
    </Stack>
  )
}

function CircleLinks({ palette, children }) {
  return (
    <Box
      sx={{
        height: "30px",
        padding: "5px 5px 0",
        borderRadius: "30px",
        backgroundColor: palette.footer.contrastText,
        color: palette.footer.main
      }}
    >
      <Box>{children}</Box>
    </Box>
  )
}
