import NavBar from "@/components/NavBar";
import { StaticImageData } from "next/image";

type Props = {
  children: React.ReactNode;
  imageLocation: string;
  backgroundImage: StaticImageData;
};

export default function Hero({
  children,
  imageLocation,
  backgroundImage,
}: Props) {
  return (
    <div
      className="text-gig-white flex min-h-[800px] flex-col gap-6 py-[71px] pl-[61px]"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${backgroundImage.src}) lightgray no-repeat`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <NavBar />
      <section className="">
        <div className="flex w-full items-center justify-between pr-[60px] pl-[97px]">
          {children}

          <div className="text-gig-yellow font-bold whitespace-nowrap [text-orientation:sideways] [writing-mode:vertical-rl]">
            {imageLocation}
          </div>
        </div>
      </section>{" "}
    </div>
  );
}
