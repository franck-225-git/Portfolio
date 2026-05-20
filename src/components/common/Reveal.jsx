export default function Reveal({ children, delay = 0 }) {
  return (
    <div
      className="motion-safe:animate-rise"
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
