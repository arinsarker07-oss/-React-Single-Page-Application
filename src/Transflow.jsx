import React from 'react';

const Transflow = () => {
    return (
        <div className="w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-15 mt-25 px-4 flex flex-col items-center justify-center text-center text-white">
      <h2 className="md:text-5xl text-2xl font-extrabold tracking-tight mb-5 ">
        Ready To Transform Your Workflow?
      </h2>
      <p className="text-white md:text-xl leading-relaxed mb-12">
        Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.
      </p>
      <div className="flex flex-col md:flex-row gap-4 mb-9">
        <button className="btn rounded-full md:px-6 md:py-8 text-[#6414fafd] text-xl">
          Explore Products
        </button>
        <button className="btn rounded-full md:px-10 md:py-8 text-xl btn-soft bg-transparent text-white ">
          View Pricing
        </button>
      </div>
      <div className="flex items-center gap-3 text-white text-base">
        <span>14-day free trial</span>
        <span className="w-1 h-1 rounded-full bg-white/50"></span>
        <span>No credit card required</span>
        <span className="w-1 h-1 rounded-full bg-white/50"></span>
        <span>Cancel anytime</span>
      </div>
    </div>
    );
};

export default Transflow;