/*  

All assets needed (images) should be under public/landing

Components related to this page are in Components/Landing

 */


import React from "react";
import { useState, useEffect } from "react";
import FeatureCard from "../Components/Landing/FeatureCard";
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom';
import SparkOverlay from "../Components/SparkOverlay";
import Header from "../Components/Landing/Header";
import Need from "../Components/Landing/Need"
import '../App.css';

import {
  Download,
  PlayCircle,
  Globe,
  Layers,
  AudioLines,
  Database
} from 'lucide-react';


export default function Landing() {

    const navigate = useNavigate();

    // Demo Table is conditionally rendered upon generation
    const [generated, setGenerated] = React.useState(false);
    const [toggle, setToggle] = useState(false);

    // Search Input
    const [input, setInput] = React.useState("http://demo.scrapelink.com/");

    const getRelevanceColor = (relevance) => {
        if (relevance >= 70) return 'bg-[#0c6634]';
        if (relevance >= 50) return 'bg-[#2b479b]';
        return 'bg-[#811e1f]';
    };

    const getSourceIcon = (icon) => {
        switch (icon) {
        case 'api':
            return <Database className="w-4 h-4 text-gray-500" />;
        case 'website':
        case 'globe':
            return <Globe className="w-4 h-4 text-gray-500" />;
        case 'server':
            return <Database className="w-4 h-4 text-gray-500" />;
        case 'video':
            return <PlayCircle className="w-4 h-4 text-gray-500" />;
        case 'audio':
            return <AudioLines className="w-4 h-4 text-gray-500" />;
        default:
            return <Layers className="w-4 h-4 text-gray-500" />;
        }
    };


    // HEADER DATA
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
            subtext: "Clean, scalable, and fast web crawling -- without the technical hassle"
        },
    ]

    // TEMPORARY DATA FOR DEMO
    const tableData = [
        {
            name: "source 1",
            relevance: 91,
            type: "Website",
            icon: "globe",
            size: "50.5 MB"
        },
        {
            name: "source name 2",
            relevance: 87,
            type: "API",
            icon: "api",
            size: "21.8 MB"
        },
        {
            name: "source title 3",
            relevance: 70,
            type: "Video",
            icon: "video",
            size: "10.2 MB"
        },
        {
            name: "source 4",
            relevance: 68,
            type: "Website",
            icon: "globe",
            size: "36.9 MB"
        },
        {
            name: "title source 5",
            relevance: 67,
            type: "Website",
            icon: "globe",
            size: "44.8 MB"
        },
        {
            name: "source 6",
            relevance: 41,
            type: "Audio",
            icon: "audio",
            size: "12.4 MB"
        }
    ];

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

            <div className="relative w-screen px-25 xl:px-35 pt-20 pb-40 flex flex-wrap flex-col text-[#E3E3E3] bg-[#111111] overflow-x-hidden gap-15 items-center box-border">
                <Header {...headers[2]} />
                {/*Demo Container*/}
                <div className="bg-[#151515] p-6 rounded-md shadow-md w-full max-w-4xl">
                    <div className="flex items-center bg-[#1a1a1a] rounded-md mx-10 mt-10 px-2 py-2 space-x-2 border border-gray-600">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="http://demo.scrapelink.com/"
                            className="flex-grow bg-transparent text-gray-200 placeholder-gray-400 px-4 py-2 focus:outline-none"
                        />
                        <button onClick={() => {
                            setGenerated(true);
                            setToggle(prev => !prev); // Toggles true/false
                        }}
                            className="bg-[#2c2c2c] hover:bg-[#444] text-gray-300 font-semibold px-4 py-2 rounded-md transition-colors duration-200"
                        >
                            Generate
                        </button>
                    </div>

                    {/*DEMO TABLE*/}
                    {generated && (
                    <div className="bg-[#121212] mt-12 mx-10 mb-10 p-4 rounded-md border border-gray-600 min-h-[440px]">
                        
                        <div className="grid grid-cols-12 gap-4 px-6 py-3">
                            <div className="col-span-3 font-semibold text-white tracking-wider">
                                Name
                            </div>
                            <div className="col-span-5 font-semibold text-white tracking-wider">
                                Relevance
                            </div>
                            <div className="col-span-2 font-semibold text-white tracking-wider">
                                Data Type
                            </div>
                            <div className="col-span-2 font-semibold text-white tracking-wider">
                                Size
                            </div>
                            {tableData.map((data, index) => (
                                
                                <React.Fragment key={`${data.name}-${toggle}`}>
                                    { /*Fade in Animation */ }
                                    <div className="col-span-3 text-gray-200 mt-4 fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                                        {data.name}</div>
                                    <div className="col-span-5 text-gray-200 flex items-center mt-4 fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                                        <span className="mr-2">{data.relevance}%</span>
                                        <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full rounded-full transition-all duration-300 ${getRelevanceColor(data.relevance)}`}
                                                style={{ width: `${data.relevance}%` }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-2 mt-4 text-gray-400 fade-in flex items-center gap-2" style={{ animationDelay: `${index * 0.2}s` }}>{getSourceIcon(data.icon)} {data.type}</div>
                                    <div className="col-span-2 mt-4 text-gray-200 fade-in" style={{ animationDelay: `${index * 0.2}s` }}>{data.size}</div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                    )}
                </div>

            </div>


            {/* Pricing: Pricing Card Component  */}

            {/* Register */}

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
