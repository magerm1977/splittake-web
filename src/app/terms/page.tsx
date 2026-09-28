import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "@/components/ExternalLink";
import { LegalDocument } from "@/components/LegalDocument";
import { SupportLink } from "@/components/SupportLink";
import { siteUrl } from "@/lib/site";

const description =
  "Terms of Use for the SplitTake iPhone app, including your recordings, SplitTake Pro, and App Store billing.";

const appleEula =
  "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";

export const metadata: Metadata = {
  title: "Terms of Use",
  description,
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Use — SplitTake",
    description,
    url: "/terms",
  },
  twitter: {
    title: "Terms of Use — SplitTake",
    description,
  },
};

export default function TermsPage() {
  return (
    <div className="wrap">
      <LegalDocument title="Terms of Use">
        <p>
          These terms are an agreement between you and SparrowLaunch for the
          SplitTake iPhone app and the website at {siteUrl.replace("https://", "")}.
          They explain how you may use SplitTake, what you are responsible for
          when you record, and how SplitTake Pro subscriptions work.
        </p>
        <p>
          If you downloaded SplitTake from the App Store, Apple’s{" "}
          <ExternalLink href={appleEula}>
            Licensed Application End User License Agreement
          </ExternalLink>{" "}
          also applies to the downloaded app. If that Apple agreement and these
          terms conflict on a point Apple’s agreement is required to control,
          Apple’s agreement controls for that point. These terms are
          SplitTake’s own terms for the service, including Free and Pro use.
        </p>

        <h2>Accepting these terms</h2>
        <p>
          By downloading, installing, or using SplitTake, you agree to these
          terms. If you do not agree, do not use the app or this website.
        </p>

        <h2>Who may use SplitTake</h2>
        <p>
          You need to be able to agree to these terms. If you are not old
          enough to agree where you live, a parent or guardian needs to agree
          for you. If you use SplitTake for an organization, you confirm that
          you may do so. The app is for iPhone.
        </p>

        <h2>License</h2>
        <p>
          We grant you a personal, limited, non-exclusive, non-transferable,
          revocable license to use the SplitTake app on Apple devices you own
          or control, as the App Store rules allow. The app is licensed, not
          sold.
        </p>
        <p>
          This license does not give you ownership of the software. Except as
          the law allows, you may not copy the app beyond what iOS does for
          your own use, modify it, reverse engineer it, rent it, sell it, or
          redistribute it. You may not remove the watermark from a free export
          except through an active SplitTake Pro subscription.
        </p>

        <h2>Your recordings</h2>
        <p>
          You keep ownership of the recordings and other content you create
          with SplitTake.
        </p>
        <p>
          You are responsible for what you record, trim, export, and share. You
          need the rights and permissions required to capture the screen, the
          people, the audio, and any other material in a recording, and to
          share it. You are also responsible for following the privacy,
          copyright, workplace, confidentiality, and recording-consent laws that
          apply to you.
        </p>
        <p>
          SplitTake does not review your recordings and does not decide whether
          a particular recording is allowed. Version 1.0 stores recordings on
          your iPhone and does not host them for you.
        </p>

        <h2>Acceptable use</h2>
        <p>Do not use SplitTake to:</p>
        <ul>
          <li>break the law or violate someone else’s rights</li>
          <li>record or share material you are not allowed to capture</li>
          <li>harass, threaten, or harm someone</li>
          <li>
            interfere with the app, or bypass its limits, including the
            watermark on free exports or a subscription check
          </li>
        </ul>

        <h2>Our software and name</h2>
        <p>
          The SplitTake app, its design, and the SplitTake name and branding
          belong to SparrowLaunch or its licensors. These terms do not transfer
          that ownership. You may name the app truthfully. You may not use the
          SplitTake name or branding in a way that suggests we endorse you.
        </p>
        <p>
          If you choose to send feedback, you allow us to use it to improve
          SplitTake, without an obligation to adopt it or to pay you.
        </p>

        <h2>Free and SplitTake Pro</h2>
        <p>
          You can use the current app without a SplitTake account. Free exports
          may include a small “Made with SplitTake” watermark.
        </p>
        <p>
          SplitTake Pro removes that watermark from exports while your
          subscription is active. Pro is offered as a Monthly or Annual
          auto-renewable subscription through the App Store. A subscription
          covers the iPhone app features included with Pro. It is not a promise
          that every later feature, or any separate product, is included.
        </p>

        <h2>Billing, renewal, and cancellation</h2>
        <p>
          Apple bills subscriptions through the App Store account you use to
          subscribe. We do not take your payment card details. The price you
          pay is the price shown in the App Store at the time of purchase, and
          it can differ by region. This website does not list subscription
          prices. If a price changes, the change follows Apple’s rules,
          including any notice Apple requires.
        </p>
        <p>
          The Monthly option renews each month. The Annual option renews each
          year. A subscription renews automatically unless you turn off
          auto-renewal at least 24 hours before the end of the current period.
          Apple charges the renewal to your Apple ID account within the 24
          hours before that period ends.
        </p>
        <p>
          You can manage or cancel a subscription in your Apple ID subscription
          settings. Settings in SplitTake includes Manage Subscription, which
          opens those Apple controls. If you cancel, you can keep using Pro
          through the end of the period you already paid for, and the
          subscription does not renew after that, subject to Apple’s rules.
          Deleting the app does not cancel a subscription.
        </p>
        <p>
          Restore Purchases, in Settings, asks Apple and our subscription
          system to restore an active Pro entitlement on the device you are
          using.
        </p>
        <p>
          Refunds are handled by Apple under Apple’s policies. We cannot issue
          an App Store refund ourselves. You can request one from Apple at{" "}
          <ExternalLink href="https://reportaproblem.apple.com">
            reportaproblem.apple.com
          </ExternalLink>
          .
        </p>

        <h2>Availability and changes</h2>
        <p>
          We may update SplitTake, change how a feature works, or stop offering
          part of it. The app needs a compatible iPhone and a supported version
          of iOS, and an update may be required for it to keep working. We do
          not promise that the app or this website will always be available, or
          that a recording or export will be free of errors.
        </p>

        <h2>Disclaimers</h2>
        <p>
          SplitTake is provided “as is” and “as available.” To the extent the
          law allows, we disclaim implied warranties of merchantability, fitness
          for a particular purpose, and non-infringement, and any warranty that
          the app will be uninterrupted or error-free.
        </p>
        <p>
          Some places do not allow some of these disclaimers. In those places,
          they apply only as far as the law allows. You may have rights that
          these terms cannot take away.
        </p>

        <h2>Limits on liability</h2>
        <p>
          To the extent the law allows, SparrowLaunch will not be liable for
          indirect, incidental, special, consequential, or punitive damages, or
          for lost profits or lost recordings, arising out of your use of
          SplitTake or these terms.
        </p>
        <p>
          To the extent the law allows, our total liability for a claim
          relating to the app or these terms is limited to the amount you paid
          Apple for SplitTake subscriptions during the three months before the
          claim. If you paid nothing during that period, our total liability is
          limited to fifty U.S. dollars.
        </p>
        <p>
          These limits do not apply where the law does not allow them. That
          includes liability for fraud or willful misconduct, and liability for
          death or personal injury caused by negligence where that liability
          cannot be limited.
        </p>

        <h2>Apple</h2>
        <p>
          Apple is not responsible for SplitTake, its content, or its support,
          except where Apple’s own rules say otherwise. Support is provided by
          SparrowLaunch at <SupportLink />, not by Apple. Apple and its
          subsidiaries are third-party beneficiaries of the App Store license
          that applies to the downloaded app and may enforce that license.
        </p>

        <h2>Ending use</h2>
        <p>
          You may stop using SplitTake at any time and delete the app. We may
          suspend or end access if you materially break these terms. The parts
          of these terms that should continue after that, including ownership,
          your responsibility for recordings, disclaimers, and limits on
          liability, will still apply.
        </p>

        <h2>Changes to these terms</h2>
        <p>
          We may update these terms. When we do, we will change the effective
          date on this page. If you keep using SplitTake after the update
          applies, you are agreeing to the updated terms. If you do not agree,
          stop using the app. A period you have already paid for remains
          subject to Apple’s rules for that subscription.
        </p>

        <h2>Law that applies</h2>
        <p>
          These terms do not choose a particular court or local jurisdiction.
          Laws that protect you where you live, including rights that cannot be
          waived, still apply. Our{" "}
          <Link href="/privacy">Privacy Policy</Link> describes how information
          is handled.
        </p>

        <h2>Contact</h2>
        <p>Questions about these terms can be sent to:</p>
        <address>
          <SupportLink />
        </address>
      </LegalDocument>
    </div>
  );
}
