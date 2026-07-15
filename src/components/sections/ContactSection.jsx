import { useState } from "react";
import GhostNumber from "../common/GhostNumber";
import Reveal from "../common/Reveal";

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };

const labelClass =
  "font-mono text-[11px] uppercase tracking-[0.1em] text-[#7f8a9c]";

export default function ContactSection({ email }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Requis";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Email invalide";
    if (!form.message.trim()) e.message = "Requis";
    return e;
  }

  function handleChange(ev) {
    setForm((f) => ({ ...f, [ev.target.name]: ev.target.value }));
    setErrors((e) => ({ ...e, [ev.target.name]: undefined }));
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    // Ouvre le client mail avec les données pré-remplies
    const subject = encodeURIComponent(
      form.subject || "Contact depuis le portfolio",
    );
    const body = encodeURIComponent(
      `Nom: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const fieldClass = (field) =>
    `w-full rounded-xl border bg-white/[0.04] px-[15px] py-[13px] text-sm text-ink outline-none transition placeholder:text-[#5f6a7d] focus:border-bright focus:bg-white/[0.06] ${
      errors[field] ? "border-[#ff8a8a]" : "border-white/[0.14]"
    }`;

  return (
    <section id="contact" className="scroll-mt-20 py-[88px]">
      <div className="relative overflow-hidden rounded-[24px] border border-white/[0.18] bg-gradient-to-br from-[#0f1a22] to-[#0b0f17] p-[clamp(26px,4vw,48px)]">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-white/55 to-white/40" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-[120px] h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.07),transparent_70%)]"
        />

        <Reveal className="relative mb-8 flex flex-wrap items-start justify-between gap-[18px]">
          <GhostNumber value="05" size="sm" className="top-[-36px]" />
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-bright">
              05 / Contact
            </p>
            <h2 className="mt-3.5 font-display text-[clamp(30px,4.4vw,50px)] font-semibold leading-[1.05] tracking-[-0.02em]">
              Discutons de votre besoin
            </h2>
            <p className="mt-4 max-w-[52ch] text-[15.5px] leading-[1.6] text-body">
              Intégration ERP, Power Platform, développement applicatif —
              décrivez votre projet en quelques lignes, je vous réponds
              rapidement.
            </p>
          </div>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/16 px-4 py-2.5 font-mono text-[12.5px] text-[#c3ccd9] transition hover:border-white/60 hover:text-bright"
          >
            ✉ {email}
          </a>
        </Reveal>

        {sent ? (
          <div className="relative flex flex-col items-center gap-3 rounded-[18px] border border-white/25 bg-white/5 px-6 py-14 text-center">
            <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-bright text-2xl font-bold text-night">
              ✓
            </div>
            <p className="font-display text-[22px] font-semibold text-ink">
              Message préparé !
            </p>
            <p className="text-sm text-muted">
              Votre client mail s'est ouvert avec les informations pré-remplies.
            </p>
            <button
              type="button"
              onClick={() => {
                setSent(false);
                setForm(EMPTY_FORM);
                setErrors({});
              }}
              className="mt-2 font-mono text-xs uppercase tracking-[0.06em] text-bright transition hover:text-white"
            >
              Nouveau message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="relative grid grid-cols-1 gap-4 min-[620px]:grid-cols-2"
          >
            <div className="flex flex-col gap-[7px]">
              <label htmlFor="contact-name" className={labelClass}>
                Nom *
              </label>
              <input
                id="contact-name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Votre nom"
                className={fieldClass("name")}
              />
              {errors.name && (
                <span className="text-[11px] text-[#ff8a8a]">{errors.name}</span>
              )}
            </div>

            <div className="flex flex-col gap-[7px]">
              <label htmlFor="contact-email" className={labelClass}>
                Email *
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="votre@email.com"
                className={fieldClass("email")}
              />
              {errors.email && (
                <span className="text-[11px] text-[#ff8a8a]">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-[7px] min-[620px]:col-span-2">
              <label htmlFor="contact-subject" className={labelClass}>
                Sujet
              </label>
              <input
                id="contact-subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Ex : Projet intégration Sage X3"
                className={fieldClass("subject")}
              />
            </div>

            <div className="flex flex-col gap-[7px] min-[620px]:col-span-2">
              <label htmlFor="contact-message" className={labelClass}>
                Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Décrivez votre besoin…"
                className={`${fieldClass("message")} resize-none`}
              />
              {errors.message && (
                <span className="text-[11px] text-[#ff8a8a]">
                  {errors.message}
                </span>
              )}
            </div>

            <div className="flex items-center gap-4 min-[620px]:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2.5 rounded-xl bg-bright px-[26px] py-3.5 font-display text-[15px] font-semibold text-night transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                Envoyer le message →
              </button>
              <span className="text-[11px] text-[#5f6a7d]">
                * champs obligatoires
              </span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
