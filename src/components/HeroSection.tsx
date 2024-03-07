import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
import { fetcher } from "../utils/tmdb";
import useSWR from "swr";
import clsx from "clsx"
import { useEffect, useState } from "react";

export default function HeroSection () {
    const [randomMovie, setRandomMovie] = useState(0);
    const {
        data,
        error,
        isValidating,
    } = useSWR(`${import.meta.env.VITE_TMDB_BASE_URL}/trending/movie/day`, fetcher);

    useEffect(() => {
        setRandomMovie(Math.floor(Math.random()*20))
    }, [])

    if (error) return <div className='failed'>failed to load</div>;

    return (
        <section className={clsx("bg-gray-800 text-white h-[90lvh] bg-cover bg-center", isValidating && "animate-pulse")} style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${data?.results[randomMovie].backdrop_path}')` }}>
            <div className="w-full h-full bg-blue-600/30 backdrop-brightness-50">
                <div className="container mx-auto h-full relative">
                    <div className="md:w-1/2 absolute bottom-12 left-8 md:left-8 right-8 md:right-8">
                        <h1 className={clsx("font-bold text-5xl mb-3", isValidating && "bg-gray-300 text-gray-300 w-1/2 h-9 rounded-md")}>{data?.results[randomMovie].title}</h1>
                        <p className={clsx("line-clamp-3 md:line-clamp-4", isValidating && "bg-gray-300 text-gray-300 w-full h-4 rounded-md")}>{data?.results[randomMovie].overview}</p>
                        <div className="flex gap-x-3 mt-6">
                            <Link to={`/movie/${data?.results[randomMovie].id}`} className={clsx("py-2 px-4 rounded-full border border-white font-medium", isValidating && "bg-gray-300 text-gray-300")}>More Info <ArrowRightIcon className="inline w-6 h-6" /> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}