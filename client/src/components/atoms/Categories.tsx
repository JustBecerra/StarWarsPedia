import MovieSharpIcon from "@mui/icons-material/MovieSharp";
import PeopleAltSharpIcon from "@mui/icons-material/PeopleAltSharp";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Yoda from "../../imgs/yoda.png";
import { styled, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { GET_CATEGORY } from "../../redux/reducer/RootReducer";
import { useDispatch } from "react-redux";

const Categories = () => {
  const dispatch = useDispatch();

  const Yodalogo = styled("img")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    width: 50,
    height: 50,
  }));

  return (
    <>
      <Link to="/categories" style={{ textDecoration: "none" }}>
        <IconButton onClick={() => dispatch(GET_CATEGORY("ALL_FILMS"))}>
          <Typography variant="h6" color="whitesmoke">
            Films
          </Typography>
          <MovieSharpIcon sx={{ color: "whitesmoke" }} />
        </IconButton>
      </Link>
      <Link to="/categories" style={{ textDecoration: "none" }}>
        <IconButton onClick={() => dispatch(GET_CATEGORY("ALL_CHARACTERS"))}>
          <Typography variant="h6" color="whitesmoke">
            Characters
          </Typography>
          <PeopleAltSharpIcon sx={{ color: "whitesmoke" }} />
        </IconButton>
      </Link>
      <Link to="/categories" style={{ textDecoration: "none" }}>
        <IconButton onClick={() => dispatch(GET_CATEGORY("ALL_PLANETS"))}>
          <Typography variant="h6" color="whitesmoke">
            Planets
          </Typography>
          <LanguageSharpIcon sx={{ color: "whitesmoke" }} />
        </IconButton>
      </Link>
      <Link to="/categories" style={{ textDecoration: "none" }}>
        <IconButton onClick={() => dispatch(GET_CATEGORY("ALL_SPECIES"))}>
          <Typography variant="h6" color="whitesmoke">
            Species
          </Typography>
          <Yodalogo src={Yoda} />
        </IconButton>
      </Link>
      <Link to="/categories" style={{ textDecoration: "none" }}>
        <IconButton onClick={() => dispatch(GET_CATEGORY("ALL_VEHICULES"))}>
          <Typography variant="h6" color="whitesmoke">
            Vehicules
          </Typography>
          <RocketLaunchIcon sx={{ color: "whitesmoke" }} />
        </IconButton>
      </Link>
    </>
  );
};

export default Categories;
