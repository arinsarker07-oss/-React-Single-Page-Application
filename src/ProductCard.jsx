import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ProductCard = ({ Data,setCarts,Carts }) => {
    const [AddCart, setAddCart] = useState(false);
    const HandleCart = () => {
        setAddCart(true)

        const isfiond = Carts.find(item=> item.id === Data.id )
            if (isfiond) {
                toast.error('Item already in cart!')
                return ;
            }
       
         setCarts( [...Carts,Data])
         toast.success("Item added to cart")
    }
    const badgeColors = {
        primary: "badge-primary",
        secondary: "badge-secondary",
        success: "badge-success",
        warning: "badge-warning",
        info: "badge-info",
        error: "badge-error",
        neutral: "badge-neutral",
        accent: "badge-accent"
    };

    return (
        <div className="hover-3d">
        <div className="  mt-7 container mx-auto rounded-3xl border border-gray-100 p-8 shadow-sm bg-white font-sans relative">
            <div className="absolute top-6 right-6">
                <div className={`badge badge-soft badge-${Data.tagType}`}>{Data.tag}</div>
            </div>
            <div className="w-20 h-15 bg-gray-50 rounded-full flex items-center justify-center mb-4 border border-gray-50">
                <span className="text-3xl">{Data.icon }</span>
            </div>
            <h3 className="text-2xl font-extrabold text-[#101727] mb-3">{Data.name}</h3>
            <p className="text-[#627382] leading-relaxed mb-6">
                {Data.description}
            </p>
            <div className="flex items-baseline mb-4">
                <span className="text-4xl font-extrabold text-[#101727]">${Data.price}</span>
                <span className="text-[#627382] ml-1 text-lg">
                    /{Data.period === 'monthly' ? 'Month' : Data.period === 'yearly' ? 'Year' : ''}
                </span>
            </div>
            <ul className="space-y-3 mb-10">
                {Data.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-slate-600">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>
            <button onClick={() => HandleCart()} className={`text-white w-full  p-5 rounded-full text-sm  font-medium hover:opacity-90 transition-opacity
                    ${AddCart
                    ? "bg-gradient-to-r from-[#34e116]  to-[#05c280]"
                    : "bg-gradient-to-r from-[#4F39F6]  to-[#9514FA]"
                }
              `} >
                {AddCart ? "Add To Cart" : "Buy Now"}

            </button>
        </div>
        </div>
    );
};

export default ProductCard;