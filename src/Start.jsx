import React from 'react';

const Start = () => {
    return (
        <div className='text-center mt-20 space-y-4'>
            <p className='font-extrabold text-5xl text-[#101727]'>Get Started in 3 Steps</p>
            <p className='  text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>

            <div className='grid md:grid-cols-3 max-w-330 mx-auto'>
            <div className="card hover-3d flex items-center justify-center m-10 bg-slate-50">
      <div className="relative w-[400px] bg-white border border-gray-100 rounded-[40px] p-12 flex flex-col items-center shadow-sm">
        <div className="absolute top-8 right-8 w-10 h-10 bg-[#7C3AED] rounded-full flex items-center justify-center shadow-lg shadow-purple-200">
          <span className="text-white text-xs font-bold">01</span>
        </div>

        <div className="w-32 h-32 bg-[#F5EEFF] rounded-full flex items-center justify-center mb-8 mt-4">
         <img src="../src/assets/user.png" alt="" />
        </div>
        <h2 className="text-[#1A202C] text-3xl font-bold mb-4">
          Create Account
        </h2>
        <p className="text-[#718096] text-center ">
          Sign up for free in seconds. No credit card required to get started.
        </p>
      </div>
            </div>
            <div className="card hover-3d flex items-center justify-center m-10 bg-slate-50">
      <div className="relative w-[400px] bg-white border border-gray-100 rounded-[40px] p-12 flex flex-col items-center shadow-sm">
        <div className="absolute top-8 right-8 w-10 h-10 bg-[#7C3AED] rounded-full flex items-center justify-center shadow-lg shadow-purple-200">
          <span className="text-white text-xs font-bold">02</span>
        </div>

        <div className="w-32 h-32 bg-[#F5EEFF] rounded-full flex items-center justify-center mb-8 mt-4">
         <img src="../src/assets/package.png" alt="" />
        </div>
        <h2 className="text-[#1A202C] text-3xl font-bold mb-4">
          Choose Products
        </h2>
        <p className="text-[#718096] text-center ">
          Browse our catalog and select the tools that fit your needs.
        </p>
      </div>
            </div>
            <div className="card hover-3d flex items-center justify-center m-10 bg-slate-50">
      <div className="relative w-[400px] bg-white border border-gray-100 rounded-[40px] p-12 flex flex-col items-center shadow-sm">
        <div className="absolute top-8 right-8 w-10 h-10 bg-[#7C3AED] rounded-full flex items-center justify-center shadow-lg shadow-purple-200">
          <span className="text-white text-xs font-bold">03</span>
        </div>

        <div className="w-32 h-32 bg-[#F5EEFF] rounded-full flex items-center justify-center mb-8 mt-4">
         <img src="../src/assets/rocket.png" alt="" />
        </div>
        <h2 className="text-[#1A202C] text-3xl font-bold mb-4">
          Start Creating
        </h2>
        <p className="text-[#718096] text-center ">
          Download and start using your premium tools immediately.
        </p>
      </div>
            </div>
            </div>

        </div>
    );
};

export default Start;