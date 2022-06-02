import { Container } from "@mui/system";
import NavBar from "../molecules/NavBar/NavBar";
import MainCard from "../organisms/MainCard/MainCard";

export default function DesktopVersion(){
    //navbar should be in an organism
    return(
        <>
            <NavBar />
            <MainCard />
        </>
    )
}
    
