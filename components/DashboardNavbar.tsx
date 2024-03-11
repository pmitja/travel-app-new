import MobileSidebar from "@/components/MoblieSidebar";
import { NavbarAvatar } from "./NavbarAvatar";

const DashboardNavbar = () => {
  return (
    <div className="flex items-center p-4 border-b-[1px]">
      <MobileSidebar />
      <div className="flex mx-2 lg:mx-6 w-full justify-end">
        <div className=" gap-5 items-center hidden md:flex">
          <NavbarAvatar />
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
