
import DestinationsCard from '@/components/DestinationsCard';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';

const FeaturedDestinationsPage = async() => {
    const res = await fetch('http://localhost:5000/destinations')
    const destinations = await res.json()
    const featuredDestinations = destinations.slice(0, 6);
    // const { _id, imageUrl, destinationName, description, price, duration, country } = destinations
    



    return (
        
        <div className=' max-w-7xl mx-auto mt-10 border border-gray-300 p-5 '>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className=' text-4xl font-bold'>Featured Destinations</h1>
                    <p className=' text-lg text-gray-600'>Handpicked travel experiences for the adventure seekers</p>
                </div>
                <div>
                    <Link href={`/destinations`}><Button variant='outline' className={'rounded-none border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'}>ALL DESTINATIONS<IoArrowForwardOutline /> </Button></Link>
                </div>
            </div>
            
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10 p-5'>
                {
                    featuredDestinations.map(destination => <DestinationsCard key={destination._id} destination={destination} />)
                }
            </div>
        </div>
    );
};

export default FeaturedDestinationsPage;