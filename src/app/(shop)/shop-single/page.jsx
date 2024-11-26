import Breadcumb3 from "@/components/breadcumb/Breadcumb3";

import ShopSingleArea1 from "@/components/section/ShopSingleArea1";

export const metadata = {
  title: "Hayly - Horse Marketplace | Shop Single",
};

export default function page() {
  return (
    <>
    
      <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
      <ShopSingleArea1 />
    </>
  );
}
