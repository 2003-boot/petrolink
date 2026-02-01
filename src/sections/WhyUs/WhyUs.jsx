import Container from "../../components/layout/Container";

const items = [
  {
    title: "Équipe logistique experte",
    desc: "Une équipe dédiée, avec une solide expérience terrain, pour gérer vos cargaisons avec professionnalisme et sécurité.",
    img: "/logistic-team.png",
    size: "md:col-span-4",
    overlay: false,
    icon: "team",
  },
  {
    title: "Livraison fiable",
    desc: "Des livraisons locales au fret international, SwiftMove Logistics propose des services fiables, efficaces et axés sur la technologie pour faire avancer votre activité.",
    img: "/delivery.png",
    size: "md:col-span-4",
    overlay: true,
    icon: "delivery",
  },
  {
    title: "Suivi intelligent",
    desc: "Suivez vos expéditions avec des mises à jour en temps réel et une visibilité claire sur toute la chaîne logistique.",
    img: "smart-tracking.png",
    size: "md:col-span-4",
    overlay: false,
    icon: "tracking",
  },
];

function IconBadge({ type }) {
  return (
    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-[0_12px_30px_rgba(0,0,0,.18)]">
      {type === "team" && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500">
          <path d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm-8 0c1.7 0 3-1.3 3-3S9.7 5 8 5 5 6.3 5 8s1.3 3 3 3zm0 2c-2.7 0-5 1.3-5 4v1h10v-1c0-2.7-2.3-4-5-4zm8 0c-.3 0-.6 0-.9.1 1.2.8 1.9 2 1.9 3.9v1h7v-1c0-2.7-2.3-4-5-4z" />
        </svg>
      )}

      {type === "delivery" && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500">
          <path d="M20 8h-3V4H3v13h2a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h1v-5l-4-4zM8 19a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm12-9 2 2v3h-1a3 3 0 0 0-5 0h-1V10h5zm-3 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
        </svg>
      )}

      {type === "tracking" && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500">
          <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
        </svg>
      )}
    </div>
  );
}

function Card({ title, desc, img, overlay, icon }) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] bg-black/5">
      {/* Image */}
      <div
        className="h-[260px] md:h-[320px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      />

      {/* Baseline title (toujours visible) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
        <div className="text-white text-[18px] md:text-[20px] font-extrabold drop-shadow-[0_10px_18px_rgba(0,0,0,.55)]">
          {title}
        </div>
      </div>

      {/* Overlay (apparait au hover) */}
      <div
        className={[
          "absolute inset-0 flex flex-col justify-end p-5 transition duration-300",
          overlay ? "opacity-0 group-hover:opacity-100" : "opacity-0 group-hover:opacity-100",
        ].join(" ")}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10" />

        {/* Icon top-left */}
        <div className="relative mb-auto">
          <IconBadge type={icon} />
        </div>

        {/* Text */}
        <div className="relative">
          <div className="text-white text-[18px] md:text-[20px] font-extrabold">
            {title}
          </div>
          <p className="mt-2 text-white/90 text-sm leading-relaxed max-w-[420px]">
            {desc}
          </p>
        </div>
      </div>

      {/* Option: si tu veux que l'overlay ne s'affiche QUE sur la carte du milieu */}
      {!overlay && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-0" />
      )}
    </div>
  );
}

export default function WhyUs() {
  return (
    <section id="why-us" className="py-12 md:py-16">
      <Container full>
        <div className="mx-auto w-full max-w-[1200px]">
          {/* Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-black">
              <span className="text-black">★</span> Pourquoi nous choisir
            </div>
          </div>

          {/* Title */}
          <h2 className="mt-4 text-center text-[28px] md:text-[44px] font-extrabold tracking-[-0.6px] text-black">
            L’excellence grâce à <br className="hidden md:block" />
            la fiabilité et l’innovation
          </h2>

          {/* Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="md:col-span-4">
              <Card {...items[0]} overlay={false} />
            </div>

            <div className="md:col-span-4">
              <Card {...items[1]} overlay={true} />
            </div>

            <div className="md:col-span-4">
              <Card {...items[2]} overlay={false} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
