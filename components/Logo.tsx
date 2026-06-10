import { LogoMark } from "./LogoMark";

/**
 * ilk.ai yatay kilit (lockup): sembol + kelime markası.
 * Sembol↔yazı boşluğu ve sembol boyutu altın orana göre dengelenir.
 * `tone="light"` koyu zeminler için beyaz/açık varyant.
 */
export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const wordInk = tone === "light" ? "text-white" : "text-ink";
  const arc = tone === "light" ? "text-white/70" : "text-ink-soft";
  const ai = tone === "light" ? "text-indigo-300" : "text-accent";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark className={`h-7 w-7 shrink-0 ${arc}`} accent title="ilk.ai" />
      <span className={`font-display text-xl font-extrabold tracking-tight leading-none ${wordInk}`}>
        ilk<span className={ai}>.ai</span>
      </span>
    </span>
  );
}
