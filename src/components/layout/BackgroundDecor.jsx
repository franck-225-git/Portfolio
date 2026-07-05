export default function BackgroundDecor() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_50%_0%,#faf8f2_0,#f3efe6_45%,#ece6d8_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.35] [background:linear-gradient(rgba(12,27,42,0.035)_1px,transparent_1px)_0_0/100%_64px]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed right-[-8rem] top-[-6rem] -z-10 h-[26rem] w-[26rem] rounded-full bg-[#9c6b1a]/[0.07] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-[#0c1b2a]/[0.05] to-transparent"
      />
    </>
  );
}
