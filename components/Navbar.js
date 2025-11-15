/* eslint-disable react-hooks/immutability */
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
    FaGlobe,
    FaMobileAlt,
    FaPalette,
    FaServer,
    FaShopify,
    FaShoppingBag,
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

    // Helper function to check if link is active
    const isActive = (path) => pathname === path;

    // Helper function to check if services section is active
    const isServicesActive = () => pathname.startsWith('/services');
    const menuItems = [
        { icon: <FaUsers />, label: "Dedicated Team & Developers", link: "/dedicated-developers" },
        { icon: <FaCubes />, label: "Blockchain Development", link: "/services/blockchain_development" },
        { icon: <FaServer />, label: "Backend Development", link: "/services/backend_development" },
        { icon: <FaMobileAlt />, label: "Mobile App Development", link: "/services/mobile_development" },
        { icon: <FaBrain />, label: "Artificial Intelligence", link: "/services/artificial_intelligent" },
        { icon: <FaPalette />, label: "UI UX Design", link: "/services/ui_ux" },
        { icon: <FaCode />, label: "Web Development", link: "/services/web_development" },
        { icon: <FaShopify />, label: "Shopify Development", link: "/services/shopify_development" },
    ];

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
                            <Link
                                href="/"
                                onClick={closeAllMenus}
                                className={isActive('/') ? 'active' : ''}
                            >
                                Home
                            </Link>

                            <Link
                                href="/dedicated-developers"
                                onClick={closeAllMenus}
                                className={isActive('/dedicated-developers') ? 'active' : ''}
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
                                <Link
                                    href="/"
                                    onClick={toggleMegaMenuMobile}
                                    className={isServicesActive() ? 'active' : ''}
                                >
                                    Services
                                </Link>

                                {/* Mega Menu Dropdown */}
                                <div className={`mega-menu ${megaMenuOpen ? "show" : ""}`}>
                                    <div className="mega-menu-grid">
                                        {menuItems.map((item, i) => (
                                            <div
                                                key={i}
                                                className="menu-item"
                                                onClick={() => {
                                                    router.push(item.link);
                                                    closeAllMenus();
                                                }}
                                            >
                                                <div className="menu-icon">{item.icon}</div>
                                                <span>{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <Link
                                href="/our-work"
                                onClick={closeAllMenus}
                                className={isActive('/our-work') ? 'active' : ''}
                            >
                                Our Work
                            </Link>

                            <Link
                                href="/about-us"
                                onClick={closeAllMenus}
                                className={isActive('/about-us') ? 'active' : ''}
                            >
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