/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useEffect, useState } from 'react';
import { FaBook, FaCalendar, FaCode, FaUser } from 'react-icons/fa';
import { FaCircleQuestion, FaFlutter } from 'react-icons/fa6';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../../styles/DedicatedDevelopers.css";
import "../../styles/Home.css";
import footerlogo from '../../public/images/footerlogo.png';
import Link from 'next/link';
import TitleActivityWatcher from "@/components/TitleActivityWatcher";

import trusticon1 from '../../public/images/trusticon1.png';
import trusticon2 from '../../public/images/trusticon2.png';
import trusticon3 from '../../public/images/trusticon3.png';
import trusticon4 from '../../public/images/trusticon4.png';
import trusticon5 from '../../public/images/trusticon5.png';
import trusticon6 from '../../public/images/trusticon6.png';

import whyicon1 from '../../public/images/whyicon1.png';
import whyicon2 from '../../public/images/whyicon2.png';
import whyicon3 from '../../public/images/whyicon3.png';
import whyicon4 from '../../public/images/whyicon4.png';
import { Clock, AlertTriangle, Lightbulb, Maximize2 } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Head from 'next/head';


export default function DedicatedDevelopers() {
    const router = useRouter();

    useEffect(() => {
        AOS.init({
            duration: 600,   // fast animations
            easing: "ease-out-cubic",
            once: true,
        });
    }, []);

    useEffect(() => {
        document.title = "Dedicated Developers"; // becomes About Us | Veloc
    }, []);


    const stacks = [
        {
            label: 'React',
            icon: (
                <svg viewBox="0 0 24 24" fill="#61DAFB" className="tech-icon">
                    <circle cx="12" cy="12" r="2" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(60 12 12)" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(120 12 12)" />
                </svg>
            )
        },
        {
            label: 'Next.js',
            icon: (
                <div className="nextjs-icon">N</div>
            )
        },
        {
            label: 'Node.js',
            icon: (
                <svg viewBox="0 0 24 24" fill="#339933" className="tech-icon">
                    <path d="M12 2l-10 5.5v11L12 24l10-5.5v-11L12 2zm7.5 15.2L12 21l-7.5-3.8V8.3L12 4.5l7.5 3.8v8.9z" />
                </svg>
            )
        },
        {
            label: 'Python / FastAPI',
            icon: (
                <svg viewBox="0 0 24 24" className="tech-icon">
                    <path fill="#3776AB" d="M12 2c-3 0-2.8 1.3-2.8 1.3l.1 2.6h2.8v.4H6.8S4 6.1 4 9.1s2 2.9 2 2.9h1.2V10.5c0-1.3 1.1-2.4 2.4-2.4h4.3c1.3 0 2.3-1.1 2.3-2.4V3.5C16.2 2.3 15 2 12 2zm-1.5 1.3c.3 0 .6.3.6.6s-.3.6-.6.6-.6-.3-.6-.6.3-.6.6-.6z" />
                    <path fill="#FFD43B" d="M12 22c3 0 2.8-1.3 2.8-1.3l-.1-2.6h-2.8v-.4h5.3s2.8.2 2.8-2.8-2-2.9-2-2.9h-1.2v1.5c0 1.3-1.1 2.4-2.4 2.4H9.1c-1.3 0-2.3 1.1-2.3 2.4v2.3C6.8 21.7 8 22 12 22zm1.5-1.3c-.3 0-.6-.3-.6-.6s.3-.6.6-.6.6.3.6.6-.3.6-.6.6z" />
                </svg>
            )
        },
        {
            label: 'AI / LLMs',
            icon: (
                <svg viewBox="0 0 24 24" fill="#000" className="tech-icon">
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="6" cy="6" r="1.5" />
                    <circle cx="18" cy="6" r="1.5" />
                    <circle cx="6" cy="18" r="1.5" />
                    <circle cx="18" cy="18" r="1.5" />
                    <line x1="12" y1="10" x2="7.5" y2="7.5" stroke="#000" strokeWidth="1" />
                    <line x1="12" y1="10" x2="16.5" y2="7.5" stroke="#000" strokeWidth="1" />
                    <line x1="12" y1="14" x2="7.5" y2="16.5" stroke="#000" strokeWidth="1" />
                    <line x1="12" y1="14" x2="16.5" y2="16.5" stroke="#000" strokeWidth="1" />
                </svg>
            )
        },
        {
            label: 'Laravel / PHP',
            icon: (
                <svg viewBox="0 0 24 24" fill="#FF2D20" className="tech-icon">
                    <path d="M2 8.5L12 3l10 5.5v11L12 25 2 19.5v-11z" opacity="0.3" />
                    <path d="M12 3L2 8.5M12 3l10 5.5M12 3v8M2 8.5v11M2 19.5L12 25M22 8.5v11M22 19.5L12 25" stroke="#FF2D20" strokeWidth="1.2" fill="none" />
                </svg>
            )
        },
        {
            label: 'Flutter',
            icon: (
                <FaFlutter />
            )
        },
        {
            label: 'Blockchain',
            icon: (
                <svg viewBox="0 0 24 24" fill="#000" className="tech-icon">
                    <rect x="3" y="3" width="6" height="6" stroke="#000" strokeWidth="1.5" fill="none" />
                    <rect x="15" y="3" width="6" height="6" stroke="#000" strokeWidth="1.5" fill="none" />
                    <rect x="9" y="15" width="6" height="6" stroke="#000" strokeWidth="1.5" fill="none" />
                    <line x1="9" y1="6" x2="15" y2="6" stroke="#000" strokeWidth="1.5" />
                    <line x1="6" y1="9" x2="12" y2="15" stroke="#000" strokeWidth="1.5" />
                    <line x1="18" y1="9" x2="12" y2="15" stroke="#000" strokeWidth="1.5" />
                </svg>
            )
        }
    ];

    const pricingPlans = [
        {
            title: 'Dedicated Developer',
            subtitle: '2176 hrs / month',
            description: "Pick the role/tech and we’ll map the right tier.",
            plans: [
                {
                    name: '💡 Normal Plan',
                    details: '',
                    priceRange: '(J/M/S)',
                    period: ''
                },
                {
                    name: '💎 Advance Plan',
                    details: '',
                    priceRange: '(J/M/S)',
                    period: ''
                },
                {
                    name: '🏆 Advance Plus',
                    details: '',
                    priceRange: '(Tech Lead)',
                    period: ''
                }
            ],
            buttonText: 'Request Vetted Developer Resume',
            buttonClass: 'btn-light',
            isHighlighted: false,
            isEnterprise: false
        },
        {
            title: 'Team Plan',
            subtitle: '250 combined hrs + PM + QA',
            description: 'One pod executing a clear sprint plan. Best value.',
            plans: [
                {
                    name: '🌱 Junior team',
                    details: '',
                    price: '(5 people)',
                    period: ''
                },
                {
                    name: '🌿 Mid team',
                    details: '',
                    price: '(5 people)',
                    period: ''
                },
                {
                    name: '🌳 Senior team',
                    details: '',
                    price: '(5 people)',
                    period: ''
                }
            ],
            buttonText: 'Request Vetted Developer Resume',
            buttonClass: 'btn-primary',
            isHighlighted: true,
            isEnterprise: false
        },
        {
            title: 'Enterprise / Custom',
            subtitle: 'Tailored pods, compliance, SLAs',
            description: 'For regulated or high-scale environments: SSO/SAML, VPC peering, private runners, audit logs, enhanced SLAs.',
            plans: null,
            buttonText: 'Request Proposal',
            buttonClass: 'btn-light',
            isHighlighted: false,
            isEnterprise: true
        }
    ];


    const testimonials = [
        {
            id: 1,
            text: "Veloc helped us scale from idea to MVP in just 6 weeks.Veloc helped us scale from idea to MVP in just 6 weeks.",
            name: "Martin Donin",
            title: "Owner of XYZ",
            image: "/images/martin.jpg" // Add your image path
        },
        {
            id: 2,
            text: "Veloc helped us scale from idea to MVP in just 6 weeks.Veloc helped us scale from idea to MVP in just 6 weeks.",
            name: "Tatiana Philips",
            title: "Owner of XYZ",
            image: "/images/tatiana.jpg"
        },
        {
            id: 3,
            text: "Veloc helped us scale from idea to MVP in just 6 weeks.Veloc helped us scale from idea to MVP in just 6 weeks.",
            name: "Marcus Torff",
            title: "Owner of XYZ",
            image: "/images/marcus.jpg"
        },
        {
            id: 4,
            text: "Veloc helped us scale from idea to MVP in just 6 weeks.Veloc helped us scale from idea to MVP in just 6 weeks.",
            name: "Sarah Johnson",
            title: "Owner of ABC",
            image: "/images/sarah.jpg"
        },
        {
            id: 5,
            text: "Veloc helped us scale from idea to MVP in just 6 weeks.Veloc helped us scale from idea to MVP in just 6 weeks.",
            name: "David Smith",
            title: "Owner of DEF",
            image: "/images/david.jpg"
        }
    ];
    const features = [
        {
            id: 1,
            icon: whyicon1,
            title: "Fast Hiring",
            description: "Get pre-vetted developers within 48 hours."
        },
        {
            id: 2,
            icon: whyicon2,
            title: "Risk-Free Trial",
            description: "Try before committing with a 7-14 day no-risk trial."
        },
        {
            id: 3,
            icon: whyicon3,
            title: "Senior Talent Only",
            description: "We match only 3-10+ years experienced engineers."
        },
        {
            id: 4,
            icon: whyicon4,
            title: "Flexible Engagement",
            description: "Scale your team up or down anytime."
        }
    ];
    const industries = [
        { id: 1, icon: trusticon1, name: 'Fintech' },
        { id: 2, icon: trusticon2, name: 'HealthTech' },
        { id: 3, icon: trusticon3, name: 'eCommerce' },
        { id: 4, icon: trusticon4, name: 'SaaS' },
        { id: 5, icon: trusticon5, name: 'Web3' },
        { id: 6, icon: trusticon6, name: 'EdTech' }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const getVisibleCards = () => {
        const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        const nextIndex = (currentIndex + 1) % testimonials.length;

        return {
            prev: testimonials[prevIndex],
            current: testimonials[currentIndex],
            next: testimonials[nextIndex]
        };
    };

    const { prev, current, next } = getVisibleCards();
    return (
        <>
            <Head>
                <title>Hire dedicated developers, Shopify Experts & Designers in Bengaluru | VELOC</title>

                <meta name="description" content="Hire dedicated developers, Shopify experts, and graphic designers in Bengaluru. Startup MVPs, apps, SaaS, and custom software built fast with VELOC’s expert team." />
                <meta name="keywords" content="hire developers Bengaluru, dedicated developers India, shopify developer Bengaluru, hire shopify experts, software development company Bengaluru, startup mvp development, saas development agency, hire graphic designer, ui ux designer Bengaluru, mobile app development Bengaluru, web development agency Bengaluru, hire react developer, hire node developer, hire flutter developer, custom shopify store development, bengaluru tech talent, outsourced development team, hire remote developers india" />

                {/* OG TAGS */}
                <meta property="og:title" content="Hire Developers, Shopify Experts & Designers | VELOC" />
                <meta property="og:description" content="Hire dedicated developers, Shopify experts, and creative designers in Bengaluru with VELOC. Build apps, MVPs, Shopify stores & more." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://veloc.in/" />
                <meta property="og:image" content="https://veloc.in/og-image.jpg" />

                {/* TWITTER */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hire dedicated Developers, Shopify Experts & Designers | VELOC" />
                <meta name="twitter:description" content="Hire dedicated developers, Shopify experts, and creative designers in Bengaluru. Build apps, MVPs & Shopify stores with VELOC." />
                <meta name="twitter:image" content="https://veloc.in/og-image.jpg" />

                {/* Additional */}
                <meta name="robots" content="index, follow" />
                <meta name="author" content="VELOC" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <TitleActivityWatcher activeTitle="Dedicated Developers" />
            <div className="dd-wrapper">
                <div className="dedicated-developers-page">
                    {/* Hero Section */}
                    <div className="dd-hero-section">
                        {/* Animated Background Elements */}
                        <div className="dd-bg-decoration dd-circle-1"></div>
                        <div className="dd-bg-decoration dd-circle-2"></div>
                        <div className="dd-bg-decoration dd-circle-3"></div>

                        <div className="dd-hero-content" data-aos="fade-up">
                            <h1 className="dd-hero-title" data-aos="fade-up" data-aos-delay="100">
                                Dedicated Developers & Teams
                            </h1>

                            <p className="dd-hero-subtitle" data-aos="fade-up" data-aos-delay="200">
                                Spin up a dedicated developer or a small team—fast, flexible, and aligned to your roadmap.
                            </p>

                            {/* Feature badges */}
                            <div className="dd-feature-badges" data-aos="fade-up" data-aos-delay="300">
                                <div className="dd-badge">
                                    <div className="dd-badge-icon dd-badge-green">✓</div>
                                    <span>Start in 5-7 days</span>
                                </div>

                                <div className="dd-badge">
                                    <div className="dd-badge-icon dd-badge-purple"><FaUser /></div>
                                    <span>NDA & 100% IP ownership</span>
                                </div>

                                <div className="dd-badge">
                                    <div className="dd-badge-icon dd-badge-orange"><FaCode /></div>
                                    <span>Code tests & peer reviews</span>
                                </div>

                                <div className="dd-badge">
                                    <div className="dd-badge-icon dd-badge-blue"><FaBook /></div>
                                    <span>Sprint planning & reports</span>
                                </div>
                            </div>

                            {/* Action buttons */}
                            <div className="dd-action-buttons" data-aos="fade-up" data-aos-delay="400">
                                <button
                                    className="dd-btn dd-btn-secondary"
                                    onClick={() => window.open('https://calendly.com/kaushik-veloc/introduction-call', '_blank')}
                                >
                                    <FaCalendar />
                                    <span>Book a 15 min call</span>
                                </button>


                                <button
                                    className="dd-btn dd-btn-primary"
                                    onClick={() => router.push('/dedicated-developers-forms')}
                                >
                                    <FaCircleQuestion />
                                    <span>Request Vetted Developer Resume</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Stack Section */}
                    <div className="dd-stack-section">
                        <h2 className="dd-stack-title" data-aos="fade-up">
                            STACK WE OFFER
                        </h2>
                        <p className="dd-stack-subtitle" data-aos="fade-up" data-aos-delay="100">
                            Need something else? Tell us your stack—we&apos;ll match the right engineers and set up a trial week.
                        </p>
                        <div className="dd-stack-cards">
                            {stacks.map((item, index) => (
                                <div
                                    className="dd-stack-card"
                                    key={index}
                                    data-aos="zoom-in"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="dd-icon-wrapper">{item.icon}</div>
                                    <span className="dd-stack-label">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <section className="industries-section" data-aos="fade-up">
                        <div className="industries-left" data-aos="fade-right">
                            <h2 className="industries-title">
                                Trusted Across<br />Industries
                            </h2>
                        </div>

                        <div className="industries-divider" data-aos="zoom-in"></div>

                        <div className="industries-grid">
                            {industries.map((industry) => (
                                <div
                                    key={industry.id}
                                    className="industry-box"
                                    data-aos="fade-up"
                                    data-aos-delay={industry.id * 100}
                                >
                                    <div className="industry-icon">
                                        <Image src={industry.icon} alt={industry.name} fill className="icon-img" />
                                    </div>
                                    <p>{industry.name}</p>
                                </div>
                            ))}
                        </div>
                    </section>


                    <div style={{
                        background: 'linear-gradient(135deg, #150c4e 0%, #1a0f5e 100%)',
                        padding: '80px 20px',
                        minHeight: '600px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            maxWidth: '1400px',
                            width: '100%',
                            margin: '0 auto'
                        }}>
                            {/* Title */}
                            <h2 style={{
                                color: '#ffffff',
                                textAlign: 'center',
                                fontSize: 'clamp(2rem, 5vw, 4rem)',
                                fontWeight: '700',
                                marginBottom: '60px',
                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
                            }}>
                                Success Stories from Our Clients
                            </h2>

                            {/* Carousel Container */}
                            <div style={{
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '40px',
                                padding: '0 20px'
                            }}>
                                {/* Previous Button */}
                                <button
                                    onClick={handlePrev}
                                    disabled={isTransitioning}
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        border: '2px solid rgba(255, 255, 255, 0.3)',
                                        borderRadius: '50%',
                                        width: '60px',
                                        height: '60px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: isTransitioning ? 'not-allowed' : 'pointer',
                                        transition: 'all 0.3s ease',
                                        color: '#ffffff',
                                        backdropFilter: 'blur(10px)',
                                        flexShrink: 0,
                                        opacity: isTransitioning ? 0.5 : 1
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isTransitioning) {
                                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                                            e.currentTarget.style.transform = 'scale(1.1)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                >
                                    <ChevronLeft size={28} strokeWidth={2.5} />
                                </button>

                                {/* Cards Container */}
                                <div style={{
                                    position: 'relative',
                                    width: '100%',
                                    maxWidth: '1000px',
                                    height: '350px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {/* Left Card */}
                                    <div style={{
                                        position: 'absolute',
                                        left: '0',
                                        background: '#ffffff',
                                        borderRadius: '16px',
                                        padding: '32px',
                                        width: '320px',
                                        minHeight: '280px',
                                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
                                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                        transform: 'scale(0.85)',
                                        opacity: '0.6',
                                        zIndex: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}>
                                        <div style={{ marginBottom: '24px', flexGrow: 1 }}>
                                            <p style={{
                                                color: '#1a1447',
                                                fontSize: '16px',
                                                lineHeight: '1.6',
                                                margin: 0,
                                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
                                            }}>
                                                &quot;{prev.text}&quot;
                                            </p>
                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            paddingTop: '20px',
                                            borderTop: '1px solid #e5e7eb'
                                        }}>
                                            <div style={{
                                                width: '48px',
                                                height: '48px',
                                                borderRadius: '50%',
                                                overflow: 'hidden',
                                                flexShrink: 0,
                                                border: '2px solid #f3f4f6'
                                            }}>
                                                <img
                                                    src={`https://i.pravatar.cc/150?img=${prev.id}`}
                                                    alt={prev.name}
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                />
                                            </div>
                                            <div>
                                                <h4 style={{
                                                    color: '#1a1447',
                                                    fontSize: '16px',
                                                    fontWeight: '700',
                                                    margin: 0,
                                                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
                                                }}>
                                                    {prev.name}
                                                </h4>
                                                <p style={{
                                                    color: '#4230c4',
                                                    fontSize: '14px',
                                                    margin: 0,
                                                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
                                                }}>
                                                    {prev.title}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Center Card (Active) */}
                                    <div style={{
                                        position: 'absolute',
                                        left: '50%',
                                        transform: 'translateX(-50%) scale(1)',
                                        background: '#ffffff',
                                        borderRadius: '16px',
                                        padding: '40px',
                                        width: '380px',
                                        minHeight: '300px',
                                        boxShadow: '0 25px 70px rgba(0, 0, 0, 0.4)',
                                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                        opacity: 1,
                                        zIndex: 10,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}>
                                        <div style={{ marginBottom: '24px', flexGrow: 1 }}>
                                            <p style={{
                                                color: '#1a1447',
                                                fontSize: '18px',
                                                lineHeight: '1.7',
                                                margin: 0,
                                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
                                            }}>
                                                &quot;{current.text}&quot;
                                            </p>
                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            paddingTop: '20px',
                                            borderTop: '1px solid #e5e7eb'
                                        }}>
                                            <div style={{
                                                width: '56px',
                                                height: '56px',
                                                borderRadius: '50%',
                                                overflow: 'hidden',
                                                flexShrink: 0,
                                                border: '3px solid #f3f4f6'
                                            }}>
                                                <img
                                                    src={`https://i.pravatar.cc/150?img=${current.id}`}
                                                    alt={current.name}
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                />
                                            </div>
                                            <div>
                                                <h4 style={{
                                                    color: '#1a1447',
                                                    fontSize: '18px',
                                                    fontWeight: '700',
                                                    margin: 0,
                                                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
                                                }}>
                                                    {current.name}
                                                </h4>
                                                <p style={{
                                                    color: '#4230c4',
                                                    fontSize: '15px',
                                                    margin: 0,
                                                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
                                                }}>
                                                    {current.title}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Card */}
                                    <div style={{
                                        position: 'absolute',
                                        right: '0',
                                        background: '#ffffff',
                                        borderRadius: '16px',
                                        padding: '32px',
                                        width: '320px',
                                        minHeight: '280px',
                                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
                                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                        transform: 'scale(0.85)',
                                        opacity: '0.6',
                                        zIndex: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}>
                                        <div style={{ marginBottom: '24px', flexGrow: 1 }}>
                                            <p style={{
                                                color: '#1a1447',
                                                fontSize: '16px',
                                                lineHeight: '1.6',
                                                margin: 0,
                                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
                                            }}>
                                                &quot;{next.text}&quot;
                                            </p>
                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            paddingTop: '20px',
                                            borderTop: '1px solid #e5e7eb'
                                        }}>
                                            <div style={{
                                                width: '48px',
                                                height: '48px',
                                                borderRadius: '50%',
                                                overflow: 'hidden',
                                                flexShrink: 0,
                                                border: '2px solid #f3f4f6'
                                            }}>
                                                <img
                                                    src={`https://i.pravatar.cc/150?img=${next.id}`}
                                                    alt={next.name}
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                />
                                            </div>
                                            <div>
                                                <h4 style={{
                                                    color: '#1a1447',
                                                    fontSize: '16px',
                                                    fontWeight: '700',
                                                    margin: 0,
                                                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
                                                }}>
                                                    {next.name}
                                                </h4>
                                                <p style={{
                                                    color: '#4230c4',
                                                    fontSize: '14px',
                                                    margin: 0,
                                                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
                                                }}>
                                                    {next.title}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Next Button */}
                                <button
                                    onClick={handleNext}
                                    disabled={isTransitioning}
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        border: '2px solid rgba(255, 255, 255, 0.3)',
                                        borderRadius: '50%',
                                        width: '60px',
                                        height: '60px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: isTransitioning ? 'not-allowed' : 'pointer',
                                        transition: 'all 0.3s ease',
                                        color: '#ffffff',
                                        backdropFilter: 'blur(10px)',
                                        flexShrink: 0,
                                        opacity: isTransitioning ? 0.5 : 1
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isTransitioning) {
                                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                                            e.currentTarget.style.transform = 'scale(1.1)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                >
                                    <ChevronRight size={28} strokeWidth={2.5} />
                                </button>
                            </div>

                            {/* Dots Indicator */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '8px',
                                marginTop: '40px'
                            }}>
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            if (!isTransitioning) {
                                                setIsTransitioning(true);
                                                setCurrentIndex(index);
                                                setTimeout(() => setIsTransitioning(false), 500);
                                            }
                                        }}
                                        style={{
                                            width: currentIndex === index ? '32px' : '12px',
                                            height: '12px',
                                            borderRadius: '6px',
                                            background: currentIndex === index
                                                ? 'rgba(255, 255, 255, 0.9)'
                                                : 'rgba(255, 255, 255, 0.3)',
                                            border: 'none',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease'
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>


                    <section className="why-choose-section" data-aos="fade-up">
                        <div className="why-choose-container">
                            <h2 className="why-choose-title" data-aos="fade-up">Why Businesses Choose Veloc</h2>

                            <div className="features-grid">
                                {features.map((feature) => (
                                    <div
                                        key={feature.id}
                                        className="feature-card"
                                        data-aos="zoom-in"
                                        data-aos-delay={feature.id * 150}
                                    >
                                        <div className="icon-wrapper">
                                            <Image src={feature.icon} alt={feature.title} width={40} height={40} />
                                        </div>

                                        <div className="feature-content">
                                            <h3 className="feature-title">{feature.title}</h3>
                                            <p className="feature-description">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Pricing Section */}
                    <div className="dd-pricing-section" data-aos="fade-up">
                        <h2 className="dd-pricing-heading" data-aos="fade-up">Pricing (monthly)</h2>

                        <div className="dd-pricing-container">
                            {pricingPlans.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`dd-pricing-card ${plan.isHighlighted ? 'dd-highlighted' : ''}`}
                                    data-aos="zoom-in"
                                    data-aos-delay={index * 150}
                                >
                                    {plan.isHighlighted && (
                                        <div className="dd-recommended-badge">
                                            ⭐ Recommended
                                        </div>
                                    )}
                                    <div className="dd-card-header">
                                        <h3 className="dd-plan-title">{plan.title}</h3>
                                        <p className="dd-plan-subtitle">{plan.subtitle}</p>
                                        <p className="dd-plan-description">{plan.description}</p>
                                    </div>

                                    <div className="dd-card-body">
                                        {plan.plans && plan.plans.map((item, idx) => (
                                            <div key={idx} className="dd-plan-item">
                                                <div className="dd-plan-info">
                                                    <span className="dd-plan-name">{item.name}</span>
                                                    {item.details && <span className="dd-plan-details">{item.details}</span>}
                                                </div>
                                                <div className="dd-plan-price">
                                                    {item.priceRange ? (
                                                        <span className="dd-price-range">{item.priceRange}</span>
                                                    ) : (
                                                        <span className="dd-price">{item.price}</span>
                                                    )}
                                                    {item.period && <span className="dd-period">{item.period}</span>}
                                                </div>
                                            </div>
                                        ))}
                                        {plan.range && <div className="dd-price-range-info">{plan.range}</div>}
                                    </div>

                                    <div className="dd-card-footer">
                                        <Link href="/dedicated-developers-forms">
                                            <button className={`dd-pricing-btn ${plan.buttonClass}`}>
                                                {plan.buttonText}
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Carousel Section */}
                    <div className="dd-carousel-container" data-aos="fade-up">
                        <div className="dd-carousel">
                            <div className="dd-carousel-track">
                                <Image src={footerlogo} alt="Trusted Logos" />
                                <Image src={footerlogo} alt="Trusted Logos" />
                                <Image src={footerlogo} alt="Trusted Logos" />
                                <Image src={footerlogo} alt="Trusted Logos" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}