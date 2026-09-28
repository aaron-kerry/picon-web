import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { PlayStoreButton } from "./PlayStoreButton";

export function FaqAndContact() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const faqs = [
    {
      q: "Où télécharger l'application PICON ?",
      a: "L'application officielle PICON est disponible sur Google Play. Utilisez les boutons de téléchargement présents sur cette page pour ouvrir directement sa fiche officielle.",
    },
    {
      q: "Que peut-on faire dans l'application ?",
      a: "Vous pouvez sélectionner vos photos depuis votre galerie, découvrir les formats et options disponibles, indiquer les quantités, prévisualiser et recadrer vos images avant de confirmer.",
    },
    {
      q: "L'application est-elle destinée uniquement aux habitants de Lomé ?",
      a: "PICON est le laboratoire digital au Togo. L'application est pensée pour les utilisateurs partout au Togo ; les modalités de réception dépendent des options proposées au moment de votre parcours.",
    },
    {
      q: "Puis-je voir les promotions et les options disponibles ?",
      a: "Oui. La fiche Google Play et l'application regroupent les formats, les options et les promotions proposées par PICON, afin que vous puissiez faire vos choix depuis votre téléphone.",
    },
    {
      q: "Comment contacter l'équipe PICON ?",
      a: "Vous pouvez nous écrire via le formulaire ci-contre ou utiliser les coordonnées de l'atelier indiquées sur cette page. Nous vous répondrons au sujet de l'application, du laboratoire ou de votre projet photo.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contact) {
      toast.error("Veuillez renseigner votre nom et vos coordonnées.");
      return;
    }
    setSent(true);
    toast.success("Votre message a été envoyé à l'équipe PICON !");
  };

  return (
    <section
      id="contact"
      className="section-blue-tint py-24 text-[#1A1A1A] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Colonne gauche — FAQ */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A3D91]/8 text-[#0A3D91] text-xs font-semibold tracking-wide uppercase">
              <HelpCircle className="w-3.5 h-3.5" />
              Questions sur l'application
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-[#1A1A1A]">
              Tout savoir avant de télécharger PICON.
            </h2>
            <p className="text-sm sm:text-base text-[#666666]">
              L'essentiel sur l'application officielle, le laboratoire et
              l'expérience PICON au Togo.
            </p>

            <div className="space-y-3 pt-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E5E5E5] rounded-xl overflow-hidden transition-all hover:border-[#0A3D91]/30 shadow-sm"
                >
                  <button
                    onClick={() =>
                      setActiveFaq(activeFaq === idx ? null : idx)
                    }
                    className="w-full p-4 sm:p-5 text-left font-semibold text-sm sm:text-base text-[#1A1A1A] flex items-center justify-between gap-4"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#0A3D91] font-mono text-lg shrink-0">
                      {activeFaq === idx ? "−" : "+"}
                    </span>
                  </button>
                  {activeFaq === idx && (
                    <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-[#666666] leading-relaxed border-t border-[#E5E5E5] pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Colonne droite — Contact */}
          <div className="lg:col-span-5 bg-white border border-[#E5E5E5] rounded-3xl p-6 sm:p-8 space-y-6 shadow-lg">
            <div>
              <span className="text-xs font-mono text-[#0A3D91] uppercase tracking-widest block mb-1">
                PICON au Togo
              </span>
              <h3 className="text-2xl font-bold font-display text-[#1A1A1A] mb-2">
                Une question avant de rejoindre l'app ?
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                Laissez vos coordonnées : l'équipe PICON vous répondra au sujet
                de l'application, de la disponibilité ou de votre projet photo.
              </p>
            </div>

            <PlayStoreButton
              label="Ouvrir la fiche Google Play"
              className="w-full"
            />

            <div className="space-y-3 pt-2 text-xs sm:text-sm">
              <div className="flex items-center gap-3 p-3 bg-[#F8FAFC] rounded-xl border border-[#E5E5E5]">
                <MapPin className="w-5 h-5 text-[#F4B942] shrink-0" />
                <div>
                  <div className="font-bold text-[#1A1A1A]">
                    Atelier PICON
                  </div>
                  <div className="text-[#666666] text-xs">
                    Lomé, Togo — Quartier Kodjoviopé
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-[#F8FAFC] rounded-xl border border-[#E5E5E5]">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <div className="font-bold text-[#1A1A1A]">
                    Téléphone & WhatsApp
                  </div>
                  <div className="text-[#666666] text-xs font-mono">
                    +228 72 68 30 32 / 98 52 62 26
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-[#F8FAFC] rounded-xl border border-[#E5E5E5]">
                <Mail className="w-5 h-5 text-[#0A3D91] shrink-0" />
                <div>
                  <div className="font-bold text-[#1A1A1A]">
                    Courrier électronique
                  </div>
                  <div className="text-[#666666] text-xs font-mono">
                    infos@photopicon.com
                  </div>
                </div>
              </div>
            </div>

            {sent ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center space-y-2">
                <ShieldCheck className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-[#1A1A1A]">
                  Message transmis avec succès
                </h4>
                <p className="text-xs text-[#666666]">
                  Un membre de l'équipe PICON vous recontactera.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-3 pt-2 border-t border-[#E5E5E5]"
              >
                <div className="text-xs font-semibold text-[#1A1A1A] pt-3">
                  Parler à l'équipe :
                </div>
                <Input
                  required
                  placeholder="Votre nom complet"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-[#F8FAFC] border-[#E5E5E5] text-[#1A1A1A] text-xs h-10 focus-visible:border-[#0A3D91]"
                />
                <Input
                  required
                  placeholder="Numéro WhatsApp ou Email"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="bg-[#F8FAFC] border-[#E5E5E5] text-[#1A1A1A] text-xs h-10 font-mono focus-visible:border-[#0A3D91]"
                />
                <Textarea
                  placeholder="Votre question ou projet photo"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-[#F8FAFC] border-[#E5E5E5] text-[#1A1A1A] text-xs min-h-[80px] focus-visible:border-[#0A3D91]"
                />
                <Button
                  type="submit"
                  className="w-full bg-[#0A3D91] text-white hover:bg-[#062B66] font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  Envoyer ma question
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}