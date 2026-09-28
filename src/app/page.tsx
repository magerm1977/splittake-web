import { AppStoreCta } from "@/components/AppStoreCta";
import { ScreenshotPlaceholder } from "@/components/ScreenshotPlaceholder";
import {
  getAppStoreUrl,
  heroScreenshot,
  siteDescription,
  siteName,
  siteUrl,
} from "@/lib/site";
import styles from "./page.module.css";

const features = [
  {
    index: "01",
    title: "Your screen, with you in the frame",
    body: "Record the iPhone screen while a floating camera keeps your face visible, with microphone audio included. Demonstrate another app and stay present, instead of handing someone a recording of the screen alone.",
  },
  {
    index: "02",
    title: "Start without recording the setup",
    body: "When you begin, SplitTake waits five seconds before capture starts. That countdown is time to leave SplitTake and open the app you want to show, so the setup is less likely to land in the take.",
  },
  {
    index: "03",
    title: "Clean up the beginning and ending",
    body: "Remove the setup and the ending from a recording, then adjust the trim yourself if you want a closer cut. Share or export the result when it looks right.",
  },
  {
    index: "04",
    title: "Your recordings stay with you",
    body: "Recordings live in a library on your iPhone. SplitTake does not upload them to a SplitTake cloud, and you do not need a SplitTake account. A recording leaves your device only when you choose to share or export it.",
  },
];

export default function HomePage() {
  const installUrl = getAppStoreUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteName,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "iOS",
    url: siteUrl,
    description: siteDescription,
    ...(installUrl ? { installUrl } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <section className={styles.hero}>
        <div className={`wrap ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>For iPhone</p>
            <h1>
              Record your screen. <span className={styles.line}>Stay on camera.</span>
            </h1>
            <div className={styles.rule} aria-hidden="true" />
            <p className={styles.lead}>
              SplitTake records your iPhone screen and keeps you visible with a
              floating camera, so a walkthrough, demo, or tutorial still has a
              presenter in the frame. No SplitTake account is required.
            </p>
            <div className={styles.cta}>
              <AppStoreCta />
            </div>
            <ul className={styles.facts}>
              <li>Screen and face camera</li>
              <li>Five-second countdown</li>
              <li>Stored on your iPhone</li>
            </ul>
          </div>
          <div className={styles.heroArt}>
            <ScreenshotPlaceholder
              src={heroScreenshot?.src ?? null}
              alt={heroScreenshot?.alt ?? ""}
            />
          </div>
        </div>
      </section>

      {features.map((feature) => (
        <section key={feature.index} className={styles.feature}>
          <div className={`wrap ${styles.featureInner}`}>
            <p className={styles.index} aria-hidden="true">
              {feature.index}
            </p>
            <div>
              <h2>{feature.title}</h2>
              <p>{feature.body}</p>
            </div>
          </div>
        </section>
      ))}

      <section className={styles.plans} aria-labelledby="plans-heading">
        <div className="wrap">
          <h2 id="plans-heading">Free and Pro</h2>
          <p className={styles.intro}>
            You can record and export without paying. Free exports include a
            small “Made with SplitTake” watermark. SplitTake Pro removes that
            watermark while the subscription is active.
          </p>
          <div className={styles.grid}>
            <article className={styles.plan}>
              <h3>Free</h3>
              <ul>
                <li>Record the screen, face camera, and microphone</li>
                <li>Keep a library of recordings on your iPhone</li>
                <li>Share or export when you choose</li>
                <li>A small “Made with SplitTake” watermark on exports</li>
                <li>No SplitTake account</li>
              </ul>
            </article>
            <article className={`${styles.plan} ${styles.planPro}`}>
              <h3>SplitTake Pro</h3>
              <ul>
                <li>Removes the watermark from exports</li>
                <li>Monthly and Annual auto-renewable subscriptions</li>
                <li>Purchase and renewal through the App Store</li>
                <li>Restore Purchases and Manage Subscription in Settings</li>
              </ul>
            </article>
          </div>
          <p className={styles.note}>
            Subscription prices are shown in the App Store when you subscribe.
            They can vary by region, so this site does not list a price.
          </p>
        </div>
      </section>

      <section className={styles.close}>
        <div className="wrap">
          <h2>On the App Store soon</h2>
          <p>
            SplitTake is an iPhone app. This page will link to the App Store
            listing when it is public.
          </p>
          <div className={styles.cta}>
            <AppStoreCta />
          </div>
        </div>
      </section>
    </>
  );
}
