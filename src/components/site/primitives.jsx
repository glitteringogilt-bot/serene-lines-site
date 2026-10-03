import { motion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];

export const scrollToId = (id) => {
  const el = document.querySelector(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -72, duration: 1.6 });
  else el.scrollIntoView({ behavior: "smooth" });
};

export const Reveal = ({ children, delay = 0, y = 32, className = "", ...rest }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 1, delay, ease: EASE }}
    {...rest}
  >
    {children}
  </motion.div>
);

const lineVariants = {
  hidden: { y: "110%" },
  show: (i) => ({ y: "0%", transition: { duration: 1.1, delay: 0.08 * i, ease: EASE } }),
};

export const MaskHeading = ({ lines, as = "h2", className = "", lineClassName = "", testid, onLoad = false, baseDelay = 0 }) => {
  const Tag = motion[as];
  const trigger = onLoad
    ? { initial: "hidden", animate: "show" }
    : { initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.15 } };
  return (
    <Tag className={className} data-testid={testid} {...trigger} transition={{ delayChildren: baseDelay }}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span className={`block ${lineClassName}`} variants={lineVariants} custom={i + baseDelay * 10}>
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

export const Sparkle = ({ className = "", color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path fill={color} d="M12 0C12.9 7.6 16.4 11.1 24 12 16.4 12.9 12.9 16.4 12 24 11.1 16.4 7.6 12.9 0 12 7.6 11.1 11.1 7.6 12 0Z" />
  </svg>
);

export const TintImage = ({ src, alt, className = "", imgClassName = "", testid, eager = false }) => (
  <div
    className={`tint ${className}`}
    data-testid={testid}
    tabIndex={0}
    onTouchStart={(e) => e.currentTarget.classList.toggle("is-revealed")}
  >
    <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} className={`tint-img ${imgClassName}`} />
    <span className="tint-overlay" aria-hidden="true" />
  </div>
);

export const SectionLabel = ({ index, children, light = false }) => (
  <div className={`flex items-center gap-3 ${light ? "text-[#FF9A80]" : "text-[#C9492A]"}`}>
    <Sparkle className="h-3 w-3" />
    <span className="eyebrow">{index && <span className="mr-2 opacity-70">{index}</span>}{children}</span>
  </div>
);

export const PlaceholderButton = ({ children, testid, variant = "dark", className = "" }) => {
  const styles = {
    dark: "bg-[#2D1B4E] text-white hover:bg-[#FF7A59]",
    light: "bg-white text-[#2D1B4E] hover:bg-[#FF7A59] hover:text-white",
    ghost: "border border-white/40 text-white hover:border-[#FF7A59] hover:text-[#FF7A59]",
  };
  return (
    <a
      href="#contact"
      onClick={(e) => e.preventDefault()}
      data-testid={testid}
      className={`group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-semibold tracking-wide transition-colors duration-300 ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
};
