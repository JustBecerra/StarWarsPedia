import { Container } from "@mui/system";
import { Box, Typography } from "@mui/material";
import jedilogo from "../../imgs/jedilogo.png";
import { styled } from "@mui/material/styles";

const OpeningInfo = () => {
  const IntroLogo = styled("img")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    width: 300,
  }));
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        width: 11 / 12,
        height: 600,
        backgroundColor: "#13191a",
        justifySelf: "center",
        marginTop: 12,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: 600,
          flexDirection: "column",
        }}
      >
        <Typography variant="h1" color="#be9c65" pt={8}>
          Hello there!
        </Typography>
        <Typography variant="h5" color="#be9c65" pt={6}>
          A long time ago in a galaxy far, far away....
        </Typography>
        <Typography variant="body1" color="#ffffff" pt={2}>
          A young Software Developer decided to create this site so people can
          read about specific topics after watching a Star Wars movie or TV
          show. Currently it displays most of the canon information from the
          original and prequel trilogies but hopefully users will add more
          information as time goes on.
        </Typography>
      </Box>
      <Box
        sx={{
          width: 300,
          marginLeft: 10,
        }}
      >
        <IntroLogo src={jedilogo} />
      </Box>
    </Container>
  );
};

export default OpeningInfo;
