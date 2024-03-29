import { Container, Typography } from "@mui/material";
import { vehiculeTypes } from "../../../redux/types/GQLtypes";

const VehiculesInfo = (props: { categ: vehiculeTypes }) => (
  <Container style={{ marginTop: 15 }}>
    <Typography variant="h5" color="#be9c65">
      {props.categ.name + " " + props.categ.model}
    </Typography>
    <Typography variant="h5" color="#be9c65">
      Vehicule Class: {props.categ.vehicleClass}
    </Typography>
  </Container>
);

export default VehiculesInfo;
