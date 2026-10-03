import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { MaskHeading, Sparkle, TintImage, scrollToId, EASE } from "./primitives";

const fade = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: EASE },
});

const ArtStack = () => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 80, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 80, damping: 18 });
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => { mx.set(0); my.set(0); };

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[460px] [perspective:1400px]" onMouseMove={onMove} onMouseLeave={reset} data-testid="hero-art-stack">
      <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }} className="relative h-full w-full">
        <motion.div
          initial={{ opacity: 0, y: 60, rotate: -8 }}
          animate={{ opacity: 1, y: 0, rotate: -6 }}
          transition={{ duration: 1.4, delay: 0.9, ease: EASE }}
          style={{ transform: "translateZ(-40px)" }}
          className="absolute -left-2 top-10 h-[62%] w-[52%] overflow-hidden rounded-[2px] shadow-[0_30px_60px_-20px_rgba(45,27,78,0.5)] sm:-left-10"
        >
          <TintImage src="/art/trio.webp" alt="Character trio illustration by Shana Volner" className="h-full w-full" testid="hero-image-trio" eager />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80, clipPath: "inset(100% 0 0 0)" }}
          animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 1.6, delay: 0.6, ease: EASE }}
          style={{ transform: "translateZ(40px)" }}
          className="absolute bottom-0 right-0 h-[82%] w-[72%] overflow-hidden rounded-[2px] shadow-[0_40px_80px_-24px_rgba(45,27,78,0.55)]"
        >
          <TintImage src="/art/stage.webp" alt="Stage performer character illustration by Shana Volner" className="h-full w-full" testid="hero-image-stage" eager />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
          transition={{ opacity: { delay: 1.5, duration: 0.8 }, scale: { delay: 1.5, duration: 0.8, ease: EASE }, y: { repeat: Infinity, duration: 6, ease: "easeInOut" } }}
          style={{ transform: "translateZ(90px)" }}
          className="absolute -top-2 right-2 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-[0_20px_40px_-12px_rgba(45,27,78,0.35)] sm:h-28 sm:w-28"
        >
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 28, ease: "linear" }} className="absolute inset-1">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <defs><path id="circ" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" /></defs>
              <text fill="#2D1B4E" fontSize="10.5" fontWeight="600" letterSpacing="3.2" fontFamily="Inter">
                <textPath href="#circ">CARRY YOUR CREATIVE SIDE ✦ </textPath>
              </text>
            </svg>
          </motion.div>
          <Sparkle className="h-6 w-6" color="#FF7A59" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const yArt = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section id="home" ref={ref} className="grain relative overflow-hidden bg-[#FAF7FC] pb-20 pt-32 sm:pt-36 lg:min-h-screen lg:pb-24" data-testid="hero-section">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[620px] w-[620px] rounded-full bg-[#B59FD9]/30 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-[#FF7A59]/15 blur-[120px]" />

      <svg viewBox="0 0 1440 600" className="pointer-events-none absolute inset-x-0 top-[50%] w-full opacity-50" aria-hidden="true">
        <motion.path
          d="M-40 420 C 280 160, 620 600, 900 330 S 1320 120, 1500 260"
          fill="none" stroke="#FF7A59" strokeWidth="2" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.6, delay: 0.8, ease: EASE }}
        />
        <motion.path
          d="M-40 470 C 300 240, 640 640, 940 380"
          fill="none" stroke="#B59FD9" strokeWidth="1.2" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.6, delay: 1.1, ease: EASE }}
        />
      </svg>

      <div className="relative z-10 mx-auto grid max-w-[1400px] items-center gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
        <motion.div style={{ y: yText }} className="lg:col-span-7">
          <motion.div {...fade(0.3)} className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="eyebrow text-[#C9492A]">Shana Volner</span>
            <span className="h-px w-10 bg-[#2D1B4E]/30" />
            <span className="eyebrow text-[#584870]">Graphic Design &amp; Digital Illustration for Custom Merchandise</span>
          </motion.div>

          <MaskHeading
            as="h1"
            onLoad
            baseDelay={0.35}
            testid="hero-title"
            className="font-display text-[clamp(4.2rem,14vw,11.5rem)] font-bold leading-[0.86] tracking-[-0.03em] text-[#2D1B4E]"
            lines={[
              "Serene",
              <span key="l" className="flex items-baseline gap-4">
                <span className="italic text-[#8A6CC0]">Lines</span>
                <Sparkle className="h-[0.32em] w-[0.32em] self-start translate-y-[0.3em]" color="#FF7A59" />
              </span>,
            ]}
          />

          <motion.p {...fade(1.1)} className="mt-8 font-display text-2xl italic text-[#2D1B4E] sm:text-3xl" data-testid="hero-tagline">
            Art in your everyday.
          </motion.p>
          <motion.p {...fade(1.25)} className="mt-6 max-w-xl text-base leading-relaxed text-[#584870] sm:text-lg" data-testid="hero-subtitle">
            <span className="font-semibold text-[#2D1B4E]">Turning creative ideas into art you can carry.</span>{" "}
            I'm Shana Volner, a graphic designer and digital illustrator focused on creating imaginative artwork for custom merchandise. I combine artistic storytelling with organized, production-ready design to help ideas move from the digital canvas into tangible products.
          </motion.p>

          <motion.div {...fade(1.4)} className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => scrollToId("#work")}
              data-testid="hero-cta-work"
              className="group inline-flex items-center gap-3 rounded-full bg-[#2D1B4E] px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors duration-300 hover:bg-[#FF7A59]"
            >
              View My Work
              <ArrowDownRight size={18} className="transition-transform duration-500 group-hover:rotate-[-45deg]" />
            </button>
            <button
              onClick={() => scrollToId("#about")}
              data-testid="hero-cta-about"
              className="inline-flex items-center gap-3 rounded-full border border-[#2D1B4E]/25 px-8 py-4 text-sm font-semibold tracking-wide text-[#2D1B4E] transition-colors duration-300 hover:border-[#2D1B4E] hover:bg-white"
            >
              About Me
            </button>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: yArt }} className="lg:col-span-5">
          <ArtStack />
          <motion.p {...fade(1.8)} className="eyebrow mt-6 text-center text-[#584870] lg:text-right">
            Hover the art to reveal its true colour
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
