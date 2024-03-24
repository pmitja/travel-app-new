import MobileSidebar from "@/components/moblie-sidebar";
import { NavbarAvatar } from "./navbar-avatar";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

const DashboardNavbar = () => {
  return (
    <div className="flex items-center p-4 border-b-[1px] md:fixed md:min-w-[calc(100%-288px)] md:bg-white z-50">
      <MobileSidebar />
      <div className="flex mx-2 lg:mx-6 w-full justify-end">
        <div className=" gap-5 items-center hidden md:flex">
        <Button variant={"customGhost"} size={"secondaryDefault"}><Plus size={16} />Invite</Button>
          <NavbarAvatar />
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
