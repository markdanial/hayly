import Breadcumb2 from "@/components/breadcumb/Breadcumb2";
import Breadcumb3 from "@/components/breadcumb/Breadcumb3";

import BlogArea2 from "@/components/section/BlogArea2";

export const metadata = {
  title: "Hayly - Horse Marketplace | Blog 2",
};

export default function page() {
  return (
    <>
    
      <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
      <Breadcumb2
        title="Freeio Blog"
        brief="Give your visitor a smooth online experience with a solid UX design"
      />
      <BlogArea2 />
    </>
  );
}