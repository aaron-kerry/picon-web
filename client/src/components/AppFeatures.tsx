import { Check, Crop, Images, PackageCheck, Smartphone, Sparkles } from "lucide-react";
import { PlayStoreButton } from "./PlayStoreButton";

export function AppFeatures() {
  const features = [
    {
      icon: Images,
      number: "01",
      title: "Chargez",
      text: "Retrouvez vos souvenirs directement dans votre smartphone, sans transfert compliqué ni passage en agence.",
    },
    {
      icon: Crop,
      number: "02",
      title: "Commandez",
      text: "Choisissez le format, ajustez le cadrage et vérifiez le rendu de chaque photo avant de confirmer.",
    },
    {
      icon: PackageCheck,
      number: "03",
      title: "Livraison",
      text: "PICON prépare vos impressions et organise la livraison à domicile selon les options disponibles.",
    },
  ];

  return (
    <section
      id="app-features"
      className="py-24 bg-white border-t border-[#E5E5E5] text-[#1A1A1A] relative overflow-hidden"
    >
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#0A3D91]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0A3D91]/8 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0A3D91] mb-5">
              <Smartphone className="w-3.5 h-3.5" />
              L'application PICON
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display leading-tight mb-5 text-[#1A1A1A]">
              Toute l'expérience du laboratoire, dans votre poche.
            </h2>
            <p className="text-[#666666] text-base sm:text-lg leading-relaxed mb-7">
              PICON transforme votre galerie mobile en une expérience simple,
              claire et pensée pour restaurer vos souvenirs.
            </p>
            <div className="space-y-3 mb-8 text-sm text-[#1A1A1A]">
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-emerald-600" />
                Formats et options visibles avant chaque choix
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-emerald-600" />
                Recadrage et aperçu avant confirmation
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-emerald-600" />
                Commande suivie depuis votre smartphone
              </div>
            </div>
            <PlayStoreButton
              label="Découvrir l'app sur Google Play"
              size="lg"
            />
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.number}
                  className="bg-white border border-[#E5E5E5] rounded-2xl p-5 min-h-[240px] hover:border-[#0A3D91]/40 transition-colors group shadow-sm"
                >
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-3xl font-bold text-[#F4B942]/40 group-hover:text-[#F4B942] transition-colors">
                      {feature.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#0A3D91]/5 flex items-center justify-center text-[#0A3D91] group-hover:bg-[#0A3D91] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-bold text-base text-[#1A1A1A] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bloc "Une app construite pour le réel" */}
        <div className="mt-20 rounded-3xl border border-[#E5E5E5] bg-[#F8FAFC] overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center shadow-sm">
          <div className="p-8 sm:p-12">
            <div className="flex items-center gap-2 text-[#0A3D91] text-xs font-mono uppercase tracking-widest mb-4">
              <Sparkles className="w-4 h-4 text-[#F4B942]" />
              Une app construite pour le réel
            </div>
            <h3 className="font-display text-2xl sm:text-4xl font-bold leading-tight mb-4 text-[#1A1A1A]">
              Pas besoin de comprendre l'impression. Il suffit de choisir ce qui
              compte.
            </h3>
            <p className="text-sm text-[#666666] leading-relaxed max-w-xl">
              L'application vous accompagne du choix de la photo jusqu'au
              récapitulatif. Les formats, les quantités, les promotions et les
              options disponibles sont réunis au même endroit.
            </p>
          </div>

          <div className="min-h-[320px] relative bg-gradient-to-br from-[#0A3D91]/5 to-[#F8FAFC] overflow-hidden">
            <div className="absolute -right-12 -bottom-20 h-80 w-80 rounded-full border border-[#0A3D91]/10" />
            <div className="absolute right-10 top-12 w-[190px] rounded-[28px] border-[6px] border-[#0A3D91]/20 bg-white shadow-2xl rotate-6 overflow-hidden">
              <div className="h-5 bg-[#1A1A1A] flex items-center justify-center">
                <div className="w-14 h-3 rounded-full bg-[#0A3D91]/20" />
              </div>
              <div className="p-3 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#1A1A1A]">
                    Bonjour, PICON
                  </span>
                  <div className="w-5 h-5 rounded-full bg-[#F4B942]/20" />
                </div>
                <div className="h-24 rounded-xl overflow-hidden bg-[#F8FAFC]">
                  <img
                    src="/images/tirages-sur-table.png"
                    alt="Aperçu PICON"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[9px] text-[#666666] font-semibold">
                  Choisir mes photos
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-10 rounded-lg bg-[#0A3D91]/8" />
                  <div className="h-10 rounded-lg bg-[#0A3D91]/8" />
                </div>
                <div className="h-7 rounded-lg bg-[#0A3D91] text-white text-[9px] font-bold flex items-center justify-center">
                  Continuer
                </div>
              </div>
            </div>
            <div className="absolute left-8 bottom-10 rounded-xl bg-white text-[#1A1A1A] p-4 w-44 shadow-2xl -rotate-6 border border-[#E5E5E5]">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#666666] mb-2">
                Photo studio
              </div>
              <div className="text-lg font-display font-bold leading-none">
                Vos souvenirs, imprimés.
              </div>
              <div className="mt-4 flex gap-1">
                <div className="h-1.5 w-8 bg-[#0A3D91]" />
                <div className="h-1.5 w-8 bg-[#F4B942]" />
                <div className="h-1.5 w-8 bg-[#E63946]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}