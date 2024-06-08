"use client";

import { useSession } from "next-auth/react";
import NewChat from "./NewChat";
import Image from "next/image";

function SideBar() {
  const { data: session } = useSession();
  console.log(session?.user?.image!);
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* NewChat*/}
          <NewChat />
        </div>
        <div>{/* ModelSelection*/}</div>
        {/* Map through three CharTows */}
      </div>
      {session && (
        <Image
          src={session?.user?.image!}
          alt="Profile pic"
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
          width={100}
          height={500}
        />
      )}
    </div>
  );
}

export default SideBar;
