import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatementInfo from "@/components/dashboard/section/StatementInfo";

import MobileNavigation2 from "@/components/header/MobileNavigation2";

export const metadata = {
  title: "Hayly - Horse Marketplace | Statement",
};

export default function page() {
  return (
    <>
    
    <MobileNavigation2 />
      <DashboardLayout>
        <StatementInfo />
      </DashboardLayout>
    </>
  );
}
