import Section from "@/components/Section";
import NavBar from "@/components/NavBar";

export default function Page() {
  return (
    <>
      <div className="text-gig-white bg-stone-700">
        <NavBar />
        <Section>
          <div className="ml-4 flex max-w-[600px] flex-col gap-3 md:ml-24">
            <div className="font-base font-semibold">About</div>
            <h1 className="text-style-h1">
              Missions are aspirational.
              <br />
              What we're doing is real.
            </h1>
            <p className="font-sans text-base leading-[1.5]">
              We work in one of the world's biggest carbon sinks, Sourtheast
              Asia, to pursue methane avoidance at scale.{" "}
            </p>
          </div>
        </Section>
      </div>
    </>
  );
}
