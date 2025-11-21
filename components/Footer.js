/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Email, Phone, LocationOn, EmailSharp } from "@mui/icons-material";
import { FaInstagram, FaFacebookMessenger, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import "../styles/Footer.css";

const Footer = () => {
    const [currentMonument, setCurrentMonument] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const monuments = [
        {
            name: "Statue of Unity",
            svg: (
                <svg width="120" height="150" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="30" y="165" width="60" height="15" fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1" />
                    <rect x="40" y="155" width="40" height="12" fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1" />
                    <path d="M55 155 L50 120 L45 120 L42 100 L45 80 L48 60 L52 45 L55 35 L60 30 L65 35 L68 45 L72 60 L75 80 L78 100 L75 120 L70 120 L65 155 Z" fill="#3d3d3d" stroke="#4a4a4a" strokeWidth="1" />
                    <ellipse cx="60" cy="25" rx="8" ry="10" fill="#3d3d3d" stroke="#4a4a4a" strokeWidth="1" />
                    <path d="M45 80 L30 95 L28 140" stroke="#3d3d3d" strokeWidth="4" strokeLinecap="round" />
                    <line x1="28" y1="85" x2="28" y2="145" stroke="#4a4a4a" strokeWidth="2" />
                    <path d="M75 80 L85 95 L82 110" stroke="#3d3d3d" strokeWidth="4" strokeLinecap="round" />
                    <path d="M50 120 L45 155 L55 155 Z" fill="#353535" />
                    <path d="M70 120 L75 155 L65 155 Z" fill="#353535" />
                    <path d="M48 60 L40 70 L42 100 L48 95" fill="#383838" stroke="#4a4a4a" strokeWidth="0.5" />
                </svg>
            )
        },
        {
            name: "Taj Mahal",
            svg: (
                <svg width="140" height="150" viewBox="0 0 140 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="165" width="100" height="15" fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1" />
                    <rect x="30" y="120" width="80" height="45" fill="#3d3d3d" stroke="#4a4a4a" strokeWidth="1" />
                    <rect x="60" y="130" width="20" height="35" fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1" rx="10" ry="10" />
                    <path d="M70 30 Q70 20 70 15 L72 10 L70 5 L68 10 L70 15" stroke="#4a4a4a" strokeWidth="2" fill="none" />
                    <ellipse cx="70" cy="70" rx="35" ry="50" fill="#3d3d3d" stroke="#4a4a4a" strokeWidth="1" />
                    <ellipse cx="70" cy="65" rx="28" ry="40" fill="#353535" stroke="#4a4a4a" strokeWidth="0.5" />
                    <rect x="15" y="100" width="8" height="65" fill="#3d3d3d" stroke="#4a4a4a" strokeWidth="1" />
                    <rect x="117" y="100" width="8" height="65" fill="#3d3d3d" stroke="#4a4a4a" strokeWidth="1" />
                    <polygon points="19,100 19,90 15,100 23,100" fill="#3d3d3d" stroke="#4a4a4a" strokeWidth="0.5" />
                    <polygon points="121,100 121,90 117,100 125,100" fill="#3d3d3d" stroke="#4a4a4a" strokeWidth="0.5" />
                </svg>
            )
        },
        {
            name: "India Gate",
            svg: (
                <svg width="140" height="150" viewBox="0 0 140 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="165" width="100" height="15" fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1" />
                    <rect x="25" y="50" width="90" height="115" fill="#3d3d3d" stroke="#4a4a4a" strokeWidth="1" />
                    <path d="M45 165 L45 90 Q70 70 95 90 L95 165" fill="#1a1a1a" stroke="#3a3a3a" strokeWidth="1" />
                    <rect x="25" y="40" width="90" height="12" fill="#353535" stroke="#4a4a4a" strokeWidth="1" />
                    <rect x="30" y="30" width="80" height="12" fill="#3d3d3d" stroke="#4a4a4a" strokeWidth="1" />
                    <rect x="55" y="15" width="30" height="17" fill="#353535" stroke="#4a4a4a" strokeWidth="1" />
                    <rect x="35" y="55" width="8" height="25" fill="#2a2a2a" />
                    <rect x="97" y="55" width="8" height="25" fill="#2a2a2a" />
                    <line x1="70" y1="100" x2="70" y2="130" stroke="#4a4a4a" strokeWidth="2" />
                    <circle cx="70" cy="95" r="5" fill="#4a4a4a" />
                </svg>
            )
        },
        {
            name: "Gateway of India",
            svg: (
                <svg width="140" height="150" viewBox="0 0 140 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="165" width="100" height="15" fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1" />
                    <rect x="30" y="70" width="80" height="95" fill="#3d3d3d" stroke="#4a4a4a" strokeWidth="1" />
                    <path d="M50 165 L50 110 Q70 95 90 110 L90 165" fill="#1a1a1a" stroke="#3a3a3a" strokeWidth="1" />
                    <rect x="30" y="55" width="80" height="18" fill="#353535" stroke="#4a4a4a" strokeWidth="1" />
                    <rect x="35" y="75" width="10" height="20" fill="#2a2a2a" rx="5" ry="5" />
                    <rect x="95" y="75" width="10" height="20" fill="#2a2a2a" rx="5" ry="5" />
                    <rect x="15" y="55" width="15" height="110" fill="#3d3d3d" stroke="#4a4a4a" strokeWidth="1" />
                    <rect x="110" y="55" width="15" height="110" fill="#3d3d3d" stroke="#4a4a4a" strokeWidth="1" />
                    <ellipse cx="70" cy="40" rx="25" ry="18" fill="#3d3d3d" stroke="#4a4a4a" strokeWidth="1" />
                    <ellipse cx="22.5" cy="45" rx="10" ry="12" fill="#353535" stroke="#4a4a4a" strokeWidth="1" />
                    <ellipse cx="117.5" cy="45" rx="10" ry="12" fill="#353535" stroke="#4a4a4a" strokeWidth="1" />
                </svg>
            )
        },
        {
            name: "Qutub Minar",
            svg: (
                <svg width="100" height="150" viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="30" y="165" width="40" height="15" fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1" />
                    <path d="M35 165 L40 130 L38 130 L42 95 L40 95 L44 60 L42 60 L46 30 L50 15 L54 30 L58 60 L56 60 L60 95 L58 95 L62 130 L60 130 L65 165 Z" fill="#3d3d3d" stroke="#4a4a4a" strokeWidth="1" />
                    <line x1="38" y1="140" x2="62" y2="140" stroke="#4a4a4a" strokeWidth="1" />
                    <line x1="40" y1="110" x2="60" y2="110" stroke="#4a4a4a" strokeWidth="1" />
                    <line x1="42" y1="80" x2="58" y2="80" stroke="#4a4a4a" strokeWidth="1" />
                    <line x1="44" y1="50" x2="56" y2="50" stroke="#4a4a4a" strokeWidth="1" />
                    <ellipse cx="50" cy="140" rx="12" ry="3" fill="none" stroke="#4a4a4a" strokeWidth="0.5" />
                    <ellipse cx="50" cy="110" rx="10" ry="2.5" fill="none" stroke="#4a4a4a" strokeWidth="0.5" />
                    <ellipse cx="50" cy="80" rx="8" ry="2" fill="none" stroke="#4a4a4a" strokeWidth="0.5" />
                    <circle cx="50" cy="12" r="4" fill="#353535" stroke="#4a4a4a" strokeWidth="1" />
                </svg>
            )
        },
        {
            name: "Lotus Temple",
            svg: (
                <svg width="140" height="150" viewBox="0 0 140 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="70" cy="170" rx="50" ry="10" fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1" />
                    <ellipse cx="70" cy="160" rx="40" ry="8" fill="#353535" stroke="#3a3a3a" strokeWidth="1" />
                    <path d="M70 150 Q55 120 40 150" fill="none" stroke="#4a4a4a" strokeWidth="2" />
                    <path d="M70 150 Q85 120 100 150" fill="none" stroke="#4a4a4a" strokeWidth="2" />
                    <path d="M70 140 Q50 100 30 140" fill="#3d3d3d" stroke="#4a4a4a" strokeWidth="1" />
                    <path d="M70 140 Q90 100 110 140" fill="#3d3d3d" stroke="#4a4a4a" strokeWidth="1" />
                    <path d="M70 130 Q55 80 45 120" fill="#353535" stroke="#4a4a4a" strokeWidth="1" />
                    <path d="M70 130 Q85 80 95 120" fill="#353535" stroke="#4a4a4a" strokeWidth="1" />
                    <path d="M70 120 Q60 60 55 100" fill="#3d3d3d" stroke="#4a4a4a" strokeWidth="1" />
                    <path d="M70 120 Q80 60 85 100" fill="#3d3d3d" stroke="#4a4a4a" strokeWidth="1" />
                    <path d="M70 100 Q65 50 62 80" fill="#353535" stroke="#4a4a4a" strokeWidth="1" />
                    <path d="M70 100 Q75 50 78 80" fill="#353535" stroke="#4a4a4a" strokeWidth="1" />
                    <path d="M70 70 L70 40" stroke="#4a4a4a" strokeWidth="2" />
                    <ellipse cx="70" cy="38" rx="5" ry="8" fill="#3d3d3d" stroke="#4a4a4a" strokeWidth="1" />
                </svg>
            )
        },
        {
            name: "Hawa Mahal",
            svg: (
                <svg width="120" height="150" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="165" width="80" height="15" fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1" />
                    <rect x="25" y="45" width="70" height="120" fill="#3d3d3d" stroke="#4a4a4a" strokeWidth="1" />
                    {[0, 1, 2, 3, 4].map((row) => (
                        [0, 1, 2, 3, 4].map((col) => (
                            <rect key={`${row}-${col}`} x={30 + col * 12} y={50 + row * 22} width="8" height="12" fill="#1a1a1a" rx="4" ry="4" />
                        ))
                    ))}
                    <polygon points="60,15 25,45 95,45" fill="#353535" stroke="#4a4a4a" strokeWidth="1" />
                    <polygon points="60,20 35,42 85,42" fill="#3d3d3d" stroke="#4a4a4a" strokeWidth="0.5" />
                    <rect x="55" y="140" width="10" height="25" fill="#1a1a1a" />
                    <polygon points="40,45 40,35 45,30 50,35 50,45" fill="#353535" stroke="#4a4a4a" strokeWidth="0.5" />
                    <polygon points="70,45 70,35 75,30 80,35 80,45" fill="#353535" stroke="#4a4a4a" strokeWidth="0.5" />
                </svg>
            )
        },
        {
            name: "Charminar",
            svg: (
                <svg width="140" height="150" viewBox="0 0 140 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="25" y="165" width="90" height="15" fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1" />
                    <rect x="30" y="90" width="80" height="75" fill="#3d3d3d" stroke="#4a4a4a" strokeWidth="1" />
                    <path d="M50 165 L50 120 Q70 105 90 120 L90 165" fill="#1a1a1a" stroke="#3a3a3a" strokeWidth="1" />
                    <rect x="30" y="80" width="80" height="12" fill="#353535" stroke="#4a4a4a" strokeWidth="1" />
                    <rect x="25" y="80" width="12" height="85" fill="#3d3d3d" stroke="#4a4a4a" strokeWidth="1" />
                    <rect x="103" y="80" width="12" height="85" fill="#3d3d3d" stroke="#4a4a4a" strokeWidth="1" />
                    <rect x="27" y="40" width="8" height="42" fill="#3d3d3d" stroke="#4a4a4a" strokeWidth="1" />
                    <rect x="105" y="40" width="8" height="42" fill="#3d3d3d" stroke="#4a4a4a" strokeWidth="1" />
                    <polygon points="31,40 31,30 27,40 35,40" fill="#353535" stroke="#4a4a4a" strokeWidth="0.5" />
                    <polygon points="109,40 109,30 105,40 113,40" fill="#353535" stroke="#4a4a4a" strokeWidth="0.5" />
                    <ellipse cx="70" cy="70" rx="20" ry="15" fill="#353535" stroke="#4a4a4a" strokeWidth="1" />
                    <path d="M70 55 L70 45 L72 40 L70 35 L68 40 L70 45" stroke="#4a4a4a" strokeWidth="1.5" fill="none" />
                </svg>
            )
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentMonument((prev) => (prev + 1) % monuments.length);
                setIsTransitioning(false);
            }, 500);
        }, 4000);

        return () => clearInterval(interval);
    }, [monuments.length]);

    return (
        <footer className="footer" style={{ position: "relative", overflow: "hidden" }}>
            {/* Monument Animation Section */}
            <div style={{
                position: "absolute",
                right: "70px",
                bottom: "230px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                zIndex: 1,
                height: "100px",
            }}>
                {/* Stars/Glowing dots */}
                {/* <div style={{ position: "absolute", top: "-20px", left: "-30px", width: "4px", height: "4px", backgroundColor: "#fff", borderRadius: "50%", animation: "twinkle 2s ease-in-out infinite", boxShadow: "0 0 6px #fff" }}></div>
                <div style={{ position: "absolute", top: "10px", right: "-20px", width: "3px", height: "3px", backgroundColor: "#fff", borderRadius: "50%", animation: "twinkle 2.5s ease-in-out infinite 0.5s", boxShadow: "0 0 5px #fff" }}></div>
                <div style={{ position: "absolute", top: "40px", left: "-40px", width: "2px", height: "2px", backgroundColor: "#fff", borderRadius: "50%", animation: "twinkle 3s ease-in-out infinite 1s", boxShadow: "0 0 4px #fff" }}></div>
                <div style={{ position: "absolute", top: "80px", right: "-35px", width: "3px", height: "3px", backgroundColor: "#fff", borderRadius: "50%", animation: "twinkle 2.8s ease-in-out infinite 0.3s", boxShadow: "0 0 5px #fff" }}></div>
                <div style={{ position: "absolute", top: "120px", left: "-25px", width: "2px", height: "2px", backgroundColor: "#fff", borderRadius: "50%", animation: "twinkle 3.2s ease-in-out infinite 0.7s", boxShadow: "0 0 4px #fff" }}></div> */}

                {/* Monument Container */}
                <div style={{
                    animation: "float 4s ease-in-out infinite",
                    filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.3))",
                    transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                    opacity: isTransitioning ? 0 : 1,
                    transform: isTransitioning ? "scale(0.8)" : "scale(1)",
                }}>
                    <div style={{ animation: "glow 3s ease-in-out infinite" }}>
                        {monuments[currentMonument].svg}
                    </div>
                </div>

                {/* Monument Name */}
                <div style={{
                    marginTop: "10px",
                    fontSize: "12px",
                    color: "#666",
                    fontStyle: "italic",
                    transition: "opacity 0.5s ease-in-out",
                    opacity: isTransitioning ? 0 : 1,
                }}>
                    {monuments[currentMonument].name}
                </div>

                {/* Made with love text */}
                <div style={{
                    marginTop: "10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "14px",
                    color: "#888",
                    fontWeight: "400",
                }}>
                    <span>Made with love</span>
                    {/* Indian Flag */}
                    <div style={{
                        width: "24px",
                        height: "16px",
                        borderRadius: "2px",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: "0 0 8px rgba(255, 153, 51, 0.5)",
                        animation: "flagGlow 2s ease-in-out infinite",
                    }}>
                        <div style={{ flex: 1, backgroundColor: "#FF9933" }}></div>
                        <div style={{ flex: 1, backgroundColor: "#FFFFFF", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div style={{ width: "5px", height: "5px", border: "1px solid #000080", borderRadius: "50%" }}></div>
                        </div>
                        <div style={{ flex: 1, backgroundColor: "#138808" }}></div>
                    </div>
                </div>


            </div>

            {/* Keyframe Styles */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes glow {
                    0%, 100% { filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.2)); }
                    50% { filter: drop-shadow(0 0 25px rgba(255, 255, 255, 0.5)); }
                }
                @keyframes twinkle {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.5); }
                }
                @keyframes flagGlow {
                    0%, 100% { box-shadow: 0 0 8px rgba(255, 153, 51, 0.5); }
                    50% { box-shadow: 0 0 15px rgba(255, 153, 51, 0.8); }
                }
            `}</style>

            <div className="footer-container">
                <div className="footer-content">
                    {/* Logo and Contact Section */}
                    <div className="footer-section logo-section">
                        <div className="logo">
                            {/* ✅ Use Next.js <Image> instead of <img> */}
                            <Image
                                src="/images/logoft.png"
                                alt="logo"
                                width={160}
                                height={60}
                                priority
                            />
                        </div>

                        <div className="contact-info">
                            <div className="contact-item">
                                <EmailSharp className="contact-icon" />
                                <div className="address">
                                    <h3>info@veloc.in</h3>
                                </div>
                            </div>

                            <div className="contact-item">
                                <Phone className="contact-icon" />
                                <div className="address">
                                    <p>IN +91 97123 72394</p>
                                    <p>US +1 (415) 409-8951</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <LocationOn className="contact-icon" />
                                <div className="address">
                                    <p>A-1, Golden City, Aspire Road,</p>
                                    <p>Mota Varachha, Surat - 395004</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className="footer-section">
                        <h3>SERVICES</h3>
                        <ul>
                            <li><Link href='/services/web_development'>Web Development</Link></li>
                            <li><Link href='/services/mobile_development'>Mobile App Development</Link></li>
                            <li><Link href='/services/shopify_development'>Game Development</Link></li>
                            <li><Link href='/services/ui_ux'>UI/UX Design</Link></li>
                        </ul>
                    </div>

                    {/* Company Section */}
                    <div className="footer-section">
                        <h3>COMPANY</h3>
                        <ul>
                            <li>
                                <Link href="/about-us">About Us</Link>
                            </li>
                            <li>
                                <Link href="/dedicated-developers">Dedicated Dev & Teams</Link>
                            </li>
                            <li>
                                <Link href="/our-work">Our Work</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Useful Links Section */}
                    <div className="footer-section">
                        <h3>USEFUL LINKS</h3>
                        <ul>
                            <li>
                                <Link href="/contact">Let&apos;s Talk</Link>
                            </li>
                            <li>
                                <Link href="/contact">Become A Partner</Link>
                            </li>
                            <li>
                                <Link href="/contact">Case Studies</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Section */}
                    <div className="footer-section">
                        <h3>RESOURCES</h3>
                        <ul>
                            <li>
                                <Link href="/faq">FAQs</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p>© Copyright 2025, Veloc. All Rights Reserved.</p>
                    <div className="social-icons">
                        <Link href="#" className="social-icon instagram">
                            <FaInstagram />
                        </Link>
                        <Link href="#" className="social-icon messenger">
                            <FaFacebookMessenger />
                        </Link>
                        <Link href="#" className="social-icon twitter">
                            <FaTwitter />
                        </Link>
                        <Link href="#" className="social-icon linkedin">
                            <FaLinkedinIn />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;