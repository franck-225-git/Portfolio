import { useState } from "react";

export default function ContactSection({ email }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
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
    const body = encodeURIComponent(`Nom: ${form.name}\n\n${form.message}`);
    const subject = encodeURIComponent(
      form.subject || "Contact depuis le portfolio",
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const inputClass = (field) =>
    `w-full rounded-xl border bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:bg-white/15 focus:ring-2 focus:ring-accent ${
      errors[field] ? "border-red-400" : "border-white/20"
    }`;

  return (
    <section id="contact" className="mb-12">
      <div className="relative overflow-hidden rounded-[1.75rem] border border-ink/10 bg-ink p-6 text-white shadow-premium md:p-9">
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-accent to-lagoon" />
        {/* Header */}
        <div className="mb-8 grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/55">
                Contact
              </p>
            </div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl">
              Discutons de votre besoin.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70">
              Integrations ERP, Power Platform, developpement applicatif —
              envoyez-moi un message ou ecrivez directement.
            </p>
          </div>
          {/* Lien email direct */}
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 self-start rounded-full border border-white/20 px-4 py-2 text-xs font-bold tracking-[0.08em] text-white/70 transition hover:border-accent hover:text-accent"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            {email}
          </a>
        </div>

        {sent ? (
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/15 bg-white/10 py-16 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white text-xl">
              ✓
            </div>
            <p className="font-display text-xl">Message prepare !</p>
            <p className="text-sm text-white/60">
              Votre client mail s'est ouvert avec les informations pre-remplies.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-2 text-xs font-bold uppercase tracking-[0.08em] text-accent underline-offset-2 hover:underline"
            >
              Nouveau message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="grid gap-4 md:grid-cols-2"
          >
            {/* Nom */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/50">
                Nom *
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Votre nom"
                className={inputClass("name")}
              />
              {errors.name && (
                <span className="text-[11px] text-red-400">{errors.name}</span>
              )}
            </div>
            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/50">
                Email *
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="votre@email.com"
                className={inputClass("email")}
              />
              {errors.email && (
                <span className="text-[11px] text-red-400">{errors.email}</span>
              )}
            </div>
            {/* Sujet */}
            <div className="flex flex-col gap-1 md:col-span-2">
              <label className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/50">
                Sujet
              </label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Ex : Projet integration Sage X3"
                className={inputClass("subject")}
              />
            </div>
            {/* Message */}
            <div className="flex flex-col gap-1 md:col-span-2">
              <label className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/50">
                Message *
              </label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Decrivez votre besoin..."
                className={`${inputClass("message")} resize-none`}
              />
              {errors.message && (
                <span className="text-[11px] text-red-400">
                  {errors.message}
                </span>
              )}
            </div>
            {/* Submit */}
            <div className="flex items-center gap-4 md:col-span-2">
              <button
                type="submit"
                className="rounded-full bg-accent px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:bg-accent/90"
              >
                Envoyer le message
              </button>
              <p className="text-[11px] text-white/40">* champs obligatoires</p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
