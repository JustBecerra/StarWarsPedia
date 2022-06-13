import { Box } from "@mui/system"
import SimpleCardInfo from "../atoms/SimpleCardInfo"
import { Modal } from "@mui/material"
import React from "react";
import CompleteCardInfo from "../atoms/CompleteCardInfo";

export default function Card({film}: any) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <>
            <Box sx={{
                width: 930,
                height: 200,
                // backgroundColor: '#13191a',
                borderColor: 'blue.500',
                marginRight: 'auto',
                marginLeft: 'auto',
                marginTop: 1,
                marginBottom: 1,
                }}
              onClick={handleOpen}
            >
                <SimpleCardInfo title={film.title} releaseDate={film.releaseDate}/>
            </Box>  
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <CompleteCardInfo film={film}/>
            </Modal>
        </>
    )
}