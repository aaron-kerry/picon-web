import { Frame } from "lucide-react";
import { PlayStoreButton } from "./PlayStoreButton";

export function LivingRoomShowcase() {
  return (
    <section className="section-blue-deep py-24 relative overflow-hidden">
      {/* Halos déco */}
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#F4B942]/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <img
            src="/images/galerie-souvenirs.png"
            alt="Mur de cadres photo dans un salon moderne et chaleureux à Lomé"
            className="w-full h-[480px] sm:h-[620px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#062B66] via-[#0A3D91]/40 to-transparent flex flex-col justify-end p-6 sm:p-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/30 text-[#F4B942] text-xs font-semibold tracking-wide uppercase mb-4 backdrop-blur-md">
                <Frame className="w-3.5 h-3.5" />
                De l'écran à la maison
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white mb-4">
                Ce que vos photos peuvent devenir.
              </h2>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-xl mb-6">
                L'application commence dans votre galerie. L'histoire continue
                dans votre intérieur, avec des souvenirs que l'on peut
                réellement regarder et partager.
              </p>
              <PlayStoreButton
                label="Découvrir PICON sur Google Play"
                variant="solid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}