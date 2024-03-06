import { useParams } from "react-router-dom"
import useSWR from "swr";
import clsx from "clsx"
import { fetcher } from "../utils/tmdb";
import Cast from "../components/Cast";

export default function Movie () {
    let { movieId } = useParams()

    const {
        data,
        error,
        isValidating,
    } = useSWR(`${import.meta.env.VITE_TMDB_BASE_URL}/movie/${movieId}`, fetcher);

    if (error) return <div className='failed'>failed to load</div>;

    return (
        <>
            <section className={clsx("bg-gray-800 text-white h-[60lvh] bg-cover bg-top", isValidating && "animate-pulse")} style={{"backgroundImage": `url('https://image.tmdb.org/t/p/original${data?.backdrop_path}')`}}>
                <div className="w-full h-full bg-black-600/30 backdrop-brightness-50">
                    <div className="container mx-auto h-full relative">
                        <div className="md:w-1/2 absolute bottom-12">
                            <h1 className={clsx("font-bold text-5xl mb-3", isValidating && "bg-gray-300 text-gray-300 w-1/2 h-9 rounded-md")}>{data?.title}</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-9">
                <div className="container mx-auto">
                    <div className="mb-6">
                        <h3 className="font-bold text-xl uppercase mb-3 text-gray-500">Description</h3>
                        <p className={clsx(isValidating && "bg-gray-300 text-gray-300 w-full h-4 rounded-md")}>{data?.overview}</p>
                    </div>
                    <div className="">
                        <h3 className="font-bold text-xl uppercase mb-3 text-gray-500">Cast</h3>
                        <Cast movieId={data?.id} />
                    </div>
                </div>
            </section>
        </>
    )
}