"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

const Cursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => setIsLargeScreen(window.innerWidth >= 1024);

    // Initial screen size check
    updateScreenSize();

    // Resize event listener
    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  useEffect(() => {
    if (!isLargeScreen) return;

    gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
      gsap.to(".cursor", { duration: 0.9, x: clientX, y: clientY });
      updateElementPosition(clientX, clientY);
    };

    const { x, y } = mousePosition;
    updateElementPosition(x, y);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isLargeScreen, mousePosition]);

  const updateElementPosition = (x: number, y: number) => {
    const distanceInPixels = 2 * window.devicePixelRatio;
    const angle = Math.atan2(
      y - window.innerHeight / 2,
      x - window.innerWidth / 2
    );
    const offsetX = x + Math.cos(angle) * distanceInPixels;
    const offsetY = y + Math.sin(angle) * distanceInPixels;
    gsap.to(".element-2cm-away", { duration: 0.9, x: offsetX, y: offsetY });
  };

  if (!isLargeScreen) return null;

  return (
    <>
      <div className="cursor fixed border border-white w-14 h-14 rounded-full z-50"></div>
      <div className="element-2cm-away fixed bg-red w-4 h-4 rounded-full z-50"></div>
    </>
  );
};

export default Cursor;
