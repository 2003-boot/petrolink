import { useEffect, useMemo, useRef, useState } from "react";
import Container from "../../components/layout/Container";

const testimonials = [
  {
    id: "t1",
    name: "Michael Boga",
    text: "Grâce à leur expertise en gestion de la chaîne d’approvisionnement, nous avons considérablement réduit nos délais et évité les ruptures de stock. Les livraisons sont toujours ponctuelles et parfaitement organisées. Un partenaire de confiance pour nos opérations.",
    rating: 5,
    avatar:
      "/testimonials/testi1.webp",
  },
  {
    id: "t2",
    name: "Sarah Kouadio",
    text: "Du transport à l’entreposage, tout est géré avec rigueur et professionnalisme. Nos marchandises sont sécurisées, bien suivies et livrées dans des conditions optimales. Nous avons gagné en sérénité et en efficacité.",
    rating: 5,
    avatar:
      "/testimonials/testi5.jpg",
  },
  {
    id: "t3",
    name: "David Kim",
    text: "Les conseils stratégiques fournis par leurs consultants nous ont permis d’optimiser nos processus logistiques et de réduire nos coûts. Leur approche est à la fois innovante et parfaitement adaptée à nos besoins.",
    rating: 5,
    avatar:
      "/testimonials/test2.jpg",
  },
  {
    id: "t4",
    name: "Amina Diallo",
    text: "Une équipe réactive, à l’écoute et très compétente. Ils comprennent rapidement les enjeux et proposent des solutions fiables, que ce soit pour l’approvisionnement, le transport ou le stockage. Une vraie valeur ajoutée pour notre activité.",
    rating: 5,
    avatar:
      "/testimonials/test4.webp",
  },
  {
    id: "t5",
    name: "Jean Morel",
    text: "Depuis que nous collaborons avec eux, notre organisation logistique est beaucoup plus fluide. Les délais sont respectés, la communication est claire et les résultats sont au rendez-vous. Nous recommandons sans hésiter.",
    rating: 5,
    avatar:
      "/testimonials/testi3.jpg",
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-[#F5B301] text-sm">
          ★
        </span>
      ))}
    </div>
  );
}

// distance circulaire signée la plus courte (ex: -2, -1, 0, 1, 2)
function signedDistance(i, active, n) {
  let d = i - active;
  if (d > n / 2) d -= n;
  if (d < -n / 2) d += n;
  return d;
}

