'use client';

import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import indiaFlag from "../public/images/india.png";
import usaFlag from "../public/images/usa.png";
import logo from "../public/images/logo.png";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import {
    FaBrain,
    FaCode,
    FaCubes,
    FaMobileAlt,
    FaPalette,
    FaServer,
    FaShopify,
    FaUsers,
} from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    // Close mobile menu when screen resizes to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && menuOpen) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [menuOpen]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);

    // Close menu on route change
    useEffect(() => {
        // eslint-disable-next-line react-hooks/immutability
        closeAllMenus();
    }, [pathname]);

    // Helper function to close all menus
    const closeAllMenus = () => {
        setMenuOpen(false);
        setMegaMenuOpen(false);
    };

    // Toggle mobile menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setMegaMenuOpen(false);
    };

    // Handle mega menu for desktop only
    const handleMegaMenuEnter = () => {
        if (window.innerWidth > 768) {
            setMegaMenuOpen(true);
        }
    };

    const handleMegaMenuLeave = () => {
        if (window.innerWidth > 768) {
            setMegaMenuOpen(false);
        }
    };

    // Toggle mega menu on mobile
    const toggleMegaMenuMobile = (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            setMegaMenuOpen(!megaMenuOpen);
        }
    };

    return (
        <>
            {/* Top Info Bar */}
            <div className="top-bar">
                <div className="email">📩 info@veloc.in</div>
                <div className="phones">
                    <span>
                        <Image src={indiaFlag} alt="India" width={20} height={15} /> +91 97123 72394
                    </span>
                    <span>
                        <Image src={usaFlag} alt="USA" width={20} height={15} /> +1 (415) 409–8951
                    </span>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="navbar-container">
                <div className="main-navbar">
                    {/* Logo */}
                    <div className="logo">
                        <Link href="/" onClick={closeAllMenus}>
                            <Image src={logo} alt="logo" priority />
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    {/* Desktop Contact + Hamburger */}
                    <div className="nav-right">
                        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                            <Link href="/" onClick={closeAllMenus}>
                                Home
                            </Link>

                            <Link
                                href="/dedicated-developers"
                                onClick={closeAllMenus}
                                style={{
                                    background: "linear-gradient(90deg, #FFAB4A -19.03%, #5344BC 57.79%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    fontWeight: "700",
                                }}
                            >
                                Dedicated Developers & Teams
                            </Link>

                            {/* Services with Mega Menu */}
                            <div
                                className="nav-item-with-dropdown"
                                onMouseEnter={handleMegaMenuEnter}
                                onMouseLeave={handleMegaMenuLeave}
                            >
                                <Link href="/" onClick={toggleMegaMenuMobile}>
                                    Services
                                </Link>

                                {/* Mega Menu Dropdown */}
                                <div className={`mega-menu ${megaMenuOpen ? "show" : ""}`}>
                                    <div className="mega-menu-grid">
                                        {/* Dedicated Developers */}
                                        <div
                                            className="menu-item"
                                            onClick={() => {
                                                router.push("/dedicated-developers");
                                                closeAllMenus();
                                            }}
                                        >
                                            <FaUsers className="menu-icon" />
                                            <span>Dedicated Team & Developers</span>
                                        </div>

                                        {/* Blockchain Development */}
                                        <div
                                            className="menu-item"
                                            onClick={() => {
                                                router.push("/services/blockchain_development");
                                                closeAllMenus();
                                            }}
                                        >
                                            <FaCubes className="menu-icon" />
                                            <span>Blockchain Development</span>
                                        </div>

                                        {/* Backend Development */}
                                        <div
                                            className="menu-item"
                                            onClick={() => {
                                                router.push("/services/backend_development");
                                                closeAllMenus();
                                            }}
                                        >
                                            <FaServer className="menu-icon" />
                                            <span>Backend Development</span>
                                        </div>

                                        {/* Mobile App Development */}
                                        <div
                                            className="menu-item"
                                            onClick={() => {
                                                router.push("/services/mobile_development");
                                                closeAllMenus();
                                            }}
                                        >
                                            <FaMobileAlt className="menu-icon" />
                                            <span>Mobile App Development</span>
                                        </div>

                                        {/* Artificial Intelligence */}
                                        <div
                                            className="menu-item"
                                            onClick={() => {
                                                router.push("/services/artificial_intelligent");
                                                closeAllMenus();
                                            }}
                                        >
                                            <FaBrain className="menu-icon" />
                                            <span>Artificial Intelligence</span>
                                        </div>

                                        {/* UI UX Design */}
                                        <div
                                            className="menu-item"
                                            onClick={() => {
                                                router.push("/services/ui_ux");
                                                closeAllMenus();
                                            }}
                                        >
                                            <FaPalette className="menu-icon" />
                                            <span>UI UX Design</span>
                                        </div>

                                        {/* Web Development */}
                                        <div
                                            className="menu-item"
                                            onClick={() => {
                                                router.push("/services/web_development");
                                                closeAllMenus();
                                            }}
                                        >
                                            <FaCode className="menu-icon" />
                                            <span>Web Development</span>
                                        </div>

                                        {/* Shopify Development */}
                                        <div
                                            className="menu-item"
                                            onClick={() => {
                                                router.push("/services/shopify_development");
                                                closeAllMenus();
                                            }}
                                        >
                                            <FaShopify className="menu-icon" />
                                            <span>Shopify Development</span>
                                        </div>
                                    </div>

                                    {/* Bottom Cards */}
                                    <div className="mega-menu-cards">
                                        {/* Development Category */}
                                        <div className="mega-card">
                                            <div className="card-icon">
                                                <FaCode />
                                            </div>
                                            <h3>Development</h3>
                                            <ul>
                                                <li
                                                    onClick={() => {
                                                        router.push("/dedicated_developers");
                                                        closeAllMenus();
                                                    }}
                                                >
                                                    Dedicated Team & Developers
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        router.push("/services/mobile_development");
                                                        closeAllMenus();
                                                    }}
                                                >
                                                    Mobile App Development
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        router.push("/services/web_development");
                                                        closeAllMenus();
                                                    }}
                                                >
                                                    Web Development
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        router.push("/services/shopify_development");
                                                        closeAllMenus();
                                                    }}
                                                >
                                                    Shopify Development
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Emerging Technologies Category */}
                                        <div className="mega-card">
                                            <div className="card-icon">
                                                <FaBrain />
                                            </div>
                                            <h3>Emerging Technologies</h3>
                                            <ul>
                                                <li
                                                    onClick={() => {
                                                        router.push("/services/blockchain_development");
                                                        closeAllMenus();
                                                    }}
                                                >
                                                    Blockchain Development
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        router.push("/services/artificial_intelligent");
                                                        closeAllMenus();
                                                    }}
                                                >
                                                    Artificial Intelligence
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        router.push("/services/backend_development");
                                                        closeAllMenus();
                                                    }}
                                                >
                                                    Backend Development
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        router.push("/services/ui_ux");
                                                        closeAllMenus();
                                                    }}
                                                >
                                                    UI UX Design
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Link href="/our-work" onClick={closeAllMenus}>
                                Our Work
                            </Link>

                            <Link href="/about-us" onClick={closeAllMenus}>
                                About Us
                            </Link>

                            {/* Contact button + Hamburger inside mobile menu */}
                            <div className="nav-right">
                                <div className="contact-btn">
                                    <button
                                        onClick={() => {
                                            router.push('/contact');
                                            closeAllMenus();
                                        }}
                                    >
                                        Contact Us
                                    </button>
                                </div>
                                <div className="hamburger-icon" onClick={toggleMenu}>
                                    <HiX />
                                </div>
                            </div>
                        </div>
                        <div className="contact-btn">
                            <button
                                onClick={() => {
                                    router.push('/contact');
                                    closeAllMenus();
                                }}
                            >
                                Contact Us
                            </button>
                        </div>

                        <div className="hamburger-icon" onClick={toggleMenu}>
                            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;