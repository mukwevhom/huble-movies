import MovieItem from "../components/MovieItem";
import SearchHeader from "../components/SearchHeader";

export default function Movies () {
    return (
        <>
            <SearchHeader />
            <section className="py-9">
                <div className="container mx-auto">
                    <div className="grid grid-cols-5 gap-4">
                        <MovieItem />
                        <MovieItem />
                        <MovieItem />
                        <MovieItem />
                    </div>
                </div>
            </section>
        </>
    )
}