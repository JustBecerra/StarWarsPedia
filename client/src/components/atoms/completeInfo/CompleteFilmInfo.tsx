import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { filmTypes } from "../../../redux/types/GQLtypes";

export default function CompleteMovieInfo(props: { categ: filmTypes }) {
  return (
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
      }}
    >
      <Typography variant="h4" color="#be9c65">
        Episode {props.categ.episodeID}: {props.categ.title}
      </Typography>
      <Typography variant="h6" color="#be9c65">
        Directed by {props.categ.director}
      </Typography>
      <Typography variant="h6" color="#be9c65">
        Released in {props.categ.releaseDate}
      </Typography>
      <Typography variant="body1" color="#be9c65">
        {props.categ.openingCrawl}
      </Typography>
    </Box>
  );
}
