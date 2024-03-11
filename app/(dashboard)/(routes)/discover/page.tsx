import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Discover() {
  return (
    <main className="flex min-h-full flex-col items-center justify-between">
      <div className="bg-meshBanner bg-cover w-full min-h-1/3">
        <div className="container my-10 mx-auto flex flex-col gap-3">
          <h2 className="text-3xl font-bold text-textColor">Start planning next trip</h2>
          <div className="flex gap-6"><div className="px-6 py-6 flex flex-col gap-6 bg-white max-w-fit shadow-lg shadow-boxShadow rounded-lg">
            <span className="py-2 px-3 bg-pillColor rounded-2xl shadow-sm max-w-fit">I don&apos;t know where</span>
            <h3 className="font-bold text-textColor text-2xl">Generate my random next trip</h3>
            <Button variant={"orange"} size={"secondaryDefault"}>Start</Button>
          </div>
          <div className="px-6 py-6 flex flex-col gap-6 bg-white max-w-fit shadow-lg shadow-boxShadow rounded-lg">
            <span className="py-2 px-3 bg-pillColor rounded-2xl shadow-sm max-w-fit">I exactly know where to go</span>
            <h3 className="font-bold text-textColor text-2xl">Generate my next trip</h3>
            <Button variant={"orange"} size={"secondaryDefault"}>Start</Button>
          </div></div>
        </div>
      </div>
    </main>
  );
}