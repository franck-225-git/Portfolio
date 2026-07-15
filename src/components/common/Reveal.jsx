import { useEffect, useRef, useState } from "react";

const HIDDEN = {
  up: "opacity-0 translate-y-[38px]",
  left: "opacity-0 -translate-x-[54px]",
  right: "opacity-0 translate-x-[54px]",
  zoom: "opacity-0 scale-[0.92]",
};

/**
 * Reveals its children once they scroll into view.
 * `variant` sets the direction it travels from, `delay` staggers siblings.
 */
export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
      className={`transition-[opacity,transform] duration-[850ms] ease-reveal will-change-[opacity,transform] ${
        shown
          ? "translate-x-0 translate-y-0 scale-100 opacity-100"
          : HIDDEN[variant]
      } ${className}`}
    >
      {children}
    </div>
  );
}
