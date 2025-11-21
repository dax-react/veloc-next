// app/our-work/page.js
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Tab, Tabs, Typography } from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../../styles/OurWork.css';
import TitleActivityWatcher from "@/components/TitleActivityWatcher";
import { portfolioItems, categories } from '@/data/portfolioData';
import { Code } from '@mui/icons-material';
import Link from 'next/link';

// Import images
import footerlogo from '@/public/images/footerlogo.png';
import approach1 from '@/public/images/aprroach1.png';
import approach2 from '@/public/images/aprroach2.png';
import approach3 from '@/public/images/aprroach3.png';
import approach4 from '@/public/images/aprroach4.png';
import ourwork1 from '../../public/images/ourwork1.png';
import ourwork2 from '../../public/images/ourwork2.png';
import ourwork13 from '../../public/images/ourwork13.png';
import ourwor4 from '../../public/images/ourwork4.png';
import ourwor5 from '../../public/images/ourwork5.png';
import ourwor6 from '../../public/images/ourwork6.png';

const OurWork = () => {
    const [value, setValue] = useState(0);
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3);

    const testimonials = [
        {
            id: 1,
            text: "I've been using this product for a few months now, and I'm honestly impressed! The quality is top-notch, the interface is super responsive, and it has made my daily workflow so much smoother. Highly recommended to anyone looking for reliable results.",
            name: "Jordan M",
            position: "CEO at Amazon",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
        },
        {
            id: 2,
            text: "I've been using this product for a few months now, and I'm honestly impressed! The quality is top-notch, the interface is super responsive, and it has made my daily workflow so much smoother. Highly recommended to anyone looking for reliable results.",
            name: "Miracle Levin",
            position: "CEO at Amazon",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
        },
        {
            id: 3,
            text: "I've been using this product for a few months now, and I'm honestly impressed! The quality is top-notch, the interface is super responsive, and it has made my daily workflow so much smoother. Highly recommended to anyone looking for reliable results.",
            name: "Marcus Ekstrom",
            position: "CEO at Amazon",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
        },
        {
            id: 4,
            text: "I've been using this product for a few months now, and I'm honestly impressed! The quality is top-notch, the interface is super responsive, and it has made my daily workflow so much smoother. Highly recommended to anyone looking for reliable results.",
            name: "Sarah Johnson",
            position: "CEO at Amazon",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
        },
        {
            id: 5,
            text: "I've been using this product for a few months now, and I'm honestly impressed! The quality is top-notch, the interface is super responsive, and it has made my daily workflow so much smoother. Highly recommended to anyone looking for reliable results.",
            name: "Michael Chen",
            position: "CEO at Amazon",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
        }
    ];

    const services = [
        { title: "Web Development", icon: <Image src={ourwork1} alt='Web Development' /> },
        { title: "Blockchain Development", icon: <Image src={ourwork2} alt='Blockchain Development' /> },
        { title: "UI UX Design", icon: <Image src={ourwork13} alt='UI UX Design' /> },
        { title: "Mobile App Development", icon: <Image src={ourwor4} alt='Mobile App Development' /> },
        { title: "Artificial Intelligence", icon: <Image src={ourwor5} alt='Artificial Intelligence' /> },
        { title: "Shopify Development", icon: <Image src={ourwor6} alt='Shopify Development' /> },
        { title: "Backend Development", icon: <Code style={{ 'fontSize': '50px' }} /> },
    ];

    // Filter portfolio items based on selected category
    const getFilteredItems = () => {
        const selectedCategory = categories[value];
        if (selectedCategory === "All") {
            // Get unique items for "All" view
            const seen = new Set();
            return portfolioItems.filter(item => {
                if (seen.has(item.slug)) return false;
                seen.add(item.slug);
                return true;
            });
        }
        return portfolioItems.filter(item => item.category === selectedCategory);
    };

    const filteredPortfolioItems = getFilteredItems();

    const handleChange = (e, newValue) => {
        setValue(newValue);
    };

    const maxIndex = Math.max(0, testimonials.length - itemsPerView);

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    };

    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth <= 768) setItemsPerView(1);
            else if (window.innerWidth <= 1024) setItemsPerView(2);
            else setItemsPerView(3);
        };
        updateItemsPerView();
        window.addEventListener("resize", updateItemsPerView);
        return () => window.removeEventListener("resize", updateItemsPerView);
    }, []);

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    useEffect(() => {
        document.title = "Our Work";
    }, []);

    const handleNavigate = (link) => {
        router.push(link);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === maxIndex ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [maxIndex]);

    return (
        <>
            <TitleActivityWatcher activeTitle="Our Work" />
            <div className="our-work-container">
                <h1 className="our-work-title">Our Work</h1>
            </div>

            <section className="unique-what-we-built-page">
                <div className="what-we-built" data-aos="fade-up">
                    <h2 className="title" data-aos="zoom-in">
                        What We&apos;ve Built
                    </h2>

                    <div className="grid-container">
                        {services.map((service, index) => (
                            <div className="card" key={index}>
                                <div className="icon" data-aos="zoom-in">
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="experience-section">
                <div className="left-content">
                    <h2>
                        Crafting Digital Experiences That Inspire
                        & Perform
                    </h2>
                </div>

                <div className="right-content">
                    <p>
                        We believe great design and development go hand in hand. Our portfolio
                        showcases a blend of creativity, strategy, and technology — turning
                        ideas into functional, user-centered digital products. From intuitive
                        mobile apps to high-performing websites and custom Shopify stores,
                        every project reflects our passion for quality and innovation.
                    </p>
                    <p>
                        We believe great design and development go hand in hand. Our portfolio
                        showcases a blend of creativity, strategy, and technology — turning
                        ideas into functional, user-centered digital products. From intuitive
                        mobile apps to high-performing websites and custom Shopify stores,
                        every project reflects our passion for quality and innovation.
                    </p>
                </div>
            </section>

            <div className="portfolio-wrapper">
                <div className="portfolio-container">
                    <div className="portfolio-header" data-aos="fade-up" data-aos-duration="800">
                        <h1 className="portfolio-title" data-aos="fade-up" data-aos-delay="100">
                            Let Our Work Speak for Itself
                        </h1>
                        <p className="portfolio-subtext" data-aos="fade-up" data-aos-delay="200">
                            Each project we deliver is a reflection of our commitment to creativity,
                            usability, and performance.
                            <br />
                            👉 Explore our featured projects below to see how we&apos;ve helped clients
                            transform their digital presence.
                        </p>
                    </div>

                    <div className="portfolio-tabs-container" data-aos="fade-up" data-aos-delay="300">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            textColor="inherit"
                            TabIndicatorProps={{
                                style: {
                                    backgroundColor: "#fff",
                                    height: "3px",
                                    borderRadius: "2px",
                                },
                            }}
                            sx={{
                                minHeight: "50px",
                                overflowX: "auto",
                                "& .MuiTab-root": {
                                    textTransform: "none",
                                    fontSize: "15px",
                                    fontFamily: "Poppins, sans-serif",
                                    color: "#d7d3e3",
                                    paddingRight: "45px",
                                    "@media (max-width: 768px)": {
                                        fontSize: "13px",
                                        paddingRight: "25px",
                                    },
                                    "@media (max-width: 480px)": {
                                        fontSize: "12px",
                                        paddingRight: "15px",
                                    },
                                },
                                "& .Mui-selected": {
                                    color: "#ffffff",
                                    fontWeight: "500",
                                },
                            }}
                        >
                            {categories.map((label, index) => (
                                <Tab key={index} label={label} />
                            ))}
                        </Tabs>
                    </div>

                    <div className="portfolio-grid" style={{ marginTop: "8vh" }}>
                        {filteredPortfolioItems.length > 0 ? (
                            filteredPortfolioItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="portfolio-card text-outside"
                                    data-delay={index * 100}
                                    onClick={() => handleNavigate(item.link)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="card-image">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="card-content">
                                        <p className="card-category">{item.category}</p>
                                        <h3 className="card-title">{item.title}</h3>
                                        <p className="card-subtitle">{item.subtitle}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="coming-soon-box">
                                <h2>🚧 Coming Soon</h2>
                                <p>Projects for this category will be added shortly.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="approach-container-enhanced">
                <div className="approach-header" data-aos="fade-up">
                    <h1 className="approach-title">Our Approach</h1>
                    <div className="header-divider"></div>
                </div>

                <div className="approach-section" data-aos="fade-up" data-aos-delay="100">
                    <div className="section-left approach-border-right">
                        <div className="illustration-container" data-aos="zoom-in" data-aos-delay="200">
                            <Image src={approach1} alt="Understanding Process" />
                        </div>
                        <h1 className="approach-number desktop-only">01</h1>
                    </div>
                    <div className="mobile-section-divider"></div>
                    <div className="section-right">
                        <div className="content-wrapper" data-aos="fade-left" data-aos-delay="300">
                            <h2 className="section-heading">Understanding</h2>
                            <p className="section-text">
                                We Believe Great Design And Development Go Hand In Hand. Our Portfolio Showcases A Blend Of Creativity, Strategy, And Technology — Turning Ideas Into Functional, User-Centered Digital Products. From Intuitive Mobile Apps To High-Performing Websites And Custom Shopify Stores, Every Project Reflects Our Passion For Quality And Innovation.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="approach-section" data-aos="fade-up" data-aos-delay="100">
                    <div className="section-left approach-border-right-alt">
                        <div className="content-wrapper" data-aos="fade-right" data-aos-delay="300">
                            <h2 className="section-heading">Design</h2>
                            <p className="section-text">
                                We Believe Great Design And Development Go Hand In Hand. Our Portfolio Showcases A Blend Of Creativity, Strategy, And Technology — Turning Ideas Into Functional, User-Centered Digital Products. From Intuitive Mobile Apps To High-Performing Websites And Custom Shopify Stores, Every Project Reflects Our Passion For Quality And Innovation.
                            </p>
                        </div>
                    </div>
                    <div className="mobile-section-divider"></div>
                    <div className="section-right">
                        <h1 className="approach-number desktop-only">02</h1>
                        <div className="illustration-container" data-aos="zoom-in" data-aos-delay="200">
                            <Image src={approach2} alt="Design Process" />
                        </div>
                    </div>
                </div>

                <div className="approach-section" data-aos="fade-up" data-aos-delay="100">
                    <div className="section-left approach-border-right">
                        <div className="illustration-container" data-aos="zoom-in" data-aos-delay="200">
                            <Image src={approach3} alt="Development Process" />
                        </div>
                        <h1 className="approach-number desktop-only">03</h1>
                    </div>
                    <div className="mobile-section-divider"></div>
                    <div className="section-right">
                        <div className="content-wrapper" data-aos="fade-left" data-aos-delay="300">
                            <h2 className="section-heading">Development</h2>
                            <p className="section-text">
                                We Believe Great Design And Development Go Hand In Hand. Our Portfolio Showcases A Blend Of Creativity, Strategy, And Technology — Turning Ideas Into Functional, User-Centered Digital Products. From Intuitive Mobile Apps To High-Performing Websites And Custom Shopify Stores, Every Project Reflects Our Passion For Quality And Innovation.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="approach-section reverse" data-aos="fade-up" data-aos-delay="100">
                    <div className="section-left approach-border-right-alt">
                        <div className="content-wrapper" data-aos="fade-right" data-aos-delay="300">
                            <h2 className="section-heading">Testing</h2>
                            <p className="section-text">
                                We Believe Great Design And Development Go Hand In Hand. Our Portfolio Showcases A Blend Of Creativity, Strategy, And Technology — Turning Ideas Into Functional, User-Centered Digital Products. From Intuitive Mobile Apps To High-Performing Websites And Custom Shopify Stores, Every Project Reflects Our Passion For Quality And Innovation.
                            </p>
                        </div>
                    </div>
                    <div className="mobile-section-divider"></div>
                    <div className="section-right">
                        <h1 className="approach-number desktop-only">04</h1>
                        <div className="illustration-container" data-aos="zoom-in" data-aos-delay="200">
                            <Image src={approach4} alt="Testing Process" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonials-section">
                <div className="testimonials-container">
                    <div className="testimonials-left">
                        <h2 className="testimonials-title">What Our Clients<br />Are Saying</h2>
                        <p className="testimonials-description">
                            Their business to develop successful digital ideas and strategies<br />
                            that engage and convert significant, targeted traffic, develop<br />
                            successful digital ideas and strategies that
                        </p>
                        <div className="navigation-controls">
                            <button
                                className="nav-arrow nav-arrow-left"
                                onClick={handlePrev}
                                disabled={currentIndex === 0}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <div className="nav-dots">
                                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                                    <span
                                        key={index}
                                        className={`nav-dot ${index === currentIndex ? 'active' : ''}`}
                                        onClick={() => setCurrentIndex(index)}
                                    />
                                ))}
                            </div>
                            <button
                                className="nav-arrow nav-arrow-right"
                                onClick={handleNext}
                                disabled={currentIndex === maxIndex}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="testimonials-carousel">
                        <div
                            className="testimonials-track"
                            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="testimonial-card">
                                    <p className="testimonial-text">&quot;{testimonial.text}&quot;</p>
                                    <div className="card-divider"></div>
                                    <div className="testimonial-author">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="author-image"
                                        />
                                        <div className="author-info">
                                            <span className="author-name">{testimonial.name}</span>
                                            <span className="author-position">{testimonial.position}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-wrapper-shopify">
                <div className="hero-content">
                    <Typography variant="h2" className="hero-title">
                        Let&apos;s Start Building Your
                    </Typography>
                    <Typography variant="h2" className="hero-subtitle" data-delay="100">
                        Brand&apos;s unique Story <span style={{
                            fontFamily: 'Space Grotesk, sans-serif',
                            fontWeight: 400,
                            fontStyle: 'normal',
                            fontSize: '76px',
                            lineHeight: '110px',
                            letterSpacing: '-0.03em',
                            textAlign: 'center',
                            verticalAlign: 'middle',
                            color: "rgba(66, 48, 196, 1)"
                        }}> Together</span>
                    </Typography>
                    <Typography className="hero-text" data-delay="200">
                        Tell us about your ideas. Let&apos;s talk about how we can help you build them into brilliant, successful digital products. Let&apos;s talk today!
                    </Typography>
                    <div className="" data-delay="300">
                        <Link href="/contact">
                            <button className="connect-button">
                                <svg
                                    className="icon"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M20 5L5 20L20 35L35 20L20 5Z"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinejoin="round"
                                        fill="none"
                                    />
                                    <path
                                        d="M20 5L35 20M5 20L20 35"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                    />
                                </svg>
                                <span style={{ color: '#fff' }}>Let&apos;s Connect</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="dd-carousel-container">
                <div className="dd-carousel">
                    <div className="dd-carousel-track">
                        <Image src={footerlogo} alt="Trusted Logos" />
                        <Image src={footerlogo} alt="Trusted Logos" />
                        <Image src={footerlogo} alt="Trusted Logos" />
                        <Image src={footerlogo} alt="Trusted Logos" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurWork;