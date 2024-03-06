import MovieItem from "../components/MovieItem";
import SearchHeader from "../components/SearchHeader";
import MovieItemSkeleton from "../components/skeletons/MovieItemSkeleton";
import useSWR from 'swr';
import { fetcher } from "../utils/tmdb";
import { useSearchParams } from "react-router-dom";

export default function Search () {
    const [searchParams] = useSearchParams()

    const {
        data,
        error,
        isValidating,
    } = useSWR(`${import.meta.env.VITE_TMDB_BASE_URL}/search/movie?query=${searchParams.get("query")}`, fetcher);

    return (
        <>
            <SearchHeader />
            <section className="py-9">
                <div className="container mx-auto">
                    {error && <div className='failed'>failed to load</div>}
                    { (!data?.results.length && !isValidating) && <p>No movies found</p> }
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {isValidating && <MovieItemSkeleton />}
                        {data?.results &&
                            data?.results.map((movie: any) => 
                                <MovieItem key={movie.id} {...movie} />)}
                    </div>
                </div>
            </section>
        </>
    )
}