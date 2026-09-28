/**
 * Colonnes décoratives de cadres photo sur les côtés du site.
 * z-20 = au-dessus de <main> (z-10) mais pointer-events-none = non cliquable.
 * Affichées sur grands écrans uniquement (>= 1280px) pour ne pas gêner le contenu.
 */

interface SideGalleriesProps {
  className?: string;
}

const leftPhotos = [
  "/images/grandparents.png",
  "/images/marche-local.png",
  "/images/couple-tradition.png",
  "/images/famille-rire.png",
  "/images/format-encadre.png",
];

const rightPhotos = [
  "/images/pere-enfant.png",
  "/images/enfants-plage.png",
  "/images/famille-repas.png",
  "/images/plage-bateau.png",
  "/images/galerie-souvenirs.png",
];

function PhotoFrame({
  src,
  rotate = 0,
}: {
  src: string;
  rotate?: number;
}) {
  return (
    <div
      className="relative group transition-transform duration-500 hover:scale-105"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* Cadre blanc avec effet passe-partout */}
      <div className="bg-white rounded-lg p-1.5 shadow-[0_8px_24px_-6px_rgba(10,61,145,0.22)] border border-[#E5E5E5]">
        <div className="w-full aspect-[4/5] overflow-hidden rounded-sm bg-[#F8FAFC]">
          <img
            src={src}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
      {/* Reflet subtil */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
    </div>
  );
}

export function SideGalleries({ className = "" }: SideGalleriesProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-20 hidden xl:block overflow-hidden ${className}`}
    >
      {/* Colonne gauche */}
      <div className="absolute left-4 2xl:left-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 w-24 2xl:w-28">
        {leftPhotos.map((src, i) => (
          <PhotoFrame
            key={`left-${i}`}
            src={src}
            rotate={i % 2 === 0 ? -2 : 2}
          />
        ))}
      </div>

      {/* Colonne droite */}
      <div className="absolute right-4 2xl:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 w-24 2xl:w-28">
        {rightPhotos.map((src, i) => (
          <PhotoFrame
            key={`right-${i}`}
            src={src}
            rotate={i % 2 === 0 ? 2 : -2}
          />
        ))}
      </div>
    </div>
  );
}