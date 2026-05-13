import DestinationsCard from '@/components/DestinationsCard';
import React from 'react';

const DestinationPage = async() => {
    const res = await fetch('http://localhost:5000/destinations')
    const destinations = await res.json()
    console.log(destinations);


    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-2xl font-bold mt-5 p-5'>All Destination</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5  p-5'>
                {
                    destinations.map(destination => <DestinationsCard key={destination._id} destination={destination} />)
                }
            </div>
        </div>
    );
};

export default DestinationPage;