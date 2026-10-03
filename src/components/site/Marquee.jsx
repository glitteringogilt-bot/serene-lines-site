import { Sparkle } from "./primitives";

const WORDS = ["Art in your everyday", "Carry your creative side", "From screen to shelf", "Calm creativity", "Production-ready results"];

const Row = () => (
  <div className="flex shrink-0 items-center">
    {WORDS.map((w, i) => (
      <div key={w} className="flex items-center">
        <span className={`whitespace-nowrap px-8 font-display text-5xl font-bold italic sm:text-7xl ${i % 2 ? "text-outline" : "text-[#2D1B4E]"}`}>{w}</span>
        <Sparkle className="h-6 w-6 sm:h-8 sm:w-8" color={i % 2 ? "#B59FD9" : "#FF7A59"} />
      </div>
    ))}
  </div>
);

export const Marquee = () => (
  <section className="marquee overflow-hidden border-y border-[#2D1B4E]/10 bg-[#F3EDF8] py-8 sm:py-10" data-testid="editorial-marquee" aria-label="Serene Lines taglines">
    <div className="marquee-track">
      <Row />
      <Row />
    </div>
  </section>
);
