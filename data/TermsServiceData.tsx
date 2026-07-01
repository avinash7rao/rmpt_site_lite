export interface ContentBlock {
  type: "paragraph" | "list";
  content: string | string[];
}

export interface LegalSection {
  id: number;
  title: string;
  blocks: ContentBlock[];
}

export const termsData: LegalSection[] = [
  {
    id: 1,
    title: "Eligibility",
    blocks: [
      {
        type: "paragraph",
        content:
          "You must be at least 18 years old (or the minimum legal age in your jurisdiction) to use our Services. If you are under 18, you must have the consent of a parent or legal guardian.",
      },
      {
        type: "paragraph",
        content: "By using the Services, you represent that:",
      },
      {
        type: "list",
        content: [
          "You are legally capable of entering into a binding contract.",
          "All information you provide is accurate and complete.",
          "You will comply with all applicable local, state, and federal laws.",
        ],
      },
    ],
  },

  {
    id: 2,
    title: "Account Registration",
    blocks: [
      {
        type: "paragraph",
        content:
          "Some features of the Services may require you to create an account.",
      },
      {
        type: "paragraph",
        content: "You agree to:",
      },
      {
        type: "list",
        content: [
          "Provide accurate and complete registration information.",
          "Keep your login credentials confidential.",
          "Notify us immediately of any unauthorized access or use of your account.",
          "Accept responsibility for all activity under your account.",
          "We reserve the right to suspend or terminate your account if any information is inaccurate or if you violate these Terms.",
        ],
      },
    ],
  },

  {
    id: 3,
    title: "Permitted Use of Services",
    blocks: [
      {
        type: "paragraph",
        content:
          "You may use our Services only for lawful purposes and in accordance with these Terms. You agree not to:",
      },
      {
        type: "list",
        content: [
          "Use the Services for any illegal or unauthorized purpose.",
          "Modify, adapt, or hack the Services or gain unauthorized access to other systems.",
          "Reproduce, distribute, or publicly display content unless explicitly permitted.",
          "Engage in data mining, scraping, or automated access of our platform.",
          "Upload or transmit malicious code, viruses, or harmful content.",
          "Harass, abuse, or harm other users.",
          "Circumvent any access controls or digital rights management tools.",
          "We reserve the right to take appropriate legal action against any violation of this section.",
        ],
      },
    ],
  },

  {
    id: 4,
    title: "Intellectual Property",
    blocks: [
      {
        type: "paragraph",
        content:
          "All content, technology, and intellectual property on our platform, including text, software, graphics, video, audio, logos, trademarks, and UI designs are owned or licensed by RMPT LLC and are protected under copyright and trademark laws.",
      },
      {
        type: "paragraph",
        content:
          "You are granted a limited, non-exclusive, non-transferable, revocable license to use the Services for personal, non-commercial use unless otherwise agreed in writing.",
      },
      {
        type: "paragraph",
        content: "You may not:",
      },
      {
        type: "list",
        content: [
          "Copy, modify, distribute, sell, or lease any part of our Services.",
          "Use our trademarks or branding without permission.",
          "Create derivative works from the Services.",
        ],
      },
    ],
  },

  {
    id: 5,
    title: "User Content",
    blocks: [
      {
        type: "paragraph",
        content:
          "You may submit content such as comments, reviews, avatars, videos, or messages through our Services.",
      },
      {
        type: "paragraph",
        content: "By submitting content, you:",
      },
      {
        type: "list",
        content: [
          "Grant us a worldwide, royalty-free, non-exclusive license to use and distribute your content in connection with the Services.",
          "Confirm you have the legal right to share the content.",
          "Agree not to post unlawful, offensive, defamatory, or obscene content.",
          "We may remove or moderate content at our discretion.",
        ],
      },
    ],
  },

  {
    id: 6,
    title: "Subscriptions and Payments",
    blocks: [
      {
        type: "paragraph",
        content:
          "Some Services may be offered on a subscription or paid basis.",
      },
      {
        type: "paragraph",
        content: "You agree that:",
      },
      {
        type: "list",
        content: [
          "Fees are billed in advance on a recurring basis.",
          "All purchases are final unless required by law.",
          "You must provide accurate payment information.",
          "We may suspend access for non-payment.",
          "Pricing may change with notice.",
        ],
      },
    ],
  },

  {
    id: 7,
    title: "Third-Party Services",
    blocks: [
      {
        type: "paragraph",
        content:
          "Our Services may integrate or link to third-party services. Your use of those services is governed by their own terms.",
      },
      {
        type: "paragraph",
        content:
          "We are not responsible for third-party content, policies, or performance.",
      },
    ],
  },

  {
    id: 8,
    title: "Termination and Suspension",
    blocks: [
      {
        type: "paragraph",
        content:
          "We may suspend or terminate your access to the Services at any time if:",
      },
      {
        type: "list",
        content: [
          "You violate these Terms.",
          "You harm the platform or other users.",
          "We are required to do so by law.",
          "Upon termination, your rights to use the Services will end immediately.",
        ],
      },
    ],
  },

  {
    id: 9,
    title: "Disclaimers",
    blocks: [
      {
        type: "paragraph",
        content:
          'THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND.',
      },
      {
        type: "paragraph",
        content:
          "We disclaim all warranties including merchantability, fitness for a particular purpose, and non-infringement.",
      },
      {
        type: "list",
        content: [
          "No guarantee of uninterrupted or error-free service.",
          "No guarantee of accuracy or reliability.",
          "Use is at your own risk.",
        ],
      },
    ],
  },

  {
    id: 10,
    title: "Limitation of Liability",
    blocks: [
      {
        type: "paragraph",
        content:
          "To the fullest extent permitted by law, RMPT LLC is not liable for:",
      },
      {
        type: "list",
        content: [
          "Indirect or consequential damages.",
          "Loss of profits or data.",
          "Unauthorized access or alteration of data.",
          "Total liability is limited to amounts paid in the last 12 months.",
        ],
      },
    ],
  },

  {
    id: 11,
    title: "Indemnification",
    blocks: [
      {
        type: "paragraph",
        content:
          "You agree to indemnify and hold harmless RMPT LLC from any claims arising from:",
      },
      {
        type: "list",
        content: [
          "Your use of the Services.",
          "Your violation of these Terms.",
          "Your violation of third-party rights.",
        ],
      },
    ],
  },

  {
    id: 12,
    title: "Governing Law and Dispute Resolution",
    blocks: [
      {
        type: "paragraph",
        content:
          "These Terms are governed by the laws of the State of Maryland.",
      },
      {
        type: "paragraph",
        content: "Any disputes will be resolved through binding arbitration.",
      },
      {
        type: "paragraph",
        content:
          "You waive the right to jury trials or class actions, except where prohibited by law.",
      },
    ],
  },

  {
    id: 13,
    title: "Updates to Terms",
    blocks: [
      {
        type: "paragraph",
        content:
          "We may update these Terms from time to time. Continued use of the Services means you accept the updated Terms.",
      },
    ],
  },

  {
    id: 14,
    title: "Miscellaneous",
    blocks: [
      {
        type: "list",
        content: [
          "Entire Agreement: These Terms represent the full agreement.",
          "No Waiver: Failure to enforce does not waive rights.",
          "Severability: Invalid parts do not affect the rest.",
          "Assignment: You may not transfer rights without consent.",
        ],
      },
    ],
  },
];
