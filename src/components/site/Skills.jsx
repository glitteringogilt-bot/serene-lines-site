import { Brush, Type, Package, Spline, Printer, Camera } from "lucide-react";
import { MaskHeading, Reveal, SectionLabel } from "./primitives";

const TOOLS = ["Clip Studio Paint", "Procreate", "Vector design tools", "Digital illustration workflows", "Print and production preparation"];

const Cell = ({ testid, icon: Icon, title, text, className = "", dark = false, children, delay = 0 }) => (
  <Reveal delay={delay} className={className}>
    <article
      data-testid={testid}
      className={`group relative flex h-full min-h-[240px] flex-col justify-between overflow-hidden rounded-[2px] p-8 transition-transform duration-500 hover:-translate-y-1 ${
        dark ? "bg-[#2D1B4E] text-white" : "border border-[#2D1B4E]/12 bg-white"
      }`}
    >
      <Icon className={`h-7 w-7 ${dark ? "text-[#FF9A80]" : "text-[#FF7A59]"}`} strokeWidth={1.5} />
      <div className="relative z-10 mt-10">
        <h3 className={`font-display text-2xl font-bold sm:text-3xl ${dark ? "text-white" : "text-[#2D1B4E]"}`}>{title}</h3>
        <p className={`mt-3 max-w-md text-[15px] leading-relaxed ${dark ? "text-[#E6DDF3]" : "text-[#584870]"}`}>{text}</p>
      </div>
      {children}
    </article>
  </Reveal>
);

export const Skills = () => (
  <section className="bg-[#F3EDF8] py-24 lg:py-36" data-testid="skills-section">
    <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div>
          <SectionLabel index="02">What I Do</SectionLabel>
          <MaskHeading
            className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight text-[#2D1B4E] sm:text-6xl lg:text-7xl"
            lines={["Skills &", <span key="e" className="italic text-[#8A6CC0]">Expertise</span>]}
          />
        </div>
        <Reveal className="max-w-sm text-base leading-relaxed text-[#584870]">
          Six disciplines that carry an idea from the first sketch to the finished product.
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-12" data-testid="skills-bento-grid">
        <Cell
          testid="skill-digital-illustration"
          icon={Brush}
          title="Digital Illustration"
          text="Creating expressive digital artwork, character designs, line art, and illustrations with a warm, imaginative style."
          className="md:col-span-6 lg:col-span-8"
          dark
        />
        <Cell testid="skill-graphic-design" icon={Type} title="Graphic Design" text="Developing visual concepts, layouts, typography, color systems, and brand-focused design." className="md:col-span-6 lg:col-span-4" delay={0.08} />
        <Cell testid="skill-merchandise-design" icon={Package} title="Custom Merchandise Design" text="Creating artwork specifically with physical products and customer experiences in mind." className="md:col-span-2 lg:col-span-4" />
        <Cell testid="skill-vector-preparation" icon={Spline} title="Vector Preparation" text="Preparing artwork and files so illustrations can move from the creative process into manufacturing." className="md:col-span-2 lg:col-span-4" delay={0.08} />
        <Cell testid="skill-print-setup" icon={Printer} title="Print Setup" text="Organizing production files and preparing artwork for physical applications." className="md:col-span-2 lg:col-span-4" delay={0.16} />
        <Cell testid="skill-product-photography" icon={Camera} title="Product Photography" text="Presenting finished merchandise and creative work through clear, intentional product imagery." className="md:col-span-3 lg:col-span-7" />
        <Reveal delay={0.08} className="md:col-span-3 lg:col-span-5">
          <div className="flex h-full min-h-[240px] flex-col justify-between rounded-[2px] bg-[#FF7A59] p-8 text-[#2D1B4E]" data-testid="skills-software-list">
            <span className="eyebrow">Software &amp; Creative Tools</span>
            <ul className="mt-8 flex flex-wrap gap-2">
              {TOOLS.map((t) => (
                <li key={t} className="rounded-full border border-[#2D1B4E]/30 bg-white/30 px-4 py-2 text-sm font-semibold transition-colors duration-300 hover:bg-[#2D1B4E] hover:text-white">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
