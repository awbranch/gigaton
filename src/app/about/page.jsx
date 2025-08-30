import Section from "@/components/Section";
import Hero from "@/components/Hero";
import bgImg from "@/assets/Lombok_Indonesia.jpg";

export default function Page() {
  return (
    <>
      <Hero
        imageLocation="Lombok _ Indonesia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;————&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.6360° N, 102.4069° E"
        backgroundImage={bgImg}
      >
        <div className="flex max-w-[600px] flex-col gap-3">
          <div className="text-style-eyebrow">About Us</div>
          <h1 className="text-style-h1">
            Missions are aspirational.
            <br />
            What we're doing is real.
          </h1>
          <p className="text-style-body-large">
            We work in one of the world's biggest carbon sinks, Sourtheast Asia,
            to pursue methane avoidance at scale.
          </p>
        </div>
      </Hero>
    </>
  );
}
