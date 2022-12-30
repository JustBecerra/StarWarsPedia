import NavBar from "../molecules/NavBar";
import MainCard from "../templates/MainCard";
import CategoryDisplay from "../templates/CategoryDisplay";
import { Routes, Route } from "react-router-dom";

const DesktopVersion = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<MainCard />} />
      <Route path="/categories" element={<CategoryDisplay />} />
    </Routes>
  </>
);

export default DesktopVersion;
