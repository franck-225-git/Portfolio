export default function BackgroundDecor() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(900px_600px_at_78%_-8%,rgba(255,255,255,0.045),transparent_60%),radial-gradient(760px_620px_at_8%_12%,rgba(255,255,255,0.04),transparent_58%),radial-gradient(700px_700px_at_60%_108%,rgba(255,255,255,0.028),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-50 [background-image:linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_100%_80%_at_50%_0%,#000_40%,transparent_100%)]"
      />
    </>
  );
}