export default function Testimonials() {
  const n = testimonials.length;
  const [active, setActive] = useState(0);

  // autoplay
  const [paused, setPaused] = useState(false);
  const lastInteractRef = useRef(Date.now());

  const go = (nextIndex) => {
    lastInteractRef.current = Date.now();
    setActive((prev) => {
      const idx = typeof nextIndex === "function" ? nextIndex(prev) : nextIndex;
      return (idx + n) % n;
    });
  };

  const next = () => go((p) => p + 1);
  const prev = () => go((p) => p - 1);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      // évite d’enchaîner juste après un clic
      const since = Date.now() - lastInteractRef.current;
      if (since >= 2500) next();
    }, 3500);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused]);

  // swipe mobile
  const drag = useRef({ down: false, x0: 0, dx: 0 });

  const onPointerDown = (e) => {
    drag.current.down = true;
    drag.current.x0 = e.clientX;
    drag.current.dx = 0;
    lastInteractRef.current = Date.now();
  };

  const onPointerMove = (e) => {
    if (!drag.current.down) return;
    drag.current.dx = e.clientX - drag.current.x0;
  };

  const onPointerUp = () => {
    if (!drag.current.down) return;
    const dx = drag.current.dx;
    drag.current.down = false;
    drag.current.dx = 0;

    if (Math.abs(dx) > 40) {
      if (dx < 0) next();
      else prev();
    }
  };

  const dots = useMemo(() => Array.from({ length: n }), [n]);

  return (
    <section className="py-10 pb-16" id="testimonials">
      <Container full>
        <div className="rounded-[28px] bg-[var(--bg)] px-6 md:px-10 py-10 md:py-14">
          {/* Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm shadow-[0_8px_20px_rgba(0,0,0,.08)]">
              <span>★</span>
              <span className="font-medium">témoignages des clients</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="mt-6 text-center text-3xl md:text-5xl font-semibold leading-[1.1] tracking-tight">
            ce que nos clients <br className="hidden md:block" />
            disent de nous
          </h2>

          {/* Carousel stage */}
          <div
            className="relative mt-20 md:mt-28"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Desktop: 5-up animated */}
            <div className="hidden md:block">
              <div className="relative h-[300px]">
                {testimonials.map((t, i) => {
                  const d = signedDistance(i, active, n);

                  // ne rendre visible que -2..2 (comme le design)
                  if (Math.abs(d) > 2) return null;

                  // positioning
                  const step = 250; // espace horizontal entre cartes
                  const x = d * step;

                  // styles selon position
                  const isCenter = d === 0;
                  const isNear = Math.abs(d) === 1;
                  const scale = isCenter ? 1 : isNear ? 0.92 : 0.82;
                  const opacity = isCenter ? 1 : isNear ? 0.9 : 0.7;
                  const z = isCenter ? 30 : isNear ? 20 : 10;

                  const w = isCenter ? 720 : isNear ? 170 : 140;
                  const h = isCenter ? 200 : isNear ? 84 : 70;

                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => go(i)}
                      className="absolute left-1/2 top-1/2 -translate-y-1/2 focus:outline-none"
                      style={{
                        transform: `translateX(${x}px) translateX(-50%) translateY(-50%) scale(${scale})`,
                        opacity,
                        zIndex: z,
                        transition:
                          "transform 450ms ease, opacity 450ms ease",
                      }}
                      aria-label={`Show testimonial from ${t.name}`}
                    >
                      {/* Center card */}
                      {isCenter ? (
                        <div
                            className="
                                w-[720px]
                                min-h-[220px]
                                h-auto
                                rounded-[22px]
                                bg-white
                                shadow-[0_12px_35px_rgba(0,0,0,.10)]
                                p-5
                                flex gap-6 text-left
                            "
                        >
                          <div className="shrink-0 rounded-[18px] bg-[#F2F4F7] p-3 overflow-hidden">
                            <img
                                src={t.avatar}
                                alt={t.name}
                                className="
                                    w-[160px]
                                    h-[160px]
                                    rounded-[16px]
                                    object-cover
                                    shrink-0
                                "
                            />


                          </div>

                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                                <div className="text-4xl text-black/10 leading-none">“</div>
                                <p className="mt-2 text-base text-[var(--muted)] leading-relaxed max-w-xl">
                                {t.text}
                                </p>
                            </div>

                            <div className="mt-4 flex items-center justify-between">
                                <div className="text-sm text-[var(--ink)]">
                                — {t.name}
                                </div>
                                <Stars count={t.rating} />
                            </div>
                          </div>

                        </div>
                      ) : (
                        // Side witness preview (avatar card)
                        <div
                          className="rounded-2xl bg-white/35 border border-white/50 backdrop-blur shadow-[0_10px_25px_rgba(0,0,0,.10)] flex items-center justify-center overflow-hidden"
                          style={{ width: w, height: h }}
                        >
                          <img
                            src={t.avatar}
                            alt={t.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile: 1 card + swipe */}
            <div
              className="md:hidden"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
            >
              <div className="rounded-[22px] bg-white shadow-[0_12px_35px_rgba(0,0,0,.10)] p-4">
                <div className="flex gap-4">
                  <div className="shrink-0 rounded-[18px] bg-[#F2F4F7] p-2">
                    <img
                      src={testimonials[active].avatar}
                      alt={testimonials[active].name}
                      className="w-[110px] h-[130px] rounded-[16px] object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-3xl text-black/10 leading-none">“</div>
                      <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                        {testimonials[active].text}
                      </p>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="text-xs text-[var(--ink)]">
                        — {testimonials[active].name}
                      </div>
                      <Stars count={testimonials[active].rating} />
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-center text-xs text-[var(--muted)]">
                Swipe left/right
              </p>
            </div>

            {/* Controls + dots */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4">
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={prev}
                  className="w-11 h-11 rounded-full bg-white/40 border border-white/50 backdrop-blur flex items-center justify-center hover:bg-white/60 transition"
                  aria-label="Previous"
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  className="w-11 h-11 rounded-full bg-white border border-white shadow-[0_8px_20px_rgba(0,0,0,.10)] flex items-center justify-center hover:scale-[1.02] transition"
                  aria-label="Next"
                >
                  ›
                </button>
              </div>

              {/* dots */}
              <div className="flex items-center gap-2">
                {dots.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    className={[
                      "h-2 rounded-full transition-all",
                      i === active ? "w-6 bg-white" : "w-2 bg-white/50",
                    ].join(" ")}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
