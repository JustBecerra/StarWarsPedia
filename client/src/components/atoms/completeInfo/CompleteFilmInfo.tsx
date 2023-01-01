import { Box } from "@mui/system";
import { Button, Typography, Container } from "@mui/material";

const CompleteMovieInfo = ({ categ, setOpen }) => (
  <Box
    sx={{
      width: 600,
      height: "fit-content",
      backgroundColor: "#13191a",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      border: "2px solid #be9c65",
      padding: 5,
    }}
  >
    <Container sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Button variant="outlined" color="error" onClick={setOpen(false)}>
        X
      </Button>
    </Container>
    <Typography variant="h4" color="#be9c65">
      Episode {categ.episodeID}: {categ.title}
    </Typography>
    <Typography variant="h6" color="#be9c65">
      Directed by {categ.director}
    </Typography>
    <Typography variant="h6" color="#be9c65">
      Released in {categ.releaseDate}
    </Typography>
    <Typography variant="body1" color="#be9c65">
      {categ.openingCrawl}
    </Typography>
  </Box>
);

export default CompleteMovieInfo;
