import type { Metadata } from "next";
import Link from "next/link";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page is not part of the SplitTake website.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <p className={styles.eyebrow}>404</p>
        <h1>This page is not here</h1>
        <p>That address is not part of the SplitTake site.</p>
        <Link href="/" className={styles.home}>
          Back to home
        </Link>
      </div>
    </section>
  );
}
