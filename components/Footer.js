/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";

import Image from "next/image";
import { Email, Phone, LocationOn, EmailSharp } from "@mui/icons-material";
import { FaInstagram, FaFacebookMessenger, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
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
                            <li>Web Development</li>
                            <li>Mobile App Development</li>
                            <li>Game Development</li>
                            <li>UI/UX Design</li>
                        </ul>
                    </div>

                    {/* Company Section */}
                    <div className="footer-section">
                        <h3>COMPANY</h3>
                        <ul>
                            <li>
                                <Link href="/about">About Us</Link>
                            </li>
                            <li>
                                <Link href="/dedicated-developers">Dedicated Dev & Teams</Link>
                            </li>
                            <li>
                                <Link href="/ourwork">Our Work</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Useful Links Section */}
                    <div className="footer-section">
                        <h3>USEFUL LINKS</h3>
                        <ul>
                            <li>
                                <Link href="/contact">Let's Talk</Link>
                            </li>
                            <li>
                                <Link href="/partners">Become A Partner</Link>
                            </li>
                            <li>
                                <Link href="/case-studies">Case Studies</Link>
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
