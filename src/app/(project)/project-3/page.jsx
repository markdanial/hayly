import Breadcumb18 from "@/components/breadcumb/Breadcumb18";
import Breadcumb3 from "@/components/breadcumb/Breadcumb3";

import Listing20 from "@/components/section/Listing20";
import TabSection1 from "@/components/section/TabSection1";

export const metadata = {
  title: "Hayly - Horse Marketplace | Project 1",
};

export default function page() {
  return (
    <>
    
      <TabSection1 />
      <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
      <div className=" bgc-thm3">
        <Breadcumb18 />
        <Listing20 />
      </div>
    </>
  );
}
