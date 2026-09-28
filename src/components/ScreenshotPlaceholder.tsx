import Image from "next/image";
import styles from "./ScreenshotPlaceholder.module.css";

type ScreenshotPlaceholderProps = {
  src: string | null;
  alt: string;
};

export function ScreenshotPlaceholder({ src, alt }: ScreenshotPlaceholderProps) {
  if (src) {
    return (
      <figure className={styles.figure}>
        <div className={styles.shotFrame}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="280px"
            priority
            className={styles.shot}
          />
        </div>
      </figure>
    );
  }

  return (
    <figure className={styles.figure}>
      <div className={styles.stage} aria-hidden="true">
        <div className={styles.halo} />
        <div className={styles.phone}>
          <div className={styles.screen}>
            <div className={styles.island} />
            <div className={styles.surface} />
            <div className={styles.camera}>
              <span className={styles.lens} />
            </div>
            <div className={styles.home} />
          </div>
        </div>
      </div>
      <figcaption>Illustration of a screen with a floating camera</figcaption>
    </figure>
  );
}
