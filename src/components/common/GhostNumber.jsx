const SIZES = {
  lg: "text-[clamp(90px,13vw,150px)]",
  sm: "text-[clamp(80px,11vw,130px)]",
};

/** Grand numéro de section en filigrane. */
export default function GhostNumber({ value, size = "lg", className = "" }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute left-[-10px] select-none font-display font-bold leading-none text-white/[0.03] ${SIZES[size]} ${className}`}
    >
      {value}
    </span>
  );
}
