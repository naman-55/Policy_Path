// ============================================
// GovScheme AI — Government Schemes Database
// ============================================
const SCHEMES_DB = [
  {
    id: 1,
    name: "PM Kisan Samman Nidhi",
    icon: "🌾",
    color: "green",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    category: "agriculture",
    description:
      "Direct income support of ₹6,000 per year to farmer families in three equal installments.",
    benefits: [
      "₹6,000 per year direct transfer",
      "Three installments of ₹2,000 each",
      "No intermediary involvement",
    ],
    eligibility: {
      occupation: ["farmer"],
      income: ["below-1l", "1l-2.5l", "2.5l-5l"],
      minAge: 18,
      maxAge: 120,
      gender: "all",
    },
    howToApply:
      "Visit pmkisan.gov.in or approach the nearest Common Service Centre (CSC) with Aadhaar, land records, and bank details.",
    link: "https://pmkisan.gov.in",
    rating: 4.7,
    beneficiaries: "11 Cr+",
    potentialBenefit: 6000,
  },
  {
    id: 2,
    name: "PM Awas Yojana (Urban)",
    icon: "🏠",
    color: "blue",
    ministry: "Ministry of Housing and Urban Affairs",
    category: "housing",
    description:
      "Affordable housing for urban poor with interest subsidy on home loans up to ₹2.67 lakh.",
    benefits: [
      "Interest subsidy up to ₹2.67 lakh",
      "Affordable housing in urban areas",
      "Credit-linked subsidy scheme",
    ],
    eligibility: {
      occupation: [
        "salaried",
        "self-employed",
        "daily-wage",
        "unemployed",
        "homemaker",
      ],
      income: ["below-1l", "1l-2.5l", "2.5l-5l", "5l-10l"],
      minAge: 21,
      maxAge: 70,
      gender: "all",
      residence: ["urban", "semi-urban"],
    },
    howToApply:
      "Apply online at pmaymis.gov.in or through your bank/housing finance company.",
    link: "https://pmaymis.gov.in",
    rating: 4.5,
    beneficiaries: "1.2 Cr+",
    potentialBenefit: 267000,
  },
  {
    id: 3,
    name: "Ayushman Bharat (PM-JAY)",
    icon: "🏥",
    color: "green",
    ministry: "Ministry of Health and Family Welfare",
    category: "healthcare",
    description:
      "World's largest health insurance scheme providing ₹5 lakh health cover per family per year.",
    benefits: [
      "₹5 lakh annual health cover",
      "Cashless treatment at empanelled hospitals",
      "Covers 1,393 treatment procedures",
    ],
    eligibility: {
      occupation: [
        "farmer",
        "daily-wage",
        "unemployed",
        "homemaker",
        "self-employed",
      ],
      income: ["below-1l", "1l-2.5l"],
      minAge: 0,
      maxAge: 120,
      gender: "all",
    },
    howToApply:
      "Check eligibility at mera.pmjay.gov.in using your Aadhaar or ration card number.",
    link: "https://pmjay.gov.in",
    rating: 4.8,
    beneficiaries: "50 Cr+",
    potentialBenefit: 500000,
  },
  {
    id: 4,
    name: "PM Mudra Yojana",
    icon: "💼",
    color: "amber",
    ministry: "Ministry of Finance",
    category: "business-startup",
    description:
      "Collateral-free loans up to ₹10 lakh for micro and small enterprises under Shishu, Kishore and Tarun categories.",
    benefits: [
      "Loans up to ₹10 lakh without collateral",
      "Three categories: Shishu/Kishore/Tarun",
      "Low interest rates",
    ],
    eligibility: {
      occupation: ["self-employed", "business", "farmer"],
      income: ["below-1l", "1l-2.5l", "2.5l-5l", "5l-10l"],
      minAge: 18,
      maxAge: 65,
      gender: "all",
    },
    howToApply:
      "Apply at any bank, NBFC, or MFI with a business plan and KYC documents.",
    link: "https://mudra.org.in",
    rating: 4.4,
    beneficiaries: "37 Cr+",
    potentialBenefit: 1000000,
  },
  {
    id: 5,
    name: "Beti Bachao Beti Padhao",
    icon: "👩",
    color: "pink",
    ministry: "Ministry of Women and Child Development",
    category: "women-empowerment",
    description:
      "Initiative to address gender imbalance and empower the girl child through education and protection.",
    benefits: [
      "Education support for girls",
      "Awareness campaigns",
      "Community mobilization",
    ],
    eligibility: {
      occupation: ["student", "unemployed", "homemaker"],
      income: ["below-1l", "1l-2.5l", "2.5l-5l", "5l-10l", "above-10l"],
      minAge: 0,
      maxAge: 25,
      gender: "female",
    },
    howToApply:
      "Contact nearest Anganwadi centre or district administration office.",
    link: "https://wcd.nic.in",
    rating: 4.3,
    beneficiaries: "5 Cr+",
    potentialBenefit: 50000,
  },
  {
    id: 6,
    name: "PM Scholarship Scheme",
    icon: "🎓",
    color: "purple",
    ministry: "Ministry of Defence / Home Affairs",
    category: "education-scholarship",
    description:
      "Scholarships for dependent children and widows of ex-servicemen and ex-Coast Guard personnel.",
    benefits: [
      "₹30,000/year for boys",
      "₹36,000/year for girls",
      "Professional & technical courses covered",
    ],
    eligibility: {
      occupation: ["student"],
      income: ["below-1l", "1l-2.5l", "2.5l-5l", "5l-10l"],
      minAge: 16,
      maxAge: 30,
      gender: "all",
    },
    howToApply:
      "Apply at desw.gov.in during the scholarship window with educational documents.",
    link: "https://desw.gov.in",
    rating: 4.6,
    beneficiaries: "80,000+",
    potentialBenefit: 36000,
  },
  {
    id: 7,
    name: "Atal Pension Yojana",
    icon: "🛡️",
    color: "blue",
    ministry: "Ministry of Finance (PFRDA)",
    category: "pension-insurance",
    description:
      "Guaranteed pension scheme for unorganized sector with monthly pension from ₹1,000 to ₹5,000 after age 60.",
    benefits: [
      "Guaranteed pension ₹1,000-₹5,000/month",
      "Government co-contribution",
      "Nominee benefits",
    ],
    eligibility: {
      occupation: [
        "farmer",
        "daily-wage",
        "self-employed",
        "homemaker",
        "salaried",
      ],
      income: ["below-1l", "1l-2.5l", "2.5l-5l"],
      minAge: 18,
      maxAge: 40,
      gender: "all",
    },
    howToApply:
      "Open APY account at any bank branch with savings account, Aadhaar, and mobile number.",
    link: "https://npscra.nsdl.co.in/scheme-details.php",
    rating: 4.5,
    beneficiaries: "5.2 Cr+",
    potentialBenefit: 60000,
  },
  {
    id: 8,
    name: "Skill India Mission (PMKVY)",
    icon: "🛠️",
    color: "amber",
    ministry: "Ministry of Skill Development",
    category: "skill-development",
    description:
      "Free skill training and certification for youth to improve employability across 40+ sectors.",
    benefits: [
      "Free skill training",
      "Industry-recognized certification",
      "Placement assistance",
    ],
    eligibility: {
      occupation: ["student", "unemployed", "daily-wage"],
      income: ["below-1l", "1l-2.5l", "2.5l-5l", "5l-10l", "above-10l"],
      minAge: 15,
      maxAge: 45,
      gender: "all",
    },
    howToApply:
      "Register at pmkvyofficial.org or visit the nearest PMKVY training centre.",
    link: "https://pmkvyofficial.org",
    rating: 4.2,
    beneficiaries: "1.4 Cr+",
    potentialBenefit: 25000,
  },
  {
    id: 9,
    name: "Sukanya Samriddhi Yojana",
    icon: "👧",
    color: "pink",
    ministry: "Ministry of Finance",
    category: "women-empowerment",
    description:
      "Small savings scheme for girl child with attractive interest rate of 8.2% and tax benefits under 80C.",
    benefits: [
      "8.2% interest rate",
      "Tax-free maturity amount",
      "Section 80C tax benefit",
    ],
    eligibility: {
      occupation: [
        "student",
        "salaried",
        "self-employed",
        "farmer",
        "homemaker",
        "business",
      ],
      income: ["below-1l", "1l-2.5l", "2.5l-5l", "5l-10l", "above-10l"],
      minAge: 0,
      maxAge: 10,
      gender: "female",
    },
    howToApply:
      "Open account at any post office or authorized bank with girl child's birth certificate.",
    link: "https://www.india.gov.in/sukanya-samriddhi-yojna",
    rating: 4.9,
    beneficiaries: "3 Cr+",
    potentialBenefit: 150000,
  },
  {
    id: 10,
    name: "PM Ujjwala Yojana",
    icon: "🔥",
    color: "amber",
    ministry: "Ministry of Petroleum and Natural Gas",
    category: "women-empowerment",
    description:
      "Free LPG connections to women from BPL families to reduce indoor air pollution.",
    benefits: [
      "Free LPG connection",
      "₹1,600 subsidy for first refill",
      "Clean cooking fuel",
    ],
    eligibility: {
      occupation: ["homemaker", "farmer", "daily-wage", "unemployed"],
      income: ["below-1l", "1l-2.5l"],
      minAge: 18,
      maxAge: 120,
      gender: "female",
    },
    howToApply:
      "Apply at the nearest LPG distributor with BPL certificate, Aadhaar, and bank passbook.",
    link: "https://www.pmujjwalayojana.com",
    rating: 4.4,
    beneficiaries: "9.6 Cr+",
    potentialBenefit: 1600,
  },
  {
    id: 11,
    name: "National Apprenticeship Promotion",
    icon: "🎓",
    color: "purple",
    ministry: "Ministry of Skill Development",
    category: "skill-development",
    description:
      "Stipend-based apprenticeship training in industries for skill development and employment.",
    benefits: [
      "Monthly stipend during training",
      "Hands-on industry experience",
      "National certification",
    ],
    eligibility: {
      occupation: ["student", "unemployed"],
      income: ["below-1l", "1l-2.5l", "2.5l-5l", "5l-10l", "above-10l"],
      minAge: 14,
      maxAge: 35,
      gender: "all",
    },
    howToApply:
      "Register at apprenticeshipindia.gov.in and search for apprenticeship opportunities.",
    link: "https://apprenticeshipindia.gov.in",
    rating: 4.1,
    beneficiaries: "30 Lakh+",
    potentialBenefit: 90000,
  },
  {
    id: 12,
    name: "PM Fasal Bima Yojana",
    icon: "🌾",
    color: "green",
    ministry: "Ministry of Agriculture",
    category: "agriculture",
    description:
      "Crop insurance at nominal premium of 2% for Kharif and 1.5% for Rabi crops.",
    benefits: [
      "Low premium crop insurance",
      "Full sum insured coverage",
      "Quick claim settlement",
    ],
    eligibility: {
      occupation: ["farmer"],
      income: ["below-1l", "1l-2.5l", "2.5l-5l", "5l-10l"],
      minAge: 18,
      maxAge: 75,
      gender: "all",
    },
    howToApply:
      "Apply through bank, CSC, or pmfby.gov.in with crop sowing details and land records.",
    link: "https://pmfby.gov.in",
    rating: 4.3,
    beneficiaries: "5 Cr+",
    potentialBenefit: 200000,
  },
  {
    id: 13,
    name: "Stand-Up India",
    icon: "💼",
    color: "purple",
    ministry: "Ministry of Finance",
    category: "business-startup",
    description:
      "Loans between ₹10 lakh to ₹1 crore for SC/ST and women entrepreneurs.",
    benefits: [
      "Loans ₹10L - ₹1Cr",
      "For greenfield enterprises",
      "7-year repayment tenure",
    ],
    eligibility: {
      occupation: ["self-employed", "business", "unemployed"],
      income: ["below-1l", "1l-2.5l", "2.5l-5l", "5l-10l"],
      minAge: 18,
      maxAge: 65,
      gender: "all",
      category: ["sc", "st", "general"],
      genderPriority: "female",
    },
    howToApply:
      "Apply at standupmitra.in or any scheduled commercial bank branch.",
    link: "https://standupmitra.in",
    rating: 4.3,
    beneficiaries: "1.8 Lakh+",
    potentialBenefit: 5000000,
  },
  {
    id: 14,
    name: "National Social Assistance Programme",
    icon: "🛡️",
    color: "green",
    ministry: "Ministry of Rural Development",
    category: "pension-insurance",
    description:
      "Pension and assistance for elderly, widows, and persons with disabilities from BPL families.",
    benefits: [
      "Monthly pension ₹200-₹500",
      "Maternity benefit",
      "Family benefit on death",
    ],
    eligibility: {
      occupation: [
        "retired",
        "homemaker",
        "unemployed",
        "daily-wage",
        "farmer",
      ],
      income: ["below-1l", "1l-2.5l"],
      minAge: 60,
      maxAge: 120,
      gender: "all",
    },
    howToApply:
      "Apply through Gram Panchayat or urban local body with BPL certificate and age proof.",
    link: "https://nsap.nic.in",
    rating: 4.0,
    beneficiaries: "3 Cr+",
    potentialBenefit: 6000,
  },
  {
    id: 15,
    name: "Digital India Internship Scheme",
    icon: "💻",
    color: "blue",
    ministry: "Ministry of Electronics and IT",
    category: "skill-development",
    description:
      "Internship opportunities with MeitY for students pursuing engineering and technology courses.",
    benefits: [
      "₹10,000/month stipend",
      "Certificate from MeitY",
      "Industry exposure",
    ],
    eligibility: {
      occupation: ["student"],
      income: ["below-1l", "1l-2.5l", "2.5l-5l", "5l-10l", "above-10l"],
      minAge: 18,
      maxAge: 28,
      gender: "all",
      education: ["graduate", "post-graduate", "professional"],
    },
    howToApply:
      "Apply during internship windows on meity.gov.in with academic credentials.",
    link: "https://meity.gov.in",
    rating: 4.4,
    beneficiaries: "10,000+",
    potentialBenefit: 120000,
  },
  {
    id: 16,
    name: "PM Vishwakarma Yojana",
    icon: "🛠️",
    color: "amber",
    ministry: "Ministry of MSME",
    category: "skill-development",
    description:
      "Support for traditional artisans and craftspeople with training, toolkit, and credit access.",
    benefits: [
      "Free skill training",
      "₹15,000 toolkit grant",
      "Collateral-free loans up to ₹3 lakh",
    ],
    eligibility: {
      occupation: ["self-employed", "daily-wage"],
      income: ["below-1l", "1l-2.5l", "2.5l-5l"],
      minAge: 18,
      maxAge: 65,
      gender: "all",
    },
    howToApply:
      "Register at pmvishwakarma.gov.in through CSC with Aadhaar and trade verification.",
    link: "https://pmvishwakarma.gov.in",
    rating: 4.5,
    beneficiaries: "70 Lakh+",
    potentialBenefit: 315000,
  },
  {
    id: 17,
    name: "Post Matric Scholarship (SC/ST)",
    icon: "🎓",
    color: "purple",
    ministry: "Ministry of Social Justice",
    category: "education-scholarship",
    description:
      "Scholarship for SC/ST students pursuing post-matriculation education covering fees and maintenance.",
    benefits: [
      "Full tuition fee reimbursement",
      "Monthly maintenance allowance",
      "Book and stationery grant",
    ],
    eligibility: {
      occupation: ["student"],
      income: ["below-1l", "1l-2.5l", "2.5l-5l"],
      minAge: 15,
      maxAge: 35,
      gender: "all",
      category: ["sc", "st"],
    },
    howToApply:
      "Apply on National Scholarship Portal (scholarships.gov.in) with caste, income, and academic certificates.",
    link: "https://scholarships.gov.in",
    rating: 4.6,
    beneficiaries: "60 Lakh+",
    potentialBenefit: 120000,
  },
  {
    id: 18,
    name: "Mahatma Gandhi NREGA",
    icon: "👷",
    color: "green",
    ministry: "Ministry of Rural Development",
    category: "skill-development",
    description:
      "Guarantees 100 days of wage employment per year to every rural household.",
    benefits: [
      "100 days guaranteed wages",
      "₹250-₹350/day wages",
      "Local employment",
    ],
    eligibility: {
      occupation: ["farmer", "daily-wage", "unemployed", "homemaker"],
      income: ["below-1l", "1l-2.5l"],
      minAge: 18,
      maxAge: 65,
      gender: "all",
      residence: ["rural"],
    },
    howToApply:
      "Apply at Gram Panchayat for a Job Card with photograph and household details.",
    link: "https://nrega.nic.in",
    rating: 4.1,
    beneficiaries: "7.5 Cr+",
    potentialBenefit: 35000,
  },
  {
    id: 19,
    name: "Pradhan Mantri Jeevan Jyoti Bima",
    icon: "🛡️",
    color: "blue",
    ministry: "Ministry of Finance",
    category: "pension-insurance",
    description:
      "Life insurance cover of ₹2 lakh at just ₹436 per year for all savings bank account holders.",
    benefits: [
      "₹2 lakh life insurance cover",
      "Premium only ₹436/year",
      "Auto-debit from bank account",
    ],
    eligibility: {
      occupation: [
        "salaried",
        "self-employed",
        "farmer",
        "daily-wage",
        "business",
        "homemaker",
      ],
      income: ["below-1l", "1l-2.5l", "2.5l-5l", "5l-10l", "above-10l"],
      minAge: 18,
      maxAge: 50,
      gender: "all",
    },
    howToApply:
      "Enroll through any bank branch or net banking with savings account and Aadhaar.",
    link: "https://jansuraksha.gov.in",
    rating: 4.7,
    beneficiaries: "16 Cr+",
    potentialBenefit: 200000,
  },
  {
    id: 20,
    name: "PM SVANidhi (Street Vendors)",
    icon: "🏪",
    color: "amber",
    ministry: "Ministry of Housing and Urban Affairs",
    category: "business-startup",
    description:
      "Micro-credit facility of ₹10,000-₹50,000 for street vendors to restart livelihoods.",
    benefits: [
      "Working capital loan up to ₹50,000",
      "7% interest subsidy",
      "Digital payment incentives",
    ],
    eligibility: {
      occupation: ["self-employed", "daily-wage"],
      income: ["below-1l", "1l-2.5l"],
      minAge: 18,
      maxAge: 65,
      gender: "all",
      residence: ["urban", "semi-urban"],
    },
    howToApply:
      "Apply online at pmsvanidhi.mohua.gov.in with vending certificate and Aadhaar.",
    link: "https://pmsvanidhi.mohua.gov.in",
    rating: 4.2,
    beneficiaries: "50 Lakh+",
    potentialBenefit: 50000,
  },
  // 21
{
  id: 21,
  name: "PM Jan Dhan Yojana",
  icon: "🏦",
  color: "blue",
  ministry: "Ministry of Finance",
  category: "pension-insurance",
  description:
    "Financial inclusion program providing zero-balance bank accounts with insurance coverage.",
  benefits: [
    "Zero balance account",
    "₹2 lakh accident insurance",
    "Overdraft facility",
  ],
  eligibility: {
    occupation: ["all"],
    income: ["below-1l","1l-2.5l","2.5l-5l","5l-10l"],
    minAge: 10,
    maxAge: 120,
    gender: "all",
  },
  howToApply:
    "Open account at any bank or CSP with Aadhaar and mobile number.",
  link: "https://pmjdy.gov.in",
  rating: 4.6,
  beneficiaries: "50 Cr+",
  potentialBenefit: 200000,
},

// 22
{
  id: 22,
  name: "e-Shram Portal Scheme",
  icon: "🧾",
  color: "amber",
  ministry: "Ministry of Labour & Employment",
  category: "pension-insurance",
  description:
    "National database for unorganized workers providing insurance and welfare benefits.",
  benefits: [
    "₹2 lakh accident insurance",
    "UAN card",
    "Access to welfare schemes",
  ],
  eligibility: {
    occupation: ["daily-wage","self-employed","farmer"],
    income: ["below-1l","1l-2.5l"],
    minAge: 16,
    maxAge: 59,
    gender: "all",
  },
  howToApply:
    "Register at eshram.gov.in using Aadhaar linked mobile number.",
  link: "https://eshram.gov.in",
  rating: 4.3,
  beneficiaries: "29 Cr+",
  potentialBenefit: 200000,
},

// 23
{
  id: 23,
  name: "PM Kaushal Vikas Yojana 4.0",
  icon: "🛠️",
  color: "purple",
  ministry: "Ministry of Skill Development",
  category: "skill-development",
  description:
    "Latest phase of Skill India providing industry-based training and certification.",
  benefits: [
    "Free training",
    "Placement support",
    "Govt certification",
  ],
  eligibility: {
    occupation: ["student","unemployed"],
    income: ["all"],
    minAge: 18,
    maxAge: 45,
    gender: "all",
  },
  howToApply:
    "Register at skillindia.gov.in.",
  link: "https://skillindia.gov.in",
  rating: 4.4,
  beneficiaries: "1 Cr+",
  potentialBenefit: 30000,
},

// 24
{
  id: 24,
  name: "National Education Loan Scheme",
  icon: "📚",
  color: "blue",
  ministry: "Ministry of Finance",
  category: "education-scholarship",
  description:
    "Education loans with interest subsidy for higher studies.",
  benefits: [
    "Interest subsidy",
    "Higher education funding",
    "Moratorium period",
  ],
  eligibility: {
    occupation: ["student"],
    income: ["below-1l","1l-2.5l","2.5l-5l"],
    minAge: 16,
    maxAge: 35,
    gender: "all",
  },
  howToApply:
    "Apply via Vidya Lakshmi Portal.",
  link: "https://www.vidyalakshmi.co.in",
  rating: 4.2,
  beneficiaries: "25 Lakh+",
  potentialBenefit: 700000,
},

// 25
{
  id: 25,
  name: "PM Suraksha Bima Yojana",
  icon: "🛡️",
  color: "green",
  ministry: "Ministry of Finance",
  category: "pension-insurance",
  description:
    "Accident insurance scheme offering ₹2 lakh cover at ₹20/year premium.",
  benefits: [
    "₹2 lakh accident cover",
    "Low premium",
    "Auto bank debit",
  ],
  eligibility: {
    occupation: ["all"],
    income: ["all"],
    minAge: 18,
    maxAge: 70,
    gender: "all",
  },
  howToApply:
    "Enroll via bank or jansuraksha.gov.in.",
  link: "https://jansuraksha.gov.in",
  rating: 4.5,
  beneficiaries: "30 Cr+",
  potentialBenefit: 200000,
},
{
  id: 26,
  name: "Startup India Seed Fund Scheme",
  icon: "🚀",
  color: "purple",
  ministry: "Department for Promotion of Industry and Internal Trade (DPIIT)",
  category: "business-startup",
  description:
    "Provides financial assistance to startups for proof of concept, prototype development, product trials, and market entry.",
  benefits: [
    "Up to ₹20 lakh for prototype development",
    "Up to ₹50 lakh for market entry & scaling",
    "Support through incubators",
  ],
  eligibility: {
    occupation: ["self-employed", "business", "unemployed", "student"],
    income: ["below-1l","1l-2.5l","2.5l-5l","5l-10l","above-10l"],
    minAge: 18,
    maxAge: 60,
    gender: "all",
  },
  howToApply:
    "Apply through the Startup India portal via a recognized incubator.",
  link: "https://www.startupindia.gov.in",
  rating: 4.6,
  beneficiaries: "2,000+ startups",
  potentialBenefit: 5000000,
},
{
  id: 27,
  name: "Credit Guarantee Scheme for Startups (CGSS)",
  icon: "🏦",
  color: "blue",
  ministry: "Ministry of Commerce and Industry",
  category: "business-startup",
  description:
    "Provides credit guarantee cover to loans extended to DPIIT-recognized startups.",
  benefits: [
    "Collateral-free loans",
    "Credit guarantee cover up to ₹10 crore",
    "Reduced lending risk for banks",
  ],
  eligibility: {
    occupation: ["self-employed", "business"],
    income: ["2.5l-5l","5l-10l","above-10l"],
    minAge: 18,
    maxAge: 65,
    gender: "all",
  },
  howToApply:
    "Apply through banks/NBFCs under CGSS via Startup India recognition.",
  link: "https://www.startupindia.gov.in",
  rating: 4.4,
  beneficiaries: "10,000+ startups",
  potentialBenefit: 100000000,
},
{
  id: 29,
  name: "SIDBI SMILE Scheme",
  icon: "🏗️",
  color: "green",
  ministry: "SIDBI (Ministry of Finance)",
  category: "business-startup",
  description:
    "Soft loan support to MSMEs under Make in India initiative.",
  benefits: [
    "Soft loan up to ₹25 lakh",
    "Long repayment tenure",
    "Support for MSME expansion",
  ],
  eligibility: {
    occupation: ["business", "self-employed"],
    income: ["2.5l-5l","5l-10l","above-10l"],
    minAge: 21,
    maxAge: 65,
    gender: "all",
  },
  howToApply:
    "Apply through SIDBI branches or official SIDBI portal.",
  link: "https://www.sidbi.in",
  rating: 4.3,
  beneficiaries: "50,000+ MSMEs",
  potentialBenefit: 2500000,
},
{
  id: 30,
  name: "Stand-Up India (Enhanced Entrepreneur Support)",
  icon: "📈",
  color: "pink",
  ministry: "Ministry of Finance",
  category: "business-startup",
  description:
    "Promotes entrepreneurship among women and SC/ST communities with financial assistance and mentoring.",
  benefits: [
    "Loan ₹10 lakh to ₹1 crore",
    "Greenfield enterprise support",
    "Mentorship & handholding",
  ],
  eligibility: {
    occupation: ["business","self-employed","unemployed"],
    income: ["below-1l","1l-2.5l","2.5l-5l","5l-10l","above-10l"],
    minAge: 18,
    maxAge: 65,
    gender: "all",
  },
  howToApply:
    "Apply through standupmitra.in or scheduled commercial bank branches.",
  link: "https://www.standupmitra.in",
  rating: 4.4,
  beneficiaries: "2 Lakh+",
  potentialBenefit: 10000000,
},
{
  id: 31,
  name: "Soil Health Card Scheme",
  icon: "🧪",
  color: "green",
  ministry: "Ministry of Agriculture & Farmers Welfare",
  category: "agriculture",
  description:
    "Provides farmers with soil health reports and crop-wise nutrient recommendations.",
  benefits: [
    "Free soil testing",
    "Fertilizer recommendations",
    "Improves crop productivity",
  ],
  eligibility: {
    occupation: ["farmer"],
    income: ["below-1l","1l-2.5l","2.5l-5l","5l-10l"],
    minAge: 18,
    maxAge: 75,
    gender: "all",
  },
  howToApply:
    "Apply through local agriculture department or soil testing labs.",
  link: "https://soilhealth.dac.gov.in",
  rating: 4.2,
  beneficiaries: "22 Cr+ cards issued",
  potentialBenefit: 10000,
},
{
  id: 32,
  name: "Kisan Credit Card (KCC)",
  icon: "💳",
  color: "green",
  ministry: "Ministry of Agriculture & Farmers Welfare",
  category: "agriculture",
  description:
    "Provides short-term credit to farmers for crop cultivation and allied activities.",
  benefits: [
    "Low-interest crop loans",
    "Flexible repayment",
    "Insurance coverage",
  ],
  eligibility: {
    occupation: ["farmer"],
    income: ["below-1l","1l-2.5l","2.5l-5l","5l-10l"],
    minAge: 18,
    maxAge: 75,
    gender: "all",
  },
  howToApply:
    "Apply at banks or through pmkisan.gov.in KCC portal.",
  link: "https://pmkisan.gov.in",
  rating: 4.6,
  beneficiaries: "7 Cr+",
  potentialBenefit: 300000,
},
{
  id: 33,
  name: "Paramparagat Krishi Vikas Yojana",
  icon: "🌿",
  color: "green",
  ministry: "Ministry of Agriculture",
  category: "agriculture",
  description:
    "Promotes organic farming through cluster-based approach and certification.",
  benefits: [
    "Organic farming subsidy",
    "Certification support",
    "Training programs",
  ],
  eligibility: {
    occupation: ["farmer"],
    income: ["below-1l","1l-2.5l","2.5l-5l"],
    minAge: 18,
    maxAge: 70,
    gender: "all",
  },
  howToApply:
    "Apply through State Agriculture Department.",
  link: "https://pgsindia-ncof.gov.in",
  rating: 4.1,
  beneficiaries: "30 Lakh+ farmers",
  potentialBenefit: 50000,
},
{
  id: 34,
  name: "National Agriculture Market (e-NAM)",
  icon: "🛒",
  color: "green",
  ministry: "Ministry of Agriculture",
  category: "agriculture",
  description:
    "Online trading platform connecting farmers to national agricultural markets.",
  benefits: [
    "Better crop prices",
    "Online bidding",
    "Pan-India market access",
  ],
  eligibility: {
    occupation: ["farmer"],
    income: ["all"],
    minAge: 18,
    maxAge: 75,
    gender: "all",
  },
  howToApply:
    "Register on enam.gov.in via local mandi.",
  link: "https://www.enam.gov.in",
  rating: 4.0,
  beneficiaries: "1.7 Cr+ farmers",
  potentialBenefit: 100000,
},
{
  id: 35,
  name: "Rashtriya Krishi Vikas Yojana",
  icon: "🚜",
  color: "green",
  ministry: "Ministry of Agriculture",
  category: "agriculture",
  description:
    "Supports state-led agriculture development projects and farmer income growth.",
  benefits: [
    "Infrastructure funding",
    "Farm mechanization support",
    "State agriculture projects",
  ],
  eligibility: {
    occupation: ["farmer"],
    income: ["all"],
    minAge: 18,
    maxAge: 75,
    gender: "all",
  },
  howToApply:
    "Apply through State Agriculture Department offices.",
  link: "https://rkvy.nic.in",
  rating: 4.3,
  beneficiaries: "1 Cr+ farmers",
  potentialBenefit: 200000,
},
{
  id: 36,
  name: "PM Awas Yojana (Gramin)",
  icon: "🏡",
  color: "blue",
  ministry: "Ministry of Rural Development",
  category: "housing",
  description:
    "Provides financial assistance to rural poor for construction of pucca houses.",
  benefits: [
    "₹1.2–1.3 lakh housing assistance",
    "Toilet construction support",
    "MGNREGA wage linkage",
  ],
  eligibility: {
    occupation: ["farmer","daily-wage","unemployed","homemaker"],
    income: ["below-1l","1l-2.5l"],
    minAge: 18,
    maxAge: 70,
    gender: "all",
    residence: ["rural"],
  },
  howToApply:
    "Apply via Gram Panchayat or pmayg.nic.in.",
  link: "https://pmayg.nic.in",
  rating: 4.6,
  beneficiaries: "2.9 Cr+",
  potentialBenefit: 130000,
},
{
  id: 37,
  name: "Affordable Rental Housing Complexes",
  icon: "🏢",
  color: "blue",
  ministry: "Ministry of Housing & Urban Affairs",
  category: "housing",
  description:
    "Rental housing scheme for urban migrants and poor.",
  benefits: [
    "Low-cost rental housing",
    "Urban employment access",
    "PPP housing model",
  ],
  eligibility: {
    occupation: ["daily-wage","self-employed","unemployed"],
    income: ["below-1l","1l-2.5l","2.5l-5l"],
    minAge: 18,
    maxAge: 60,
    gender: "all",
    residence: ["urban"],
  },
  howToApply:
    "Apply through local urban housing authorities.",
  link: "https://arhc.mohua.gov.in",
  rating: 4.1,
  beneficiaries: "10 Lakh+",
  potentialBenefit: 80000,
},
{
  id: 38,
  name: "Credit Linked Subsidy Scheme",
  icon: "🏠",
  color: "blue",
  ministry: "Ministry of Housing",
  category: "housing",
  description:
    "Interest subsidy on home loans under PMAY.",
  benefits: [
    "Interest subsidy up to ₹2.67 lakh",
    "Reduced EMI burden",
    "First-time homebuyers",
  ],
  eligibility: {
    occupation: ["salaried","self-employed"],
    income: ["2.5l-5l","5l-10l"],
    minAge: 21,
    maxAge: 65,
    gender: "all",
  },
  howToApply:
    "Apply via banks or PMAY portal.",
  link: "https://pmaymis.gov.in",
  rating: 4.5,
  beneficiaries: "30 Lakh+",
  potentialBenefit: 267000,
},
{
  id: 39,
  name: "Rajiv Awas Yojana",
  icon: "🏚️",
  color: "blue",
  ministry: "Ministry of Housing",
  category: "housing",
  description:
    "Slum redevelopment and affordable housing initiative.",
  benefits: [
    "Slum housing redevelopment",
    "Urban housing grants",
    "Infrastructure development",
  ],
  eligibility: {
    occupation: ["daily-wage","unemployed"],
    income: ["below-1l","1l-2.5l"],
    minAge: 18,
    maxAge: 65,
    gender: "all",
    residence: ["urban"],
  },
  howToApply:
    "Apply via municipal housing boards.",
  link: "https://mohua.gov.in",
  rating: 4.0,
  beneficiaries: "5 Lakh+",
  potentialBenefit: 150000,
},
{
  id: 40,
  name: "National Urban Livelihood Mission Housing Support",
  icon: "🏘️",
  color: "blue",
  ministry: "Ministry of Housing",
  category: "housing",
  description:
    "Housing and shelter support for urban homeless.",
  benefits: [
    "Night shelters",
    "Food & sanitation",
    "Livelihood linkage",
  ],
  eligibility: {
    occupation: ["unemployed","daily-wage"],
    income: ["below-1l"],
    minAge: 18,
    maxAge: 80,
    gender: "all",
    residence: ["urban"],
  },
  howToApply:
    "Apply via city municipal corporations.",
  link: "https://nulm.gov.in",
  rating: 4.1,
  beneficiaries: "20 Lakh+",
  potentialBenefit: 60000,
},
{
  id: 41,
  name: "National Health Mission",
  icon: "🏥",
  color: "green",
  ministry: "Ministry of Health",
  category: "healthcare",
  description:
    "Strengthens public healthcare systems across rural and urban India.",
  benefits: [
    "Free primary healthcare",
    "Maternal services",
    "Child immunization",
  ],
  eligibility: {
    occupation: ["all"],
    income: ["all"],
    minAge: 0,
    maxAge: 120,
    gender: "all",
  },
  howToApply:
    "Visit nearest government hospital.",
  link: "https://nhm.gov.in",
  rating: 4.2,
  beneficiaries: "All citizens",
  potentialBenefit: 50000,
},
{
  id: 42,
  name: "Janani Suraksha Yojana",
  icon: "🤰",
  color: "pink",
  ministry: "Ministry of Health",
  category: "healthcare",
  description:
    "Safe motherhood intervention promoting institutional delivery.",
  benefits: [
    "Cash assistance",
    "Free delivery care",
    "Transport support",
  ],
  eligibility: {
    occupation: ["homemaker","unemployed"],
    income: ["below-1l","1l-2.5l"],
    minAge: 18,
    maxAge: 45,
    gender: "female",
  },
  howToApply:
    "Register via ASHA worker or hospital.",
  link: "https://nhm.gov.in",
  rating: 4.4,
  beneficiaries: "1 Cr+ mothers",
  potentialBenefit: 6000,
},
{
  id: 43,
  name: "Rashtriya Arogya Nidhi",
  icon: "💊",
  color: "green",
  ministry: "Ministry of Health",
  category: "healthcare",
  description:
    "Financial aid for treatment of life-threatening diseases.",
  benefits: [
    "Treatment grants",
    "Cancer care support",
    "Rare disease aid",
  ],
  eligibility: {
    occupation: ["all"],
    income: ["below-1l","1l-2.5l"],
    minAge: 0,
    maxAge: 120,
    gender: "all",
  },
  howToApply:
    "Apply via government hospitals.",
  link: "https://mohfw.gov.in",
  rating: 4.3,
  beneficiaries: "1 Lakh+",
  potentialBenefit: 500000,
},
{
  id: 44,
  name: "PM National Dialysis Programme",
  icon: "🩺",
  color: "green",
  ministry: "Ministry of Health",
  category: "healthcare",
  description:
    "Provides free dialysis services at district hospitals.",
  benefits: [
    "Free dialysis",
    "Subsidized medicines",
    "Hospital care",
  ],
  eligibility: {
    occupation: ["all"],
    income: ["below-1l","1l-2.5l","2.5l-5l"],
    minAge: 0,
    maxAge: 120,
    gender: "all",
  },
  howToApply:
    "Visit empanelled district hospitals.",
  link: "https://nhm.gov.in",
  rating: 4.5,
  beneficiaries: "5 Lakh+",
  potentialBenefit: 300000,
},
{
  id: 45,
  name: "Mission Indradhanush",
  icon: "💉",
  color: "green",
  ministry: "Ministry of Health",
  category: "healthcare",
  description:
    "Universal immunization program for children and pregnant women.",
  benefits: [
    "Free vaccines",
    "Child immunization",
    "Disease prevention",
  ],
  eligibility: {
    occupation: ["all"],
    income: ["all"],
    minAge: 0,
    maxAge: 5,
    gender: "all",
  },
  howToApply:
    "Visit Anganwadi or government hospital.",
  link: "https://nhm.gov.in",
  rating: 4.6,
  beneficiaries: "3 Cr+ children",
  potentialBenefit: 20000,
},
// ================= EDUCATION (46–55) =================

{
  id: 46,
  name: "National Scholarship Portal (NSP)",
  icon: "🎓",
  color: "purple",
  ministry: "Ministry of Education",
  category: "education",
  description: "Central portal for multiple government scholarships.",
  benefits: [
    "Centralized scholarship application",
    "Direct benefit transfer",
    "Multiple scheme access"
  ],
  eligibility: {
    occupation: ["student"],
    income: ["below-1l","1l-2.5l","2.5l-5l"],
    minAge: 14,
    maxAge: 30,
    gender: "all"
  },
  howToApply: "Apply via scholarships.gov.in",
  link: "https://scholarships.gov.in",
  rating: 4.6,
  beneficiaries: "2 Cr+",
  potentialBenefit: 50000
},

{
  id: 47,
  name: "PM Scholarship Scheme",
  icon: "🏅",
  color: "purple",
  ministry: "Ministry of Home Affairs",
  category: "education",
  description: "Scholarships for children of armed forces personnel.",
  benefits: [
    "Monthly stipend",
    "Professional course funding",
    "Direct bank transfer"
  ],
  eligibility: {
    occupation: ["student"],
    income: ["all"],
    minAge: 17,
    maxAge: 25,
    gender: "all"
  },
  howToApply: "Apply via ksbonline.gov.in",
  link: "https://ksbonline.gov.in",
  rating: 4.4,
  beneficiaries: "1 Lakh+",
  potentialBenefit: 30000
},

{
  id: 48,
  name: "INSPIRE Scholarship",
  icon: "🔬",
  color: "purple",
  ministry: "Department of Science & Technology",
  category: "education",
  description: "Scholarship for science students.",
  benefits: [
    "₹80,000 yearly scholarship",
    "Research mentorship",
    "Science career support"
  ],
  eligibility: {
    occupation: ["student"],
    income: ["all"],
    minAge: 17,
    maxAge: 25,
    gender: "all"
  },
  howToApply: "Apply via online-inspire.gov.in",
  link: "https://online-inspire.gov.in",
  rating: 4.5,
  beneficiaries: "50,000+",
  potentialBenefit: 400000
},

{
  id: 49,
  name: "AICTE Pragati Scholarship",
  icon: "👩‍🎓",
  color: "purple",
  ministry: "AICTE",
  category: "education",
  description: "Scholarship for girls in technical education.",
  benefits: [
    "₹50,000 yearly aid",
    "Tuition fee support",
    "Technical education boost"
  ],
  eligibility: {
    occupation: ["student"],
    income: ["below-1l","1l-2.5l","2.5l-5l"],
    minAge: 17,
    maxAge: 30,
    gender: "female"
  },
  howToApply: "Apply via aicte-india.org",
  link: "https://www.aicte-india.org",
  rating: 4.6,
  beneficiaries: "40,000+",
  potentialBenefit: 200000
},

{
  id: 50,
  name: "AICTE Saksham Scholarship",
  icon: "♿",
  color: "purple",
  ministry: "AICTE",
  category: "education",
  description: "Scholarship for specially-abled students.",
  benefits: [
    "₹50,000 yearly support",
    "Assistive education aid",
    "Technical course funding"
  ],
  eligibility: {
    occupation: ["student"],
    income: ["all"],
    minAge: 17,
    maxAge: 30,
    gender: "all"
  },
  howToApply: "Apply via aicte portal",
  link: "https://www.aicte-india.org",
  rating: 4.4,
  beneficiaries: "10,000+",
  potentialBenefit: 200000
},

{
  id: 51,
  name: "Post Matric Scholarship",
  icon: "📚",
  color: "purple",
  ministry: "Ministry of Social Justice",
  category: "education",
  description: "Scholarship for SC/ST/OBC students.",
  benefits: [
    "Tuition reimbursement",
    "Maintenance allowance",
    "Book grants"
  ],
  eligibility: {
    occupation: ["student"],
    income: ["below-1l","1l-2.5l"],
    minAge: 15,
    maxAge: 35,
    gender: "all"
  },
  howToApply: "Apply via NSP portal",
  link: "https://scholarships.gov.in",
  rating: 4.3,
  beneficiaries: "3 Cr+",
  potentialBenefit: 100000
},

{
  id: 52,
  name: "National Means Cum Merit Scholarship",
  icon: "🏫",
  color: "purple",
  ministry: "Ministry of Education",
  category: "education",
  description: "Scholarship for meritorious low-income students.",
  benefits: [
    "₹12,000 yearly aid",
    "School continuation support",
    "Merit reward"
  ],
  eligibility: {
    occupation: ["student"],
    income: ["below-1l","1l-2.5l"],
    minAge: 13,
    maxAge: 18,
    gender: "all"
  },
  howToApply: "Apply via state education boards",
  link: "https://scholarships.gov.in",
  rating: 4.2,
  beneficiaries: "1 Lakh+",
  potentialBenefit: 48000
},

{
  id: 53,
  name: "Vidya Lakshmi Education Loan",
  icon: "🏦",
  color: "purple",
  ministry: "Ministry of Finance",
  category: "education",
  description: "Education loan portal.",
  benefits: [
    "Multiple bank loans",
    "Single form apply",
    "Interest subsidy"
  ],
  eligibility: {
    occupation: ["student"],
    income: ["all"],
    minAge: 18,
    maxAge: 35,
    gender: "all"
  },
  howToApply: "Apply via vidyalakshmi.co.in",
  link: "https://www.vidyalakshmi.co.in",
  rating: 4.1,
  beneficiaries: "25 Lakh+",
  potentialBenefit: 700000
},

{
  id: 54,
  name: "SWAYAM Free Online Courses",
  icon: "💻",
  color: "purple",
  ministry: "Ministry of Education",
  category: "education",
  description: "Free online certification courses.",
  benefits: [
    "Free courses",
    "Govt certification",
    "Skill development"
  ],
  eligibility: {
    occupation: ["student","unemployed"],
    income: ["all"],
    minAge: 14,
    maxAge: 60,
    gender: "all"
  },
  howToApply: "Register on swayam.gov.in",
  link: "https://swayam.gov.in",
  rating: 4.5,
  beneficiaries: "1 Cr+",
  potentialBenefit: 20000
},

{
  id: 55,
  name: "Beti Bachao Beti Padhao (Education)",
  icon: "👧",
  color: "pink",
  ministry: "Ministry of Women & Child Development",
  category: "education",
  description: "Promotes girl child education.",
  benefits: [
    "Education incentives",
    "Awareness programs",
    "Girl child welfare"
  ],
  eligibility: {
    occupation: ["student"],
    income: ["all"],
    minAge: 0,
    maxAge: 25,
    gender: "female"
  },
  howToApply: "Apply via wcd.nic.in",
  link: "https://wcd.nic.in",
  rating: 4.6,
  beneficiaries: "Pan India",
  potentialBenefit: 50000
},

// ================= WOMEN EMPOWERMENT (56–65) =================

{
  id: 56,
  name: "Mahila Shakti Kendra",
  icon: "👩",
  color: "pink",
  ministry: "Ministry of Women & Child Development",
  category: "women-empowerment",
  description: "Empowers rural women through community participation.",
  benefits: ["Skill training","Employment support","Counselling"],
  eligibility: {
    occupation: ["homemaker","unemployed","self-employed"],
    income: ["below-1l","1l-2.5l"],
    minAge: 18,
    maxAge: 60,
    gender: "female"
  },
  howToApply: "Apply via district offices",
  link: "https://wcd.nic.in",
  rating: 4.2,
  beneficiaries: "10 Lakh+",
  potentialBenefit: 50000
},

{
  id: 57,
  name: "Ujjwala Scheme (Women Safety)",
  icon: "🛡️",
  color: "pink",
  ministry: "Ministry of Women & Child Development",
  category: "women-empowerment",
  description: "Prevents trafficking and supports victims.",
  benefits: ["Rescue support","Rehabilitation","Legal aid"],
  eligibility: {
    occupation: ["all"],
    income: ["all"],
    minAge: 18,
    maxAge: 60,
    gender: "female"
  },
  howToApply: "Apply via NGOs & WCD",
  link: "https://wcd.nic.in",
  rating: 4.1,
  beneficiaries: "1 Lakh+",
  potentialBenefit: 100000
},

{
  id: 58,
  name: "Working Women Hostel Scheme",
  icon: "🏢",
  color: "pink",
  ministry: "Ministry of Women & Child Development",
  category: "women-empowerment",
  description: "Safe accommodation for working women.",
  benefits: ["Subsidized hostel","Security","Childcare"],
  eligibility: {
    occupation: ["salaried","self-employed"],
    income: ["all"],
    minAge: 18,
    maxAge: 60,
    gender: "female"
  },
  howToApply: "Apply via state WCD dept.",
  link: "https://wcd.nic.in",
  rating: 4.3,
  beneficiaries: "50,000+",
  potentialBenefit: 60000
},

{
  id: 59,
  name: "STEP Scheme for Women",
  icon: "🧵",
  color: "pink",
  ministry: "Ministry of Women & Child Development",
  category: "women-empowerment",
  description: "Skill training for women.",
  benefits: ["Vocational training","Employment","Stipend"],
  eligibility: {
    occupation: ["unemployed","homemaker"],
    income: ["below-1l","1l-2.5l"],
    minAge: 18,
    maxAge: 55,
    gender: "female"
  },
  howToApply: "Apply via NGOs",
  link: "https://wcd.nic.in",
  rating: 4.4,
  beneficiaries: "2 Lakh+",
  potentialBenefit: 40000
},

{
  id: 60,
  name: "One Stop Centre Scheme",
  icon: "🏥",
  color: "pink",
  ministry: "Ministry of Women & Child Development",
  category: "women-empowerment",
  description: "Support for women facing violence.",
  benefits: ["Legal aid","Medical aid","Shelter"],
  eligibility: {
    occupation: ["all"],
    income: ["all"],
    minAge: 18,
    maxAge: 60,
    gender: "female"
  },
  howToApply: "Visit OSC centres",
  link: "https://wcd.nic.in",
  rating: 4.5,
  beneficiaries: "Pan India",
  potentialBenefit: 100000
},

{
  id: 61,
  name: "Mahila E-Haat",
  icon: "🛍️",
  color: "pink",
  ministry: "Ministry of Women & Child Development",
  category: "women-empowerment",
  description: "Online marketing platform for women entrepreneurs.",
  benefits: ["Online store","Market access","Income support"],
  eligibility: {
    occupation: ["self-employed","business"],
    income: ["all"],
    minAge: 18,
    maxAge: 60,
    gender: "female"
  },
  howToApply: "Register on mahilaehaat-rmk.gov.in",
  link: "https://mahilaehaat-rmk.gov.in",
  rating: 4.2,
  beneficiaries: "50,000+",
  potentialBenefit: 200000
},

{
  id: 62,
  name: "Nari Shakti Puraskar Support",
  icon: "🏆",
  color: "pink",
  ministry: "WCD Ministry",
  category: "women-empowerment",
  description: "Recognition & financial awards for women achievers.",
  benefits: ["Cash award","National recognition","Support grants"],
  eligibility: {
    occupation: ["all"],
    income: ["all"],
    minAge: 21,
    maxAge: 70,
    gender: "female"
  },
  howToApply: "Nomination via wcd.nic.in",
  link: "https://wcd.nic.in",
  rating: 4.6,
  beneficiaries: "National awardees",
  potentialBenefit: 100000
},

{
  id: 63,
  name: "Women Entrepreneurship Platform",
  icon: "💼",
  color: "pink",
  ministry: "NITI Aayog",
  category: "women-empowerment",
  description: "Supports women startups.",
  benefits: ["Mentorship","Funding access","Networking"],
  eligibility: {
    occupation: ["business","self-employed"],
    income: ["all"],
    minAge: 18,
    maxAge: 60,
    gender: "female"
  },
  howToApply: "Apply via wep.gov.in",
  link: "https://wep.gov.in",
  rating: 4.5,
  beneficiaries: "1 Lakh+",
  potentialBenefit: 500000
},

{
  id: 64,
  name: "Sukanya Samriddhi Yojana",
  icon: "👧",
  color: "pink",
  ministry: "Ministry of Finance",
  category: "women-empowerment",
  description: "Savings scheme for girl child.",
  benefits: ["High interest","Tax benefits","Secure savings"],
  eligibility: {
    occupation: ["all"],
    income: ["all"],
    minAge: 0,
    maxAge: 10,
    gender: "female"
  },
  howToApply: "Open account at post office/bank",
  link: "https://www.nsiindia.gov.in",
  rating: 4.8,
  beneficiaries: "3 Cr+",
  potentialBenefit: 1500000
},

{
  id: 65,
  name: "PM Ujjwala Yojana",
  icon: "🔥",
  color: "pink",
  ministry: "Ministry of Petroleum",
  category: "women-empowerment",
  description: "Free LPG connections for women.",
  benefits: ["Free gas connection","Subsidy","Health safety"],
  eligibility: {
    occupation: ["homemaker"],
    income: ["below-1l","1l-2.5l"],
    minAge: 18,
    maxAge: 60,
    gender: "female"
  },
  howToApply: "Apply via pmuy.gov.in",
  link: "https://www.pmuy.gov.in",
  rating: 4.7,
  beneficiaries: "9 Cr+",
  potentialBenefit: 1600
},
// ================= SKILL DEVELOPMENT (66) =================
{
  id: 66,
  name: "PM Internship Scheme",
  icon: "🎯",
  color: "purple",
  ministry: "Ministry of Corporate Affairs",
  category: "skill-development",
  description:
    "Provides 12-month internship opportunities at top 500 companies in India with a monthly stipend of ₹5,000 and a one-time grant of ₹6,000 for youth aged 21–24.",
  benefits: [
    "₹5,000 monthly stipend from government",
    "₹6,000 one-time assistance grant",
    "Industry experience at top 500 companies",
    "Certificate of completion",
  ],
  eligibility: {
    occupation: ["student", "unemployed"],
    income: ["below-1l", "1l-2.5l", "2.5l-5l", "5l-10l"],
    minAge: 21,
    maxAge: 24,
    gender: "all",
  },
  howToApply:
    "Register and apply online at pminternship.mca.gov.in with Aadhaar, educational certificates, and bank details.",
  link: "https://pminternship.mca.gov.in",
  rating: 4.5,
  beneficiaries: "1 Cr (target)",
  potentialBenefit: 66000,
},
];


const CATEGORY_META = {
  "education-scholarship": {
    label: "Education & Scholarships",
    emoji: "🎓",
    color: "purple",
  },
  healthcare: { label: "Healthcare", emoji: "🏥", color: "green" },
  housing: { label: "Housing", emoji: "🏠", color: "blue" },
  agriculture: { label: "Agriculture", emoji: "🌾", color: "green" },
  "business-startup": {
    label: "Business & Startups",
    emoji: "💼",
    color: "amber",
  },
  "women-empowerment": {
    label: "Women Empowerment",
    emoji: "👩",
    color: "pink",
  },
  "skill-development": {
    label: "Skill Development",
    emoji: "🛠️",
    color: "amber",
  },
  "pension-insurance": {
    label: "Pension & Insurance",
    emoji: "🛡️",
    color: "blue",
  },
};
