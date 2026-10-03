import { MaskHeading, Reveal, SectionLabel, Sparkle } from "./primitives";

const TRAITS = [
  { key: "calm", t: "Calm", d: "Creative work doesn't have to feel overwhelming. I approach projects with patience and focus." },
  { key: "imaginative", t: "Imaginative", d: "I enjoy exploring ideas and creating artwork that feels personal, expressive, and visually engaging." },
  { key: "organized", t: "Organized", d: "Good design also requires structure. Clean files, clear workflows, and careful preparation matter." },
  { key: "welcoming", t: "Welcoming", d: "Collaboration should feel comfortable. I want creative partners and clients to feel heard throughout the process." },
];

export const AboutShana = () => (
  <section className="bg-[#FAF7FC] py-24 lg:py-36" data-testid="about-shana-section">
    <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
      <div className="grid items-start gap-14 lg:grid-cols-12">
        <div className="lg:sticky lg:top-28 lg:col-span-5">
          <SectionLabel index="06">About Shana</SectionLabel>
          <MaskHeading
            className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight text-[#2D1B4E] sm:text-6xl"
            lines={["The person behind", <span key="s" className="italic text-[#8A6CC0]">Serene Lines.</span>]}
          />
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal className="space-y-5 text-base leading-relaxed text-[#584870] sm:text-lg" data-testid="about-shana-bio">
            <p>I'm a creative designer and illustrator who enjoys combining imagination with structure.</p>
            <p>I’m naturally drawn to the details — the small decisions in an illustration, the way colors work together, how a design translates to a physical product, and how a project can be organized so that the creative process stays clear from beginning to end.</p>
            <p>My approach is calm and intentional. I listen, explore ideas carefully, and work toward finished results that feel both creative and considered.</p>
            <p className="font-display text-2xl font-bold italic leading-snug text-[#2D1B4E]">I want people who work with me to feel that their ideas are in good hands: artistically cared for and technically prepared.</p>
          </Reveal>

          <p className="eyebrow mt-16 text-[#2D1B4E]">What I want Serene Lines to stand for</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {TRAITS.map((x, i) => (
              <Reveal key={x.key} delay={i * 0.08}>
                <article data-testid={`personality-badge-${x.key}`} className="group h-full rounded-[2px] border border-[#2D1B4E]/12 bg-white p-6 transition-colors duration-500 hover:border-[#FF7A59]">
                  <div className="flex items-center gap-3">
                    <Sparkle className="h-4 w-4 transition-transform duration-500 group-hover:rotate-90" color="#FF7A59" />
                    <h3 className="font-display text-2xl font-bold text-[#2D1B4E]">{x.t}</h3>
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#584870]">{x.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
