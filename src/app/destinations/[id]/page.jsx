
import BookingCard from '@/components/BookingCard';
import { DeleteAlert } from '@/components/DeleteAlert';
import { EditModal } from '@/components/EditModal';
import { auth } from '@/lib/auth';
import { AbbrQl } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { LuMapPin } from 'react-icons/lu';
import { RiExternalLinkLine } from 'react-icons/ri';
import { SlCalender } from 'react-icons/sl';

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params;
    const {token }= await auth.api.getToken({
        headers: await headers()
    });
    

    const res = await fetch(`http://localhost:5000/destinations/${id}`,{
        headers:{
            authorization: `Bearer ${token}`
        }
    })
    const destinationDetails = await res.json()

    const { imageUrl, destinationName, description, price, duration, country } = destinationDetails;


    // console.log(destinationDetails);
    return (
        <div className=' max-w-4xl mx-auto mt-10 mb-10'>
            <div className=' flex items-center justify-end gap-3'>
                <EditModal destination={destinationDetails} />
                <DeleteAlert destination={destinationDetails} />
            </div>


            <Image className=' w-full h-100 object-cover '
                src={imageUrl}
                alt={destinationName}
                width={300}
                height={300}
            />

            <div className=' flex justify-between'>
                <div className='p-2  max-w-xl'>
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
                        
                    </div>
                    <h1 className='text-2xl font-bold mt-6'>Overview</h1>
                    <p className=' text-gray-600 mt-4'>{description}</p>

                    <h1 className='text-2xl font-bold mt-6'>Highlights</h1>
                    <p className=' text-gray-600 mt-4'>{description}</p>
                </div>
            <BookingCard destinationDetails={destinationDetails} />
            </div>
        </div>
    );
};

export default DestinationDetailsPage;