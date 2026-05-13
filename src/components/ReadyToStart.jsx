import Image from 'next/image';
import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';

const ReadyToStart = () => {
    return (
        <div className="bg-[url('/assets/CTA.png')] text-white items-center text-center py-40 px-20 mt-10 bg-no-repeat bg-cover">
            <h1 className=' text-5xl font-semibold mb-5'>Ready to Start Your Journey?</h1>
            <p>Join thousands of satisfied travelers who have already discovered the world with us.</p>
            <div className='flex justify-center'>
            <button className=' bg-white text-black px-10 py-3  mt-5 flex items-center gap-2 cursor-pointer hover:bg-blue-500 hover:text-white'>Book Your Trip Now <IoArrowForwardOutline /></button>
            </div>
        </div>
    );
};

export default ReadyToStart;