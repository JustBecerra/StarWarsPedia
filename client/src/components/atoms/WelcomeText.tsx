import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const WelcomeText = () => (
  <Box
    sx={{
      width: 550,
    }}
  >
    <Typography variant="h1" color="#be9c65" pt={8}>
      Hello there!
    </Typography>
  </Box>
);

export default WelcomeText;
