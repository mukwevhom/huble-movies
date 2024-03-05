import MovieItem from "../components/MovieItem";
import SearchHeader from "../components/SearchHeader";
import useSWR from 'swr';
import { fetcher } from "../utils/tmdb";

export default function Movies () {
    const {
        data,
        error,
        isValidating,
    } = useSWR(`${import.meta.env.VITE_TMDB_BASE_URL}/discover/movie`, fetcher);

    return (
        <>
            <SearchHeader />
            <section className="py-9">
                <div className="container mx-auto">
                    {error && <div className='failed'>failed to load</div>}
                    {isValidating && <div className="Loading">Loading...</div>}
                    {!data?.results.length && <p>No movies found</p>}
                    <div className="grid grid-cols-5 gap-4">
                        {data?.results.length &&
                            data?.results.map((movie: any) => 
                                <MovieItem key={movie.id} {...movie} />)}
                    </div>
                </div>
            </section>
        </>
    )
}