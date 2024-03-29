import { Typography, Container } from "@mui/material";
import { characterTypes } from "../../../redux/types/GQLtypes";

const CharactersInfo = (props: { categ: characterTypes }) => (
  <Container style={{ marginTop: 15 }}>
    <Typography variant="h5" color="#be9c65">
      {props.categ.name}
    </Typography>
    <Typography variant="h5" color="#be9c65">
      Species:{" "}
      {props.categ.species !== null ? props.categ.species?.name : "Human"}
    </Typography>
  </Container>
);

export default CharactersInfo;
