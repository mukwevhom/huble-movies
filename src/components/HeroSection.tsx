import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

export default function HeroSection () {
    return (
        <section className="bg-gray-800 text-white h-[90lvh]">
            <div className="w-full h-full bg-blue-600/30 backdrop-brightness-50">
                <div className="container mx-auto h-full relative">
                    <div className="w-1/2 absolute bottom-12">
                        <h1 className="font-bold text-5xl mb-3">Movie Title</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam voluptatum sint corporis, accusamus in nemo molestias cupiditate blanditiis delectus, expedita rerum doloremque quam pariatur asperiores quisquam ad incidunt ea laborum!</p>
                        <div className="flex gap-x-3 mt-6">
                            <Link to="/movie/12345" className="py-2 px-4 rounded-full border border-white font-medium">More Info <ArrowRightIcon className="inline w-6 h-6" /> </Link>
                            <a href="" target="_blank" rel="noreferrer" className="py-2 px-4 rounded-full border border-white font-medium">Watch on Netflix</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}