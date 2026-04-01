import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
;

const Footer = () => {
    return (

       <footer className="w-full text-neutral-content p-6 md:p-10 bg-[#101727]">
    <div className='container mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 md:gap-6'>
            
            <div className='space-y-3'>
                <p className='font-extrabold text-4xl text-white py-2'>DigiTools</p>
                <p className='max-w-xs opacity-90'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
            </div>
            
            <nav className='flex flex-col md:space-y-3'>
                <h6 className="text-xl text-white font-semibold">Product</h6>
                <a className="link link-hover opacity-70">Features</a>
                <a className="link link-hover opacity-70">Pricing</a>
                <a className="link link-hover opacity-70">Templates</a>
                <a className="link link-hover opacity-70">Integrations</a>
            </nav>

            <nav className='flex flex-col md:space-y-3'>
                <h6 className="text-xl text-white font-semibold">Company</h6>
                <a className="link link-hover opacity-70">About</a>
                <a className="link link-hover opacity-70">Blog</a>
                <a className="link link-hover opacity-70">Careers</a>
                <a className="link link-hover opacity-70">Press</a>
            </nav>

            <nav className='flex flex-col md:space-y-3'>
                <h6 className="text-xl text-white font-semibold">Resources</h6>
                <a className="link link-hover opacity-70">Documentation</a>
                <a className="link link-hover opacity-70">Help Center</a>
                <a className="link link-hover opacity-70">Community</a>
                <a className="link link-hover opacity-70">Contact</a>
            </nav>

            <nav className='space-y-3'>
                <h6 className="text-xl text-white font-semibold">Social Link</h6>
                <div className="flex gap-4">
                    <a href="#"><FaInstagramSquare className='h-7 w-7' /></a>
                    <a href="#"><FaFacebookSquare className='h-7 w-7' /></a>
                    <a href="#"><FaSquareXTwitter className='h-7 w-7' /></a>
                </div>
            </nav>
        </div>

        <div className="border border-slate-700 w-full mt-10 md:mt-20"></div>
        <div className='flex flex-col md:flex-row justify-between items-center w-full mt-6 gap-6'>
            <div>
                <p className='opacity-70 text-center md:text-left'>
                    Copyright © {new Date().getFullYear()} - All right reserved
                </p>
            </div>
            <div className='flex flex-wrap justify-center gap-5'>
                <p className='opacity-70 cursor-pointer hover:text-white transition'>Privacy Policy</p>
                <p className='opacity-70 cursor-pointer hover:text-white transition'>Terms of Service</p>
                <p className='opacity-70 cursor-pointer hover:text-white transition'>Cookies</p>
            </div>
        </div>
    </div>
</footer>

    );
};

export default Footer;