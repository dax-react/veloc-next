// servicePageData.js - Configuration file for all service pages

import bottomIcons from "../../public/images/shopify-hero-icon-grp.png";
import bottomIconswebdev from "../../public/images/webdev-hero-icon-grp.png";
import bottomIconmobdev from "../../public/images/mobdev-hero-icon-grp.png";
import bottomIconbackdev from "../../public/images/backdev-hero-icon-grp.png";
import bottomIconai from "../../public/images/ai-hero-icon-grp.png";
import bottomIconblockchain from "../../public/images/blockchain-hero-icon-grp.png";
import bottomIconuiux from "../../public/images/uiux-hero-icon-grp.png";

// Shopify icons
import icon1 from "../../public/images/shopify-icon1.png";
import icon2 from "../../public/images/shopify-icon2.png";
import icon3 from "../../public/images/shopify-icon3.png";
import icon5 from "../../public/images/shopify-icon5.png";
import icon6 from "../../public/images/shopify-icon6.png";

// Web dev icons
import icon1webdev from "../../public/images/icon1webdev.png";
import icon2webdev from "../../public/images/icon2webdev.png";
import icon3webdev from "../../public/images/icon3webdev.png";
import icon5webdev from "../../public/images/icon5webdev.png";
import icon6webdev from "../../public/images/icon6webdev.png";
import reactwebdev from '../../public/images/react1webdev.png';
import nodewebdev from '../../public/images/nodewebdev.png';
import nextwebdev from '../../public/images/nextwebdev.png';
import phpwebdev from '../../public/images/phpwebdev.png';

// Mobile dev icons
import icon1mobdev from "../../public/images/icon1mobdev.png";
import icon2mobdev from "../../public/images/icon2mobdev.png";
import icon3mobdev from "../../public/images/icon3mobdev.png";
import icon5mobdev from "../../public/images/icon5mobdev.png";
import icon6mobdev from "../../public/images/icon6mobdev.png";
import flutter from '../../public/images/fluttermobdev.png';
import reactnativemobdev from '../../public/images/reactnativemobdev.png';
import iosmobdev from '../../public/images/iosmobdev.png';
import androidwebdev from '../../public/images/androidwebdev.png';

// Backend icons
import icon1backdev from "../../public/images/icon1backdev.png";
import icon2backdev from "../../public/images/icon2backdev.png";
import icon3backdev from "../../public/images/icon3backdev.png";
import icon5backdev from "../../public/images/icon5backdev.png";
import icon6backdev from "../../public/images/icon6backdev.png";

// AI icons
import icon1ai from "../../public/images/icon1ai.png";
import icon2ai from "../../public/images/icon2ai.png";
import icon3ai from "../../public/images/icon3ai.png";
import icon5ai from "../../public/images/icon5ai.png";
import icon6ai from "../../public/images/icon6ai.png";
import pythonai from '../../public/images/pythonai.png';
import openai from '../../public/images/openai.png';
import tensorflowai from '../../public/images/tensorflowai.png';
import pytorchai from '../../public/images/pytorchai.png';

// Blockchain icons
import icon1blockchaindev from "../../public/images/icon1blockchaindev.png";
import icon2blockchaindev from "../../public/images/icon2blockchaindev.png";
import icon3blockchaindev from "../../public/images/icon3blockchaindev.png";
import icon5blockchaindev from "../../public/images/icon5blockchaindev.png";
import icon6blockchaindev from "../../public/images/icon6blockchaindev.png";

// UI/UX icons
import icon1uiux from "../../public/images/icon1uiux.png";
import icon2uiux from "../../public/images/icon2uiux.png";
import icon3uiux from "../../public/images/icon3uiux.png";
import icon5uiux from "../../public/images/icon5uiux.png";
import icon6uiux from "../../public/images/icon6uiux.png";

// Service images
import service1 from "../../public/images/service1.png";
import service2 from "../../public/images/service2.png";
import service3 from "../../public/images/service3.png";
import service4 from "../../public/images/service4.png";
import service5 from "../../public/images/service5.png";
import footerlogo from '../../public/images/footerlogo.png';

// Import portfolio data
import { portfolioItems } from '@/data/portfolioData';

