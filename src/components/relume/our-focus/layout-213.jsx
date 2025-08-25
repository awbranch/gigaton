"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Layout213() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-2">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-1">
            <p className="mb-3 font-semibold md:mb-4">Impact</p>

            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl font-serif">
              Why methane?
            </h2>
            <p className="md:text-md">
              The IPCC has identified methane avoidance as a top priority for
              arresting global warming because it is an incredibly potent
              greenhouse gas.{" "}
            </p>
            <div className="mt-6 flex flex-row gap-4 md:mt-8">
              <div>
                <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl font-serif">
                  84x
                </h2>
                <p>
                  Methane has 84 times the global warming effect of C02 in its
                  first twenty years.
                </p>
              </div>
              <div>
                <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl font-serif">
                  28x
                </h2>
                <p>
                  Methane has 24 times the global warming effect of C02 over 100
                  years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
