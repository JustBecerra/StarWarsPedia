import { Typography } from "@mui/material";
import { planetTypes } from "../../../redux/types/GQLtypes";

const PlanetsInfo = (props: { categ: planetTypes }) => (
  <>
    <Typography variant="h5" color="#be9c65">
      {props.categ.name}
    </Typography>
    <Typography variant="h5" color="#be9c65">
      Population: {props.categ.population}
    </Typography>
  </>
);

export default PlanetsInfo;
