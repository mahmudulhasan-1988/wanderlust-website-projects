import { Separator } from "@heroui/react";
import { IoArrowForwardOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="bg-[url('/assets/banner.png')] text-white  flex justify-between flex-col items-center  gap-5 h-150 bg-no-repeat bg-cover">
      <div className="p-10 text-center flex justify-center flex-col items-center gap-3.5 flex-1">
        <h1 className="text-7xl">
          Discover Your <br /> Next Adventure
        </h1>

        <p className="text-2xl">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="flex gap-5">
          <button className="uppercase flex gap-2 items-center bg-cyan-500 hover:bg-blue-500 hover:text-white px-5 py-3 cursor-pointer">
            Explore Now <IoArrowForwardOutline />
          </button>

          <button className="uppercase px-5 py-3 bg-white/50 hover:bg-red-400 hover:text-white cursor-pointer">
            View Destination
          </button>
        </div>
      </div>

      <div className=" bg-white/30 flex justify-between gap-5 w-full items-center">
        <div className="px-3">
          <h3 className="text-sm">Location</h3>
          <p className="text-xs">Address, City or Zip</p>
        </div>

         <Separator variant="tertiary" orientation="vertical" />

        <div>
          <h3 className="text-sm">Date/Duration</h3>
          <p className="text-xs">Anytime/3 Days</p>
        </div>

           <Separator variant="tertiary" orientation="vertical" />

        <div>
          <h3 className="text-sm">Budget</h3>
          <p className="text-xs">$0-$3000</p>
        </div>

           <Separator variant="tertiary" orientation="vertical" />

        <div>
          <h3 className="text-sm">People</h3>
          <p className="text-xs">5-10</p>
        </div>



        <div className="bg-cyan-500 py-2 px-4">
          <h3>Search</h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;