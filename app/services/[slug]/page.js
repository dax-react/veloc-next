"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../styles/ShopifyDetail.css";
import { useRouter } from "next/navigation";
import { servicePages } from "../servicePageData";
import footerlogo from '@/public/images/footerlogo.png';


export default function ServiceDetailPage({ params }) {
    const router = useRouter();

    // Unwrap params for Next.js 15+
    const resolvedParams = React.use(params);
    const { slug } = resolvedParams;

    // Find data based on slug
    const pageData = servicePages[slug];

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
            easing: "ease-out-cubic",
        });
        AOS.refresh();
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

    return (
        <div className="shopify-detail-page">
            {/* HERO SECTION */}
            <section className="hero-wrapper-shopify">
                {/* Animated Background Elements */}
                <div className="dd-bg-decoration dd-circle-1"></div>
                <div className="dd-bg-decoration dd-circle-2"></div>
                <div className="dd-bg-decoration dd-circle-3"></div>
                <div className="hero-content" data-aos="fade-up" data-aos-delay="100">
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
                    <div className="container" style={{ display: "flex", flexDirection: "column" }}>
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
                        {projects.items.map((project, index) => (
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
    );
}