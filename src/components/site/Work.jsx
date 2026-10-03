import { useState } from "react";
import { motion } from "framer-motion";
import { MaskHeading, Reveal, SectionLabel, TintImage, Sparkle, EASE } from "./primitives";

const PROJECTS = [
  {
    id: "01", category: "Custom Merchandise", title: "From Illustration to Product",
    text: "A look at how an illustrated concept develops into a finished merchandise design.",
    tags: ["Digital illustration", "Creative development", "Merchandise design", "Production preparation"],
    img: "/art/stage.webp", alt: "Stage performer character illustration",
  },
  {
    id: "02", category: "Character Illustration", title: "Building Personality Through Illustration",
    text: "Character artwork that explores visual storytelling through shape, color, line, and personality.",
    tags: ["Character design", "Digital illustration", "Color selection", "Visual storytelling"],
    img: "/art/trio.webp", alt: "Trio of characters illustration",
  },
  {
    id: "03", category: "Production & Design", title: "Creative Work That Is Ready to Make",
    text: "Design work focused on the technical side of bringing artwork into physical production.",
    tags: ["Vector preparation", "File organization", "Print setup", "Manufacturing preparation"],
    img: "/art/mermaid.webp", alt: "Clean mermaid line art",
  },
];

const ILLUSTRATIONS = [
  { src: "/art/stage.webp", alt: "Stage performer character illustration", title: "Illustration 01", note: "Digital illustration" },
  { src: "/art/trio.webp", alt: "Trio of characters illustration", title: "Illustration 02", note: "Character illustration" },
  { src: "/art/mermaid.webp", alt: "Mermaid line art", title: "Illustration 03", note: "Line art" },
  { src: "/art/character-portrait.webp", alt: "Dramatic dark character portrait with glowing stage lights", title: "Illustration 04", note: "Character portrait" },
  { src: "/art/cafe-character.webp", alt: "Pink character enjoying a dessert in a bright café", title: "Illustration 05", note: "Character illustration" },
  { src: "/art/character-trio.webp", alt: "Three dramatic fantasy characters in a dark scene", title: "Illustration 06", note: "Character illustration" },
  { src: "/art/mermaid-line-art.webp", alt: "Expressive mermaid character line drawing", title: "Illustration 07", note: "Line art" },
  { src: "/art/holiday-character-group.webp", alt: "Ensemble of colorful characters on a warm peach background", title: "Illustration 08", note: "Character design" },
];

