import { Link } from "react-router-dom";

export default function NavBar () {
    return (
        <header className="absolute top-0 left-0 right-0 text-white z-10">
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-4">
                    <nav>
                        <ul className="flex gap-4">
                            <li>
                                <Link to="/" className="font-medium">Home</Link>
                            </li>
                            <li>
                                <Link to="/movies" className="font-medium">Movies</Link>
                            </li>
                        </ul>
                    </nav>
                    <Link to="/" className="text-2xl font-bold italic">Huble Movies</Link>
                    <div className="">
                        <form action="/search">
                            <input type="text" name="query" placeholder="I am looking for..." className="border rounded-full px-2 py-1" />
                        </form>
                    </div>
                </div>
            </div>
        </header>
    )
}