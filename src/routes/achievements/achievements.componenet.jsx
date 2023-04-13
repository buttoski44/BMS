import Paper from "../../assets/paper.jpg";
import { Card } from "../../components/card/card.component";
import { Section } from "../../components/section/section.component";
export const Achievements = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url()` }}
        className="flex items-end justify-start w-full h-32 px-20 mt-24"
      >
        <div className="flex items-end justify-between w-full h-full py-3 mb-3">
          <span className="text-3xl font-bold tracking-wider text-red-300 heading">
            Achievements
          </span>
          <div className="flex gap-1 text-xs font-semibold heading ">
            <Section>SSC</Section>
            <Section>NTSE</Section>
            <Section>MTSE</Section>
            <Section>Scholarship</Section>
            <Section>Other</Section>
          </div>
        </div>
      </div>
      <div className="w-full h-full px-20 ">
        <div className="bg-contain h-86 " style={{ backgroundImage: `url()` }}>
          <div className="flex flex-wrap justify-center w-full gap-20 py-12 h-84 ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};
