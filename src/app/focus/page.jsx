import Section from "@/components/Section";
import NavBar from "@/components/NavBar";

export default function Page() {
  return (
    <>
      <div className="text-gig-white bg-gray-700">
        <NavBar />
        <Section>
          <div className="ml-4 flex max-w-[600px] flex-col gap-3 md:ml-24">
            <div className="font-base font-semibold">Focus</div>
            <h1 className="text-style-h1">
              Avoiding Methane Emissions in Southeast Asia is Critical.
            </h1>
          </div>
        </Section>
      </div>
    </>
  );
}
