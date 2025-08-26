import Section from "@/components/Section";

export default function Page() {
  return (
    <Section>
      <div className="mx-auto flex max-w-[600px] flex-col gap-3">
        <div className="font-base font-semibold">About</div>
        <h1 className="font-regular font-serif text-5xl leading-[1.2]">
          Missions are aspirational.
          <br />
          What we're doing is real.
        </h1>
        <p className="font-sans text-base leading-[1.5]">
          We work in one of the world's biggest carbon sinks, Sourtheast Asia,
          to pursue methane avoidance at scale.{" "}
        </p>
      </div>
    </Section>
  );
}
