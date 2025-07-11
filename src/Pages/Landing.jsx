/*  

All assets needed (images) should be under public/landing

Components related to this page are in Components/Landing

 */


export default function Landing() {
    return (
        <div className="bg-[#111111] h-screen w-screen overflow-x-clip">
            {/* Hero */}
            <main className="w-full aspect-[1.5] max-h-full  bg-gradient-radial at-[60%_50%] from-[#111111] to-[#ffffff]  overflow-x-hidden relative box-border px-25 xl:px-35 flex flex-col justify-center">

                <img src="/landing/spider-graphic-2.svg" className="h-[70%] absolute top-[20%] -right-[5%] xl:h-[80%] xl:top-[15%] 2xl:right-[2.5%]" id="spider-graphic" />

                <nav className="flex justify-between py-10 *:text-[#E3E3E3] text-sm absolute w-full left-0 box-border px-25 xl:px-35 top-0">
                    <span className="flex items-center gap-4">
                        <img src="/landing/Logo.svg" className="w-8" />
                        <p>DataCrawl</p>
                    </span>
                    <div className="flex gap-6 items-center *:transition-all *:duration-200 *:hover:cursor-pointer *:hover:text-[#b5b5b5]">
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>Investors</p>
                        <p>Contact</p>
                    </div>
                    <div className="gap-6 flex items-center *:text-xs">
                        <button className="border-1 px-6 py-2.5 rounded-3xl hover:cursor-pointer transition-all bg-[#111111] duration-400 hover:invert-100 ">
                            <span className="flex items-center gap-4">
                                <img src="landing/User.svg" className="w-4" />
                                <p>Login</p>
                            </span>
                        </button>
                        <button className="hover:cursor-pointer">
                            Sign Up
                        </button>
                    </div>
                </nav>

                <div className="flex flex-col items-start w-[40%] xl:w-[35%] relative top-5 xl:top-10">
                    <p className="font-['Roboto'] font-bold text-5xl text-[#E3E3E3] mb-6 leading-16">Industrial Web Data Extraction</p>
                    <p className="text-[#BFBFBF] text-md mb-8 font-[Heebo]">
                        Lorem ipsum sit amet dolor, lorem ipsum sit amet dolor, lorem ipsum sit amet dolor lorem ipsum.
                    </p>
                    <button className="border-1 border-[#2E2E2E] px-8 py-3 text-[#C6C6C6] bg-[#161515] rounded-lg  *:font-bold font-[Heebo] hover:cursor-pointer transition-all hover:bg-[#201e1e] duration-200"><span>Get Started</span></button>
                </div>
            </main>

            {/* Use Header Components for of the following sections */}

            {/* Features: Feature Card Component */}

            {/* Usage */}

            {/* Demo */}

            {/* Pricing: Pricing Card Component  */}

            {/* Register */}

            {/* Footer */}
        </div>
    )
}