// Helper function to get portfolio items by category
const getPortfolioByCategory = (category) => {
    return portfolioItems
        .filter(item => item.category === category)
        .map(item => ({
            id: item.id,
            image: item.image,
            title: item.subtitle,
            company: item.title,
            category: item.category,
            size: [
                1, 3, 4, 6, 7, 9, 10, 12, 13, 15,
                17, 18, 20, 21, 23, 24, 26, 27, 29, 30,
                32, 33, 35, 36, 38, 39, 41, 42, 44, 45,
                47, 48, 50
            ].includes(item.id)
                ? "large"
                : "small",

            // Alternate sizes for visual variety
            link: item.link
        }));
};

// Shopify Page Data
const shopifyPageData = {
    hero: {
        title: (
            <>
                Build, Launch & Scale Your eCommerce<br /> Business with Shopify Experts
            </>
        ),
        icons: bottomIcons
    },
    benefits: {
        title: "Key Benefit of Shopify",
        items: [
            { id: 1, title: "Fast & Easy Platform", icon: icon1 },
            { id: 2, title: "Secure & Reliable Platform", icon: icon2 },
            { id: 3, title: "Multiple Payment Options", icon: icon3 },
            {
                id: 4,
                title: "Built-in Marketing Tools",
                icon: "📊",
                featured: true,
                description: "No need for coding or backend setup. Just design, add products, and go live."
            },
            { id: 5, title: "Easy Inventory & Order Management", icon: icon5 },
            { id: 6, title: "Time & Cost Saving", icon: icon6 }
        ]
    },
    services: {
        title: "Our Shopify Development Services",
        description: "Shopify is one of the most powerful and reliable eCommerce platforms trusted by over 2 million businesses worldwide. It offers everything you need to launch, manage, and grow your online store — all in one place.",
        items: [
            { id: "01", title: "Custom Shopify Store Design", desc: "Tailor-made designs that reflect your brand identity and deliver a smooth, conversion-focused user experience.", img: service1 },
            { id: "02", title: "Shopify Store Setup & Configuration", desc: "Tailor-made designs that reflect your brand identity and deliver a smooth, conversion-focused user experience.", img: service2 },
            { id: "03", title: "App Integration & Development", desc: "Enhance your store's performance with third-party app integrations or custom-built Shopify apps.", img: service3 },
            { id: "04", title: "Migration to Shopify", desc: "Enhance your store's performance with third-party app integrations or custom-built Shopify apps.", img: service4 },
            { id: "05", title: "Maintenance & Support", desc: "Enhance your store's performance with third-party app integrations or custom-built Shopify apps.", img: service5 }
        ]
    },
    projects: {
        title: "Our Shopify Work",
        items: getPortfolioByCategory("Shopify")
    },
    carousel: { logos: [footerlogo, footerlogo, footerlogo, footerlogo] }
};

// Web Development Page Data
const webDevlopment = {
    hero: {
        title: (<>Websites That Shine, Web Apps <br />That Dazzle</>),
        icons: bottomIconswebdev
    },
    benefits: {
        title: "Key Benefit of Web Development",
        items: [
            { id: 1, title: "Online Presence & Visibility", icon: icon1webdev },
            { id: 2, title: "Credibility & Professionalism", icon: icon2webdev },
            { id: 3, title: "Marketing & Reach", icon: icon3webdev },
            { id: 4, title: "Cost Effective Solution", icon: "💰", featured: true, description: "No need for coding or backend setup, Just design, add products, and go live." },
            { id: 5, title: "Customer Engagement & Support", icon: icon5webdev },
            { id: 6, title: "Scalability", icon: icon6webdev }
        ]
    },
    services: {
        title: "Our Web Development Services",
        description: "Built to impress, designed to perform—our creations blend beauty and brains. From seamless sites to powerful apps, every line of code is a step toward your success. Let's shape the digital future, one masterpiece at a time.",
        items: [
            { id: "01", title: "React Js", desc: "Tailor-made designs that reflect your brand identity and deliver a smooth, conversion-focused user experience.", img: reactwebdev },
            { id: "02", title: "Node Js", desc: "Tailor-made designs that reflect your brand identity and deliver a smooth, conversion-focused user experience.", img: nodewebdev },
            { id: "03", title: "Next js", desc: "Enhance your store's performance with third-party app integrations or custom-built Shopify apps.", img: nextwebdev },
            { id: "04", title: "PHP Laravel", desc: "Enhance your store's performance with third-party app integrations or custom-built Shopify apps.", img: phpwebdev }
        ]
    },
    projects: {
        title: "Our Web Development Work",
        items: getPortfolioByCategory("Web App")
    },
    carousel: shopifyPageData.carousel
};

