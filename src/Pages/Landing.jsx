/*  

All assets needed (images) should be under public/landing

Components related to this page are in Components/Landing

 */

import FeatureCard from "../Components/Landing/FeatureCard";

export default function Landing() {
  return (
    <div className="bg-[#111111] h-screen w-screen overflow-x-hidden">
      {/* Hero */}
      <main className="w-full aspect-[1.5] bg-gradient-radial at-[60%_50%] from-[#111111] to-[#ffffff]">
        <nav>
          <span>
            <img src="/landing/Logo.svg" />
            DataCrawl
          </span>
          <div>
            <p>Features</p>
            <p>Pricing</p>
            <p>Investors</p>
            <p>Contact</p>
          </div>
          <div>
            <button>
              <span>
                <img src="" />
                Login
              </span>
            </button>
            <button>SignUp</button>
          </div>
        </nav>

        <div>
          <h1>Industrial Web Data Extraction</h1>
          <p>
            Lorem ipsum sit amet dolor, lorem ipsum sit amet dolor, lorem ipsum
            sit amet dolor lorem ipsum.
          </p>
          <button>Get Started</button>
        </div>
      </main>
      {/* Use Header Components for of the following sections */}
      {/* Features: Feature Card Component */}
      <section className="flex flex-col items-center justify-center w-full">
        <button className="w-[183px] h-[56px] rounded-[50px] border border-[#E3E3E3]">
          <span className="w-[94px] h-[33px] text-[24px] text-[#C2C2C2]">
            Features
          </span>
        </button>
        <h1 className="font-bold font-roboto text-[#E3E3E3] text-center text-7xl w-[1062px] mt-[46px] leading-[136.5%]">
          Optimize Your Searching Experience
        </h1>
        <div className="mt-[154px] grid md:grid-cols-2 gap-[68.4px] mb-[294px]">
          {/* Top-left card with glow */}
          <div className="relative">
            <FeatureCard
              icon={<img src="/landing/Expand.svg" />}
              name="Scalable"
              description="Lorem ipsum sit amet dolor, lorem ipsum sit amet."
              glowClass="left-[43px] top-[37px]"
              glow={true}
            />
          </div>
          {/* Top right card No Glow*/}
          <div className="relative">
            <FeatureCard
              icon={<img src="/landing/Security Shield.svg" />}
              name="Secure"
              description="Lorem ipsum sit amet dolor, lorem ipsum sit amet."
              glow={false}
            />
          </div>
          {/* Bottom left card No glow*/}
          <div className="relative">
            <FeatureCard
              icon={<img src="/landing/Settings.svg" />}
              name="Customizable"
              description="Lorem ipsum sit amet dolor, lorem ipsum sit amet."
              glow={false}
            />
          </div>
          {/* Bottom right card with glow */}
          <div className="relative">
            <FeatureCard
              icon={<img src="/landing/API.svg" />}
              name="API Support"
              description="Lorem ipsum sit amet dolor, lorem ipsum sit amet."
              glowClass="bottom-[20px] right-[161px]"
              glow={true}
            />
          </div>
        </div>
      </section>

      {/* Usage */}
      {/* Demo */}
      {/* Pricing: Pricing Card Component  */}
      {/* Register */}
      {/* Footer */}
    </div>
  );
}
