import { Routes, Route, Link } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { DCScreen } from "../components/dc/DCScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Hero, HeroScreen } from "../components/hero/HeroScreen";

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className="container">
          <Routes>
              <Route path="marvel" element={<MarvelScreen />} />
              <Route path="dc" element={<DCScreen />} />
          
              <Route path="search" element={<SearchScreen />} />
          
              <Route path="hero/:heroeId" element={<HeroScreen />} />
          
              <Route path="/" element={<MarvelScreen />} />
          </Routes>
        </div>
    </>
  )
}
