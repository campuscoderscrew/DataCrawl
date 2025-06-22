import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const LoadingScreen = ({onCancel}) => {

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/results");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);
  
  return (
    <div className="flex flex-col h-80 w-140 items-center justify-center">
      <div className="grid gap-4 text-center">
        <p className="text-white font-bold text-3xl animate-pulse">
          Crawling...
        </p>
      </div>
      <div className="flex justify-center mt-4 w-full max-w-md">
        <div className="w-full h-3 bg-[#3A3A3A] rounded-full shadow-lg">
          <div className="h-full bg-gradient-to-r from-[#3e3e3e] to-[#1e1e1e] rounded-full" 
            style={{
              animation: 'fill 5s linear forwards',
            }}
          />
        </div>
      </div>
      <button onClick={onCancel} className="mt-6 bg-[#313131] text-white py-2 px-6 rounded-full hover:cursor-pointer hover:bg-[#2C2C2C]">
        Cancel Generation
      </button>
      <style jsx>{`
        @keyframes fill {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;