import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Automate Ideas — how we collect, use, store, and protect your information when you use our website and services.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      description="This policy explains what information we collect when you use our website or services, how we use it, and the choices you have over your data."
      updatedDate="September 10, 2026"
      sections={[
        {
          heading: "Introduction",
          paragraphs: [
            "Automate Ideas (\"we\", \"our\", \"us\") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains what data we collect, why we collect it, how we use it, and the rights you have regarding it.",
            "By using our website or engaging our services, you agree to the practices described in this policy. If you do not agree with any part of it, please discontinue use of our website and services.",
          ],
        },
        {
          heading: "Information We Collect",
          paragraphs: [
            "We only collect information that you choose to provide to us or that is necessary to deliver our services. This may include:",
            "Contact details such as your name, email address, phone number, company name, and designation, given when you contact us through our website, forms, email, phone, or WhatsApp.",
            "Project information such as details about your business, processes, or data that you share with us when scoping or delivering an automation project.",
            "Usage information such as basic, non-identifiable details about how you interact with our website — for example pages visited and time spent — used to improve your experience.",
          ],
        },
        {
          heading: "How We Use Your Information",
          paragraphs: [
            "We use the information we collect to: respond to your enquiries and provide consultations; deliver, configure, and support the automation services you request; send you relevant updates about your project; improve our website, services, and customer experience; and communicate with you through the channels you have agreed to.",
            "We do not sell, rent, or trade your personal information to third parties for their own marketing purposes.",
          ],
        },
        {
          heading: "Legal Bases & Consent (GDPR & DPDP Act, 2023)",
          paragraphs: [
            "We process personal information lawfully and transparently. Under the Digital Personal Data Protection Act 2023 (DPDP Act, 2023) in India, and the General Data Protection Regulation (GDPR) where it applies to visitors in the European Economic Area (EEA), consent is our primary lawful basis for collecting any data that is not strictly necessary.",
            "Before any optional cookies or analytics are placed on your device, you will be asked for consent through our cookie banner. You may accept, decline, or refine your choices at any time, and you can change your decision later using the \u201cCookie Preferences\u201d link in our website footer.",
          ],
        },
        {
          heading: "How We Share Your Information",
          paragraphs: [
            "We only share your information where it is needed to provide our services or where we are legally required to do so. This includes:",
            "Service providers we work with to operate our business — such as communication, analytics, and hosting providers — who are bound by confidentiality obligations.",
            "Platforms you ask us to integrate with, such as Google Workspace and WhatsApp Business API, which are accessed only to the extent needed to build and run your automations.",
            "Authorities or legal processes, when disclosure is required by law.",
          ],
        },
        {
          heading: "Data Security",
          paragraphs: [
            "We take reasonable technical and organisational measures to protect your information against unauthorised access, alteration, disclosure, or destruction. Where we handle data inside your accounts, we use least-privilege access — we only touch what is needed to build and run your automation.",
            "No method of transmission or storage is completely secure. While we strive to protect your data, we cannot guarantee its absolute security, and you share information with us at your own discretion.",
          ],
        },
        {
          heading: "Data Retention",
          paragraphs: [
            "We retain personal information only for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer needed, we delete or anonymise it securely.",
          ],
        },
        {
          heading: "Your Rights",
          paragraphs: [
            "You have rights under the DPDP Act, 2023 and GDPR where applicable. These include the right to access the personal information we hold about you, to correct or update inaccurate or incomplete information, to request deletion of your personal information, and to withdraw any consent you have previously given at any time, without affecting the lawfulness of processing carried out before the withdrawal.",
            "To exercise any of these rights, contact us using the details below. We will respond within a reasonable time and in accordance with applicable law.",
          ],
        },
        {
          heading: "Cookies and Consent",
          paragraphs: [
            "Our website uses cookies and similar technologies. Strictly necessary cookies keep the site secure and functional and are always active. Analytics and advertising (marketing) cookies only run after you give your consent, which we request through our cookie banner before any optional cookies load. This follows the requirements of the DPDP Act, 2023 in India and the GDPR in the European Economic Area.",
            "You can control cookies through our cookie banner at any time using the \"Cookie Preferences\" link in the footer, or through your browser settings. Disabling analytics or marketing cookies will not affect access to the core features of the website.",
          ],
        },
        {
          heading: "Third-Party Services",
          paragraphs: [
            "Our website and services may link to or use third-party services such as Google Workspace, WhatsApp, and analytics tools. These services have their own privacy policies, and we encourage you to review them. Your use of such services is also subject to their terms.",
          ],
        },
        {
          heading: "Children's Privacy",
          paragraphs: [
            "Our website and services are intended for business use and are not directed to children. We do not knowingly collect personal information from children under the age of 13. If you believe a child has provided us with personal information, please contact us and we will delete it.",
          ],
        },
        {
          heading: "Changes to This Policy",
          paragraphs: [
            "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we do, we will revise the \"Last updated\" date at the top of this page. We encourage you to review this policy periodically.",
          ],
        },
        {
          heading: "Contact Us",
          paragraphs: [
            "If you have questions, concerns, or requests about this Privacy Policy or how your data is handled, you can reach us at:",
            "Automate Ideas, Nandgram, Ghaziabad, Uttar Pradesh, India.",
            `By phone at +91 96255 98603, or by email at amit23kumar04@gmail.com. We will respond within one business day.`,
          ],
        },
      ]}
      contactNote={"If you have any questions about this Privacy Policy or your data, reach out to us and we\u2019ll be happy to clarify."}
    />
  );
}