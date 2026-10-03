import { ArrowUp } from "lucide-react";
import { scrollToId } from "./primitives";

const LINKS = ["Home", "About", "Work", "Contact"];

export const Footer = () => (
  <footer className="bg-[#FAF7FC] pt-20" data-testid="site-footer">
    <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
      <div className="grid gap-12 border-b border-[#2D1B4E]/15 pb-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <img src="art/logo.webp" alt="Serene Lines logo" className="w-[140px]" data-testid="footer-logo" />
          <p className="mt-6 font-display text-2xl italic text-[#2D1B4E]">Art in your everyday.</p>
          <p className="mt-2 text-sm text-[#584870]">Graphic Design &amp; Digital Illustration for Custom Merchandise</p>
          <p className="mt-1 text-sm font-semibold text-[#2D1B4E]">Shana Volner</p>
        </div>
        <ul className="space-y-3 md:col-span-3 md:col-start-8">
          {LINKS.map((l) => (
            <li key={l}>
              <button onClick={() => scrollToId(`#${l.toLowerCase()}`)} data-testid={`footer-link-${l.toLowerCase()}`} className="link-underline eyebrow pb-1 text-[#2D1B4E] hover:text-[#C9492A]">
                {l}
              </button>
            </li>
          ))}
        </ul>
        <div className="md:col-span-2 md:text-right">
          <button
            onClick={() => scrollToId("#home")}
            data-testid="footer-back-to-top"
            className="group inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#2D1B4E]/20 text-[#2D1B4E] transition-colors duration-300 hover:bg-[#2D1B4E] hover:text-white"
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="transition-transform duration-500 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
      <p className="select-none overflow-hidden whitespace-nowrap pt-6 text-center font-display text-[clamp(3.5rem,15vw,14rem)] font-bold leading-[0.85] tracking-[-0.03em] text-[#2D1B4E]">
        Serene <span className="italic text-[#B59FD9]">Lines</span>
      </p>
      <div className="flex flex-col justify-between gap-2 py-6 text-xs text-[#584870] sm:flex-row">
        <span>© 2026 Serene Lines · Shana Volner</span>
        <span>Carry your creative side.</span>
      </div>
    </div>
  </footer>
);
