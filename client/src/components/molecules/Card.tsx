import { Box } from "@mui/system";
import FilmInfo from "../atoms/simpleInfo/FilmInfo";
import { Modal } from "@mui/material";
import React from "react";
import CompleteCardInfo from "../atoms/completeInfo/CompleteFilmInfo";
import {
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

const Card = ({ categ, currentCategory }) => {
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
        {currentCategory === "ALL_FILMS" ? (
          <FilmInfo categ={categ as filmTypes} />
        ) : null}
        {currentCategory === "ALL_CHARACTERS" ? (
          <CharactersInfo categ={categ as characterTypes} />
        ) : null}
        {currentCategory === "ALL_SPECIES" ? (
          <SpeciesInfo categ={categ as speciesTypes} />
        ) : null}
        {currentCategory === "ALL_VEHICULES" ? (
          <VehiculesInfo categ={categ as vehiculeTypes} />
        ) : null}
        {currentCategory === "ALL_PLANETS" ? (
          <PlanetsInfo categ={categ as planetTypes} />
        ) : null}
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CompleteCardInfo categ={categ as filmTypes} setOpen={setOpen} />
      </Modal>
    </>
  );
};

export default Card;
