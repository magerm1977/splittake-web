import Link from "next/link";
import { SupportLink } from "@/components/SupportLink";
import { copyrightYear, operatorName } from "@/lib/site";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <p className={styles.mark}>SplitTake</p>
        <nav aria-label="Footer">
          <ul className={styles.links}>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms of Use</Link>
            </li>
            <li>
              <SupportLink>Contact Support</SupportLink>
            </li>
          </ul>
        </nav>
        <p className={styles.email}>
          <SupportLink />
        </p>
        <p className={styles.copy}>
          © {copyrightYear} {operatorName}
        </p>
      </div>
    </footer>
  );
}
