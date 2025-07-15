/*  

All assets needed (images) should be under public/landing

Components related to this page are in Components/Landing

 */

import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom';

import SparkOverlay from "../Components/SparkOverlay";


export default function Landing() {
    const navigate = useNavigate();

    return (
        <div className="bg-[#111111] h-screen w-screen overflow-x-clip">

            {/* Hero */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="flex-grow relative h-full w-full"
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
                        <p className="font-['Roboto'] font-bold text-5xl text-[#E3E3E3] mb-6 leading-16">Industrial Web Data Extraction</p>
                        <p className="text-[#BFBFBF] text-md mb-8 font-[Heebo]">
                            Lorem ipsum sit amet dolor, lorem ipsum sit amet dolor, lorem ipsum sit amet dolor lorem ipsum.
                        </p>
                        <button className="border-1 border-[#2E2E2E] px-8 py-3 text-[#C6C6C6] bg-[#161515] rounded-lg  *:font-bold font-[Heebo] hover:cursor-pointer transition-all hover:bg-[#201e1e] duration-200" onClick={() => navigate('/SignUp')}><span>Get Started</span></button>
                    </div>
                </main>
            </motion.div>

            {/* Use Header Components for of the following sections */}

            {/* Features: Feature Card Component */}

            {/* Usage */}
            <div className = " relative w-full xl:px-25 py-10 flex flex-wrap flex-col text-[#E3E3E3] bg-[#111111] overflow-x-hidden gap-15 items-center">
                <button className = "border-1 px-1 w-[100px] py-2.5 rounded-3xl hover:cursor-pointer transition-all bg-[#111111] duration-400 hover:invert-100 ">Usage</button>
                <p className = "font-['Roboto'] font-bold text-5xl text-[#E3E3E3] mb-20 leading-16">Built for Diverse Needs</p>

                <div className = "flex flex-row gap-30 mr-[10rem] overflow-x-hidden">
                    <span className="flex flex-col items-center justify-center">
                        <img src = "/landing/marketing.svg" className="w-[140px] grayscale mb-5 hover:cursor-pointer hover:scale-[1.2] duration-300"/>
                        <p className="text-[#878787] text-md mb-8 font-[Heebo] font-bold tracking-wide">Market Research</p>
                    </span>
                    <span className="flex flex-col items-center justify-center ">
                        <img src = "/landing/e-commerce.svg" className="w-[140px] grayscale mb-5 hover:cursor-pointer hover:scale-[1.2] duration-300"/>
                        <p className="text-[#878787] text-md mb-8 font-[Heebo] font-bold tracking-wide">E-Commerce</p>
                    </span>
                    <span className="flex flex-col items-center justify-center">
                        <img src = "/landing/development.svg" className="w-[140px] grayscale mb-5 hover:cursor-pointer hover:scale-[1.2] duration-300"/ >
                        <p className="text-[#878787] text-md mb-8 font-[Heebo] font-bold tracking-wide" >Development</p>
                    </span>
                </div>

                <div className = "flex flex-row gap-30 ml-[10rem]">
                    <span className="flex flex-col items-center justify-center">
                        <img src = "/landing/data-science.svg" className="w-[140px] grayscale mb-5 hover:cursor-pointer hover:scale-[1.2] duration-300"/>
                        <p className="text-[#878787] text-md mb-8 font-[Heebo] font-bold tracking-wide">Data Science</p>
                    </span>
                    <span className="flex flex-col items-center justify-center ">
                        <img src = "/landing/data-science.svg" className="w-[140px] grayscale mb-5 hover:cursor-pointer hover:scale-[1.2] duration-300"/>
                        <p className="text-[#878787] text-md mb-8 font-[Heebo] font-bold tracking-wide">Content Aggregation</p>
                    </span>
                    <span className="flex flex-col items-center justify-center">
                        <img src = "/landing/seo.svg" className="w-[140px] grayscale mb-5 hover:cursor-pointer hover:scale-[1.2] duration-300"/ >
                        <p className="text-[#878787] text-md mb-8 font-[Heebo] font-bold tracking-wide" >SEO Monitoring</p>
                    </span>
                </div>
            </div>

            {/* Demo */}

            {/* Pricing: Pricing Card Component  */}

            {/* Register */}

            {/* Footer */}
            <div className="flex relative  py-10 text-[#E3E3E3] bg-[#111111] overflow-x-hidden">
                <img src="/landing/bg3.svg" className="absolute right-0 top-0 pointer-events-none z-0 w-full h-full z-100 object-cover" />
                <div className=" flex flex-col w-full">
                    <div className=" relative w-full xl:px-25 py-10 flex flex-wrap flex-row text-[#E3E3E3] bg-[#111111] overflow-x-hidden">
                        <div className="flex flex-col gap-2 mb-[100px]">
                            <span className="flex items-center gap-2 xl:px-2">
                                <img src="/landing/Logo.svg" className="w-12" />
                                <p className="text-[20px] ">DataCrawl</p>
                            </span>
                            <p className="text-[#928F8F] mt-8 text-s xl:px-2">Web crawling made better.</p>
                            <div className="flex flex-row h-[30px] mt-10 justify-start gap-2">
                                <img src = "/landing/Instagram.svg" className="hover:cursor-pointer hover:scale-[1.2] duration-300"/>
                                <img src = "/landing/GitHub.svg" className="hover:cursor-pointer hover:scale-[1.2] duration-300"/>
                                <img src = "/landing/Facebook.svg" className="hover:cursor-pointer hover:scale-[1.2] duration-300"/>
                                <img src = "/landing/X.svg" className="hover:cursor-pointer hover:scale-[1.2] duration-300"/>
                            </div>
                        </div>

                        <div className="flex flex-row gap-20 justify-evenly ml-[400px] mb-[100px]">
                            <div className="flex flex-col font-[Heebo]">
                                <p className = "font-bold text-s mb-[35px]">Products</p>
                                <p className="text-[#928F8F] text-s mb-[25px] hover:cursor-pointer hover:scale-[1.2] duration-300">Lorem</p>
                                <p className="text-[#928F8F] text-s mb-[25px] hover:cursor-pointer hover:scale-[1.2] duration-300">ipsum</p>
                                <p className="text-[#928F8F] text-s mb-[25px] hover:cursor-pointer hover:scale-[1.2] duration-300">Sit</p>
                            </div>

                            <div className="flex flex-col font-[Heebo]">
                                <p className = "font-bold text-s mb-[35px]">Company</p>
                                <p className="text-[#928F8F] text-s mb-[25px] hover:cursor-pointer hover:scale-[1.2] duration-300">About</p>
                                <p className="text-[#928F8F] text-s mb-[25px] hover:cursor-pointer hover:scale-[1.2] duration-300">Blog</p>
                                <p className="text-[#928F8F] text-s mb-[25px] hover:cursor-pointer hover:scale-[1.2] duration-300">Careers</p>
                                <p className="text-[#928F8F] text-s mb-[25px] hover:cursor-pointer hover:scale-[1.2] duration-300">Contact</p>
                            </div>

                            <div className="flex flex-col font-[Heebo] mb-[35px]">
                                <p className = "font-bold text-s mb-[30px] hover:cursor-pointer hover:scale-[1.2] duration-300">Legal</p>
                                <p className="text-[#928F8F] text-s mb-[25px] hover:cursor-pointer hover:scale-[1.2] duration-300">Privacy</p>
                                <p className="text-[#928F8F] text-s mb-[25px] hover:cursor-pointer hover:scale-[1.2] duration-300">Terms</p>
                            </div>
                        </div>
                        
                    </div>
                    <p className="text-[#BFBFBF] text-md mb-8 font-[Heebo] ml-[1380px]">© 2025 Campus Coders Crew</p>
                </div>
                
            </div>
            
            
        </div>
    )
}