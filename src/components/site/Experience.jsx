import { GraduationCap } from "lucide-react";
import { MaskHeading, Reveal, SectionLabel } from "./primitives";

const EDUCATION = [
  { key: "bachelors", title: "Bachelor’s Degree in Graphic Design", status: "Currently pursuing" },
  { key: "associates", title: "Associate Degree in Graphic Design & Electronic Media Productions", status: "Completed" },
];

const PLACEHOLDERS = [
  { group: "Academic & Creative Experience", key: "academic", title: "[PROJECT / COURSE / EXPERIENCE]", meta: "", text: "[Description to be added.]" },
  { group: "Leadership & Involvement", key: "leadership", title: "[ORGANIZATION / POSITION]", meta: "", text: "[Description to be added.]" },
];

export const Experience = () => (
  <section className="bg-[#F3EDF8] py-24 lg:py-36" data-testid="experience-section">
    <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
      <SectionLabel index="05">Experience &amp; Education</SectionLabel>
      <MaskHeading
        className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight text-[#2D1B4E] sm:text-6xl"
        lines={["Learning the craft,", <span key="b" className="italic text-[#8A6CC0]">line by line.</span>]}
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow text-[#2D1B4E]">Education</p>
          <div className="mt-6 space-y-4">
            {EDUCATION.map((e, i) => (
              <Reveal key={e.key} delay={i * 0.1}>
                <article data-testid={`education-card-${e.key}`} className="group flex gap-5 rounded-[2px] bg-[#2D1B4E] p-7 text-white transition-transform duration-500 hover:-translate-y-1">
                  <GraduationCap className="mt-1 h-6 w-6 shrink-0 text-[#FF9A80]" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-display text-xl font-bold leading-snug sm:text-2xl">{e.title}</h3>
                    <span className={`eyebrow mt-4 inline-block rounded-full px-3 py-1.5 ${e.status === "Completed" ? "bg-[#B59FD9] text-[#2D1B4E]" : "bg-[#FF7A59] text-[#2D1B4E]"}`}>{e.status}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7" data-testid="experience-timeline">
          {PLACEHOLDERS.map((p, i) => (
            <Reveal key={p.key} delay={i * 0.06}>
              {(i === 0 || PLACEHOLDERS[i - 1].group !== p.group) && <p className={`eyebrow text-[#2D1B4E] ${i ? "mt-12" : ""}`}>{p.group}</p>}
              <article data-testid={`experience-${p.key}`} className="relative mt-4 border-l-2 border-[#B59FD9] py-2 pl-6">
                <span className="absolute -left-[7px] top-4 h-3 w-3 rounded-full bg-[#FF7A59]" />
                <h3 className="font-display text-xl font-bold text-[#2D1B4E]">{p.title}</h3>
                {p.meta && <p className="mt-1 text-sm font-semibold text-[#584870]">{p.meta}</p>}
                <p className="mt-2 text-[15px] text-[#584870]">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
