import Divider from "@/components/Divider";
import Section from "@/components/Section";
import NavBar from "@/components/NavBar";
import clsx from "clsx";
import Image from "next/image";

import backgroundPng from "@/assets/home-movie-frame-1.jpg";
import communitySvg from "@/assets/community.svg";
import qualitySvg from "@/assets/quality.svg";
import transparencySvg from "@/assets/transparency.svg";

const accountability = [
  {
    title: "Transparency",
    description:
      "We make public, in real time, every ton of CO2e we avoid. No estimates, no exaggerating.",
    highlight: false,
    icon: transparencySvg,
  },
  {
    title: "Quality",
    description:
      "We use proven technologies to avoid emissions that can be easily verified by third-party auditors.",
    highlight: false,
    icon: qualitySvg,
  },
  {
    title: "Community",
    description:
      "We invest 20% of our proceeds into community-driven projects--everything from environmental clean-up to new living and educational facilities.",
    highlight: true,
    icon: communitySvg,
  },
];

export default function Home() {
  return (
    <div className="w-full">
      <div
        className="text-gig-white"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${backgroundPng.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <NavBar />
        <section className="px-4 pt-10 pb-10 md:px-16 md:pt-6 md:pb-20">
          <div
            id="A"
            className="relative flex min-h-[470px] w-full items-center"
          >
            <div className="ml-4 flex max-w-[450px] flex-col gap-3 pr-14 md:ml-24">
              <h1 className="text-style-h1">
                Real Credits.
                <br />
                Real Impact.
              </h1>
              <p className="font-sans text-base leading-[1.5]">
                At Gigaton Finance, we provide high-quality, transparent, and
                community-aligned carbon credits to help avoid 1.02Gt of methane
                emissions over twenty years. You read that right: 1.02Gt.
              </p>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center">
              <span className="text-gig-yellow px-2 font-bold [text-orientation:sideways] [writing-mode:vertical-rl]">
                Taman Negara_Malaysia ———— 4.6360° N, 102.4069° E
              </span>
            </div>
          </div>
        </section>{" "}
      </div>
      <Divider />
      <Section>
        <div className="text-center">
          <h1 className="font-sans text-5xl font-black">Gigaton Finance</h1>
        </div>
      </Section>
      <Divider />
      <Section>
        <div className="flex w-full flex-col gap-3">
          <div className="font-base font-semibold">Accountability</div>

          <h1 className="text-style-h1">Carbon Credits You Can Trust.</h1>
          <p className="font-sans text-base leading-[1.5]">
            Not all carbon credits are legit. Most don&rsquo;t deliver their
            promised impact. Many do more harm than good in communities. The
            result is a broken market for saving the planet.
            <br />
            <br />
            We can do better.
          </p>
          <div className="mt-20 grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-3">
            {accountability.map((item, index) => (
              <div
                className={clsx(
                  "flex flex-col items-center gap-6 border px-6 py-20 text-center",
                  item.highlight && "bg-gig-yellow",
                )}
                key={index}
              >
                <Image src={item.icon} alt={item.title} />
                <h2 className="text-style-h2">{item.title}</h2>
                <p className="font-sans text-base leading-[1.5]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
