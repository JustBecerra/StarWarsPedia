import { Container } from "@mui/system";
import WelcomeText from "../atoms/WelcomeText";
import WelcomeInfo from "../atoms/WelcomeInfo";
import RepublicLogo from "../atoms/RepublicLogo";

const OpeningInfo = () => (
  <Container>
    <WelcomeText />
    <RepublicLogo />
    <WelcomeInfo />
  </Container>
);

export default OpeningInfo;
