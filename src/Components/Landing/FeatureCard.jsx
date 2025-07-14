function GlowDot({ className = "" }) {
  return (
    <div
      className={`absolute w-[30.78px] h-[30.78px] pointer-events-none z-0 rounded-full bg-[#717070] ${className}`}
      style={{
        boxShadow: "0 0 170.99px 55.57px rgba(255,255,255,0.4)",
        opacity: 1,
      }}
    />
  );
}

export default function FeatureCard({
  icon,
  name,
  description,
  glowClass = "",
  glow,
}) {
  return (
    <div className="relative w-[466px] h-[275.3px] flex items-center justify-center">
      {glow && <GlowDot className={glowClass} />}
      <div className="bg-[linear-gradient(62deg,_#161616_38%,_#111111_58%,_#111111_87%,_#1D1D1D_100%)] z-10 rounded-xl shadow-lg p-14 flex flex-col items-center justify-center border-2 border-[#191919] w-full h-full">
        <div className="w-[349.83px] h-[158.7px] gap-8 flex flex-col justify-center">
          <div className="w-58 h-14 text-[#A4A4A4] flex flex-row items-center gap-[29.92px]">
            {icon}
            <h1 className="text-4xl font-bold font-inria whitespace-nowrap text-[#A4A4A4]">
              {name}
            </h1>
          </div>
          <p className="text-[#808080] text-xl font-heebo">{description}</p>
        </div>
      </div>
    </div>
  );
}
