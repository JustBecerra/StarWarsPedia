import { Box, Container } from "@mui/system";
import Card from "../molecules/Card";

export default function CardDisplayer(){
    return(
        <Container>
            <Box
                sx={{
                    width: 1000,
                    height: 600,
                    backgroundColor: '#13191a',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    marginTop: 11,
                    paddingTop: 5,
                }}
            >
                <Card/>
            </Box>
        </Container>
    )
}