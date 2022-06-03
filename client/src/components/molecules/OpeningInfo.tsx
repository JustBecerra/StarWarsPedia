import { Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import WelcomeText from "../atoms/WelcomeText";
import WelcomeInfo from "../atoms/WelcomeInfo";
import RepublicLogo from "../atoms/RepublicLogo";

export default function OpeningInfo(){
    return(
        <Container>
            <WelcomeText />
            <RepublicLogo />
            <WelcomeInfo />
        </Container>
    )
}