import { Link } from "react-router-dom";

export default function MovieItem () {
    return (
        <Link to="/movie/12345" className="w-full border rounded-md aspect-[3/4] relative">
            <figure>
                <img src="https://picsum.photos/id/237/200/300" alt="Images" className="w-full h-full object-cover rounded-md" />
            </figure>
            <div className="absolute px-4 pb-4 bottom-0 text-white bg-black-600/30 backdrop-brightness-50">
                <h3 className="mb-2 text-2xl font-semibold">Movie Title</h3>
                <p className="text-sm line-clamp-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae mollitia quod ut iste odio vero quasi minima reprehenderit eius rem voluptatum fugiat minus, repudiandae quam dolorum</p>
            </div>
        </Link>
    )
}