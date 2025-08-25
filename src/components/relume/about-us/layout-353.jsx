"use client";

import React from "react";

export function Layout353() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div className="static md:sticky md:top-[30%]">
            <p className="mb-3 font-semibold md:mb-4">Values</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl font-serif">
              We are pragmatic and focused on fixing what's broken.
            </h2>
            <p className="md:text-md">
              The carbon credit market can do so much better. We can do better,
              and so we've distilled from our observations four criteria that
              must be met for a carbon credit to be meaningful.
            </p>
          </div>
          <div>
            <Card className="mb-8 sticky p-8" style={{ top: "30%" }}>
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl font-serif">
                Scalable and Consequential
              </h3>
              <p>
                The magnitude of our global emissions is so huge, we must pursue
                strategies that can yield equally huge results: 1.02Gt of CO2e
                over 20 years.
              </p>
            </Card>
            <Card className="mb-8 sticky p-8" style={{ top: "32%" }}>
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl font-serif">
                High Quality
              </h3>
              <p>
                84% of issued credits fail to represent real reductions. Because
                we use proven technologies, we can actually make good on our
                promises.
              </p>
            </Card>
            <Card className="mb-8 sticky p-8" style={{ top: "34%" }}>
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl font-serif">
                Transparent
              </h3>
              <p>
                Don't take our word for it; our methane avoidance can be tracked
                in real time, on a dashboard for our subscribers.
              </p>
            </Card>
            <Card className="mb-8  sticky p-8" style={{ top: "36%" }}>
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl font-serif">
                Community Aligned
              </h3>
              <p>
                We do not exploit communities for gain. We invest in communities
                so everyone gains.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ children, className, style }) {
  return (
    <div
      className={`border border-border-primary bg-background-primary ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
