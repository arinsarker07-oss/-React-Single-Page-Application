import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ Carts,setCarts }) => {
  const totalprice = Carts.reduce((sum, item) => sum + item.price, 0)
  const handlePyment = () => {
    setCarts([])
    toast.info("Checkout complete")
  }
 const handleDelete=(item)=>{
  const filterArayy= Carts.filter(c=> c.id !== item.id)
  setCarts(filterArayy)
  toast.warning("Item Removed ")
  
 }
  return (
    <div className='mt-10 mb-10 container mx-auto  space-y-3.5  bg-white border border-gray-200 rounded-lg shadow-sm p-5 overflow-hidden'>
      {
        Carts.length === 0 ? <p className='p-40 text-center font-bold md:text-5xl text-2xl items-center justify-center border border-4 border-blue-600 text-[#627382] '>your card is empty</p> :
          <>
            <p className='font-bold text-2xl text-[#101727]'>Your Cart</p>
            {
              Carts.map(item =>
                <div key={item.icon} className="gap-2 h-[80px] flex items-center bg-white border border-gray-200 rounded-lg shadow-sm p-3 overflow-hidden">
                  <div className="h-full w-16 flex-shrink-0">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <div className="flex justify-between w-full">
                    <div>
                      <h3 className="text-base font-bold text-gray-800 leading-tight"> {item.name} </h3>
                    <p className="text-lg text-[#627382] ml-2">${item.price}</p>
                    </div>
                    <button onClick={()=>handleDelete(item)} className='btn btn-soft btn-error'>Remove</button>
                  </div>

                </div>

              )
            }

            <div className='flex justify-between p-4 rounded-xl mb-3.5'>
              <p className=' text-xl'>Total:</p>
              <p className=' text-xl'>${totalprice}</p>
            </div>


            <button onClick={handlePyment} className='bg-gradient-to-r  from-[#4F39F6] text-xl to-[#9514FA] text-white w-full  p-5 rounded-full font-medium hover:opacity-90 transition-opacity'>Proceed to Checkout</button>
          </>
      }


    </div>
  );
};

export default Cart;