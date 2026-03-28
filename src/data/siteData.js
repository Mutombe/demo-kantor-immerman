export const designTokens = {
  heroStyle: "editorial",
  typography: {
    heading: "Sora",
    body: "DM Sans",
    display: "Outfit",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: false,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "smooth",
  serviceCardStyle: "icon-top",
  projectGridStyle: "grid-3",
  testimonialStyle: "cards",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "stats", "services", "projects", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Kantor & Immerman",
    legalName: "Kantor & Immerman Legal Practitioners",
    tagline: "Justice Delivered with Precision",
    description:
      "One of Zimbabwe's most established law firms, providing expert legal counsel in corporate law, litigation, property law, labour law, family law, and commercial contracts since 1962.",
    phone: "",
    phoneRaw: "",
    whatsappNumber: "",
    email: "info@kantorandimmerman.co.zw",
    address: "4th Floor, Old Mutual Centre, Corner Third St & Jason Moyo Ave, Harare",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.9,
    ratingRounded: 5,
    reviewCount: 67,
    established: "1962",
    yearsExperience: "60+",
    projectsCompleted: "5,000+",
    employees: "40+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 4:30 PM" },
      { day: "Saturday", time: "By Appointment" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ1LjEiUyAzMcKwMDMnMDcuOSJF!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "kantor-immerman-cookie-consent",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },

  navbar: {
    logoLine1: "Kantor &",
    logoLine2: "Immerman",
  },

  hero: {
    badge: "Established 1962 — Harare's Premier Law Firm",
    titleParts: [
      { text: "Justice Delivered " },
      { text: "with Precision.", highlight: true },
    ],
    subtitle:
      "Six decades of legal excellence. From high-stakes litigation to complex corporate transactions, Kantor & Immerman delivers outcomes that stand the test of time.",
    ctaPrimary: "Request a Consultation",
    ctaSecondary: "Our Practice Areas",
    trustBadge: "Law Society of Zimbabwe",
    backgroundImage:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920",
    backgroundAlt:
      "Scales of justice and legal books representing authority and heritage in law",
  },

  stats: [
    { number: "60+", label: "Years Established" },
    { number: "5,000+", label: "Cases Won" },
    { number: "40+", label: "Legal Professionals" },
    { number: "4.9", label: "Client Rating" },
  ],

  servicesPreview: [
    {
      iconName: "Buildings",
      title: "Corporate Law",
      desc: "Company formation, governance, regulatory compliance, and corporate restructuring for businesses of every scale.",
    },
    {
      iconName: "ShieldCheck",
      title: "Litigation",
      desc: "Aggressive courtroom representation in civil and commercial disputes. We fight to win, and our record proves it.",
    },
    {
      iconName: "Handshake",
      title: "Property Law",
      desc: "Real estate transactions, title disputes, conveyancing, and property development legal advisory.",
    },
    {
      iconName: "Briefcase",
      title: "Labour Law",
      desc: "Employment contracts, disciplinary proceedings, retrenchment advisory, and labour dispute resolution.",
    },
    {
      iconName: "Users",
      title: "Family Law",
      desc: "Divorce, custody, maintenance, estate administration, and all matters of family legal concern handled with sensitivity.",
    },
    {
      iconName: "Lock",
      title: "Commercial Contracts",
      desc: "Drafting, review, and negotiation of commercial agreements that protect your interests and minimise risk.",
    },
  ],

  featuredProjects: [
    {
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
      title: "Landmark Corporate Governance Case",
      category: "Corporate Law",
    },
    {
      image: "https://images.unsplash.com/photo-1507679799987-c73b1c5a5f46?w=800",
      title: "Multi-Million Dollar Property Dispute",
      category: "Property Law",
    },
    {
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800",
      title: "Class Action Labour Dispute",
      category: "Labour Law",
    },
  ],

  whyChooseUs: {
    titleParts: [
      { text: "Six Decades of " },
      { text: "Legal", highlight: true },
      { text: " Authority" },
    ],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
    imageAlt: "Kantor & Immerman legal library with heritage legal texts and case files",
    experienceYears: "60+",
    experienceLabel: "Years of Excellence",
    points: [
      {
        title: "Unmatched Courtroom Record",
        desc: "Over 5,000 cases won across six decades. Our litigation team has the experience and aggression to secure favourable outcomes.",
      },
      {
        title: "Multi-Disciplinary Expertise",
        desc: "Six specialised practice areas staffed by senior advocates who are recognised authorities in their fields.",
      },
      {
        title: "Client Confidentiality",
        desc: "Attorney-client privilege is sacrosanct. Your matters are handled with the utmost discretion and professional integrity.",
      },
      {
        title: "Established Reputation",
        desc: "Since 1962, Kantor & Immerman has been trusted by individuals, corporations, and government institutions across Zimbabwe.",
      },
    ],
  },

  homeCta: {
    backgroundImage:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920",
    backgroundAlt: "Legal scales of justice representing authority and fairness",
    titleParts: [
      { text: "Justice Does Not " },
      { text: "Wait.", highlight: true },
    ],
    subtitle:
      "If you are facing a legal challenge, time is critical. Contact Kantor & Immerman today for a confidential consultation with one of our senior legal practitioners.",
    ctaPrimary: "Request a Consultation",
    whatsappText:
      "Hello Kantor & Immerman, I would like to discuss a legal matter.",
  },

  homeTestimonials: [
    {
      name: "Andrew Mushonga",
      role: "CEO, Mushonga Group",
      text: "Kantor & Immerman handled our corporate restructuring with surgical precision. Their understanding of Zimbabwean corporate law is unmatched. We trust no one else with our legal matters.",
      rating: 5,
    },
    {
      name: "Tsitsi Mhandu",
      role: "Property Developer",
      text: "When a multi-million dollar property dispute threatened our development, Kantor & Immerman resolved it in our favour within three months. Their litigation team is extraordinary.",
      rating: 5,
    },
    {
      name: "David Karemba",
      role: "HR Director, National Corp",
      text: "The labour law team guided us through a complex retrenchment process. Every step was legally compliant, compassionately handled, and dispute-free. Exceptional counsel.",
      rating: 5,
    },
  ],

  about: {
    heroTitle: [
      { text: "A Legacy of " },
      { text: "Justice", highlight: true },
      { text: " Since 1962" },
    ],
    heroSubtitle:
      "For over six decades, Kantor & Immerman has been Zimbabwe's most trusted legal institution, delivering justice with precision, integrity, and authority.",
    storyImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
    storyImageAlt: "Kantor & Immerman heritage office with legal library",
    storyProjectCount: "5,000+",
    storyProjectLabel: "Cases Won",
    storyTitle: "From Post-Independence Zimbabwe to the Nation's Most Respected Law Firm",
    storyParagraphs: [
      "Kantor & Immerman was established in 1962, during a pivotal era in Zimbabwe's history. From our earliest days, we committed to providing legal services of the highest calibre — services that would stand up not just in court, but in the annals of legal precedent.",
      "Through independence, economic transformation, and constitutional reform, Kantor & Immerman has been at the centre of Zimbabwe's legal landscape. We have represented individuals, corporations, and institutions in matters that have shaped the nation's jurisprudence.",
      "Today, with over 40 legal professionals across six practice areas, we continue to set the standard for legal excellence in Zimbabwe. Our partners are recognised authorities in corporate law, property law, and litigation, and our legacy of integrity remains our most valuable asset.",
    ],
    mission:
      "To deliver justice with precision, integrity, and unwavering commitment to our clients' interests. We exist to protect rights, resolve disputes, and enable the legal frameworks that allow society to flourish.",
    vision:
      "To remain Zimbabwe's most respected and authoritative legal institution, known for legal excellence, ethical leadership, and the enduring trust of every client we serve.",
    values: [
      { iconName: "ShieldCheck", title: "Integrity", desc: "The law demands honesty. We hold ourselves to the highest ethical standards in every matter we handle." },
      { iconName: "Trophy", title: "Excellence", desc: "Six decades of legal practice have taught us that excellence is not a destination — it is a daily discipline." },
      { iconName: "Lock", title: "Confidentiality", desc: "Attorney-client privilege is absolute. Your matters are protected by both law and our unwavering professional commitment." },
      { iconName: "Handshake", title: "Advocacy", desc: "We fight for our clients with everything we have. In the courtroom and at the negotiating table, your interests come first." },
      { iconName: "Users", title: "Heritage", desc: "Our 60-year legacy is built on relationships. Many of our clients are second and third-generation partnerships." },
      { iconName: "Lightbulb", title: "Innovation", desc: "While we respect legal tradition, we embrace modern legal technology and contemporary approaches to dispute resolution." },
    ],
    team: [
      { name: "Senior Partner Kantor", role: "Managing Partner — Corporate Law", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" },
      { name: "Senior Partner Immerman", role: "Founding Partner — Litigation", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" },
      { name: "Advocate T. Nyamupfukudza", role: "Head of Property Law", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" },
      { name: "Advocate R. Chidziva", role: "Head of Labour Law", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400" },
    ],
    milestones: [
      { year: "1962", title: "Firm Established", desc: "Kantor & Immerman founded in Harare, becoming one of Zimbabwe's earliest independent law firms." },
      { year: "1980", title: "Independence Era", desc: "Played a pivotal role in advising on constitutional and corporate legal frameworks for the new Zimbabwe." },
      { year: "1995", title: "Litigation Milestone", desc: "Won a landmark Supreme Court case that established corporate governance precedent still cited today." },
      { year: "2005", title: "Property Law Division", desc: "Established a dedicated property law practice to serve the growing real estate development sector." },
      { year: "2015", title: "40+ Legal Professionals", desc: "Expanded to over 40 practitioners across six specialised practice areas." },
      { year: "2024", title: "5,000+ Cases Won", desc: "Surpassed 5,000 successful cases with a reputation as Zimbabwe's most trusted legal institution." },
    ],
    ctaTitle: "Your Legal Matter Deserves the Best",
    ctaSubtitle: "Request a confidential consultation with one of our senior legal practitioners.",
    ctaCta: "Request a Consultation",
  },

  services: {
    heroTitle: [
      { text: "Six Practice Areas. " },
      { text: "One", highlight: true },
      { text: " Standard of Excellence." },
    ],
    heroSubtitle:
      "From corporate boardrooms to courtroom battles, Kantor & Immerman delivers authoritative legal counsel across every major practice area.",
    items: [
      {
        iconName: "Buildings",
        title: "Corporate Law",
        slug: "corporate-law",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900",
        desc: "Comprehensive corporate legal services from company formation to complex restructuring. We advise boards, shareholders, and executives on governance, compliance, and strategic transactions.",
        features: [
          "Company registration and incorporation",
          "Corporate governance advisory",
          "Regulatory compliance and licensing",
          "Shareholder agreements and disputes",
          "Corporate restructuring and insolvency",
          "Joint ventures and partnerships",
        ],
      },
      {
        iconName: "ShieldCheck",
        title: "Litigation & Dispute Resolution",
        slug: "litigation",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900",
        desc: "Aggressive, strategic courtroom representation in civil, commercial, and constitutional disputes. Our litigation team has a track record that speaks for itself — over 5,000 cases won.",
        features: [
          "High Court and Supreme Court representation",
          "Commercial litigation",
          "Constitutional and administrative law",
          "Arbitration and mediation",
          "Debt recovery and enforcement",
          "Injunctions and urgent applications",
        ],
      },
      {
        iconName: "Handshake",
        title: "Property Law",
        slug: "property-law",
        image: "https://images.unsplash.com/photo-1507679799987-c73b1c5a5f46?w=900",
        desc: "Expert legal counsel for all property matters. From residential purchases to large-scale commercial developments, we ensure every transaction is legally sound and properly documented.",
        features: [
          "Conveyancing and title transfers",
          "Property development agreements",
          "Title disputes and boundary issues",
          "Lease agreements and tenant disputes",
          "Sectional title and body corporate law",
          "Zoning and land use applications",
        ],
      },
      {
        iconName: "Briefcase",
        title: "Labour Law",
        slug: "labour-law",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900",
        desc: "Comprehensive employment and labour law services for employers and employees. We navigate the complexities of Zimbabwean labour legislation with precision and pragmatism.",
        features: [
          "Employment contract drafting and review",
          "Disciplinary hearing representation",
          "Retrenchment and redundancy advisory",
          "Labour court representation",
          "Collective bargaining agreements",
          "Workplace policy development",
        ],
      },
      {
        iconName: "Users",
        title: "Family Law",
        slug: "family-law",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900",
        desc: "Sensitive, professional handling of all family legal matters. We understand that these are deeply personal issues and approach every case with discretion and compassion.",
        features: [
          "Divorce and separation proceedings",
          "Child custody and access",
          "Maintenance and spousal support",
          "Adoption and guardianship",
          "Estate administration and wills",
          "Protection orders",
        ],
      },
      {
        iconName: "Lock",
        title: "Commercial Contracts",
        slug: "commercial-contracts",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900",
        desc: "Meticulous drafting, review, and negotiation of commercial agreements. We protect your interests and anticipate potential disputes before they arise.",
        features: [
          "Contract drafting and review",
          "Supply and service agreements",
          "Distribution and franchise agreements",
          "Non-disclosure and non-compete clauses",
          "Terms and conditions of business",
          "Contract dispute resolution",
        ],
      },
    ],
    ctaTitle: "Need Legal Counsel?",
    ctaSubtitle: "Every legal matter is unique. Contact us for a confidential assessment of your situation.",
  },

  projects: {
    heroTitle: [
      { text: "Landmark " },
      { text: "Cases", highlight: true },
      { text: " & Outcomes" },
    ],
    heroSubtitle:
      "A selection of notable matters that demonstrate our expertise, authority, and commitment to achieving the best outcomes for our clients.",
    categories: ["All", "Corporate Law", "Litigation", "Property Law", "Labour Law", "Family Law"],
    items: [
      {
        id: 1,
        title: "Supreme Court Corporate Governance Precedent",
        category: "Corporate Law",
        location: "Harare",
        year: "2024",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
        desc: "Successfully argued a landmark Supreme Court case that established new corporate governance principles for listed companies in Zimbabwe. The ruling is now cited as precedent.",
        services: ["Corporate Law", "Litigation"],
      },
      {
        id: 2,
        title: "Multi-Million Dollar Property Dispute Resolution",
        category: "Property Law",
        location: "Harare / Bulawayo",
        year: "2024",
        image: "https://images.unsplash.com/photo-1507679799987-c73b1c5a5f46?w=800",
        desc: "Resolved a complex multi-party property dispute involving conflicting title claims on a $5M commercial development site. Achieved full resolution through strategic negotiation.",
        services: ["Property Law", "Litigation"],
      },
      {
        id: 3,
        title: "Class Action Labour Dispute — Manufacturing Sector",
        category: "Labour Law",
        location: "Nationwide",
        year: "2023",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800",
        desc: "Represented 250 employees in a class action labour dispute against a major manufacturer. Secured full severance entitlements and established a worker welfare fund.",
        services: ["Labour Law", "Litigation"],
      },
      {
        id: 4,
        title: "Corporate Merger — Financial Services",
        category: "Corporate Law",
        location: "Harare",
        year: "2023",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
        desc: "Advised on the legal framework for a $20M merger of two financial services companies, including regulatory approval, shareholder agreements, and competition commission filings.",
        services: ["Corporate Law", "Commercial Contracts"],
      },
      {
        id: 5,
        title: "High-Profile Family Estate Dispute",
        category: "Family Law",
        location: "Harare",
        year: "2024",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
        desc: "Successfully mediated a complex estate dispute involving a prominent Zimbabwean family, preserving family relationships while ensuring equitable asset distribution.",
        services: ["Family Law", "Property Law"],
      },
      {
        id: 6,
        title: "Commercial Lease Portfolio — Retail Chain",
        category: "Property Law",
        location: "Nationwide",
        year: "2025",
        image: "https://images.unsplash.com/photo-1507679799987-c73b1c5a5f46?w=800",
        desc: "Drafted and negotiated a portfolio of 15 commercial lease agreements for a national retail chain, standardising terms and reducing legal exposure across all locations.",
        services: ["Property Law", "Commercial Contracts"],
      },
    ],
    ctaTitle: "Your Case Deserves the Best",
    ctaSubtitle: "Request a consultation and let us assess how Kantor & Immerman can serve your legal interests.",
  },

  contact: {
    heroTitle: [
      { text: "Schedule a " },
      { text: "Consultation", highlight: true },
    ],
    heroSubtitle:
      "Every legal matter begins with a conversation. Contact us to arrange a confidential meeting with one of our senior legal practitioners.",
    formTitle: "Contact Our Office",
    formSubtitle: "Provide your details and a brief description of your legal matter. We respond within 24 hours.",
  },

  footer: {
    tagline: "Justice Delivered with Precision",
    description:
      "Kantor & Immerman Legal Practitioners is one of Zimbabwe's most established law firms, providing expert legal counsel in corporate law, litigation, property law, labour law, family law, and commercial contracts since 1962.",
    servicesTitle: "Practice Areas",
    companyTitle: "The Firm",
    contactTitle: "Contact",
    copyright: "Kantor & Immerman Legal Practitioners",
  },
};

export default siteData;
