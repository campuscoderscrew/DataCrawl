export default function LandingHeader({ label, title, subtext }) {
    return (
        <>
            <div>
                <button>{label}</button>
                <h1>{title}</h1>
                <p>{subtext}</p>
            </div>
        </>
    )
}