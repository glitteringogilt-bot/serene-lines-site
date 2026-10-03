import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MaskHeading, Reveal, SectionLabel, Sparkle } from "./primitives";

const STEPS = [
  { n: "01", t: "Imagine", lead: "Every project starts with an idea.", d: "I explore the concept, visual direction, subject, audience, and purpose before developing the artwork." },
  { n: "02", t: "Illustrate", lead: "The idea becomes visual.", d: "I develop sketches, linework, color, composition, and illustration while maintaining the personality of the original concept." },
  { n: "03", t: "Refine", lead: "Creative work becomes production-ready.", d: "I clean up artwork, organize files, prepare vectors when needed, and make technical adjustments for the intended application." },
  { n: "04", t: "Produce", lead: "The design moves beyond the screen.", d: "The finished artwork becomes merchandise, packaging, a product image, or another tangible creative application." },
];

export const Process = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="grain relative overflow-hidden bg-[#2D1B4E] py-24 text-white lg:py-36" data-testid="process-section">
      <div className="pointer-events-none absolute -right-32 top-10 h-[500px] w-[500px] rounded-full bg-[#B59FD9]/20 blur-[140px]" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionLabel index="04" light>My Process</SectionLabel>
            <MaskHeading
              className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl"
              lines={["From screen", <span key="s" className="italic text-[#B59FD9]">to shelf.</span>]}
            />
          </div>
          <Reveal className="text-base leading-relaxed text-[#D9CDEB] sm:text-lg lg:col-span-4 lg:col-start-9 lg:pt-24">
            One of the defining ideas behind Serene Lines is the connection between digital illustration and physical merchandise.
          </Reveal>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-[11px] top-0 h-full w-px bg-white/15 lg:left-0 lg:top-[11px] lg:h-px lg:w-full" />
          <motion.div style={{ scaleX: scale }} className="absolute left-0 top-[11px] hidden h-px w-full origin-left bg-[#FF7A59] lg:block" />
          <motion.div style={{ scaleY: scale }} className="absolute left-[11px] top-0 h-full w-px origin-top bg-[#FF7A59] lg:hidden" />
          <ol className="grid gap-14 lg:grid-cols-4 lg:gap-10">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.12}>
                <li data-testid={`process-step-${s.n}`} className="group relative pl-12 lg:pl-0">
                  <span className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#2D1B4E] ring-1 ring-[#FF7A59] transition-transform duration-500 group-hover:rotate-90 group-hover:scale-125 lg:relative">
                    <Sparkle className="h-3 w-3" color="#FF7A59" />
                  </span>
                  <p className="mt-0 font-display text-6xl font-bold text-[#B59FD9]/40 transition-colors duration-500 group-hover:text-[#B59FD9] lg:mt-10">{s.n}</p>
                  <h3 className="mt-2 font-display text-3xl font-bold uppercase tracking-wide">{s.t}</h3>
                  <p className="mt-4 font-semibold text-[#FF9A80]">{s.lead}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#D9CDEB]">{s.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
