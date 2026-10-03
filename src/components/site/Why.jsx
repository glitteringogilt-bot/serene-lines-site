import { MaskHeading, Reveal, SectionLabel, Sparkle } from "./primitives";

const SIDES = [
  { key: "artistic", label: "The artistic side", items: ["Imagination", "Illustration", "Color", "Character", "Storytelling"], cls: "bg-[#B59FD9] text-[#2D1B4E]", sub: "text-[#2D1B4E]" },
  { key: "technical", label: "The technical side", items: ["Organization", "File preparation", "Vectors", "Print setup", "Manufacturing requirements"], cls: "bg-[#2D1B4E] text-white", sub: "text-[#D9CDEB]" },
];

export const Why = () => (
  <section className="bg-[#FAF7FC] pb-24 lg:pb-36" data-testid="why-section">
    <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
      <div className="border-t border-[#2D1B4E]/15 pt-24 lg:pt-32">
        <SectionLabel index="07">Why Serene Lines?</SectionLabel>
        <MaskHeading
          className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-[#2D1B4E] sm:text-6xl"
          lines={["Creative thinking", <span key="p" className="italic text-[#8A6CC0]">with production in mind.</span>]}
        />
        <Reveal className="mt-6 text-base text-[#584870] sm:text-lg">There are two sides to my work.</Reveal>
      </div>

      <div className="relative mt-14 grid gap-4 md:grid-cols-2">
        {SIDES.map((s, i) => (
          <Reveal key={s.key} delay={i * 0.12}>
            <article data-testid={`why-serene-${s.key}-card`} className={`h-full rounded-[2px] p-8 sm:p-12 ${s.cls}`}>
              <span className="eyebrow">{s.label}</span>
              <ul className="mt-10 space-y-1">
                {s.items.map((it) => (
                  <li key={it} className="font-display text-3xl font-bold leading-tight transition-transform duration-500 hover:translate-x-3 sm:text-4xl">{it}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#FF7A59] shadow-xl md:flex">
          <Sparkle className="h-8 w-8" color="#fff" />
        </div>
      </div>

      <Reveal className="mt-16 grid gap-6 lg:grid-cols-12">
        <p className="font-display text-3xl font-bold text-[#2D1B4E] sm:text-4xl lg:col-span-5">Serene Lines brings those sides together.</p>
        <p className="text-base leading-relaxed text-[#584870] sm:text-lg lg:col-span-6 lg:col-start-7">
          I don't just want to create artwork that looks good on a screen. I want to create artwork that can become something real.
        </p>
      </Reveal>
    </div>
  </section>
);