const ProjectRow = ({ p, i }) => (
  <article data-testid={`work-card-project-${p.id}`} className="grid items-center gap-10 border-t border-[#2D1B4E]/15 py-14 lg:grid-cols-12 lg:gap-16 lg:py-20">
    <Reveal className={`lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
      <TintImage src={p.img} alt={p.alt} className="aspect-[4/3] w-full rounded-[2px]" imgClassName="object-[50%_25%]" testid={`work-project-image-${p.id}`} />
    </Reveal>
    <Reveal delay={0.1} className={`lg:col-span-5 ${i % 2 ? "lg:order-1" : ""}`}>
      <div className="flex items-baseline gap-4">
        <span className="font-display text-7xl font-bold text-[#B59FD9]">{p.id}</span>
        <span className="eyebrow text-[#C9492A]">Project {p.id} · {p.category}</span>
      </div>
      <h3 className="mt-6 font-display text-3xl font-bold leading-tight text-[#2D1B4E] sm:text-4xl lg:text-5xl">{p.title}</h3>
      <p className="mt-5 text-base leading-relaxed text-[#584870] sm:text-lg">{p.text}</p>
      <p className="eyebrow mt-8 text-[#2D1B4E]">What this demonstrates</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <li key={t} className="rounded-full border border-[#2D1B4E]/20 px-4 py-1.5 text-sm text-[#2D1B4E]">{t}</li>
        ))}
      </ul>
      <button
        data-testid={`work-view-project-${p.id}`}
        className="link-underline mt-10 inline-flex items-center gap-2 pb-1 text-sm font-semibold uppercase tracking-[0.2em] text-[#2D1B4E] hover:text-[#C9492A]"
      >
        View Project
      </button>
    </Reveal>
  </article>
);

const DigitalGrid = () => (
  <div className="grid gap-5 md:grid-cols-3" data-testid="work-gallery-digital">
    {ILLUSTRATIONS.map((a, i) => (
      <Reveal key={a.title} delay={i * 0.1} className={i === 1 ? "md:mt-16" : ""}>
        <figure>
          <TintImage src={a.src} alt={a.alt} className="aspect-[4/5] w-full rounded-[2px]" imgClassName="object-top" testid={`gallery-digital-${i + 1}`} />
          <figcaption className="mt-4 flex items-baseline justify-between">
            <span className="font-display text-xl font-bold text-[#2D1B4E]">{a.title}</span>
            <span className="eyebrow text-[#584870]">{a.note}</span>
          </figcaption>
        </figure>
      </Reveal>
    ))}
  </div>
);

const KEYCHAINS = [
  { n: "01", base: "/art/kc1-base.webp", product: "/art/kc1-keychain.webp", productLabel: "Keychain mockup" },
  { n: "02", base: "/art/kc2-base.webp", product: "/art/kc2-keychain.webp", productLabel: "Finished keychain" },
  { n: "03", base: "/art/kc3-base-design.webp", product: "/art/kc3-finished-keychain.webp", productLabel: "Finished keychain" },
  { n: "04", base: "/art/holiday-character-group.webp", product: "/art/kc4-finished-keychain.webp", productLabel: "Finished keychain" },
];

const KeychainFrame = ({ src, label, alt, testid }) => (
  <figure>
    <TintImage src={src} alt={alt} className="aspect-[4/5] w-full rounded-[2px]" testid={testid} />
    <figcaption className="eyebrow mt-4 text-[#584870]">{label}</figcaption>
  </figure>
);

const KeychainGrid = () => (
  <div className="mx-auto max-w-5xl space-y-16" data-testid="work-gallery-keychains">
    {KEYCHAINS.map((k, i) => (
      <Reveal key={k.n} delay={i * 0.1}>
        <article data-testid={`keychain-${k.n}`} className="border-t border-[#2D1B4E]/15 pt-8">
          <p className="font-display text-2xl font-bold text-[#2D1B4E]">Keychain {k.n}</p>
          <div className="relative mt-6 grid gap-5 sm:grid-cols-2">
            <KeychainFrame src={k.base} label="Base design" alt={`Keychain ${k.n} base design`} testid={`keychain-${k.n}-base`} />
            <KeychainFrame src={k.product} label={k.productLabel} alt={`Keychain ${k.n} ${k.productLabel.toLowerCase()}`} testid={`keychain-${k.n}-product`} />
            <div className="pointer-events-none absolute left-1/2 top-[45%] hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#FF7A59] shadow-xl sm:flex">
              <Sparkle className="h-6 w-6" color="#fff" />
            </div>
          </div>
        </article>
      </Reveal>
    ))}
  </div>
);

const TABS = [
  { key: "digital", label: "Digital Illustrations" },
  { key: "keychains", label: "Keychain Designs" },
];

const Archive = () => {
  const [tab, setTab] = useState("digital");
  return (
    <div className="mt-28 lg:mt-36">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <MaskHeading className="font-display text-4xl font-bold leading-[1] text-[#2D1B4E] sm:text-5xl" lines={["The gallery,", <span key="g" className="italic text-[#8A6CC0]">in two collections.</span>]} />
        <div className="inline-flex rounded-full border border-[#2D1B4E]/15 bg-white p-1.5" role="tablist">
          {TABS.map((t) => (
            <button
              key={t.key}
              role="tab"
              aria-selected={tab === t.key}
              onClick={() => setTab(t.key)}
              data-testid={`work-tab-${t.key}`}
              className={`relative rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-300 sm:px-7 ${tab === t.key ? "text-white" : "text-[#2D1B4E] hover:text-[#C9492A]"}`}
            >
              {tab === t.key && <motion.span layoutId="tab-pill" className="absolute inset-0 rounded-full bg-[#2D1B4E]" transition={{ duration: 0.5, ease: EASE }} />}
              <span className="relative">{t.label}</span>
            </button>
          ))}
        </div>
      </div>
      <motion.div key={tab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }} className="mt-12">
        {tab === "digital" ? <DigitalGrid /> : <KeychainGrid />}
      </motion.div>
    </div>
  );
};

export const Work = () => (
  <section id="work" className="bg-[#FAF7FC] py-24 lg:py-36" data-testid="work-section">
    <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
      <div className="grid gap-8 pb-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionLabel index="03">Selected Work</SectionLabel>
          <MaskHeading
            className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight text-[#2D1B4E] sm:text-6xl lg:text-7xl"
            lines={["From idea to", <span key="c" className="italic text-[#8A6CC0]">something you can carry.</span>]}
          />
        </div>
        <Reveal className="text-base leading-relaxed text-[#584870] sm:text-lg lg:col-span-4 lg:col-start-9 lg:pt-20">
          My portfolio focuses on the process of turning creative concepts into finished visual experiences and physical merchandise.
        </Reveal>
      </div>
      {PROJECTS.map((p, i) => <ProjectRow key={p.id} p={p} i={i} />)}
      <Archive />
    </div>
  </section>
);
