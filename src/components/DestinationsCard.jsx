import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { LuMapPin } from 'react-icons/lu';
import { RiExternalLinkLine } from 'react-icons/ri';
import { SlCalender } from 'react-icons/sl';

const DestinationsCard = ({ destination }) => {
    const { _id, imageUrl, destinationName, description, price, duration, country } = destination
    return (
        <div className=' border p-5 rounded-2xl shadow-2xl'>
            <Image
                alt={destinationName}
                src={imageUrl}
                width={400}
                height={300} className='rounded-2xl' />

            <div>
                <div className=' flex items-center gap-1 text-gray-500 mt-2'>
                    <LuMapPin /> <span>{country}</span>
                </div>

                <div className=' flex justify-between items-center'>
                    <div>
                        <div>
                            <h2 className='text-2xl font-bold mt-4'>{destinationName}</h2>
                        </div>
                        <div className=' flex items-center gap-1 text-gray-500 mb-3'>
                            <SlCalender /> <span className=' text-gray-500'>{duration}</span>
                        </div>
                    </div>
                    <div>
                        <p className=' text-2xl font-bold'>${price}</p>
                    </div>
                </div>
                <Link href={`/destinations/${_id}`}><Button variant=' ghost' className={'mt-1 text-cyan-500'}>Book Now<RiExternalLinkLine /></Button></Link>
            </div>
        </div>
    );
};

export default DestinationsCard;