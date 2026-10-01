import type { ReactNode } from "react";
import { effectiveDate, effectiveDateIso } from "@/lib/site";
import styles from "./LegalDocument.module.css";

export function LegalDocument({
  title,
  date = effectiveDate,
  dateTime = effectiveDateIso,
  children,
}: {
  title: string;
  date?: string;
  dateTime?: string;
  children: ReactNode;
}) {
  return (
    <article className={styles.article}>
      <h1>{title}</h1>
      <p className={styles.date}>
        Effective <time dateTime={dateTime}>{date}</time>
      </p>
      {children}
    </article>
  );
}
