import { Typography } from "@mui/material";
import { filmTypes } from "../../../redux/types/GQLtypes";

const FilmInfo = (props: { categ: filmTypes }) => (
  <>
    <Typography variant="h5" color="#be9c65">
      {props.categ.title}
    </Typography>
    <Typography variant="h5" color="#be9c65">
      Release date: {props.categ.releaseDate}
    </Typography>
  </>
);

export default FilmInfo;
