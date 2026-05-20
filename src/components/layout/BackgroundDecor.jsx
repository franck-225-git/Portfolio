export default function BackgroundDecor() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_15%_15%,#f8f9fb_0,#eef2f7_38%,#e8edf4_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed left-[-12rem] top-[-4rem] -z-10 h-[34rem] w-[34rem] rounded-full bg-[#c7ab7e]/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed right-[-10rem] top-[10rem] -z-10 h-[28rem] w-[28rem] rounded-full bg-[#7f9db6]/22 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-[#d8e0ea] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-25 [background:linear-gradient(115deg,transparent_0_42%,rgba(11,27,43,0.08)_42%_43%,transparent_43%_100%)]"
      />
    </>
  );
}