// Mobile Development Page Data
const mobileDevlopment = {
    hero: {
        title: (<>Apps That Inspire, Experiences,<br /> That Delight</>),
        icons: bottomIconmobdev
    },
    benefits: {
        title: "Key Benefit of Mobile development",
        items: [
            { id: 1, title: "Enhanced Customer Engagement", icon: icon1mobdev },
            { id: 2, title: "Better Accessibility & Convenience", icon: icon2mobdev },
            { id: 3, title: "Increased Sales & Revenue", icon: icon3mobdev },
            { id: 4, title: "Brand Recognition & Loyalty", icon: "💰", featured: true, description: "No need for coding or backend setup, Just design, add products, and go live." },
            { id: 5, title: "Data Collection & Insights", icon: icon5mobdev },
            { id: 6, title: "Competitive Advantage", icon: icon6mobdev }
        ]
    },
    services: {
        title: "Our Mobile development Services",
        description: "Built to impress, designed to perform—our creations blend beauty and brains. From seamless sites to powerful apps, every line of code is a step toward your success. Let's shape the digital future, one masterpiece at a time.",
        items: [
            { id: "01", title: "Flutter", desc: "Tailor-made designs that reflect your brand identity and deliver a smooth, conversion-focused user experience.", img: flutter },
            { id: "02", title: "React native", desc: "Tailor-made designs that reflect your brand identity and deliver a smooth, conversion-focused user experience.", img: reactnativemobdev },
            { id: "03", title: "IOS", desc: "Enhance your store's performance with third-party app integrations or custom-built Shopify apps.", img: iosmobdev },
            { id: "04", title: "Android", desc: "Enhance your store's performance with third-party app integrations or custom-built Shopify apps.", img: androidwebdev }
        ]
    },
    projects: {
        title: "Our Mobile development Work",
        items: getPortfolioByCategory("Mobile App")
    },
    carousel: shopifyPageData.carousel
};

// Backend Development Page Data
const backendDevlopment = {
    hero: {
        title: (<>Backends That Scale, Performance<br /> That Lasts</>),
        icons: bottomIconbackdev
    },
    benefits: {
        title: "Key Benefit of Backend Development",
        items: [
            { id: 1, title: "Data Management & Storage", icon: icon1backdev },
            { id: 2, title: "Security & Authentication", icon: icon2backdev },
            { id: 3, title: "Server-Side Logic & Processing", icon: icon3backdev },
            { id: 4, title: "API & Integration", icon: "💰", featured: true, description: "No need for coding or backend setup, Just design, add products, and go live." },
            { id: 5, title: "Scalability & Performance", icon: icon5backdev },
            { id: 6, title: "Reliability & Maintenance", icon: icon6backdev }
        ]
    },
    services: mobileDevlopment.services,
    projects: {
        title: "Our Backend Development Work",
        // Backend doesn't have a specific category, so use Web App items
        items: getPortfolioByCategory("Web App").slice(0, 6)
    },
    carousel: shopifyPageData.carousel
};

