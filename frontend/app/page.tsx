"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Particles from "./components/particles";
import Cursor from "./components/Cursor";
import Footer from "./components/footer";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Experiences", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <>
      <Cursor />
      <div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <nav className="my-7 animate-fade-in">
          <ul className="flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm md:text-xl lg:text-xl duration-500 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        <span className=" text-zinc-500 mb-4 text-sm md:text-xl lg:text-xl">
          Hi I'm
        </span>
        <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-8xl whitespace-nowrap bg-clip-text ">
         Sami Patel
        </h1>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <Footer />
        <div className="my-5 mx-4 text-center animate-fade-in"></div>
      </div>
    </>
  );
}
