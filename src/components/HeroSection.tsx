import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
import { fetcher } from "../utils/tmdb";
import useSWR from "swr";

export default function HeroSection () {
    const {
        data,
        error,
        isValidating,
    } = useSWR(`${import.meta.env.VITE_TMDB_BASE_URL}/trending/movie/day`, fetcher);

    if (error) return <div className='failed'>failed to load</div>;
    if (isValidating) return <div className="Loading">Loading...</div>;

    return (
        <section className="bg-gray-800 text-white h-[90lvh] bg-cover bg-center" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${data.results[0].backdrop_path}')` }}>
            <div className="w-full h-full bg-blue-600/30 backdrop-brightness-50">
                <div className="container mx-auto h-full relative">
                    <div className="w-1/2 absolute bottom-12">
                        <h1 className="font-bold text-5xl mb-3">{data.results[0].title}</h1>
                        <p>{data.results[0].overview}</p>
                        <div className="flex gap-x-3 mt-6">
                            <Link to={`/movie/${data.results[0].id}`} className="py-2 px-4 rounded-full border border-white font-medium">More Info <ArrowRightIcon className="inline w-6 h-6" /> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}