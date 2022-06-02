import { Container, Box } from "@mui/material"
import MainCardInfo from "../../molecules/MainCardInfo/MainCardInfo"

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
                <MainCardInfo />
            </Box>
        </Container>
    )
}