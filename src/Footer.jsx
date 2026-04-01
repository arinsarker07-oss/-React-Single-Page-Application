import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
;

const Footer = () => {
    return (
       
        <footer className="footer sm:footer-horizontal  text-neutral-content  p-10 bg-[#101727]">
             <div className='container mx-auto'>
            <div className='grid grid-cols-5 gap-6'>
                <div className='space-y-3'>
                    <p className='font-extrabold text-4xl text-white py-2'>DigiTools</p>
                    <p className='max-w-85 opacity-90'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                <nav className='flex flex-col space-y-3 '>
                    <h6 className=" text-xl text-white">Product</h6>
                    <a className="link link-hover opacity-70">Features</a>
                    <a className="link link-hover opacity-70">Pricing</a>
                    <a className="link link-hover opacity-70">Templates</a>
                    <a className="link link-hover opacity-70">Integrations</a>

                </nav>
                <nav className='flex flex-col space-y-3'>
                    <h6 className=" text-xl text-white">Company</h6>
                    <a className="link link-hover opacity-70">About</a>
                    <a className="link link-hover opacity-70">Blog</a>
                    <a className="link link-hover opacity-70">Careers</a>
                    <a className="link link-hover opacity-70">Press</a>
                </nav >
                <nav className='flex flex-col space-y-3'>
                    <h6 className=" text-xl text-white">Resources</h6>
                    <a className="link link-hover opacity-70">Documentation</a>
                    <a className="link link-hover opacity-70">Help Center</a>
                    <a className="link link-hover opacity-70">Community</a>
                    <a className="link link-hover opacity-70">Contact</a>
                </nav>


                <nav className='space-y-3'>
                    <h6 className=" text-xl text-white">Social Link</h6>
                    <div className="flex gap-2 ">
                        <a >
                            <FaInstagramSquare className='h-7 w-7'  /> 
                        </a>
                        <a >
                          <FaFacebookSquare className='h-7 w-7' />
                        </a>
                        <a>
                            <FaSquareXTwitter className='h-7 w-7'/>
                        </a>
                    </div>
                </nav>
            </div>

             <div class="border border-slate-700 w-full md:mt-20"></div>
             <div className='flex justify-between w-full mt-4'> 
                <div>
                    <p className='opacity-70'>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </div>
                <div className='flex gap-5 '>
                    <p className='opacity-70'>Privacy Policy</p>
                    <p className='opacity-70'> Terms of Service  </p>
                    <p className='opacity-70'> Cookies</p>
                </div>
             </div>
 </div>
        </footer>
       

    );
};

export default Footer;