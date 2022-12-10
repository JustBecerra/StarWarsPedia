import { Typography } from "@mui/material";
import { planetTypes } from "../../../redux/types/GQLtypes";

export default function PlanetsInfo(props: { categ: planetTypes }) {
  return (
    <>
      <Typography variant="h5" color="#be9c65">
        {props.categ.name}
      </Typography>
      <Typography variant="h5" color="#be9c65">
        Population: {props.categ.population}
      </Typography>
    </>
  );
}
