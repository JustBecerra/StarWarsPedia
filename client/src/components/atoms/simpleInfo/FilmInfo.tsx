import { Container, Typography } from "@mui/material";
import { filmTypes } from "../../../redux/types/GQLtypes";

const FilmInfo = (props: { categ: filmTypes }) => (
  <Container style={{ marginTop: 15 }}>
    <Typography variant="h5" color="#be9c65">
      {props.categ.title}
    </Typography>
    <Typography variant="h5" color="#be9c65">
      Release date: {props.categ.releaseDate}
    </Typography>
  </Container>
);

export default FilmInfo;
