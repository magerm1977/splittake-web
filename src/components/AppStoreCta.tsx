import { getAppStoreUrl } from "@/lib/site";
import styles from "./AppStoreCta.module.css";

export function AppStoreCta() {
  const href = getAppStoreUrl();

  if (!href) {
    return (
      <p className={styles.soon}>
        <span className={styles.dot} aria-hidden="true" />
        Coming soon to the App Store
      </p>
    );
  }

  return (
    <a
      className={styles.download}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      Download on the App Store
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
