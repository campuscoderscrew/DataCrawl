/*  

All assets needed (images) should be under public/landing

Components related to this page are in Components/Landing

 */

import FeatureCard from "../Components/Landing/FeatureCard";
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom';
import SparkOverlay from "../Components/SparkOverlay";
import PricingCard from "../Components/Landing/PricingCard";
import Header from "../Components/Landing/Header";
import Need from "../Components/Landing/Need"
import { Heading } from "lucide-react";

export default function Landing() {
    const navigate = useNavigate();

    const headers = [
        {
            label: "Features",
            title: "Optimize Your Searching Experience",
        },
        {
            label: "Usage",
            title: "Built for Diverse Needs"
        },
        {
            label: "Demo",
            title: "Try Our Data Crawler"
        },
        {
            label: "Pricing",
            title: "Choose Your Plan",
            subtext: "Pricing points for all needs"
        },
        {
            label: "Register",
            title: "Start Crawling Smarter",
            subtext: "Clean, scalable, and fast web crawling — without the"
        },
    ]

    return (
        <div className="bg-[#111111] h-screen w-screen overflow-x-hidden" id="landing">

            {/* Hero */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="flex-grow relative h-full w-full overflow-x-clip"
            >
                <main className="w-full aspect-[1.5] max-h-full overflow-x-hidden relative box-border px-25 xl:px-35 flex flex-col justify-center" id="bg-gradient">


                    {/* Spider Graphic */}
                    <div className="transform scale-75 absolute -right-[10%] top-3 flex justify-center items-center">
                        <img src="/landing/Spider.svg" className="absolute mr-5 mt-5" />
                        <SparkOverlay />
                    </div>

                    {/* Navigation bar */}
                    <nav className="flex justify-between py-10 *:text-[#E3E3E3] text-md absolute w-full left-0 box-border px-25 xl:px-35 top-0">
                        <span className="flex items-center gap-4">
                            <img src="/landing/Logo.svg" className="w-8" />
                            <p className="font-[500]">DataCrawl</p>
                        </span>
                        <div className="flex gap-6 items-center *:transition-all *:duration-200 *:hover:cursor-pointer *:hover:text-[#b5b5b5] *:font-[500]">
                            <p>Features</p>
                            <p>Pricing</p>
                            <p>Investors</p>
                            <p>Contact</p>
                        </div>
                        <div className="gap-6 flex items-center *:text-xs">
                            <button className="border-1 px-6 py-2.5 rounded-3xl hover:cursor-pointer transition-all bg-[#111111] duration-400 hover:invert-100" onClick={() => navigate('/Login')}>
                                <span className="flex items-center gap-4 font-[500]">
                                    <img src="landing/User.svg" className="w-4" />
                                    <p>Login</p>
                                </span>
                            </button>
                            <button className="hover:cursor-pointer transition-all hover:text-[#b5b5b5] font-[500]" onClick={() => navigate('/SignUp')}>
                                Sign Up
                            </button>
                        </div>
                    </nav>

                    {/* Hero Text */}
                    <div className="flex flex-col items-start w-[40%] xl:w-[35%] relative top-5 xl:top-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="font-['Roboto'] font-bold text-5xl text-[#E3E3E3] mb-6 leading-16">Industrial Web Data Extraction</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <p className="text-[#BFBFBF] text-md mb-8 font-[Heebo]">
                                Lorem ipsum sit amet dolor, lorem ipsum sit amet dolor, lorem ipsum sit amet dolor lorem ipsum.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                        >
                            <button className="border-1 border-[#2E2E2E] px-8 py-3 text-[#C6C6C6] bg-[#161515] rounded-lg  *:font-bold font-[Heebo] hover:cursor-pointer transition-all hover:bg-[#201e1e] duration-200" onClick={() => navigate('/SignUp')}><span>Get Started</span></button>
                        </motion.div>
                    </div>
                </main>
            </motion.div>

            {/* Use Header Components for of the following sections */}

            {/* Features: Feature Card Component */}


            <section className="flex flex-col bg-[#111111] items-center justify-center box-border px-25 xl:px-35 py-40">
                <Header {...headers[0]} />

                <div className="mt-30 grid md:grid-cols-2 gap-15 mb-20">
                    {/* Top-left card with glow */}
                    <div className="relative">
                        <FeatureCard
                            icon={<img src="/landing/Expand.svg" className="w-10" />}
                            name="Scalable"
                            description="Lorem ipsum sit amet dolor, lorem ipsum sit amet."
                            glowClass="left-[43px] top-[37px]"
                            glow={true}
                        />
                    </div>
                    {/* Top right card No Glow*/}
                    <div className="relative">
                        <FeatureCard
                            icon={<img src="/landing/Security Shield.svg" className="w-12" />}
                            name="Secure"
                            description="Lorem ipsum sit amet dolor, lorem ipsum sit amet."
                            glow={false}
                        />
                    </div>
                    {/* Bottom left card No glow*/}
                    <div className="relative">
                        <FeatureCard
                            icon={<img src="/landing/Settings.svg" className="w-12" />}
                            name="Customizable"
                            description="Lorem ipsum sit amet dolor, lorem ipsum sit amet."
                            glow={false}
                        />
                    </div>
                    {/* Bottom right card with glow */}
                    <div className="relative">
                        <FeatureCard
                            icon={<img src="/landing/API.svg" className="w-12" />}
                            name="API Support"
                            description="Lorem ipsum sit amet dolor, lorem ipsum sit amet."
                            glowClass="bottom-[20px] right-[161px]"
                            glow={true}
                        />
                    </div>
                </div>
            </section>

            {/* Usage */}
            <div className="relative w-screen px-25 xl:px-35 pt-20 pb-40 flex flex-wrap flex-col text-[#E3E3E3] bg-[#111111] overflow-x-hidden gap-15 items-center box-border">
                <Header {...headers[1]} />

                <div className="flex flex-row gap-30 mr-[10rem] overflow-x-hidden mt-20 mb-10">
                    <Need img={"/landing/usage/marketing.svg"} text="Market Research" />
                    <Need img={"/landing/usage/e-commerce.svg"} text="E-Commerce" />
                    <Need img={"/landing/usage/development.svg"} text="Development" />
                </div>

                <div className="flex flex-row gap-30 ml-[10rem]">
                    <Need img={"/landing/usage/data-science.svg"} text="Data Science" />
                    <Need img={"/landing/usage/content.svg"} text="Content Aggregation" />
                    <Need img={"/landing/usage/seo.svg"} text="SEO Monitoring" />
                </div>
            </div>

            {/* Demo */}

            {/* Pricing: Pricing Card Component  */}
            <section className="flex flex-col items-center bg-[#111111] mt-20 mb-40 ">
                <Header label={"Pricing"} title={"Choose Your Plan"} subtext={"Pricing for all needs."} />
                <div className="flex justify-center flex-wrap md:flex-nowrap gap-8 items-end h-full md:h-150 mx-12 mt-30 ">
                    <PricingCard
                        plan={"Basic"}
                        isPopular={false}
                        description={"Perfect for smaller projects, will meet all your basic needs."}
                        cost={20}
                        pages={"100"}
                        feature2={"Lorem ipsum sit"}
                        feature3={"Lorem ipsum sit amet dolor"}
                        feature4={"Lorem ipsum"}
                        feature5={"Lorem ipsum sit"}
                    />
                    <PricingCard
                        plan={"Pro"}
                        isPopular={true}
                        description={"Perfect for smaller projects, will meet all your basic needs."}
                        cost={55}
                        pages={"10,000"}
                        feature2={"Lorem ipsum sit"}
                        feature3={"Lorem ipsum sit amet dolor"}
                        feature4={"Lorem ipsum"}
                        feature5={"Lorem ipsum sit"}
                    />
                    <PricingCard
                        plan={"Enterprise"}
                        isPopular={false}
                        description={"Perfect for smaller projects, will meet all your basic needs."}
                        cost={89}
                        pages={"100,000"}
                        feature2={"Lorem ipsum sit"}
                        feature3={"Lorem ipsum sit amet dolor"}
                        feature4={"Lorem ipsum"}
                        feature5={"Lorem ipsum sit"}
                    />
                </div>
            </section>

            {/* Register */}
            <section className="flex flex-col bg-[#111111] items-center box-border px-25 xl:px-35">
                <Header {...headers[4]} />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3, duration: 0.8 }}
                    viewport={{ once: true, amount: 1 }}
                >
                    <p className="font-['Roboto'] text-[#969696]">technical hassle</p>
                </motion.div>
                    <div className="py-20">
                        <button className="border-1 border-[#ffffff] px-8 py-3 text-[#000000] bg-[#bfbfbf] rounded-xl  *:font-bold font-[Heebo] hover:cursor-pointer transition-all hover:bg-[#000000] hover:text-[#ffffff] duration-200" onClick={() => navigate('/SignUp')}>
                            <span>Get Started</span>
                        </button>
                    </div>
            </section>

            {/* Footer */}
            <div className="relative py-10 text-[#E3E3E3] bg-[#111111] w-screen overflow-clip px-25 xl:px-35 flex flex-col box-border">

                <img src="/landing/bg3.svg" className="absolute left-0 bottom-0 pointer-events-none z-100 h-full w-full object-cover " />

                <div className="flex flex-col w-full h-full">

                    <div className=" relative w-full py-10 flex flex-row text-[#E3E3E3] bg-[#111111] overflow-x-hidden">

                        <div className="flex flex-col gap-2 mb-[100px]">
                            <span className="flex items-center gap-4 xl:px-2">
                                <img src="/landing/Logo.svg" className="w-12" />
                                <p className="text-[20px] ">DataCrawl</p>
                            </span>
                            <p className="text-[#928F8F] mt-8 text-s xl:px-2">Web crawling made better.</p>
                            <div className="flex flex-row h-[30px] mt-10 justify-start gap-2">
                                <img src="/landing/Instagram.svg" className="hover:cursor-pointer hover:scale-[1.05] hover:text-[#b6b1b1] duration-500" />
                                <img src="/landing/GitHub.svg" className="hover:cursor-pointer hover:scale-[1.05] hover:text-[#b6b1b1] duration-500" />
                                <img src="/landing/Facebook.svg" className="hover:cursor-pointer hover:scale-[1.05] hover:text-[#b6b1b1] duration-500" />
                                <img src="/landing/X.svg" className="hover:cursor-pointer hover:scale-[1.05] hover:text-[#b6b1b1] duration-500" />
                            </div>
                        </div>

                        <div className="flex flex-row gap-20 justify-evenly ml-100 mb-25">
                            <div className="flex flex-col font-[Heebo]">
                                <p className="font-bold text-s mb-[35px]">Products</p>
                                <p className="text-[#928F8F] text-s mb-[25px] hover:cursor-pointer hover:scale-[1.05] hover:text-[#b6b1b1] duration-500">Lorem</p>
                                <p className="text-[#928F8F] text-s mb-[25px] hover:cursor-pointer hover:scale-[1.05] hover:text-[#b6b1b1] duration-500">ipsum</p>
                                <p className="text-[#928F8F] text-s mb-[25px] hover:cursor-pointer hover:scale-[1.05] hover:text-[#b6b1b1] duration-500">Sit</p>
                            </div>

                            <div className="flex flex-col font-[Heebo]">
                                <p className="font-bold text-s mb-[35px]">Company</p>
                                <p className="text-[#928F8F] text-s mb-[25px] hover:cursor-pointer hover:scale-[1.05] hover:text-[#b6b1b1] duration-500">About</p>
                                <p className="text-[#928F8F] text-s mb-[25px] hover:cursor-pointer hover:scale-[1.05] hover:text-[#b6b1b1] duration-500">Blog</p>
                                <p className="text-[#928F8F] text-s mb-[25px] hover:cursor-pointer hover:scale-[1.05] hover:text-[#b6b1b1] duration-500">Careers</p>
                                <p className="text-[#928F8F] text-s mb-[25px] hover:cursor-pointer hover:scale-[1.05] hover:text-[#b6b1b1] duration-500">Contact</p>
                            </div>

                            <div className="flex flex-col font-[Heebo] mb-[35px]">
                                <p className="font-bold text-s mb-[30px] hover:cursor-pointer hover:scale-[1.05] hover:text-[#b6b1b1] duration-500">Legal</p>
                                <p className="text-[#928F8F] text-s mb-[25px] hover:cursor-pointer hover:scale-[1.05] hover:text-[#b6b1b1] duration-500">Privacy</p>
                                <p className="text-[#928F8F] text-s mb-[25px] hover:cursor-pointer hover:scale-[1.05] hover:text-[#b6b1b1] duration-500">Terms</p>
                            </div>
                        </div>

                    </div>
                </div>

                <p className="text-[#AFAFAF] mb-2 -mr-20 font-[Heebo] self-end text-sm">© 2025 Campus Coders Crew</p>

            </div>

        </div >

    );
}
