"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Card } from "@heroui/react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const BookingCard = ({ destinationDetails }) => {

    const { data: session } = authClient.useSession();
    const user = session?.user;

    // useState syntax wrong ছিল
    const [departureDate, setDepartureDate] = useState(null);

    // destinationDetails undefined হলে crash বন্ধ করবে
    if (!destinationDetails) {
        return <p>Loading...</p>;
    }

    const {
        price,
        _id,
        destinationName,
        imageUrl,
        category
    } = destinationDetails;

    const handleBooking = async () => {

        if (!user) {
            alert("Please login first");
            return;
        }

        const bookingData = {
            userId: user?.id,
            userImage: user?.image,
            userName: user?.name,
            destinationId: _id,
            destinationName,
            price,
            imageUrl,
            category,
            departureDate,
        };

        const res = await fetch(("http://localhost:5000/booking"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookingData),
        });
        const data = await res.json();
        toast.success("Booking successful!");
    };

    return (
        <Card className="rounded-none border mt-5 p-5">

            <h2 className="text-sm text-gray-500">
                Starting from
            </h2>

            <h2 className="text-3xl font-bold text-cyan-500">
                ${price}
            </h2>

            <p className="text-sm text-gray-500 mb-4">
                Per Person
            </p>

            <input
                type="date"
                onChange={(e) => setDepartureDate(e.target.value)}
                className="border p-2 w-full mb-4"
            />

            <Button
                onClick={handleBooking}
                className="w-full rounded-none bg-sky-500 text-white"
            >
                Book Now
            </Button>

        </Card>
    );
};

export default BookingCard;

// "use client"
// import { authClient } from '@/lib/auth-client';
// import { Button, Card, DateField, Label } from '@heroui/react';
// import React, { use, useState } from 'react';

// const BookingCard = ({destinationDetails}) => {
//     const {data: session,} = authClient.useSession();
//     const user = session?.user;
//     console.log(user);
//     const {departureDate, setDepartureDate} = useState(null);

//     const {price, _id, destinationName, imageUrl, category} = destinationDetails;
    
//     const handleBooking = async () => {
//         const bookingData = {
//             userId: user.id,
//             userImage: user.image,
//             userName: user.name,
//             destinationId: destinationDetails._id,
//             destinationName,
//             price,
//             imageUrl,
//             category,
//             departureDate,
//         };
//         console.log(bookingData);
//     }

//     return (
//         <Card className=' rounded-none border mt-5'>
//             <h2 className='text-sm text-muted'>Starting from</h2>
//             <h2 className=' text-3xl font-bold text-cyan-500'>${price}</h2>
//             <p className='text-sm text-muted'>Per Person</p>
//              <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
//       <Label>Departure Date</Label>
//       <DateField.Group>
//         <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
//       </DateField.Group>
//     </DateField>
//     <Button onClick={handleBooking} className={'w-full rounded-none bg-sky-500'}>Book Now</Button>
//         </Card>
//     );
// };

// export default BookingCard;