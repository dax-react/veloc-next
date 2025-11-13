'use client';

import React, { useEffect } from 'react';
import { FaBook, FaCalendar, FaCode, FaUser } from 'react-icons/fa';
import { FaCircleQuestion } from 'react-icons/fa6';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../../styles/DedicatedDevelopers.css";
import footerlogo from '../../public/images/footerlogo.png';
import Link from 'next/link';

export default function DedicatedDevelopers() {
    const router = useRouter();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
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
                <svg viewBox="0 0 24 24" fill="#02569B" className="tech-icon">
                    <path d="M14.5 2L4 12.5l3.5 3.5L18 6h-3.5z" />
                    <path d="M14.5 12.5L11 16l3.5 3.5L21 13l-6.5-6.5h-3.5l3.5 3.5-3.5 3.5z" opacity="0.5" />
                </svg>
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
            subtitle: '$15/hr / month',
            description: 'Pick the role/tech and we\'ll map the right dev.',
            plans: [
                { name: 'Normal Plan', details: '(J/M/S)', priceRange: '$2,992-$4,400', period: '/mo' },
                { name: 'Advance Plan', details: '(J/M/S)', priceRange: '$4,400-$6,160', period: '/mo' },
                { name: 'Advance Plus', details: '(Tech Lead)', price: '$7,040', period: '/mo' }
            ],
            range: 'Range: $4,000-$13,500',
            buttonText: 'Request Vetted Developer Resume',
            buttonClass: 'btn-light'
        },
        {
            title: 'Team Plan',
            subtitle: '$50 managing fee + dev $',
            description: 'One pod executing a clear sprint plan. Best value.',
            plans: [
                { name: 'Junior team', details: '(5 people)', price: '$4,000', period: '/mo' },
                { name: 'Mid team', details: '(5 people)', price: '$7,500', period: '/mo' },
                { name: 'Senior team', details: '(5 people)', price: '$13,500', period: '/mo' }
            ],
            range: 'Range: $4,000-$13,500',
            buttonText: 'Request Vetted Developer Resume',
            buttonClass: 'btn-primary',
            isHighlighted: true
        },
        {
            title: 'Enterprise / Custom',
            subtitle: 'Tailored pools, compliance, SLAs',
            description: 'For regulated or high-scale environments: SSO/SAML, VPC peering, private runners, audit logs, enhanced SLAs.',
            buttonText: 'Request Proposal',
            buttonClass: 'btn-light',
            isEnterprise: true
        }
    ];

    return (
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

                {/* Pricing Section */}
                <div className="dd-pricing-section">
                    <h2 className="dd-pricing-heading" data-aos="fade-up">Pricing (monthly)</h2>
                    <div className="dd-pricing-container">
                        {pricingPlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`dd-pricing-card ${plan.isHighlighted ? 'dd-highlighted' : ''} ${plan.isEnterprise ? 'dd-enterprise' : ''}`}
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                            >
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
                                                <span className="dd-plan-details">{item.details}</span>
                                            </div>
                                            <div className="dd-plan-price">
                                                {item.priceRange ? (
                                                    <span className="dd-price-range">{item.priceRange}</span>
                                                ) : (
                                                    <span className="dd-price">{item.price}</span>
                                                )}
                                                <span className="dd-period">{item.period}</span>
                                            </div>
                                        </div>
                                    ))}
                                    {plan.range && (
                                        <div className="dd-price-range-info">
                                            {plan.range}
                                        </div>
                                    )}
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
    );
}