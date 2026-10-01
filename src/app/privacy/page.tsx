import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "@/components/ExternalLink";
import { LegalDocument } from "@/components/LegalDocument";
import { SupportLink } from "@/components/SupportLink";
import { siteName, siteUrl } from "@/lib/site";

const description =
  "Privacy Policy for the SplitTake iPhone app. Recordings stay on your device, and SplitTake does not require an account.";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description,
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy — SplitTake",
    description,
    url: "/privacy",
  },
  twitter: {
    title: "Privacy Policy — SplitTake",
    description,
  },
};

export default function PrivacyPage() {
  return (
    <div className="wrap">
      <LegalDocument
        title="Privacy Policy"
        date="October 1, 2026"
        dateTime="2026-10-01"
      >
        <p>
          This policy explains how information is handled when you use the{" "}
          {siteName} app for iPhone and when you visit {siteUrl.replace("https://", "")}.
          SplitTake is offered by SparrowLaunch. In this policy, “SplitTake,”
          “we,” and “us” mean that app and the people who operate it.
        </p>
        <p>
          This describes version 1.0 of the iPhone app. SplitTake records your
          screen with a floating face camera and microphone audio. It keeps a
          library of those recordings on your iPhone.
        </p>

        <h2>No SplitTake account</h2>
        <p>
          The current app does not ask you to create a SplitTake account. You
          can record, trim, and export without signing in to us.
        </p>

        <h2>Screen, camera, and microphone</h2>
        <p>SplitTake uses three iPhone capabilities to make a recording:</p>
        <ul>
          <li>Screen recording, so the app can capture what is on your screen.</li>
          <li>The camera, so your face can appear in a floating camera.</li>
          <li>The microphone, so audio can be recorded with the screen.</li>
        </ul>
        <p>
          iOS asks before those capabilities can be used. You can change camera
          and microphone access later in iOS Settings. If access is off, that
          part of a recording will not be available.
        </p>

        <h2>Camera and face data</h2>
        <p>
          SplitTake lets you record video with your device’s front-facing
          camera while you record your screen. Recording starts only when you
          choose to record. SplitTake does not use facial recognition, identify
          individuals, extract facial geometry, create biometric identifiers,
          track faces, or otherwise analyze faces.
        </p>
        <p>
          The front-camera video is saved on your device as part of the
          recording. The screen recording can also show the floating camera
          window because that window is part of the screen you chose to record.
        </p>
        <p>
          SplitTake does not upload camera video or face imagery to a server
          operated by SparrowLaunch. Camera video and face imagery are not sent
          to RevenueCat or to an analytics or crash-reporting service.
        </p>
        <p>
          Recordings remain on your device until you delete them in SplitTake
          or choose to export or share them through the iOS share sheet. If you
          share or export a recording, the destination you choose handles that
          copy under its own terms and privacy policy.
        </p>
        <p>
          A device backup, such as an iCloud or computer backup, may include
          SplitTake’s locally stored recordings. SplitTake does not separately
          upload or control those device backups.
        </p>

        <h2>Recordings stay on your iPhone</h2>
        <p>
          Recordings are stored in the app on your device. In version 1.0,
          SplitTake does not upload your recordings to a cloud service that we
          operate, and we do not receive a copy of them.
        </p>
        <p>
          A recording leaves your iPhone only if you choose to share or export
          it. The app, service, or place you send it to then handles that copy
          under its own terms and privacy policy. We do not control those
          destinations.
        </p>
        <p>
          You can delete a recording from the library in the app. Because we do
          not keep a copy, deleting it there removes it from SplitTake. If you
          delete the app, iOS handles the app’s local data. Copies you already
          exported somewhere else are outside the app.
        </p>

        <h2>Purchases and SplitTake Pro</h2>
        <p>
          You can record and export without a subscription. Free exports
          include a small “Made with SplitTake” watermark. SplitTake Pro is an
          optional auto-renewable subscription that removes the watermark.
          Monthly and Annual options are sold in the App Store.
        </p>
        <p>
          Apple processes the purchase. We do not receive your payment card
          number, and the app does not ask you for it.
        </p>
        <p>
          We use RevenueCat to tell the app whether SplitTake Pro is active on
          a device. For that purpose, RevenueCat may process an app user
          identifier, product identifiers, subscription status, and related
          transaction details that come from Apple. Restore Purchases uses that
          same path to recognize a subscription you already bought. RevenueCat
          describes its own handling in the{" "}
          <ExternalLink href="https://www.revenuecat.com/privacy">
            RevenueCat privacy policy
          </ExternalLink>
          .
        </p>
        <p>
          Apple may process Apple ID, device, and transaction information under
          the{" "}
          <ExternalLink href="https://www.apple.com/legal/privacy/">
            Apple Privacy Policy
          </ExternalLink>{" "}
          when you download the app, subscribe, restore purchases, or manage a
          subscription. Manage Subscription in the app opens Apple’s
          subscription controls.
        </p>

        <h2>Support</h2>
        <p>
          You can contact support from Settings in the app, or email{" "}
          <SupportLink />. We receive the information you choose to send, such
          as your email address, your message, and any attachment you add. We
          use it to respond and to keep a record of the request. Send a
          recording only if you want us to see it in order to help you.
        </p>

        <h2>This website</h2>
        <p>
          {siteUrl.replace("https://", "")} describes the app and publishes this
          policy and the{" "}
          <Link href="/terms">Terms of Use</Link>. The site does not ask you to
          create an account. It does not use analytics, advertising trackers, or
          tracking cookies.
        </p>
        <p>
          Opening a page still sends an ordinary request to the host that
          serves the site. That request includes the address of the page and
          the connection information your browser presents, such as an IP
          address. We do not add a tracker to that request.
        </p>

        <h2>We do not sell personal information</h2>
        <p>
          We do not sell personal information. We do not use recordings for
          advertising. In version 1.0 we do not receive those recordings.
        </p>

        <h2>Children</h2>
        <p>
          SplitTake is a general recording app. It is not directed to children
          under 13, and we do not knowingly collect personal information from
          them. If you believe a child has sent personal information to our
          support address, email <SupportLink /> and we will delete what we
          have.
        </p>

        <h2>How long information is kept</h2>
        <p>
          Recordings remain on your iPhone until you delete them, subject to
          your device and to any copy you exported yourself. We do not keep a
          server copy of those files in version 1.0, because we do not receive
          them.
        </p>
        <p>
          Apple and RevenueCat keep purchase and subscription records under
          their own practices. We keep support messages for as long as we need
          them to handle your request, and for a reasonable period afterward in
          case you follow up, unless we must keep or delete them sooner.
        </p>

        <h2>Security</h2>
        <p>
          Recordings in version 1.0 depend on your iPhone and on the protections
          you use there. Subscription status is handled by Apple and
          RevenueCat. No method of storing or transmitting information is
          perfectly secure, and we cannot guarantee absolute security.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy when the product changes or when we need to
          describe it more clearly. When we do, we will change the effective
          date at the top of this page. If a change materially affects how we
          handle personal information, we will also say so in the app or on
          this website.
        </p>

        <h2>Contact</h2>
        <p>Questions about this policy can be sent to:</p>
        <address>
          <SupportLink />
        </address>
      </LegalDocument>
    </div>
  );
}
