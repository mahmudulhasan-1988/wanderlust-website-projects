import Image from 'next/image';
import React from 'react';

const WhatTravelersSay = () => {
    return (
        <div className='mt-10'>
            <h1 className=' text-4xl font-bold px-20'>What Travelers Say</h1>
            <p className='px-20'>Real Experiences from our happy Travelers</p>
            <div className=' grid lg:grid-cols-2 gap-6 py-10 px-20'>
                <div className=' flex flex-col-reverse lg:flex-row justify-between py-5 px-10 gap-5 border-2 border-gray-300'>
                    <div className=' flex flex-col justify-between'>
                        <p className=' text-gray-700'>The Bali trip was absolutely magical! Every detail was perfectly planned. The resorts were luxurious and the cultural experiences were unforgettable.</p>
                    <div className=' mt-5 lg:mt-0'>         
                        <h3 className=' text-green-500 font-semibold'>Michael Chen</h3>
                        <p className=' text-gray-600'>Singapore</p>
                    </div>
                    </div>
                    <div className=' w-1/2'>
                        <Image src="/assets/person2.png" alt="Unique Destinations" className=' md:w-full w-50' width={250} height={150} />
                    </div>               
                </div>

                <div className=' flex flex-col-reverse lg:flex-row justify-between py-5 px-10 gap-5 border-2 border-gray-300'>
                    <div className=' flex flex-col justify-between'>
                        <p className=' text-gray-700'>wiss Alps adventure exceeded all expectations. The mountain views were breathtaking and our guide was incredibly knowledgeable. Highly recommend!</p>
                    <div className=' mt-5 lg:mt-0'>         
                        <h3 className=' text-green-500 font-semibold'>Michael Chen</h3>
                        <p className=' text-gray-600'>Singapore</p>
                    </div>
                    </div>
                    <div className=' w-1/2'>
                        <Image src="/assets/person1.png" alt="Unique Destinations" className=' md:w-full w-50' width={250} height={150} />
                    </div>               
                </div>


               
            </div>
        </div>
    );
};

export default WhatTravelersSay;