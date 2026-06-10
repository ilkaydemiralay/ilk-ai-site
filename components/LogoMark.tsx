/**
 * ilk.ai sembolü — "Çekirdek" (The Core)
 * Altın oran / Fibonacci geometrisi: çekirdek r=13, açık yay r=34 (13·φ²),
 * üst ve altta simetrik açıklıklı iki yay. Tek renk currentColor;
 * `accent` ile çekirdek indigo aksana boyanır (duotone).
 */
type Props = {
  className?: string;
  accent?: boolean;
  title?: string;
};

export function LogoMark({ className, accent = false, title }: Props) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="13" fill="currentColor" className={accent ? "text-accent" : undefined} />
      <path d="M 63.285 18.703 A 34 34 0 0 1 63.285 81.297" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M 36.715 81.297 A 34 34 0 0 1 36.715 18.703" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}
