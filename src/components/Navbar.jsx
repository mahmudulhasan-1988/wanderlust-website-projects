"use client"

import Image from 'next/image';
import Link from 'next/link';
import NavLink from "./NavLink";
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';

const Navbar = () => {
    // Login function name and password
    const {data: session,} = authClient.useSession();
    const user = session?.user;

    // Logout function
    const handleSignOut = async () => {
        await authClient.signOut();
        
    };
    return (
        <nav className='flex justify-between items-center bg-white p-4 shadow-md font-semibold'>
            <ul className=' flex gap-3'>
                <li>
                    <NavLink href="/">Home</NavLink>
                </li>
                <li><NavLink href="/destinations">Destinations</NavLink></li>
                <li><NavLink href="/my-bookings">My Bookings</NavLink></li>
                <li><NavLink href="/add-destination">Add Destination</NavLink></li>
            </ul>
            <div>
                <Link href="/">
                    <Image src={"/assets/Wanderlast.png"} alt="Wanderlast Logo" width={100} height={50} />
                </Link>
            </div>

            <ul className=' flex gap-3 items-center'>
                <li><NavLink href="/profile">Profile</NavLink></li>

                {user ? <>
                    <li>
                        <Avatar>
                            <Avatar.Image referrerPolicy='no-referrer' alt="John Doe" src={user?.image} />
                            <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                        </Avatar>
                    </li>
                    <li>
                        <Button onClick={handleSignOut} variant='danger' className={' rounded-none'}>Logout</Button>
                    </li>

                </> : <>
                    <li><NavLink href="/login">Login</NavLink></li>
                    <li><NavLink href="/signup">Sign Up</NavLink></li>
                </>}

            </ul>
        </nav>
    );
};

export default Navbar;