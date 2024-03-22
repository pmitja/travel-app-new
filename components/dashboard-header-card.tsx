import { LinkProps } from "@/types/types";
import { Button } from "./ui/button";
import Link from "next/link";

type DashboardHeaderCardProps = {
  badgeText?: string;
  title: string;
  button: LinkProps
};

const DashboardHeaderCard = ({ badgeText, title, button }: DashboardHeaderCardProps) => {
  return (
    <div className="px-6 py-6 flex flex-col gap-6 bg-white max-w-fit shadow-lg shadow-boxShadow rounded-lg">
     {badgeText && <span className="py-2 px-3 bg-pillColor rounded-2xl shadow-sm max-w-fit text-black font-light text-sm">
        {badgeText}
      </span>}
      <h3 className="font-bold text-textColor text-2xl">
        {title}
      </h3>
      <Link href={button.to} className="text-secondary-foreground bg-buttonColor-lightblue hover:bg-buttonColor-lightblue/80 shadow-lg shadow-boxShadow/90 px-10 py-2 gap-2 max-w-fit">
        {button.text}
      </Link>
    </div>
  );
}

export default DashboardHeaderCard;