// import Header21 from "@/components/header/Header21";
import Hero20 from "@/components/hero/Hero20";
import BrowserCategory1 from "@/components/section/BrowserCategory1";
// import BrowserCategory20 from "@/components/section/BrowserCategory20";
// import BrowserCategory3 from "@/components/section/BrowserCategory3";
import CtaBanner18 from "@/components/section/CtaBanner18";
import CtaBanner21 from "@/components/section/CtaBanner21";
import InspireingWork20 from "@/components/section/InspireingWork20";
import InspiringService11 from "@/components/section/InspiringService11";
import LatestEvents from "@/components/section/LatestEvents";
import NeedSomething2 from "@/components/section/NeedSomething2";
// import OurPartners20 from "@/components/section/OurPartners20";
import Testimonial2 from "@/components/section/Testimonial2";
// import TrendingService14 from "@/components/section/TrendingService14";
import TrendingHorseListings from "@/components/section/TrendingHorseListings";
import React from "react";
import { fetchListings } from "@/lib/data";
import { Listing } from "@/types/listings";

export const metadata = {
  title: "Hayly - Horse Marketplace | Home 20",
};

export default async function page() {
  const query = '';
  const listings = await fetchListings(query);

  return (
    <>
    
      {/* <Header21 /> */}
      <div className="body_content">
        <Hero20 />
        {/* <OurPartners20 /> */}
        <TrendingHorseListings listings={listings} />
        <BrowserCategory1 />
        <LatestEvents />
        <NeedSomething2 />
        <CtaBanner18 />
        <Testimonial2 />
        <InspireingWork20 />
        <InspiringService11 />
        <CtaBanner21 />
      </div>
    </>
  );
}
