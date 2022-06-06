import { Box } from "@mui/material"
import jedilogo from "../../imgs/jedilogo.png"
import { styled } from '@mui/material/styles';

export default function RepublicLogo(){
    const IntroLogo = styled('img')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        width: 300,
    }));

    return(
        <Box
            sx={{
                position:"relative",
                left: 550,
                width: 300,
                bottom: 150,
            }}
        >
            <IntroLogo src={jedilogo}/>
        </Box>
        
    )
}