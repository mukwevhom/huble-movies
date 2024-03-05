export default function SearchHeader() {
    return (
        <section className="py-32 bg-slate-600/75">
            <div className="container mx-auto">
                <h1 className="font-bold text-3xl text-center">Find Movies for your next adventure</h1>
                <form action="/search" className="mt-8 w-fullmd:w-1/2 lg:w-1/3 mx-auto">
                    <input type="text" name="query" placeholder="I am looking for..." className="w-full border rounded-full px-2 py-1" />
                </form>
            </div>
        </section>
    )
}