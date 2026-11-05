import { useState } from "react";

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };

const labelClass = "text-[13px] text-muted";

export default function ContactSection({ email }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Indiquez votre nom.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Vérifiez l'adresse, il manque le @ ou le domaine.";
    if (!form.message.trim()) e.message = "Décrivez votre besoin en quelques lignes.";
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
    `w-full rounded-lg border bg-white/[0.03] px-[14px] py-[12px] text-[15px] text-ink outline-none transition placeholder:text-muted focus:border-bright focus:bg-white/[0.06] ${
      errors[field] ? "border-[#ff9a9a]" : "border-white/[0.14]"
    }`;

  return (
    <section id="contact" className="scroll-mt-20 py-[88px]">
      <div className="grid gap-x-16 gap-y-10 border-t border-white/[0.14] pt-10 min-[860px]:grid-cols-[0.85fr_1.15fr]">
        <div>
          <h2 className="max-w-[16ch] font-display text-[clamp(30px,4.4vw,46px)] font-semibold leading-[1.05] tracking-[-0.02em]">
            Discutons de votre besoin
          </h2>
          <p className="mt-5 max-w-[46ch] text-[15.5px] leading-[1.65] text-body">
            Intégration d'API, Sage X3, Power Platform ou support applicatif.
            Décrivez votre projet en quelques lignes, je vous réponds
            rapidement.
          </p>
          <a
            href={`mailto:${email}`}
            className="mt-6 inline-block font-mono text-[13.5px] text-body underline decoration-white/25 underline-offset-4 transition hover:text-bright hover:decoration-signal"
          >
            {email}
          </a>
        </div>

        {sent ? (
          <div className="flex flex-col items-start gap-3 self-start border-l-2 border-signal pl-5">
            <p className="font-display text-[20px] font-semibold text-ink">
              Votre client mail est ouvert
            </p>
            <p className="max-w-[46ch] text-[15px] leading-[1.6] text-body">
              Le message est pré-rempli avec vos informations. Il ne reste plus
              qu'à l'envoyer depuis votre messagerie.
            </p>
            <button
              type="button"
              onClick={() => {
                setSent(false);
                setForm(EMPTY_FORM);
                setErrors({});
              }}
              className="mt-1 text-[14px] text-bright underline underline-offset-4 transition hover:decoration-signal"
            >
              Écrire un autre message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="grid grid-cols-1 gap-4 min-[620px]:grid-cols-2"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-name" className={labelClass}>
                Nom
              </label>
              <input
                id="contact-name"
                name="name"
                value={form.name}
                onChange={handleChange}
                aria-invalid={errors.name ? "true" : undefined}
                className={fieldClass("name")}
              />
              {errors.name && (
                <span className="text-[13px] text-[#ff9a9a]">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-email" className={labelClass}>
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                aria-invalid={errors.email ? "true" : undefined}
                className={fieldClass("email")}
              />
              {errors.email && (
                <span className="text-[13px] text-[#ff9a9a]">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2 min-[620px]:col-span-2">
              <label htmlFor="contact-subject" className={labelClass}>
                Sujet <span className="text-muted">(facultatif)</span>
              </label>
              <input
                id="contact-subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Projet d'intégration Sage X3"
                className={fieldClass("subject")}
              />
            </div>

            <div className="flex flex-col gap-2 min-[620px]:col-span-2">
              <label htmlFor="contact-message" className={labelClass}>
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                aria-invalid={errors.message ? "true" : undefined}
                className={`${fieldClass("message")} resize-none`}
              />
              {errors.message && (
                <span className="text-[13px] text-[#ff9a9a]">
                  {errors.message}
                </span>
              )}
            </div>

            <div className="min-[620px]:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center rounded-lg bg-bright px-6 py-3.5 font-display text-[15px] font-semibold text-night transition hover:bg-white"
              >
                Ouvrir mon client mail
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
