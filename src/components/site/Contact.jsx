import { ArrowUpRight, Mail, Linkedin } from "lucide-react";
import { MaskHeading, Reveal, SectionLabel, PlaceholderButton, Sparkle } from "./primitives";

export const Contact = () => (
  <section id="contact" className="grain relative overflow-hidden bg-[#2D1B4E] py-24 text-white lg:py-40" data-testid="contact-section">
    <Sparkle className="pointer-events-none absolute -right-24 top-16 h-[420px] w-[420px] opacity-[0.07]" color="#B59FD9" />
    <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
      <SectionLabel index="08" light>Contact</SectionLabel>
      <MaskHeading
        testid="contact-heading"
        className="mt-8 font-display text-[clamp(3rem,9vw,8.5rem)] font-bold leading-[0.9] tracking-[-0.02em]"
        lines={["Let’s Create", "Something", <span key="c" className="italic text-[#B59FD9]">to Carry.</span>]}
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-12">
        <Reveal className="space-y-5 text-base leading-relaxed text-[#D9CDEB] sm:text-lg lg:col-span-6">
          <p>Have a creative idea, merchandise concept, or illustration project in mind? I’d love to hear about it.</p>
          <p>Whether you’re looking for custom artwork, graphic design, or production-ready merchandise designs, let’s turn your idea into something tangible.</p>
          <div className="pt-6">
            <PlaceholderButton testid="contact-get-in-touch-button" variant="light" className="px-9 py-5 text-base">
              GET IN TOUCH
              <ArrowUpRight size={20} className="transition-transform duration-500 group-hover:rotate-45" />
            </PlaceholderButton>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
          <div className="border-t border-white/20 pt-8">
            <p className="font-display text-2xl font-bold">Shana Volner</p>
            <p className="mt-1 text-[#D9CDEB]">Serene Lines</p>
            <p className="mt-1 text-sm text-[#D9CDEB]">Graphic Design &amp; Digital Illustration for Custom Merchandise</p>
          </div>
          <div className="mt-8 flex flex-col gap-3">
            <PlaceholderButton testid="contact-email-link" variant="ghost" className="justify-between">
              <span className="flex items-center gap-3"><Mail size={18} /> Email</span>
              <ArrowUpRight size={18} />
            </PlaceholderButton>
            <PlaceholderButton testid="contact-linkedin-link" variant="ghost" className="justify-between">
              <span className="flex items-center gap-3"><Linkedin size={18} /> LinkedIn</span>
              <ArrowUpRight size={18} />
            </PlaceholderButton>
          </div>
          <p className="mt-10 flex items-center gap-3 font-display text-2xl italic text-[#FF9A80]" data-testid="contact-slogan">
            <Sparkle className="h-4 w-4" color="#FF7A59" /> Carry your creative side.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);
