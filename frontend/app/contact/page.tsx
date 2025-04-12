import { Github, Instagram, Linkedin, Mail, Send, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Metadata } from "next";
import ScrollToTopButton from "../components/ScrollToTopButton";

export const metadata: Metadata = {
  title: "Contact",
};

const socials = [
  {
    icon: <Twitter size={20} />,
    href: "https://x.com/SamiPatel384218?t=pIG5pSuek7Vl0vnpsEpRLw&s=08",
    label: "Twitter",
    handle: "@SamiPatel384218",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:dev@avhimaz.in",
    label: "Email",
    handle: "samipatel888@gmail.com",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/samipatel12345678",
    label: "Github",
    handle: "samipatel404",
  },

  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/sami-patel-2a9242297/",
    label: "LinkedIn",
    handle: "Sami Patel",
  },
];

export default function Example() {
  return (
    <>
      <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
        <Navigation />
        <div className="lg:mx-0 px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl ml-0 lg:ml-[170px] md:ml-0">
            Feel free to contact me. {/* Let us get in touch */}
          </h2>
          <p className="mt-4 text-zinc-400 ml-0 lg:ml-[170px] md:ml-0">
            {" "}
            Stay connected with me :)
          </p>
        </div>
        <div className="w-full mt-10 h-px bg-zinc-800" />

        <div className="container flex items-center justify-center px-4 mx-auto">
          <div className="grid w-full grid-cols-1 gap-8 mx-auto md:mt-20 mt-10 sm:grid-cols-3 lg:gap-16">
            {socials.map((s) => (
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
                  <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                    {s.icon}
                  </span>{" "}
                  <div className="z-10 flex flex-col items-center">
                    <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                      {s.handle}
                    </span>
                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200 underline">
                      {s.label}
                    </span>
                  </div>
                </Link>
              </Card>
            ))}
            <div className="md:col-span-4 lg:col-span-3 flex justify-center items-center"></div>
            <div className="text-white mb-1"></div>
          </div>
        </div>
        <div className="w-full mt-10 h-px bg-zinc-800" />
      </div>

      <ScrollToTopButton />
    </>
  );
}
