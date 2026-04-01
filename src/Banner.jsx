import React from 'react';
import bannerImg from "./assets/banner.png";
const Banner = () => {
    return (
        <div>
            <div className="bg-white p-6 md:p-12 lg:p-20">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
        <div className="flex-1 max-w-xl">
          <div className="inline-flex items-center gap-2 bg-[#f3e8ff] text-[#7c3aed] px-3 py-1 rounded-full text-xs md:text-sm font-medium mb-4">
            <span className="h-2 w-2 rounded-full bg-[#7c3aed]"></span>
            New: AI-Powered Tools Available
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1f2937] leading-tight mb-5">
            Supercharge Your <br className="hidden md:block" /> Digital Workflow
          </h1>
          <p className="text-base md:text-lg text-[#6b7280] mb-8 leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity 
            software—all in one place. Start creating faster today.  </p>
          <p className="text-sm text-[#9ca3af] mb-10 hidden md:block">  Explore Products  </p>
          <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-[#4F39F6] via-[#4F39F6] to-[#9514FA]  text-white  px-8 py-3 rounded-full text-sm  font-medium hover:opacity-90 transition-opacity ">
                  Explore Products
                </button>
            <button className="inline-flex items-center btn btn-primary btn-soft rounded-full  px-8 py-6 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#a78bfa]" >
                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 20.212c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
              </svg>
              Watch Demo
            </button>
          </div>
        </div>
        <div className="flex-1 w-full max-w-md md:max-w-xl mt-10 md:mt-0 flex justify-center">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
              src={ bannerImg}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Banner;