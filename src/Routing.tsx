import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Search from "./routes/Search";
import Movie from "./routes/Movie";

export default function Routing () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/movie" element={<Movie />} />
            </Routes>
        </BrowserRouter>
    )
}