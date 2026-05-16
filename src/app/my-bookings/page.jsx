import { BookingCancelAlert } from '@/components/BookingCancelAlert';
import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { RiDeleteBin5Line, RiEyeLine } from 'react-icons/ri';

const MyBookingPage = async() => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const {token }= await auth.api.getToken({
            headers: await headers()
        });
    
    const user = session?.user;
    console.log(session);
    const res = await fetch(`http://localhost:5000/booking/${user.id}`,{
        headers:{
            authorization: `Bearer ${token}`
        }
    });
    const bookings = await res.json();
    console.log(bookings);
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className=' text-2xl font-bold mb-5'>My Booking Page</h1>          
            <div className='mt-4 space-y-5'>
                {bookings.map((booking) => (
                    <div key={booking._id} className='border p-5 mb-4 flex gap-5 min-w-3xl'>
                        <Image src={booking.imageUrl} alt={booking.destinationName} width={200} height={200}  />
                    
                    <div >
                        <h2 className='text-2xl font-bold'>{booking.destinationName}</h2>
                        <p>Departure Date:{new Date(booking.departureDate).toLocaleDateString(
                            "en-US",{
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            }
                        )}</p>
                        <p>Booking ID: {booking._id}</p>
                        <p className=' text-3xl font-bold text-cyan-500'>${booking.price}</p>
                       
                       <div className='flex gap-5 mt-5'>
                        <BookingCancelAlert bookingId={booking._id} />
                       <Button className={" rounded-none border-blue-400 text-white"} ><RiEyeLine />View</Button>
                       </div>
                    </div>
                        

                    </div>
                  
                ))}
            </div>
        </div>
    );
};

export default MyBookingPage;