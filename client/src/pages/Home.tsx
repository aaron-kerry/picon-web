import { Navbar } from "@/components/Navbar";
import { AppFeatures } from "@/components/AppFeatures";
import { LabPillars } from "@/components/LabPillars";
import { ProcessSteps } from "@/components/ProcessSteps";
import { LivingRoomShowcase } from "@/components/LivingRoomShowcase";
import { FaqAndContact } from "@/components/FaqAndContact";
import { Footer } from "@/components/Footer";
import { PlayStoreButton } from "@/components/PlayStoreButton";
import { PricingSection } from "@/components/PricingSection";
import {
  ArrowDown,
  CheckCircle2,
  Images,
  ShieldCheck,
  Smartphone,
  Truck,
  Play,
} from "lucide-react";

export default function Home() {
  const jumpToApp = () => {
    const target = document.getElementById("app-features");
    if (!target) return;
    const top = window.scrollY + target.getBoundingClientRect().top - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#1A1A1A] flex flex-col">
      <Navbar onOpenApp={jumpToApp} />

      <main className="relative z-10">
        <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-32 overflow-hidden">
          {/* Halo bleu subtil en arrière-plan */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#0A3D91]/8 via-[#F4B942]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0A3D91]/8 border border-[#0A3D91]/15">
                  <span className="w-2 h-2 rounded-full bg-[#F4B942] animate-pulse" />
                  <span className="text-xs font-semibold text-[#0A3D91] tracking-wide uppercase">
                    PICON • L'application officielle
                  </span>
                </div>

                {/* Titre */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display text-[#1A1A1A] leading-[1.08]">
                  Vos souvenirs commencent{" "}
                  <span className="text-[#0A3D91]">ici.</span>
                </h1>

                <p className="text-lg sm:text-xl text-[#666666] font-normal leading-relaxed max-w-2xl">
                  PICON, votre laboratoire digital au Togo, s'invite dans votre
                  poche. Sélectionnez vos photos, découvrez les formats
                  disponibles et préparez vos tirages depuis l'application
                  officielle.
                </p>

                {/* Mini cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                  <div className="p-3 bg-white border border-[#E5E5E5] rounded-xl shadow-sm">
                    <div className="text-[#0A3D91] font-bold text-sm flex items-center gap-1.5">
                      <Smartphone className="w-4 h-4" />
                      Application officielle
                    </div>
                    <div className="text-[11px] text-[#666666] mt-0.5">
                      Disponible sur Google Play
                    </div>
                  </div>
                  <div className="p-3 bg-white border border-[#E5E5E5] rounded-xl shadow-sm">
                    <div className="text-emerald-600 font-bold text-sm flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      Simple & sécurisé
                    </div>
                    <div className="text-[11px] text-[#666666] mt-0.5">
                      Un parcours pensé pour mobile
                    </div>
                  </div>
                  <div className="p-3 bg-white border border-[#E5E5E5] rounded-xl shadow-sm col-span-2 sm:col-span-1">
                    <div className="text-[#0A3D91] font-bold text-sm flex items-center gap-1.5">
                      <Truck className="w-4 h-4" />
                      Pensé pour le Togo
                    </div>
                    <div className="text-[11px] text-[#666666] mt-0.5">
                      De Lomé à votre domicile
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                  <PlayStoreButton
                    label="Télécharger l'application PICON"
                    size="lg"
                  />
                  <a
                    href="#app-features"
                    className="px-6 py-3.5 rounded-xl border border-[#0A3D91]/20 hover:border-[#0A3D91] text-[#0A3D91] font-semibold text-sm transition-all flex items-center justify-center gap-2 hover:bg-[#0A3D91]/5"
                  >
                    <Images className="w-4 h-4 text-[#F4B942]" />
                    Découvrir l'expérience
                  </a>
                </div>

                <div className="flex items-center gap-3 text-xs text-[#666666] pt-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>
                    Retrouvez les formats, options et promotions directement dans
                    l'app.
                  </span>
                </div>
              </div>

              {/* Preview vidéo */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E5E5E5] bg-gradient-to-br from-[#0A3D91] via-[#1E40AF] to-[#062B66] min-h-[480px] sm:min-h-[560px]">
                  {/* TODO Étape B : remplacer par <img src="/images/hero_app_preview.png" ... /> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                  <div className="relative z-10 min-h-[480px] sm:min-h-[560px] flex flex-col items-center justify-center text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-white/15 border border-white/40 backdrop-blur-md flex items-center justify-center mb-6 shadow-2xl">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#F4B942] mb-3">
                      Démonstration de l'application
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-white max-w-sm leading-tight">
                      Découvrez PICON en quelques secondes.
                    </h2>
                    <p className="text-sm text-white/80 max-w-sm mt-4 leading-relaxed">
                      La vidéo de démonstration sera ajoutée ici pour montrer le
                      parcours de sélection, de prévisualisation et de livraison.
                    </p>
                    <div className="mt-7 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-[11px] text-white/90">
                      Vidéo démonstrative à venir
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AppFeatures />
        <PricingSection />
        <div id="why-picon">
          <LabPillars />
        </div>
        <ProcessSteps />
        <LivingRoomShowcase />
        <FaqAndContact />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>

      <button
        onClick={jumpToApp}
        aria-label="Retour à l'application"
        className="fixed bottom-5 right-5 z-40 hidden sm:flex items-center gap-2 rounded-full bg-[#0A3D91] text-white px-4 py-3 text-xs font-bold shadow-2xl hover:bg-[#062B66] transition-all active:scale-95"
      >
        <Smartphone className="w-4 h-4 text-[#F4B942]" />
        Voir l'app <ArrowDown className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}