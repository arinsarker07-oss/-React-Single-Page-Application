import React from 'react';

const price = () => {
    return (
        <section className="bg-white py-20 px-4">
            <div className="container mx-auto text-center mb-12">
                <h2 className="text-5xl font-extrabold text-[#101727] mb-4">Simple, Transparent Pricing</h2>
                <p className="text-[#627382]">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">

                <div className="card bg-slate-50 border border-slate-100 shadow-sm p-8 hover-3d">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-slate-800">Starter</h3>
                        <p className="text-slate-500 text-sm">Perfect for getting started</p>
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-bold text-slate-900">$0</span>
                            <span className="text-slate-500">/Month</span>
                        </div>
                        <ul className="space-y-3 py-6">
                            <li className="flex items-center gap-3 text-sm text-slate-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                Access to 10 free tools
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                Basic templates
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                Community support
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                1 project per month
                            </li>
                        </ul>
                        <button className=" w-full bg-gradient-to-r  from-[#4F39F6] via-[#4F39F6] to-[#9514FA]  text-white  p-3 rounded-full text-sm  font-medium hover:opacity-90 transition-opacity ">
                            Get Started Free
                        </button>
                    </div>
                </div>

                <div className=" card bg-gradient-to-r  from-[#4F39F6]  to-[#9514FA] text-white shadow-2xl p-8 relative md:scale-110 z-10">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="badge badge-warning py-3 px-4 font-bold text-[10px] uppercase tracking-wider border-none bg-[#FEF3C7] text-[#92400E]">Most Popular</span>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">Pro</h3>
                        <p className="opacity-90 text-sm">Best for professionals</p>
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-bold">$29</span>
                            <span className="opacity-80">/Month</span>
                        </div>
                        <ul className="space-y-3 py-6">
                            <li className="flex items-center gap-3 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                Access to all premium tools
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                Unlimited templates
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                Priority support
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                Unlimited projects
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                Cloud sync
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                Advanced analytics
                            </li>
                        </ul>
                        <button className="btn bg-white text-[#8B5CF6] hover:bg-slate-100 border-none btn-block rounded-xl">Start Pro Trial</button>
                    </div>
                </div>

                <div className="hover-3d card bg-slate-50 border border-slate-100 shadow-sm p-8">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-slate-800">Enterprise</h3>
                        <p className="text-slate-500 text-sm">For teams and businesses</p>
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-bold text-slate-900">$99</span>
                            <span className="text-slate-500">/Month</span>
                        </div>
                        <ul className="space-y-3 py-6">
                            <li className="flex items-center gap-3 text-sm text-slate-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                Everything in Pro
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                Team collaboration
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                Custom integrations
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                Dedicated support
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                SLA guarantee
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                Custom branding
                            </li>
                        </ul>
                        <button className=" w-full bg-gradient-to-r  from-[#4F39F6] via-[#4F39F6] to-[#9514FA]  text-white  p-3 rounded-full text-sm  font-medium hover:opacity-90 transition-opacity ">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default price;