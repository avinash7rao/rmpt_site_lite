export interface ContentBlock {
  type: "paragraph" | "list";
  content: string | string[];
}

export interface LegalSection {
  id: number;
  title: string;
  blocks: ContentBlock[];
}

export const privacyPolicy: LegalSection[] = [
  {
    id: 1,
    title: "Introduction",
    blocks: [
      {
        type: "paragraph",
        content:
          'Welcome to Renshu Media Production and Technology LLC, also known as RMPT LLC ("Company," "we," "our," or "us"). We are a United States-based entertainment and technology company focused on delivering innovative digital content, experiences, and platforms. Your privacy is important to us, and this Privacy Policy explains how we collect, use, share, and protect your personal information when you use our websites, mobile applications, digital platforms, streaming services, games, or any other related services (collectively, the "Services").',
      },
      {
        type: "paragraph",
        content:
          "By accessing or using our Services, you consent to the practices described in this Privacy Policy.",
      },
    ],
  },
  {
    id: 2,
    title: "Information We Collect",
    blocks: [
      {
        type: "paragraph",
        content:
          "Depending on how you interact with our Services, we collect different types of information.",
      },
      {
        type: "paragraph",
        content: "2.1 Personal Information",
      },
      {
        type: "list",
        content: [
          "Full Name",
          "Email Address",
          "Username or Account ID",
          "Date of Birth or Age Range",
          "Phone Number",
          "Postal Address (if applicable)",
          "Payment or billing information (for purchases or subscriptions)",
          "Social media handles (if you interact with us via third-party platforms)",
        ],
      },
      {
        type: "paragraph",
        content: "2.2 Technical and Usage Information",
      },
      {
        type: "list",
        content: [
          "Device type, operating system, browser type",
          "IP address and approximate geolocation",
          "Pages visited, clicks, session duration",
          "App usage data and crash logs",
          "Content interaction history (watched videos, played games, liked content)",
        ],
      },
      {
        type: "paragraph",
        content: "2.3 User-Generated Content",
      },
      {
        type: "list",
        content: [
          "Comments, reviews, forum posts, or messages",
          "Uploaded media (photos, videos, avatars)",
          "In-game chat or communication (subject to moderation)",
        ],
      },
      {
        type: "paragraph",
        content: "2.4 Entertainment Preferences & Analytics",
      },
      {
        type: "list",
        content: [
          "Favorite genres, titles, artists, or creators",
          "Watch/play history",
          "Search queries and browsing behavior",
          "Engagement metrics (completion rates, ratings)",
        ],
      },
      {
        type: "paragraph",
        content: "2.5 Biometric or Sensitive Data",
      },
      {
        type: "paragraph",
        content:
          "We do not collect biometric or sensitive personal data unless explicitly stated and with your consent (for example, voice data for smart assistants or facial data for AR filters).",
      },
    ],
  },
  {
    id: 3,
    title: "How We Use Your Information",
    blocks: [
      {
        type: "list",
        content: [
          "Provide and personalize our Services (recommendations, watchlists, profiles, preferences)",
          "Manage user accounts and customer support",
          "Process transactions and subscriptions",
          "Deliver newsletters, marketing, and promotions (with consent)",
          "Ensure safety, security, and fraud prevention",
          "Improve applications, performance, and user experience",
          "Conduct analytics and audience research",
          "Comply with legal obligations",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Legal Bases for Processing",
    blocks: [
      {
        type: "paragraph",
        content:
          "While U.S. law does not require a legal basis for processing data, we recognize global privacy standards.",
      },
      {
        type: "list",
        content: [
          "Consent",
          "Contractual necessity",
          "Legitimate interests",
          "Legal obligations",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "How We Share Your Information",
    blocks: [
      {
        type: "paragraph",
        content:
          "We do not sell your personal information. We may share information in the following situations.",
      },
      {
        type: "paragraph",
        content: "5.1 Service Providers and Partners",
      },
      {
        type: "list",
        content: [
          "Cloud storage and infrastructure",
          "Streaming and content delivery networks",
          "Payment processors",
          "Marketing and analytics providers",
          "Customer support providers",
          "App stores and distribution partners (Apple, Google, etc.)",
        ],
      },
      {
        type: "paragraph",
        content:
          "All partners are contractually required to safeguard your data.",
      },
      {
        type: "paragraph",
        content: "5.2 Other Users",
      },
      {
        type: "paragraph",
        content:
          "Information you voluntarily share through profiles, communities, multiplayer games, or public posts may be visible to others.",
      },
      {
        type: "paragraph",
        content: "5.3 Legal and Security",
      },
      {
        type: "list",
        content: [
          "Comply with legal requests",
          "Protect our rights and property",
          "Investigate fraud or abuse",
        ],
      },
      {
        type: "paragraph",
        content: "5.4 Business Transfers",
      },
      {
        type: "paragraph",
        content:
          "Your information may be transferred as part of a merger, acquisition, or sale of business assets.",
      },
    ],
  },
  {
    id: 6,
    title: "Your Privacy Rights",
    blocks: [
      {
        type: "paragraph",
        content:
          "Depending on your state of residence, you may have the following rights.",
      },
      {
        type: "paragraph",
        content: "California (CCPA/CPRA)",
      },
      {
        type: "list",
        content: [
          "Know what personal information we collect",
          "Access your personal information",
          "Request deletion",
          "Correct inaccurate information",
          "Opt out of the sale or sharing of personal information",
          "Limit use of sensitive personal information",
          "Non-discrimination for exercising your rights",
        ],
      },
      {
        type: "paragraph",
        content: "Other States",
      },
      {
        type: "list",
        content: [
          "Access",
          "Correction",
          "Deletion",
          "Data portability",
          "Opt out of targeted advertising or profiling",
        ],
      },
      {
        type: "paragraph",
        content:
          "To exercise your rights, contact support@rmpt.org. We will verify your identity before processing requests.",
      },
    ],
  },
  {
    id: 7,
    title: "Data Security",
    blocks: [
      {
        type: "list",
        content: [
          "AES-256 encryption for stored data",
          "TLS 1.3 encryption for data in transit",
          "Multi-Factor Authentication (MFA)",
          "Firewalls and intrusion detection",
          "Role-based access controls",
        ],
      },
      {
        type: "paragraph",
        content:
          "While no system is completely secure, we strive to maintain industry best practices.",
      },
    ],
  },
  {
    id: 8,
    title: "Cookies and Tracking Technologies",
    blocks: [
      {
        type: "paragraph",
        content:
          "We use cookies, SDKs, web beacons, and similar technologies.",
      },
      {
        type: "list",
        content: [
          "Essential cookies",
          "Performance cookies",
          "Functionality cookies",
          "Advertising cookies",
        ],
      },
      {
        type: "paragraph",
        content:
          "You can manage cookies through your browser settings.",
      },
    ],
  },
  {
    id: 9,
    title: "Do Not Track (DNT) and Global Privacy Control (GPC)",
    blocks: [
      {
        type: "paragraph",
        content:
          "Our systems do not currently respond to Do Not Track (DNT) signals. We do honor recognized Global Privacy Control (GPC) signals where required by applicable law.",
      },
    ],
  },
  {
    id: 10,
    title: "Retention of Information",
    blocks: [
      {
        type: "paragraph",
        content:
          "We retain personal information only as long as necessary to provide our Services, meet legal obligations, resolve disputes, enforce agreements, and satisfy regulatory requirements.",
      },
    ],
  },
  {
    id: 11,
    title: "Children's Privacy",
    blocks: [
      {
        type: "paragraph",
        content:
          "Our Services are not intended for children under 13 (or 16 where applicable). If we discover personal information collected without appropriate parental consent, we will promptly delete it.",
      },
    ],
  },
  {
    id: 12,
    title: "Third-Party Services and Links",
    blocks: [
      {
        type: "paragraph",
        content:
          "Our Services may link to third-party websites, social media platforms, or app stores. We are not responsible for their privacy practices. Please review their policies before sharing information.",
      },
    ],
  },
  {
    id: 13,
    title: "Changes to This Privacy Policy",
    blocks: [
      {
        type: "paragraph",
        content:
          "We may update this Privacy Policy to reflect changes in technology, law, or our business. We will revise the Last Updated date and notify users where required. Continued use of our Services constitutes acceptance of the updated policy.",
      },
    ],
  },
  {
    id: 14,
    title: "Additional Notice for Nevada Residents",
    blocks: [
      {
        type: "paragraph",
        content:
          "Under Nevada law, you may opt out of the sale of your covered personal information. We do not sell personal information. For additional information, contact support@rmpt.org.",
      },
    ],
  },
];