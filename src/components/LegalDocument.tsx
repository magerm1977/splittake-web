import type { ReactNode } from "react";
import { effectiveDate, effectiveDateIso } from "@/lib/site";
import styles from "./LegalDocument.module.css";

export function LegalDocument({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <article className={styles.article}>
      <h1>{title}</h1>
      <p className={styles.date}>
        Effective <time dateTime={effectiveDateIso}>{effectiveDate}</time>
      </p>
      {children}
    </article>
  );
}
