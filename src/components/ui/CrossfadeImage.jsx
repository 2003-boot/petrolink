import { useEffect, useMemo, useRef, useState } from "react";

function withBase(path) {
  const clean = String(path || "").replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${clean}`;
}

export function CrossfadeImage({ images = [], interval = 3200, fadeMs = 900, className = "", alt = "", eager = false }) {
  const list = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    if (list.length <= 1) return;
    clearInterval(timer.current);
    timer.current = setInterval(() => setIndex((prev) => (prev + 1) % list.length), interval);
    return () => clearInterval(timer.current);
  }, [list.length, interval]);

  useEffect(() => {
    if (list.length <= 1) return;
    const nextSrc = withBase(list[(index + 1) % list.length]);
    const img = new Image();
    img.src = nextSrc;
  }, [index, list]);

  if (!list.length) return <div className={`relative overflow-hidden ${className}`} />;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {list.map((src, i) => (
        <img
          key={src}
          src={withBase(src)}
          alt={alt}
          draggable={false}
          loading={eager && i === 0 ? "eager" : "lazy"}
          decoding="async"
          className={[
            "absolute inset-0 h-full w-full object-cover transition-opacity ease-in-out",
            i === index ? "opacity-100" : "opacity-0 pointer-events-none",
          ].join(" ")}
          style={{ transitionDuration: `${fadeMs}ms` }}
        />
      ))}
    </div>
  );
}
