import { Container } from "@mui/system";
import NavBar from "../molecules/NavBar";
import MainCard from "../organisms/MainCard";

export default function DesktopVersion(){
    //navbar should be in an organism
    return(
        <>
            <NavBar />
            <MainCard />
        </>
    )
}
    
