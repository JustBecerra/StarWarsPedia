import NavBar from "../molecules/NavBar";
import MainCard from "../templates/MainCard";
import CategoryDisplay from "../templates/CategoryDisplay";
import { Routes, Route } from "react-router-dom";

export default function DesktopVersion(){
    //navbar should be integrated into an organism
    return(
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<MainCard />} />
                <Route path="/categories" element={<CategoryDisplay />} />
            </Routes>
        </>
    )
}
    
