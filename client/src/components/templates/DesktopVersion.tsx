import NavBar from "../molecules/NavBar";
import MainCard from "../organisms/MainCard";
import CategoryDisplay from "../organisms/CategoryDisplay";
import { Routes, Route } from "react-router-dom";

export default function DesktopVersion(){
    //navbar should be integrated into an organism
    return(
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<MainCard />} />
                <Route path="/category" element={<CategoryDisplay />} />
            </Routes>
        </>
    )
}
    
