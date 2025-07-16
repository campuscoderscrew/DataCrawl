export default function Need(props) {
    return (
        <span className="flex flex-col items-center justify-center p-2">
            <div
                className=" rounded-full p-5 mb-5 hover:cursor-pointer hover:scale-[1.1] duration-500"
                style={{
                    background: 'linear-gradient(122.34deg, #1B1B1B 56.98%, #818181 264.45%)',
                }}>
                <img src={props.img} className="w-12" />
            </div>
            <p className="text-[#878787] text-md font-[Heebo] font-bold tracking-wide">{props.text}</p>
        </span>
    )
}
