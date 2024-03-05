export default function Movie () {
    return (
        <>
            <section className="bg-gray-800 text-white h-[60lvh]">
                <div className="w-full h-full bg-black-600/30 backdrop-brightness-50">
                    <div className="container mx-auto h-full relative">
                        <div className="w-1/2 absolute bottom-12">
                            <h1 className="font-bold text-5xl mb-3">Movie Title</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-9">
                <div className="container mx-auto">
                    <div className="mb-6">
                        <h3 className="font-bold text-xl uppercase mb-3 text-gray-500">Description</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta itaque sapiente accusamus modi architecto? Ut quis ipsa inventore beatae. Ipsa explicabo autem tempore maxime magni ea vitae sint fuga.</p>
                    </div>
                    <div className="">
                        <h3 className="font-bold text-xl uppercase mb-3 text-gray-500">Cast</h3>
                        <ul className="grid grid-cols-12 gap-4">
                            <li className="text-center">
                                <figure className="rounded-full overflow-hidden mb-2">
                                    <img src="https://picsum.photos/id/237/300/300" alt="Images"/>
                                </figure>
                                <h4 className="text-sm font-semibold">Name</h4>
                            </li>
                            <li className="text-center">
                                <figure className="rounded-full overflow-hidden mb-2">
                                    <img src="https://picsum.photos/id/237/300/300" alt="Images"/>
                                </figure>
                                <h4 className="text-sm font-semibold">Name</h4>
                            </li>
                            <li className="text-center">
                                <figure className="rounded-full overflow-hidden mb-2">
                                    <img src="https://picsum.photos/id/237/300/300" alt="Images"/>
                                </figure>
                                <h4 className="text-sm font-semibold">Name</h4>
                            </li>
                            <li className="text-center">
                                <figure className="rounded-full overflow-hidden mb-2">
                                    <img src="https://picsum.photos/id/237/300/300" alt="Images"/>
                                </figure>
                                <h4 className="text-sm font-semibold">Name</h4>
                            </li>
                            <li className="text-center">
                                <figure className="rounded-full overflow-hidden mb-2">
                                    <img src="https://picsum.photos/id/237/300/300" alt="Images"/>
                                </figure>
                                <h4 className="text-sm font-semibold">Name</h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}