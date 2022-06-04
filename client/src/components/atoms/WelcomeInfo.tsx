import { Typography } from "@mui/material";
import {  Box } from "@mui/system";

export default function WelcomeInfo(){
    return(
        <Box
          sx={{
            width: 500,
            position: 'relative',
            bottom: 250,
          }}
        >
            <Typography
                variant="body1"
                color="#ffffff"
            >
                Have you ever watched a star wars movie or tv show and wondered who that character is? what planet is that?
                or what ship was that smuggler flying? well, you came to the right place.
            </Typography>
        </Box>        
    )
}