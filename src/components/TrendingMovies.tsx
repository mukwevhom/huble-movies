import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
import MovieItem from "./MovieItem";

export default function TrendingMovies () {
    return (
        <section className="py-9">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <h2 className="font-bold text-2xl">Trending</h2>
                    <Link to="/movies" className="py-2 px-4 rounded-full border border-black font-medium">See More <ArrowRightIcon className="inline w-4 h-4" /></Link>
                </div>
                <div className="grid grid-cols-5 gap-4">
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                </div>
            </div>
        </section>
    )
}