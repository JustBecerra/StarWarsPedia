import { Container, Box } from "@mui/material"
import OpeningInfo from "../molecules/OpeningInfo"

export default function MainCard(){
    return(
        <Container>
            <Box
                sx={{
                    width: 1000,
                    height: 600,
                    backgroundColor: '#13191a',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    marginTop: 5,
                    // paddingTop: '100px',
                  }}
            >
                <OpeningInfo />
            </Box>
        </Container>
    )
}