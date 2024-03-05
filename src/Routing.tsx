import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Search from "./routes/Search";
import Movie from "./routes/Movie";
import NavBar from "./components/NavBar";

export default function Routing () {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/movie/:movieId" element={<Movie />} />
            </Routes>
        </BrowserRouter>
    )
}