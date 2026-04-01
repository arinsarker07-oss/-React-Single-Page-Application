import React from 'react';

const BodyHeader = ({setActiveTab,ActiveTab,Carts}) => {
    return (
        <div className='text-center mt-30 space-y-3'>
           <p className='font-extrabold text-5xl text-[#101727]'>Premium Digital Tools</p>
           <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
          <div className="flex justify-center ">
        <button 
          onClick={() => setActiveTab('product')}
          className={`w-40 p-3 rounded-full text-sm font-medium transition-all ${
            ActiveTab === 'product' 
              ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white' 
              : 'bg-white border border-gray-200 text-gray-600'
          }`} >
          Products
        </button>
        <button 
          onClick={() => setActiveTab('cart')}
          className={`w-40 p-3 rounded-full text-sm font-medium transition-all ${
            ActiveTab === 'cart' 
              ? 'bg-gradient-to-l from-[#4F39F6] to-[#9514FA] text-white' 
              : 'bg-white border border-gray-200 text-[#25065D]'
          }`} >
          Cart ({Carts.length})
        </button>

      </div>
        </div>



    );
};

export default BodyHeader;