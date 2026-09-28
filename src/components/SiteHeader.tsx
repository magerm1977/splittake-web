import Image from "next/image";
import Link from "next/link";
import appIcon from "@/images/app-icon.png";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.inner}`}>
        <Link href="/" className={styles.brand}>
          <Image
            src={appIcon}
            alt=""
            width={36}
            height={36}
            className={styles.logo}
            priority
          />
          <span>SplitTake</span>
          <span className="sr-only"> home</span>
        </Link>
      </div>
    </header>
  );
}
