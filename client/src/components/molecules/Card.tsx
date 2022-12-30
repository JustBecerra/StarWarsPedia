import { Box } from "@mui/system";
import FilmInfo from "../atoms/simpleInfo/FilmInfo";
import { Modal } from "@mui/material";
import React from "react";
import CompleteCardInfo from "../atoms/completeInfo/CompleteFilmInfo";
import {
  categoryTypes,
  characterTypes,
  filmTypes,
  planetTypes,
  speciesTypes,
  vehiculeTypes,
} from "../../redux/types/GQLtypes";
import CharactersInfo from "../atoms/simpleInfo/CharactersInfo";
import SpeciesInfo from "../atoms/simpleInfo/SpeciesInfo";
import VehiculesInfo from "../atoms/simpleInfo/VehiculesInfo";
import PlanetsInfo from "../atoms/simpleInfo/PlanetsInfo";

const Card = (props: { categ: categoryTypes; currentCategory: string }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box
        sx={{
          width: 11 / 12,
          height: 100,
          cursor: "pointer",
          marginRight: "auto",
          marginLeft: "auto",
          marginBottom: 1,
          border: "2px solid #be9c65",
        }}
        onClick={handleOpen}
      >
        {props.currentCategory === "ALL_FILMS" ? (
          <FilmInfo categ={props.categ as filmTypes} />
        ) : null}
        {props.currentCategory === "ALL_CHARACTERS" ? (
          <CharactersInfo categ={props.categ as characterTypes} />
        ) : null}
        {props.currentCategory === "ALL_SPECIES" ? (
          <SpeciesInfo categ={props.categ as speciesTypes} />
        ) : null}
        {props.currentCategory === "ALL_VEHICULES" ? (
          <VehiculesInfo categ={props.categ as vehiculeTypes} />
        ) : null}
        {props.currentCategory === "ALL_PLANETS" ? (
          <PlanetsInfo categ={props.categ as planetTypes} />
        ) : null}
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CompleteCardInfo categ={props.categ as filmTypes} />
      </Modal>
    </>
  );
};

export default Card;
