"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header30() {
  return (
    <section id="relume" className="relative px-[5%]">
      <div className="relative z-10 container">
        <div className="flex max-h-[60rem] min-h-svh items-center justify-center py-16 text-center md:py-24 lg:py-28">
          <div className="w-full max-w-lg">
            <h1 className="mb-5 font-serif text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
              Real Credits. Real Impact.
            </h1>
            <p className="text-text-alternative md:text-md">
              At Gigaton Finance, we provide high-quality, transparent, and
              community-aligned carbon credits to help avoid 1.02Gt of methane
              emissions over twenty years. You read that right: 1.02Gt.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
