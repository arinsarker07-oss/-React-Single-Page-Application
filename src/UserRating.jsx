import React from 'react';

const UserRating = () => {
    return (
        <div className="w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-12 px-4 flex justify-center items-center relative">
            <div className="md:flex  w-full max-w-5xl items-center justify-between text-white ">
                <div className="flex-1 flex flex-col items-center ">
                    <span className="text-5xl font-bold tracking-tight">50K+</span>
                    <span className="text-sm opacity-80 mt-2 font-medium uppercase tracking-wider">Active Users</span>
                </div>
                <div className="divider divider-horizontal divider-star "></div>
                <div className="flex-1 flex flex-col items-center">
                    <span className="text-5xl font-bold tracking-tight">200+</span>
                    <span className="text-sm opacity-80 mt-2 font-medium uppercase tracking-wider">Premium Tools</span>
                </div>
                <div className="divider divider-horizontal divider-star "></div>
                <div className="flex-1 flex flex-col items-center">
                    <span className="text-5xl font-bold tracking-tight">4.9</span>
                    <span className="text-sm opacity-80 mt-2 font-medium uppercase tracking-wider">Rating</span>
                </div>
            </div>
        </div>
    );
};

export default UserRating;