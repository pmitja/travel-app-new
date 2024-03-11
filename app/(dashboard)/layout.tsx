import DashboardNavbar from "@/components/DashboardNavbar";
import SideBar from "@/components/Sidebar";

type LayoutParams = {
  children: React.ReactNode;
}

const DashboardLayout = async ({ children }: LayoutParams) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:flex-col md:fixed md:w-72 md:inset-y-0 bg-gray-900">
        <SideBar />
      </div>
      <main className="md:pl-72">
        <DashboardNavbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
