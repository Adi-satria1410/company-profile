// Variasi lokal untuk foto bawaan. Foto pengganti dengan nama lain tetap berfungsi.
const widths: Record<string, number> = {
  '/images/workspace.webp': 1600,
  '/images/collaboration.webp': 1400,
  '/images/meeting.webp': 1400,
  '/images/architecture.webp': 1400,
};

export function imageSrcSet(src: string) {
  const width = widths[src];
  if (!width) return undefined;
  return `${src.replace('.webp', '-640.webp')} 640w, ${src.replace('.webp', '-960.webp')} 960w, ${src} ${width}w`;
}
