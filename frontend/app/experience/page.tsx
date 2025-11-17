import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

import ScrollToTopButton from "../components/ScrollToTopButton";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiences",
};

const experience = [

  {
    href: "https://leetcode.com/u/samipatel/",
    label: "Sep 2023 - Present",
    handle: "Leetcode",
    des: "Completed many Leetcode questions, significantly enhancing problem-solving abilities and sharpening critical thinking skills.",
    skills: "C++",
  },
  {
    href:"https://github.com/samipatel12345678",
    label:"May 2025-Present",
    handle: "Software Developer",
    des:"Veloce Ai is a ai for CRM company and I am here as an full stack developer",
    skills:"MERN Stack , Supabase , Git/Github, Tailwind"
  },
  
];

export default function Example() {
  return (
    <>
      <div>
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
          <Navigation />
          <div className="lg:mx-0 px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl ml-0 lg:ml-[170px] md:ml-0">
              Experiences
            </h2>
            <p className="mt-4 text-zinc-400 ml-0 lg:ml-[170px] md:ml-0">
              {" "}
              Some experiences are work-related, while others are personal
              endeavors pursued in my own time.
            </p>
          </div>
          <div className="w-full mt-10 h-px bg-zinc-800" />
          <div className="container flex items-center justify-center px-4 mx-auto">
            <div className="grid w-full grid-cols-1 gap-8 mx-auto md:mt-20 mt-10 sm:grid-cols-3 lg:gap-16">
              {experience.map((s) => (
                <Card>
                  <Link
                    href={s.href}
                    target="_blank"
                    className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
                  >
                    <span
                      className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                      aria-hidden="true"
                    />
                    <div className="z-10 flex flex-col items-center">
                      <span className="lg:text-xl text-center font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                        {s.handle}
                      </span>

                      <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                        {s.label}{" "}
                      </span>
                      <div className="z-10 flex flex-col items-center">
                        <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200 underline">
                          Skills: {s.skills}
                        </span>
                      </div>

                      <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                        {s.des}
                      </span>
                    </div>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
          <div className="w-full lg:mt-10 h-px bg-zinc-800" />
        </div>
      </div>
      <ScrollToTopButton />
    </>
  );
}
