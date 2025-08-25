"use client";

import React from "react";
import { BiLogoDribbble, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Team14() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Expertise</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Team Leaders
          </h2>
          <p className="md:text-md">
            We are founders and principals--leaders in sustainability in
            Southeast Asia, pioneers in climate technologies, and innovators who
            create financial structures to address societal problems.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start justify-items-start gap-x-8 gap-y-12 md:gap-16 lg:grid-cols-2">
          <div className="flex flex-col">
            <div className="relative mb-5 aspect-square size-full overflow-hidden md:mb-6 md:pt-[100%]">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">
                Frank T. O’Keefe:
              </h5>
              <h6 className="md:text-md">Co-CEO, Co-Founder</h6>
            </div>
            <p>TK TK</p>
            <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-start">
              <a href="#">
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a href="#">
                <FaXTwitter className="size-6 p-0.5" />
              </a>
              <a href="#">
                <BiLogoDribbble className="size-6" />
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative mb-5 aspect-square size-full overflow-hidden md:mb-6 md:pt-[100%]">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">
                Nathan D. Lakey:
              </h5>
              <h6 className="md:text-md">Co-CEO, Co-Founder</h6>
            </div>
            <p>TK TK</p>
            <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-start">
              <a href="#">
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a href="#">
                <FaXTwitter className="size-6 p-0.5" />
              </a>
              <a href="#">
                <BiLogoDribbble className="size-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-14 w-full max-w-md md:mt-20 lg:mt-24" />
      </div>
    </section>
  );
}
