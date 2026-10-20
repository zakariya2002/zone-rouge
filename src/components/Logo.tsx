export default function Logo({ size = 1 }: { size?: number }) {
  return (
    <span className="logo" style={{ fontSize: `${size}em` }} aria-label="Zone Rouge">
      <span className="logo-zone">Zone</span>
      <span className="logo-rouge">Rouge</span>
      <span className="logo-redline" aria-hidden>
        {Array.from({ length: 9 }, (_, i) => (
          <i key={i} />
        ))}
      </span>
    </span>
  );
}
