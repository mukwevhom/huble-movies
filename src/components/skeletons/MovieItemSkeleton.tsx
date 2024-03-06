export default function MovieItemSkeleton (props: any) {
    return (
        <div className="w-full h-full overflow-hidden border rounded-md aspect-[3/4] relative animate-pulse">
            <div className="w-full absolute px-4 pb-4 bottom-0 text-white bg-black-600/30 backdrop-brightness-50">
                <div className="bg-gray-300 w-1/2 h-8 rounded-md mb-2"></div>
                <div className="bg-gray-300 w-full h-4 rounded-md">{props.overview}</div>
            </div>
        </div>
    )
}