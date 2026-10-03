import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { scrollToId, EASE } from "./primitives";

const LINKS = [
  { id: "#home", label: "Home" },
  { id: "#about", label: "About" },
  { id: "#work", label: "Work" },
  { id: "#contact", label: "Contact" },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2, ease: EASE }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
        scrolled ? "border-[#2D1B4E]/10 bg-[#FAF7FC]/80 backdrop-blur-xl" : "border-transparent bg-[#FAF7FC]/40 backdrop-blur-md"
      }`}
      data-testid="site-nav"
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-2 sm:px-8 lg:px-12">
        <button onClick={() => go("#home")} className="flex items-center gap-3" data-testid="nav-logo" aria-label="Serene Lines home">
          <img src="art/logo.webp" alt="Serene Lines logo" className="h-14 w-auto sm:h-16" />
          <span className="hidden font-display text-lg font-bold tracking-tight text-[#2D1B4E] sm:block">Serene Lines</span>
        </button>

        <ul className="hidden items-center gap-10 md:flex">
          {LINKS.map((l, i) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                data-testid={`nav-${l.label.toLowerCase()}`}
                className="link-underline eyebrow pb-1 text-[#2D1B4E] transition-colors hover:text-[#C9492A]"
              >
                <span className="mr-1.5 text-[#584870]">0{i + 1}</span>
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2D1B4E]/15 text-[#2D1B4E] md:hidden"
          onClick={() => setOpen((v) => !v)}
          data-testid="nav-mobile-toggle"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="overflow-hidden border-t border-[#2D1B4E]/10 bg-[#FAF7FC] px-5 md:hidden"
            data-testid="nav-mobile-menu"
          >
            {LINKS.map((l, i) => (
              <li key={l.id} className="border-b border-[#2D1B4E]/10 last:border-0">
                <button
                  onClick={() => go(l.id)}
                  data-testid={`nav-mobile-${l.label.toLowerCase()}`}
                  className="flex w-full items-baseline gap-4 py-5 font-display text-3xl font-bold text-[#2D1B4E]"
                >
                  <span className="eyebrow text-[#C9492A]">0{i + 1}</span>
                  {l.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
