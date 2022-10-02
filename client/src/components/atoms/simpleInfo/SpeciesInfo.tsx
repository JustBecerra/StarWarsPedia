import { Typography } from "@mui/material";
import { speciesTypes } from "../../../redux/types/GQLtypes";

export default function SpeciesInfo(props: { categ: speciesTypes }) {
  return (
    <>
      <Typography variant="h5" color="#be9c65">
        {props.categ.name}
      </Typography>
      <Typography variant="h5" color="#be9c65">
        Homeworld:{" "}
        {props.categ.homeworld !== null
          ? props.categ.homeworld.name
          : "Unknown"}
      </Typography>
    </>
  );
}
