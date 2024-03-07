import useSWR from "swr";
import { fetcher } from "../utils/tmdb";
import CastItemSkeleton from "./skeletons/CastItemSkeleton";

export default function Cast ({movieId}: any) {
    const {
        data,
        error,
        isValidating,
    } = useSWR(`${import.meta.env.VITE_TMDB_BASE_URL}/movie/${movieId}/credits`, fetcher);

    if (error) return <div className='failed'>failed to load</div>;

    return (
        <ul className="grid grid-cols-4 md:grid-cols-12 gap-4">
            {isValidating && <CastItemSkeleton />}
            {data?.cast && data?.cast.map((cast: any) => (
                <li className="text-center">
                    <figure className="rounded-full overflow-hidden mb-2 aspect-square">
                        <img src={cast.profile_path ?`https://image.tmdb.org/t/p/w185${cast.profile_path}`: "https://via.placeholder.com/185"} alt={cast.name}/>
                    </figure>
                    <h4 className="text-sm font-semibold">{cast.name}</h4>
                </li>
            ))}
        </ul>
    )
}