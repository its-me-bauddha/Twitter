import React, { useCallback } from "react";

import {
  BsBell,
  BsBookmark,
  BsEnvelope,
  BsSearch,
  BsTwitterX,
  BsSlashSquare,
} from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { BiUser } from "react-icons/bi";
import { RiFileListLine } from "react-icons/ri";
import { LuUsers2 } from "react-icons/lu";
import { CiCircleMore } from "react-icons/ci";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import FeedCard from "@/components/FeedCard";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <GoHome />,
  },
  {
    title: "Explore",
    icon: <BsSearch />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Grok",
    icon: <BsSlashSquare />,
  },
  {
    title: "Lists",
    icon: <RiFileListLine />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },

  {
    title: "Communities",
    icon: <LuUsers2 />,
  },
  {
    title: "Premium",
    icon: <BsTwitterX />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More",
    icon: <CiCircleMore />,
  },
];
export default function Home() {
  const handleLoginWithGoogle = useCallback((cred: CredentialResponse) => {},
  []);
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-12">
        <div className="col-span-3 pt-2  ml-24">
          <div className="text-3xl h-fit hover:bg-slate-900 rounded-full  cursor-pointer px-5 pt-2 transition-all w-fit">
            <BsTwitterX />
          </div>
          <div className="mt-1 text-xl pr-2">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  key={item.title}
                  className="flex justify-start items-center gap-4 hover:bg-slate-900 rounded-full
                   cursor-pointer py-2 px-5 w-fit mt-2"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 pr-5">
              <button className="p-2 bg-[#1d9bf0] font-semibold rounded-full w-full ">
                Post
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px]  border-gray-600">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3 p-5">
          <div className="p-5 bg-slate-700 rounded-lg ">
            <h1 className="text-2xl my-2">New to Twitter ?</h1>
            <GoogleLogin onSuccess={(cred) => console.log(cred)} />
          </div>
        </div>
      </div>
    </div>
  );
}
