import { Typography } from "@mui/material";
import { vehiculeTypes } from "../../../redux/types/GQLtypes";

export default function VehiculesInfo(props: { categ: vehiculeTypes }) {
  return (
    <>
      <Typography variant="h5" color="#be9c65">
        {props.categ.name + " " + props.categ.model}
      </Typography>
      <Typography variant="h5" color="#be9c65">
        Vehicule Class: {props.categ.vehicleClass}
      </Typography>
    </>
  );
}
