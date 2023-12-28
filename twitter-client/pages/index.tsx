import React from "react";
import Image from "next/image";
import {
  BsBell,
  BsBookmark,
  BsEnvelope,
  BsSearch,
  BsTwitterX,
} from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { BiUser } from "react-icons/bi";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
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
    title: "Message",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
];
export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-16">
        <div className="col-span-3 pt-8  px-4">
          <div className="text-4xl h-fit hover:bg-slate-900 rounded-full  cursor-pointer p-2.5 transition-all w-fit">
            <BsTwitterX />
          </div>
          <div className="mt-4 text-2xl ">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  key={item.title}
                  className="flex justify-start items-center gap-4 hover:bg-slate-900 rounded-full
                   cursor-pointer py-2 px-5 w-fit mt-2"
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 pr-5">
              <button className="p-3 bg-[#1d9bf0] font-semibold rounded-full w-full ">
                Post
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-400"></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
