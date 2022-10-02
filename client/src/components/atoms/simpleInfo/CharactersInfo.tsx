import { Typography } from "@mui/material";
import { characterTypes } from "../../../redux/types/GQLtypes";

export default function CharactersInfo(props: { categ: characterTypes }) {
  console.log(props.categ.species);
  return (
    <>
      <Typography variant="h5" color="#be9c65">
        {props.categ.name}
      </Typography>
      <Typography variant="h5" color="#be9c65">
        Species:{" "}
        {props.categ.species !== null ? props.categ.species?.name : "Human"}
      </Typography>
    </>
  );
}
