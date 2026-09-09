import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for Automate Ideas — the terms that govern your use of our website and engagement of our automation services.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      description="These terms govern your use of the Automate Ideas website and the automation services we provide. Please read them carefully before using our site or engaging our services."
      updatedDate="September 10, 2026"
      sections={[
        {
          heading: "Acceptance of Terms",
          paragraphs: [
            "By accessing our website or engaging our services, you agree to be bound by these Terms of Use. If you do not accept these terms, please do not use our website or purchase our services.",
            "These terms may be updated from time to time. Continued use of our website or services after changes are published constitutes acceptance of the revised terms.",
          ],
        },
        {
          heading: "Scope of Services",
          paragraphs: [
            "Automate Ideas provides business process automation services, including but not limited to Google Workspace and Apps Script automation, Google Sheets reporting and dashboards, WhatsApp Business API integration, CRM and lead management automation, and custom workflow design.",
            "Every project is delivered according to a specific scope agreed between us in writing. Any work outside that scope will be quoted separately.",
          ],
        },
        {
          heading: "Client Responsibilities",
          paragraphs: [
            "To deliver our work, we may need access to your accounts, systems, and data. You are responsible for: providing accurate and complete information; granting the access we require for the agreed scope; ensuring you have the right to use and share the data involved; and reviewing and approving deliverables in a timely manner.",
            "You agree that the data and systems you provide will not contain content that is unlawful, infringes any third-party rights, or violates any applicable law. We are not responsible for the accuracy of data you supply.",
          ],
        },
        {
          heading: "Project Scope, Quotations, and Approvals",
          paragraphs: [
            "Each project is defined by a written scope and fixed quotation, which we confirm with you before work begins. Timelines and deliverables are based on the information available at the time of agreement. Delays caused by late responses, missing information, or unforeseen third-party issues may extend the timeline, and we will keep you informed if this happens.",
          ],
        },
        {
          heading: "Payment Terms",
          paragraphs: [
            "Payment terms are agreed before work begins and are typically set in the quotation. Work may be scheduled to begin only after any agreed advance payment is received. Refunds are not available for work already delivered, and no work is transferred to the client until payments due are settled.",
          ],
        },
        {
          heading: "Intellectual Property",
          paragraphs: [
            "Upon full payment, we grant you ownership of the automations and deliverables created specifically for your project, so you own the components we build for you.",
            "Any tools, libraries, scripts, templates, or techniques we developed before your project or use across multiple clients remain our intellectual property. You are not granted any ownership or licence over these, except the right to use the parts we build for you as intended.",
            "You may not resell, redistribute, or claim authorship of our work without our prior written consent.",
          ],
        },
        {
          heading: "Confidentiality",
          paragraphs: [
            "We will keep confidential any non-public information you share with us for the purpose of our engagement. We will not disclose it to third parties or use it beyond what is needed to deliver your project, except where required by law or where you have given permission.",
            "Confidentiality obligations do not apply to information that is already public, independently developed, or lawfully received from another source.",
          ],
        },
        {
          heading: "Third-Party Services",
          paragraphs: [
            "Our work frequently involves third-party platforms such as Google Workspace, WhatsApp, payment gateways, and CRMs. We do not control these platforms and are not responsible for their availability, terms, pricing, outages, or policy changes.",
            "Automation depends on these platforms' APIs, which may change with or without notice. We will make reasonable efforts to keep your automations working but cannot guarantee uninterrupted availability.",
          ],
        },
        {
          heading: "Limitation of Liability",
          paragraphs: [
            "Our services are provided on an \"as is\" and \"as available\" basis. To the maximum extent permitted by law, we are not liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, revenue, data, or goodwill, arising from your use of our services or website.",
            "In no event shall our total liability arising from a project exceed the amount actually paid by you to us for that project.",
            "You are responsible for backing up your data. While we take care in our work, we recommend you maintain your own copies of critical data we handle.",
          ],
        },
        {
          heading: "No Guarantees",
          paragraphs: [
            "We deliver work to the agreed specification and with reasonable professional care, but results — such as time savings, error reductions, or performance improvements — depend on your environment, data, and usage and cannot be guaranteed.",
          ],
        },
        {
          heading: "Termination",
          paragraphs: [
            "Either party may end an engagement if a material breach is not resolved within a reasonable time of being notified. In the event of early termination, you will be invoiced for work completed up to that point, and we will hand over any deliverables that are owed to you and fully paid for.",
          ],
        },
        {
          heading: "Changes to These Terms",
          paragraphs: [
            "We may revise these Terms of Use at any time. The \"Last updated\" date at the top of this page shows when the terms were last changed. Your continued use of the website or services after changes take effect means you accept the updated terms.",
          ],
        },
        {
          heading: "Governing Law",
          paragraphs: [
            "These terms are governed by the laws of India. Any disputes arising out of or in connection with these terms or our services shall be subject to the exclusive jurisdiction of the courts of Ghaziabad, Uttar Pradesh, India.",
          ],
        },
        {
          heading: "Contact Us",
          paragraphs: [
            "If you have any questions about these Terms of Use, please contact us at:",
            "Automate Ideas, Nandgram, Ghaziabad, Uttar Pradesh, India.",
            `By phone at +91 96255 98603, or by email at amit23kumar04@gmail.com.`,
          ],
        },
      ]}
      contactNote="By using our website and services, you agree to the terms listed above. If anything is unclear, we\u2019re happy to discuss it before you proceed."
    />
  );
}