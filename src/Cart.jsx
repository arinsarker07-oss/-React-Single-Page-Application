import React from 'react';

const Cart = ({Carts}) => {
    console.log(Carts);
    
    return (
         <div className='mt-10 mb-10 container mx-auto  space-y-3.5  bg-white border border-gray-200 rounded-lg shadow-sm p-5 overflow-hidden'>
      {
        Carts.length === 0 ? <p className='p-40 text-center font-bold md:text-5xl text-2xl items-center justify-center border border-4 border-blue-600 text-[#627382] '>your card is empty</p> :
          <>
          <p className='font-bold text-2xl text-[#101727]'>Your Cart</p>
            {
              Carts.map(item =>
                <div key={item.id} className="gap-2 h-[80px] flex items-center bg-white border border-gray-200 rounded-lg shadow-sm p-3 overflow-hidden">
                  <div className="h-full w-16 flex-shrink-0">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <div className="">
                    <h3 className="text-base font-bold text-gray-800 leading-tight"> {item.name} </h3>
                     <p className="text-lg text-[#627382] ml-2">${item.price}</p>
                  </div>
                 
                </div>
                
              )
            }
         
             <div className='flex justify-between p-4 rounded-xl mb-3.5'>
              <p className=' text-xl'>Total:</p>
              <p className=' text-xl'>$</p>
            </div>


            <button  className='bg-gradient-to-r  from-[#4F39F6] text-xl to-[#9514FA] text-white w-full  p-5 rounded-full font-medium hover:opacity-90 transition-opacity'>Proceed to Checkout</button>
          </>
      }


    </div>
    );
};

export default Cart;