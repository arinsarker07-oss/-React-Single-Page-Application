import React, { use } from 'react';
import BodyHeader from './BodyHeader';
import ProductCard from './ProductCard';
import Cart from './Cart'
const Body = ({ GetAllCard,setActiveTab,ActiveTab,setCarts,Carts}) => {
    const GetData = use(GetAllCard)

    return (
        <>
            <BodyHeader setActiveTab={setActiveTab} ActiveTab={ActiveTab} ></BodyHeader>
                     

           {ActiveTab==="product"? <div className='grid md:grid-cols-3 grid-cols-1  gap-7 container mx-auto '>
                {
                    GetData.map(Data =>
                    <ProductCard  Carts={Carts} setCarts={setCarts} key={Data.id} Data={Data}></ProductCard>
                    )
                }
            </div> :    <Cart Carts={Carts}></Cart> }

        </>

    );
};

export default Body;