import Banner from "@/components/Banner";
import ReadyToStart from "@/components/ReadyToStart";
import WhatTravelersSay from "@/components/WhatTravelersSay";
import WhyChooseWanderlust from "@/components/WhyChooseWanderlust";
import FeaturedDestinationsPage from "./HomePage/page";


export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <FeaturedDestinationsPage>  </FeaturedDestinationsPage>
      <WhyChooseWanderlust></WhyChooseWanderlust>
      <WhatTravelersSay></WhatTravelersSay>
      <ReadyToStart></ReadyToStart>  
    </div>
  );
}
