import React from 'react';

const Transflow = () => {
    return (
        <div className="w-full bg-gradient-to-r from-[#5017FE] to-[#8C3CFF] py-24 px-4 flex flex-col items-center justify-center text-center text-white">
      <h2 className="text-5xl font-extrabold tracking-tight mb-5 max-w-2xl">
        Ready To Transform Your Workflow?
      </h2>
      <p className="text-white/90 text-xl leading-relaxed mb-12 max-w-xl">
        Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
      </p>
      <div className="flex gap-4 mb-10">
        <button className="bg-white text-[#7333F2] font-semibold text-lg px-9 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out">
          Explore Products
        </button>
        <button className="bg-transparent text-white font-medium text-lg px-9 py-4 rounded-full border border-white/50 hover:bg-white/10 transition duration-300 ease-in-out">
          View Pricing
        </button>
      </div>
      <div className="flex items-center gap-3 text-white/70 text-base">
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