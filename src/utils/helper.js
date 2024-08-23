import featuresOne from "../assets/images/home/svg/features-numb-1.svg";
import featuresTwo from "../assets/images/home/svg/features-numb-2.svg";
import featuresThree from "../assets/images/home/svg/features-numb-3.svg";
import featuresFour from "../assets/images/home/svg/features-numb-4.svg";
import featuresFive from "../assets/images/home/svg/features-numb-5.svg";
import featuresSix from "../assets/images/home/svg/features-numb-6.svg";
import facebook from "../assets/images/home/svg/Facebook.svg";
import instagram from "../assets/images/home/svg/Instagram.svg";
import linkedIn from "../assets/images/home/svg/LinkedIn.svg";
import cardFirst from '../assets/images/home/svg/card-img-first.svg'
import cardSecond from '../assets/images/home/svg/card-img-second.svg'
import cardThird from '../assets/images/home/svg/card-img-third.svg'

export const FEATURES_DATA = [
  {
    img: featuresOne,
    para: "Find out which visa you might want",
  },
  {
    img: featuresTwo,
    para: "Receive a checklist with all necessary documents",
  },
  {
    img: featuresThree,
    para: "Write your CV / Motivation Letter with Herbert",
  },
  {
    img: featuresFour,
    para: "Help prepare for your visa interview",
  },
  {
    img: featuresFive,
    para: "Practice your German interactively with Herbert",
  },
  {
    img: featuresSix,
    para: "Let Herbert guide you through your fresh start in Germany once you get there.",
  },
];
export const PLANS_DATA = [
  {
    heading: "$5/mo",
    para: "Ideal for newcomers! Get quick and reliable answers to your basic questions about German immigration policies. Perfect for a brief introduction without long-term commitment.",
    message: "10 messages",
    upgrade: "Upgrade to Basic",
    plan: "Basic",
  },
  {
    heading: "$10/mo",
    para: "Your go-to resource for thorough visa application preparation. Ensure you have all the necessary information and answers to confidently navigate the German visa process.",
    message: "25 messages",
    upgrade: "Upgrade to Standard",
    plan: "Standard",
  },
  {
    heading: "$20/mo",
    para: "Ideal for newcomers! Get quick and reliable answers to your basic questions about German immigration policies. Perfect for a brief introduction without long-term commitment.",
    message: "50 messages",
    upgrade: "Upgrade to Premium",
    plan: "Premium",
  },
];
export const NAV_LINKS_LIST = [
  { navlink: "Herbert", url: "/" },
  { navlink: "Sources", url: "#blog" },
  { navlink: "Our Vision", url: "#vision" },
];

export const FOOTER_DATA = [
  {
    headLink: "Quick Links",
    links: ["Services", "About Us", "Features", "Plans"],
  },
  {
    headLink: "Support",
    links: ["Help Center", "Term & Conditions", "Privacy Policy"],
  },
  {
    headLink: "Follow Us",
    socialLinks: [facebook, instagram, linkedIn],
  },
];

export const FAQ_CONTENT = [
  {
    mainText: "What is Herbert?",
    content:
      "Herbert is an AI-powered assistant designed to help with German visa and immigration processes. It provides guidance, answers questions, and helps you navigate the requirements and procedures involved.",
  },
  {
    mainText: "How accurate is the information provided by Herbert?",
    content:
      "Herbert is an AI-powered assistant designed to help with German visa and immigration processes. It provides guidance, answers questions, and helps you navigate the requirements and procedures involved.",
  },
  {
    mainText: "How can I access Herbert?",
    content:
      "Herbert is an AI-powered assistant designed to help with German visa and immigration processes. It provides guidance, answers questions, and helps you navigate the requirements and procedures involved.",
  },
  {
    mainText: "How can Herbert help me with my visa application?",
    content:
      "Herbert is an AI-powered assistant designed to help with German visa and immigration processes. It provides guidance, answers questions, and helps you navigate the requirements and procedures involved.",
  },
  {
    mainText: "Is Herbert available in multiple languages?",
    content:
      "Herbert is an AI-powered assistant designed to help with German visa and immigration processes. It provides guidance, answers questions, and helps you navigate the requirements and procedures involved.",
  },
  {
    mainText: "Can Herbert help me fill out my visa application forms?",
    content:
      "Herbert is an AI-powered assistant designed to help with German visa and immigration processes. It provides guidance, answers questions, and helps you navigate the requirements and procedures involved.",
  },
];

export const RESIDENCE_DATA = [
  {
    titleBlack: "Residence",
    titleOrange: "Act",
    aboutListItems:
      "The Aufenthaltsgesetz is the cornerstone of German immigration law. This act governs:",
    listItems: [
      "Entry into Germany",
      "Residence permits",
      "Employment regulations for foreigners",
      "Integration measures",
    ],
    about:
      "Herbert utilizes this act to provide precise information on legal residence requirements and pathways to living in Germany.",
  },
];
export const VISA_DATA = [
  {
    titleBlack: "Visa",
    titleOrange: "Handbook",
    aboutListItems:
      "The Visumhandbuch is a comprehensive internal document used by the Federal Foreign Office and German embassies. Spanning approximately 1,000 pages, it provides detailed guidelines on visa issuance. Herbert's training on this resource offers:",
    listItems: [
      "In-depth insights into visa application assessment",
      "Clarification on complex cases and exceptions",
      "Nuanced interpretations of immigration laws and regulations",
    ],
  },
];
export const CARD_DATA = [
  {
    img: cardFirst,
    mainText: "Interactive Forms",
    content: "Simplify visa application forms",
  },
  {
    img: cardSecond,
    mainText: "Document Checklist",
    content: "Personalized document preparation",
  },
  {
    img: cardThird,
    mainText: "Language Assistance",
    content: "German language skills assessment",
  }
]