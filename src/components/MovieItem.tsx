import { Link } from "react-router-dom";

export default function MovieItem (props: any) {
    return (
        <Link to={`/movie/${props.id}`} className="w-full h-full overflow-hidden border rounded-md aspect-[3/4] relative">
            <figure>
                <img src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} alt={props.title} className="w-full h-full object-cover rounded-md" />
            </figure>
            <div className="absolute px-4 pb-4 bottom-0 text-white bg-black-600/30 backdrop-brightness-50">
                <h3 className="mb-2 text-2xl font-semibold">{props.title}</h3>
                <p className="text-sm line-clamp-3">{props.overview}</p>
            </div>
        </Link>
    )
}