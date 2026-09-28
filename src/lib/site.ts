/**
 * Site configuration.
 *
 * When the App Store listing is public, set `appStoreUrl` to that https URL
 * on apple.com (for example an apps.apple.com link). Leave it null until then.
 * Do not put a placeholder, search result, or unofficial URL here.
 */
export const appStoreUrl: string | null = null;

/**
 * Replace with a real product screenshot when one is ready.
 * Put the file in `public/` and point `src` at it, for example
 * `{ src: "/screenshots/hero.png", alt: "SplitTake recording on an iPhone." }`.
 * Leave null to show the abstract illustration. Do not use a mock screenshot.
 */
export const heroScreenshot: { src: string; alt: string } | null = null;

export const siteUrl = "https://splittake.app";
export const siteName = "SplitTake";
export const operatorName = "SparrowLaunch";
export const supportEmail = "support@sparrowlaunch.com";
export const copyrightYear = "2026";
export const effectiveDate = "September 28, 2026";
export const effectiveDateIso = "2026-09-28";

export const siteTitle =
  "SplitTake — Screen Recording with Face Camera for iPhone";

export const siteDescription =
  "Record your iPhone screen while staying on camera. SplitTake makes it easy to capture walkthroughs, demos, tutorials, and more.";

export function getAppStoreUrl(): string | null {
  const raw = appStoreUrl?.trim();
  if (!raw) return null;

  try {
    const url = new URL(raw);
    const host = url.hostname.toLowerCase();
    const isApple = host === "apple.com" || host.endsWith(".apple.com");
    if (url.protocol !== "https:" || !isApple) return null;
    return url.toString();
  } catch {
    return null;
  }
}
