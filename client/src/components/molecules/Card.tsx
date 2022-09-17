import { Box } from "@mui/system";
import MovieInfo from "../atoms/MovieInfo";
import { Modal } from "@mui/material";
import React from "react";
import CompleteCardInfo from "../atoms/CompleteCardInfo";
import { categoryTypes, filmTypes } from "../../redux/types/GQLtypes";

export default function Card(props: { categ: categoryTypes }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box
        sx={{
          width: 930,
          height: 200,
          // backgroundColor: '#13191a',
          borderColor: "blue.500",
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: 1,
          marginBottom: 1,
        }}
        onClick={handleOpen}
      >
        <MovieInfo categ={props.categ as filmTypes} />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CompleteCardInfo categ={props.categ} />
      </Modal>
    </>
  );
}
