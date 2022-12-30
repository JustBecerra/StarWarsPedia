import { Container, Typography } from "@mui/material";
import { planetTypes } from "../../../redux/types/GQLtypes";

const PlanetsInfo = (props: { categ: planetTypes }) => (
  <Container style={{ marginTop: 15 }}>
    <Typography variant="h5" color="#be9c65">
      {props.categ.name}
    </Typography>
    <Typography variant="h5" color="#be9c65">
      Population: {props.categ.population}
    </Typography>
  </Container>
);

export default PlanetsInfo;
