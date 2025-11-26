"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../styles/ShopifyDetail.css";
import { useRouter } from "next/navigation";
import { servicePages } from "../servicePageData";
import footerlogo from '@/public/images/footerlogo.png';
import TitleActivityWatcher from "@/components/TitleActivityWatcher";
import Head from "next/head";

export default function ServiceDetailPage({ params }) {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Unwrap params for Next.js 15+
    const resolvedParams = React.use(params);
    const { slug } = resolvedParams;

    // Find data based on slug
    const pageData = servicePages[slug];

    useEffect(() => {
        // Fix scroll shift on first load
        document.documentElement.style.scrollBehavior = "auto";

        AOS.init({
            duration: 1000,
            offset: 0, // IMPORTANT — fix scroll jump
            easing: "ease-in-out",
            once: true,
        });

        // Re-enable smooth scroll again after initialization
        setTimeout(() => {
            document.documentElement.style.scrollBehavior = "smooth";
        }, 100);

    }, []);

    useEffect(() => {
        document.title = `Services`;
    }, []);

    if (!pageData) {
        return (
            <div style={{ padding: "100px", textAlign: "center" }}>
                <h1>Service not found 😢</h1>
                <p>Looking for: <strong>{slug}</strong></p>
                <p>Available services: {Object.keys(servicePages).join(', ')}</p>
                <button
                    onClick={() => router.push('/')}
                    style={{
                        marginTop: '20px',
                        padding: '10px 20px',
                        cursor: 'pointer',
                        background: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px'
                    }}
                >
                    Go Home
                </button>
            </div>
        );
    }

    const { hero, benefits, services, projects, carousel } = pageData;

    // Pagination logic
    const projectItems = projects?.items || [];
    const totalPages = Math.ceil(projectItems.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = projectItems.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Smooth scroll to the start of projects section
        const projectsSection = document.querySelector('.projects-grid');
        if (projectsSection) {
            const gridTop = projectsSection.getBoundingClientRect().top + window.pageYOffset - 100;
            window.scrollTo({
                top: gridTop,
                behavior: 'smooth'
            });
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1);
        }
    };

    // Generate page numbers with ellipsis
    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) {
                    pages.push(i);
                }
                pages.push('ellipsis');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push('ellipsis');
                for (let i = totalPages - 3; i <= totalPages; i++) {
                    pages.push(i);
                }
            } else {
                pages.push(1);
                pages.push('ellipsis');
                pages.push(currentPage - 1);
                pages.push(currentPage);
                pages.push(currentPage + 1);
                pages.push('ellipsis');
                pages.push(totalPages);
            }
        }

        return pages;
    };

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
            <TitleActivityWatcher activeTitle="Services" />
            <div className="shopify-detail-page">
                {/* HERO SECTION */}
                <section className="hero-wrapper-shopify">
                    {/* Animated Background Elements */}
                    <div className="hero-content" >
                        <h1>{hero.title}</h1>
                        {hero.subtitle && <p className="hero-subtitle">{hero.subtitle}</p>}
                    </div>

                    <div
                        className="hero-icons"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                        data-aos-duration="1200"
                    >
                        <Image
                            src={hero.icons}
                            alt="Service Icons"
                            priority
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </section>

                {/* BENEFITS SECTION */}
                <section className="shopify-container">
                    <h1 className="shopify-title" data-aos="fade-down">
                        {benefits.title}
                    </h1>

                    <div className="benefits-grid">
                        {benefits.items.map((benefit, index) => (
                            <div
                                key={benefit.id}
                                className={`benefit-card ${benefit.featured ? "featured" : ""}`}
                                data-aos={benefit.featured ? "flip-left" : "fade-up"}
                                data-aos-delay={index * 120}
                            >
                                {!benefit.featured && benefit.icon && typeof benefit.icon === 'string' && !benefit.icon.includes('/') ? (
                                    <div className="benefit-icon" style={{ fontSize: '3rem' }}>
                                        {benefit.icon}
                                    </div>
                                ) : !benefit.featured && (
                                    <Image
                                        className="benefit-icon"
                                        src={benefit.icon}
                                        alt={benefit.title}
                                        width={80}
                                        height={80}
                                        data-aos="zoom-in"
                                    />
                                )}

                                <div className="benefit-content">
                                    <h3
                                        className="benefit-title"
                                        data-aos="fade-right"
                                        data-aos-delay={index * 150}
                                    >
                                        {benefit.title}
                                    </h3>

                                    {benefit.description && (
                                        <p
                                            className="benefit-description"
                                            data-aos="fade-left"
                                            data-aos-delay={index * 180}
                                        >
                                            {benefit.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SERVICES SECTION */}
                {services && services.items && services.items.length > 0 && (
                    <section className="shopify-services">
                        <div className="shopify-box" style={{ display: "flex", flexDirection: "column" }}>
                            <div data-aos="fade-up">
                                <h2>{services.title}</h2>
                                <p>{services.description}</p>
                            </div>

                            <div className="services-grid">
                                {services.items.map((service, index) => (
                                    <div
                                        key={service.id}
                                        className={`service-card ${index % 2 === 0 ? "number-top" : "number-bottom"}`}
                                        data-aos="zoom-in-up"
                                        data-aos-delay={index * 150}
                                    >
                                        <span
                                            className="service-number"
                                            data-aos="fade-in"
                                            data-aos-delay={index * 100}
                                        >
                                            {service.id}
                                        </span>

                                        <div className="service-content">
                                            {index % 2 === 0 && (
                                                <Image
                                                    src={service.img}
                                                    alt={service.title}
                                                    width={200}
                                                    height={200}
                                                    data-aos="flip-left"
                                                />
                                            )}

                                            <div>
                                                <h3 data-aos="fade-right">{service.title}</h3>
                                                <p data-aos="fade-up">{service.desc}</p>
                                            </div>

                                            {index % 2 !== 0 && (
                                                <Image
                                                    src={service.img}
                                                    alt={service.title}
                                                    width={200}
                                                    height={200}
                                                    data-aos="flip-right"
                                                />
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* PROJECTS SECTION */}
                {projects && projects.items && (
                    <section className="shopify-work-container">
                        <h1 className="main-title" data-aos="fade-right" data-aos-duration="1200">
                            {projects.title}
                        </h1>

                        <div className="projects-grid">
                            {currentItems.map((project, index) => (
                                <div
                                    key={project.id}
                                    className={`project-card ${project.size}`}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 150}
                                    onClick={() => router.push(project.link)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <div className="project-image-wrapper">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="project-image"
                                            loading="lazy"
                                        />
                                        <div className="project-overlay" data-aos="fade-in">
                                            <div className="project-content" data-aos="zoom-in" data-aos-delay="300">
                                                <p className="company-name">{project.company}</p>
                                                <h3 className="project-title">{project.title}</h3>
                                                <p className="project-category">{project.category}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination Controls */}
                        {projectItems.length > itemsPerPage && (
                            <div className="pagination-container">
                                <button
                                    className="pagination-arrow"
                                    onClick={handlePrevPage}
                                    disabled={currentPage === 1}
                                    aria-label="Previous page"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                <div className="pagination-numbers">
                                    {getPageNumbers().map((page, index) => (
                                        page === 'ellipsis' ? (
                                            <span key={`ellipsis-${index}`} className="pagination-ellipsis">
                                                ...
                                            </span>
                                        ) : (
                                            <button
                                                key={page}
                                                className={`pagination-number ${currentPage === page ? 'active' : ''}`}
                                                onClick={() => handlePageChange(page)}
                                                aria-label={`Go to page ${page}`}
                                                aria-current={currentPage === page ? 'page' : undefined}
                                            >
                                                {page}
                                            </button>
                                        )
                                    ))}
                                </div>

                                <button
                                    className="pagination-arrow"
                                    onClick={handleNextPage}
                                    disabled={currentPage === totalPages}
                                    aria-label="Next page"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </section>
                )}

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
        </>
    );
}