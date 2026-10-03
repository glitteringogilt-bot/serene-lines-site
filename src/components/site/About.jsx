import { Lightbulb, Layers, PenTool } from "lucide-react";
import { MaskHeading, Reveal, SectionLabel } from "./primitives";

const APPROACH = [
  { key: "creativity", icon: Lightbulb, title: "Creativity", text: "Exploring ideas, illustration, color, storytelling, and visual personality." },
  { key: "clarity", icon: Layers, title: "Clarity", text: "Organizing files, refining artwork, preparing designs, and making sure creative work is ready for production." },
  { key: "craft", icon: PenTool, title: "Craft", text: "Paying attention to the details that help a design move successfully from a digital concept to a physical product." },
];

export const About = () => (
  <section id="about" className="relative bg-[#FAF7FC] py-24 lg:py-36" data-testid="about-section">
    <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionLabel index="01">About</SectionLabel>
          <MaskHeading
            testid="about-heading"
            className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight text-[#2D1B4E] sm:text-6xl lg:text-7xl"
            lines={["Creative ideas,", <span key="i" className="italic text-[#8A6CC0]">made tangible.</span>]}
          />
        </div>
        <Reveal className="space-y-6 text-base leading-relaxed text-[#584870] sm:text-lg lg:col-span-6 lg:col-start-7 lg:pt-16">
          <p><span className="font-semibold text-[#2D1B4E]">Serene Lines</span> is my creative studio focused on graphic design and digital illustration for custom merchandise.</p>
          <p>I enjoy taking an idea from its earliest sketch and developing it into artwork that is polished, purposeful, and ready to become something physical. My work combines a soft, artistic approach with careful technical preparation so that creative concepts can translate successfully from screen to product.</p>
          <p>Whether I'm developing character artwork, preparing vector files, creating merchandise designs, or photographing finished products, I approach each project with creativity, clarity, and attention to detail.</p>
        </Reveal>
      </div>

      <Reveal className="relative mt-24 border-y border-[#2D1B4E]/15 py-14 lg:mt-32 lg:py-20" data-testid="about-mission">
        <span className="eyebrow text-[#C9492A]">My goal is simple</span>
        <p className="mt-6 max-w-5xl font-display text-3xl font-bold italic leading-[1.15] text-[#2D1B4E] sm:text-5xl lg:text-6xl">
          “To turn imaginative illustrations into meaningful, tangible everyday art.”
        </p>
        <p className="mt-8 text-sm text-[#584870]">Serene Lines is built around three core values: <span className="font-semibold text-[#2D1B4E]">consistency, clarity, and creativity.</span></p>
      </Reveal>

      <div className="mt-24 lg:mt-32">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel>My Approach</SectionLabel>
            <MaskHeading
              className="mt-6 font-display text-4xl font-bold leading-[1] tracking-tight text-[#2D1B4E] sm:text-5xl"
              lines={["Calm creativity.", "Thoughtful design.", <span key="p" className="italic text-[#8A6CC0]">Production-ready results.</span>]}
            />
          </div>
          <Reveal className="text-base leading-relaxed text-[#584870] sm:text-lg lg:col-span-5 lg:col-start-8 lg:pt-6">
            <p>I believe creative work should feel imaginative without feeling chaotic. My approach balances two sides of design — and the craft that joins them.</p>
            <p className="mt-4">The personality behind Serene Lines is calm, imaginative, organized, and welcoming.</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[2px] bg-[#2D1B4E]/15 md:grid-cols-3">
          {APPROACH.map((a, i) => (
            <Reveal key={a.key} delay={i * 0.12} className="h-full">
              <article
                data-testid={`approach-card-${a.key}`}
                className="group relative flex h-full flex-col bg-[#FAF7FC] p-8 transition-colors duration-500 hover:bg-[#2D1B4E] sm:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-6xl font-bold text-[#B59FD9]/60 transition-colors duration-500 group-hover:text-[#B59FD9]">0{i + 1}</span>
                  <a.icon className="h-6 w-6 text-[#FF7A59] transition-transform duration-500 group-hover:rotate-12" strokeWidth={1.5} />
                </div>
                <h3 className="mt-16 font-display text-3xl font-bold text-[#2D1B4E] transition-colors duration-500 group-hover:text-white">{a.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[#584870] transition-colors duration-500 group-hover:text-[#E6DDF3]">{a.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
