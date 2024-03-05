import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
import useSWR from "swr";
import MovieItem from "./MovieItem";
import { fetcher } from "../utils/tmdb";

export default function TrendingMovies () {
    const {
        data,
        error,
        isValidating,
    } = useSWR(`${import.meta.env.VITE_TMDB_BASE_URL}/trending/movie/day`, fetcher);

    if (error) return <div className='failed'>failed to load</div>;
    if (isValidating) return <div className="Loading">Loading...</div>;

    return (
        <section className="py-9">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <h2 className="font-bold text-2xl">Trending</h2>
                    <Link to="/movies" className="py-2 px-4 rounded-full border border-black font-medium">See More <ArrowRightIcon className="inline w-4 h-4" /></Link>
                </div>
                <div className="grid grid-cols-5 gap-4 mt-4">
                    {data.results &&
                        data.results.map((movie: any) => 
                            <MovieItem key={movie.id} {...movie} />)}
                </div>
            </div>
        </section>
    )
}