// AI Development Page Data
const artificialIntelligent = {
    hero: {
        title: (<>AI:Drive the Future,<br /> Don&apos;t Get Left Behind</>),
        icons: bottomIconai
    },
    benefits: {
        title: "Key Benefit of Artificial Intelligent",
        items: [
            { id: 1, title: "Automation of Tasks", icon: icon1ai },
            { id: 2, title: "Data Analysis & Insights", icon: icon2ai },
            { id: 3, title: "Improved Decision Making", icon: icon3ai },
            { id: 4, title: "Enhanced Customer Experience", icon: "💰", featured: true, description: "No need for coding or backend setup, Just design, add products, and go live." },
            { id: 5, title: "Cost & Time Efficiency", icon: icon5ai },
            { id: 6, title: "Innovation & Problem Solving", icon: icon6ai }
        ]
    },
    services: {
        title: "Our Artificial Intelligent Services",
        description: "From sleek designs to flawless functionality, we craft mobile apps that captivate and connect. Built to perform and designed to impress, our apps redefine what's possible on every screen. Let's bring your vision to life in the palm of your hand.",
        items: [
            { id: "01", title: "Python", desc: "Tailor-made designs that reflect your brand identity and deliver a smooth, conversion-focused user experience.", img: pythonai },
            { id: "02", title: "Open AI", desc: "Tailor-made designs that reflect your brand identity and deliver a smooth, conversion-focused user experience.", img: openai },
            { id: "03", title: "Tensorflow", desc: "Enhance your store's performance with third-party app integrations or custom-built Shopify apps.", img: tensorflowai },
            { id: "04", title: "PyTorch", desc: "Enhance your store's performance with third-party app integrations or custom-built Shopify apps.", img: pytorchai }
        ]
    },
    projects: {
        title: "Our Artificial Intelligent Work",
        items: getPortfolioByCategory("AI")
    },
    carousel: shopifyPageData.carousel
};

// Blockchain Development Page Data
const blockchainDevelopment = {
    hero: {
        title: (<>Blockchains That Empower,<br /> Innovations That Endure</>),
        icons: bottomIconblockchain
    },
    benefits: {
        title: "Key Benefit of Blockchain Development",
        items: [
            { id: 1, title: "Decentralization", icon: icon1blockchaindev },
            { id: 2, title: "Enhanced Security", icon: icon2blockchaindev },
            { id: 3, title: "Transparency & Traceability", icon: icon3blockchaindev },
            { id: 4, title: "Reduced Costs", icon: "💰", featured: true, description: "No need for coding or backend setup, Just design, add products, and go live." },
            { id: 5, title: "Faster Transactions", icon: icon5blockchaindev },
            { id: 6, title: "New Business Models", icon: icon6blockchaindev }
        ]
    },
    services: artificialIntelligent.services,
    projects: {
        title: "Our Blockchain Development Work",
        items: getPortfolioByCategory("Blockchain")
    },
    carousel: shopifyPageData.carousel
};

// UI/UX Design Page Data
const uiUx = {
    hero: {
        title: (<>Designs That Engage,<br /> Experiences That Inspire</>),
        icons: bottomIconuiux
    },
    benefits: {
        title: "Key Benefit of UI UX Design",
        items: [
            { id: 1, title: "Improved User Experience", icon: icon1uiux },
            { id: 2, title: "Increased User Engagement", icon: icon2uiux },
            { id: 3, title: "Higher Conversion Rates", icon: icon3uiux },
            { id: 4, title: "Brand Credibility & Trust", icon: "💰", featured: true, description: "No need for coding or backend setup, Just design, add products, and go live." },
            { id: 5, title: "Reduced Development Costs", icon: icon5uiux },
            { id: 6, title: "Competitive Advantage", icon: icon6uiux }
        ]
    },
    projects: {
        title: "Our UI UX Design Work",
        items: getPortfolioByCategory("UI/UX")
    },
    carousel: shopifyPageData.carousel
};

// Export all service pages - THIS IS CRITICAL FOR NEXT.JS
export const servicePages = {
    shopify_development: shopifyPageData,
    web_development: webDevlopment,
    mobile_development: mobileDevlopment,
    backend_development: backendDevlopment,
    artificial_intelligent: artificialIntelligent,
    blockchain_development: blockchainDevelopment,
    ui_ux: uiUx
};

// Helper function to get projects for any service page
export const getServiceProjects = (serviceName) => {
    const categoryMap = {
        'shopify_development': 'Shopify',
        'web_development': 'Web App',
        'mobile_development': 'Mobile App',
        'backend_development': 'Web App',
        'artificial_intelligent': 'AI',
        'blockchain_development': 'Blockchain',
        'ui_ux': 'UI/UX'
    };

    const category = categoryMap[serviceName];
    return category ? getPortfolioByCategory(category) : [];
};

// Default export for easier imports
export default servicePages;