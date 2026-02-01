import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 350);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label="Revenir en haut de la page"
      title="Haut de page"
      className={[
        "fixed bottom-6 left-6 z-[60]",
        "h-12 w-12 rounded-full",
        "bg-[#10E4D4] backdrop-blur-md border border-white/25",
        "shadow-[0_14px_40px_rgba(0,0,0,.18)]",
        "flex items-center justify-center",
        "transition-all duration-300",
        show
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none",
        "hover:bg-white/25 hover:-translate-y-[1px]",
        "focus:outline-none focus:ring-2 focus:ring-white/40",
      ].join(" ")}
    >
      <span className="text-white text-lg leading-none">↑</span>
    </button>
  );
}
