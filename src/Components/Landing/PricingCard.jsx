function Pill({show=false}) {
    if (show) {
        return (
            <div className="border-solid border-[1.31px] border-[#4B4B4B] px-4 flex items-center bg-[#7F7A7A]/20 rounded-[56.5px]">
                <img src="/landing/Sparkles.svg" className="mr-[8px]" />
                <p className="text-[#DCDCDC] text-sm font-bold">Popular</p>
            </div>
        )
    }
}

function FeatureItem({feature}) {
    if (feature != undefined) {
        return (
            <div className="my-[16px] flex items-center">
                <img src="/landing/Done.svg" className="h-5 mr-[16px]" />
                <p className="text-[#A4A4A4] h-full">{feature}</p>
            </div>
        )
    }
}

export default function PricingCard({
    plan,
    isPopular,
    description,
    cost,
    pages,
    feature2,
    feature3,
    feature4,
    feature5
}) {
    return (
        <>
            <div className="border-solid border-[1.1px] border-[#313131] bg-[linear-gradient(_#1E1E1E,_#111_50%)] rounded-[16.48px] max-w-md p-10 font-[Roboto] text-base">
                <div id="heading" className="flex justify-between">
                    <h2 className="text-[#DCDCDC] text-2xl font-bold">{plan}</h2>
                    <Pill show={isPopular} />
                </div>
                <p className="text-[#B4B4B4] mt-[24px] mb-[32px]">{description}</p>
                <div className="border-solid border-t-[1.26px] border-[#373737]" />
                <p className="text-[#B4B4B4] my-[32px]"><span className="text-[#DCDCDC] text-5xl font-bold me-[8px]">${cost}</span>/month</p>
                <button className="w-full mb-[16px] p-2 text-sm rounded-[12.59px] text-white font-bold border-[1.26px] border-solid border-[#373737] hover:cursor-pointer transition duration-400 hover:bg-[#201e1e]">Get Started</button>
                <FeatureItem feature={`${pages} pages per month`} />
                <FeatureItem feature={feature2} />
                <FeatureItem feature={feature3} />
                <FeatureItem feature={feature4} />
                <FeatureItem feature={feature5} />
            </div>
        </>
    )
}