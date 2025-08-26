import Divider from "@/components/Divider";
import Section from "@/components/Section";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <div className="text-gig-white bg-neutral-700">
        <NavBar />
        <Section>
          <div className="ml-4 flex max-w-[450px] flex-col gap-3 md:ml-24">
            <h1 className="font-regular font-serif text-5xl leading-[1.2]">
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
        </Section>
      </div>
      <Divider />
      <Section>
        <div className="text-center">
          <h1 className="font-sans text-5xl font-black">Gigaton Finance</h1>
        </div>
      </Section>
      <Divider />
      <Section>
        <div className="flex max-w-[568px] flex-col gap-3">
          <div className="font-base font-semibold">Accountability</div>

          <h1 className="font-regular font-serif text-5xl leading-[1.2]">
            Carbon Credits You Can Trust.
          </h1>
          <p className="font-sans text-base leading-[1.5]">
            Not all carbon credits are legit. Most don&rsquo;t deliver their
            promised impact. Many do more harm than good in communities. The
            result is a broken market for saving the planet.
            <br />
            <br />
            We can do better.
          </p>
        </div>
      </Section>
    </>
  );
}
