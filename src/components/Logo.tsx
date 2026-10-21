export default function Logo({ size = 1 }: { size?: number }) {
  return (
    <span className="logo" style={{ fontSize: `${size}em` }} aria-label="Zone Rouge">
      <span className="logo-zone">Zone</span>
      <span className="logo-rouge">Rouge</span>
    </span>
  );
}
