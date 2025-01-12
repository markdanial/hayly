import Breadcumb3 from "@/components/breadcumb/Breadcumb3";
import Breadcumb4 from "@/components/breadcumb/Breadcumb4";

import Listing2 from "@/components/section/Listing2";
import TabSection1 from "@/components/section/TabSection1";

export const metadata = {
  title: "Hayly - Horse Marketplace | Service 2",
};

export default function page() {
  return (
    <>
    
      <TabSection1 />
      <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
      <Breadcumb4 />
      <Listing2 />
    </>
  );
}
