import Image from 'next/image';
import React from 'react';

const WhyChooseWanderlust = () => {
    return (
        <div className=' bg-[#EDFCFF] py-20 px-4 mt-10'>
            <div className='text-center'>
                <h1 className=' text-4xl font-bold'>Why Choose Wanderlust?</h1>
                <p className=' text-gray-600'>Your trusted partner for exceptional travel experiences</p>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-3 gap-6 py-10 px-20'>
                <div className=' bg-white p-6 rounded-lg shadow-md mt-8'>
                    <div className='mb-5'>
                        <Image src="/assets/ShieldCheck.png" alt="Unique Destinations" width={40} height={40} />
                    </div>
                    <h2 className=' text-2xl font-semibold'>Safe Secure</h2>
                    <p>Your safety is our priority with comprehensive travel insurance and 24/7 support.</p>
                </div>
                <div className=' bg-white p-6 rounded-lg shadow-md mt-8'>
                    <div className='mb-5'>
                        <Image src="/assets/MapTrifold.png" alt="Unique Destinations" width={40} height={40} />
                    </div>
                    <h2 className=' text-2xl font-semibold'>Expert Guides</h2>
                    <p>Local experts who bring destinations to life with authentic cultural insights.</p>
                </div>
                <div className=' bg-white p-6 rounded-lg shadow-md mt-8'>
                    <div className='mb-5'>
                        <Image src="/assets/Headset.png" alt="Unique Destinations" width={40} height={40} />
                    </div>
                    <h2 className=' text-2xl font-semibold'>24/7 Support</h2>
                    <p>Round-the-clock customer service to assist you wherever your journey takes you.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseWanderlust;