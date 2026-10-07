export default function AboutSection({ profile, values }) {
  return (
    <section id="a-propos" className="scroll-mt-20 py-[88px]">
      <div className="grid grid-cols-1 gap-x-16 gap-y-10 min-[860px]:grid-cols-[1.5fr_0.8fr]">
        <div>
          <h2 className="max-w-[20ch] font-display text-[clamp(28px,4vw,44px)] font-semibold leading-[1.1] tracking-[-0.02em]">
            {profile.aboutTitle}
          </h2>
          <p className="mt-6 max-w-[62ch] text-base leading-[1.7] text-body">
            {profile.aboutDescription}
          </p>
        </div>

        <ul className="flex flex-col gap-4 border-t border-white/[0.14] pt-5 min-[860px]:border-l min-[860px]:border-t-0 min-[860px]:pl-8 min-[860px]:pt-0">
          {values.map((value) => (
            <li key={value} className="text-[14.5px] leading-[1.55] text-body">
              {value}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
