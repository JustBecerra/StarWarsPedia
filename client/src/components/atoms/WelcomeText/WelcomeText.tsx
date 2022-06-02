import { Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function WelcomeText(){
    return(
        <Container>
            <Typography
                variant="h1"
            >
                Hello there!
            </Typography>
            <Typography
                variant="body1"
            >
                This page was made with the purpose of helping newcomers to Star Wars in finding information
                about the lore of the Star Wars universe.
            </Typography>
        </Container>
    )
}