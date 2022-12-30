import { Container, Typography } from "@mui/material";
import { speciesTypes } from "../../../redux/types/GQLtypes";

const SpeciesInfo = (props: { categ: speciesTypes }) => (
  <Container style={{ marginTop: 15 }}>
    <Typography variant="h5" color="#be9c65">
      {props.categ.name}
    </Typography>
    <Typography variant="h5" color="#be9c65">
      Homeworld:{" "}
      {props.categ.homeworld !== null ? props.categ.homeworld.name : "Unknown"}
    </Typography>
  </Container>
);

export default SpeciesInfo;
