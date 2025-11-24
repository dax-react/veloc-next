// app/about/page.js or pages/about.js (depending on your Next.js version)
'use client'; // Required for App Router if using client-side features

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Eye, Lightbulb, Share2, Users, Target, Handshake } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../styles/AboutUs.css';

// Import images - adjust paths based on your project structure
import about from '@/public/images/about-hero.jpg';
import about_creative from '@/public/images/about-creative.jpg';
import footerlogo from '@/public/images/footerlogo.png';
import TitleActivityWatcher from "@/components/TitleActivityWatcher";

export default function AboutSection() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 120,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);
    useEffect(() => {
        document.title = "About Us"; // becomes About Us | Veloc
    }, []);
    const stats = [
        { number: 4, suffix: '+', label: 'Years', sublabel: 'Experience' },
        { number: 100, suffix: '+', label: 'Delivers', sublabel: 'Project' },
        { number: 95, suffix: '%', label: 'Average', sublabel: 'Client Satisfaction' },
        { number: 12, suffix: '', label: 'Served', sublabel: 'Countries' }
    ];

    const features = [
        {
            icon: <Users size={32} strokeWidth={2} />,
            title: 'Startup DNA',
            description: 'We Specialize In Startups. Our Processes Are Built For Speed, Agility, And Evolving Needs – From Rapid Prototyping To Pivot-Friendly Development.'
        },
        {
            icon: <Lightbulb size={32} strokeWidth={2} />,
            title: 'Innovation & AI',
            description: 'We Focus On Building Modern, Intelligent Solutions That Harness The Power Of AI To Automate, Scale, And Simplify Operations.'
        },
        {
            icon: <Target size={32} strokeWidth={2} />,
            title: 'Outcome-Focused',
            description: 'Our Approach Is Not Just To Deliver Projects — But To Deliver Outcomes That Drive Real Business Impact.'
        },
        {
            icon: <Handshake size={32} strokeWidth={2} />,
            title: 'Partnership',
            description: 'We Believe In Long-Term Partnerships, Becoming An Extension Of Your Team To Support You At Every Stage Of Growth.'
        }
    ];

    return (
        <>
            <TitleActivityWatcher activeTitle="About Us" />
            {/* ===== ABOUT HERO SECTION ===== */}
            <div className="about-section-wrapper" data-aos="fade-up">
                <div className="about-section-container">
                    <div className="about-section-badge">About Us</div>
                    <h1 className="about-section-title">
                        Trusted Software House For Enterprise Digital Development
                    </h1>
                    <div className="about-section-image-container" data-aos="zoom-in">
                        <Image
                            src={about}
                            alt="Our diverse team of professionals"
                            className="about-section-image"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* ===== VISION SECTION ===== */}
            <div className="vision-section-wrapper">
                <div className="vision-section-container">
                    <div className="vision-section-left" data-aos="fade-right">
                        <h1 className="vision-section-heading">
                            Our Vision Is To Connect With The World Through Innovation
                        </h1>
                    </div>

                    <div className="vision-section-right" data-aos="fade-left">
                        {[
                            { icon: <Eye size={20} strokeWidth={2.5} />, title: 'Vision' },
                            { icon: <Lightbulb size={20} strokeWidth={2.5} />, title: 'Innovation' },
                            { icon: <Share2 size={20} strokeWidth={2.5} />, title: 'Connection' }
                        ].map((item, i) => (
                            <div key={i} className="vision-card" data-aos="flip-up" data-aos-delay={i * 150}>
                                <div className="vision-card-header">
                                    <div className="vision-card-icon">{item.icon}</div>
                                    <h3 className="vision-card-title">{item.title}</h3>
                                </div>
                                <p className="vision-card-description">
                                    Our Vision Is To Create A Future Where Innovation And Creativity Drive Meaningful Change. We Aspire To Empower Individuals And Communities With Sustainable And Inclusive Solutions.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ===== STATS + CREATIVE SECTION ===== */}
            <div className="stats-creative-wrapper">
                <div className="stats-creative-container">
                    <div className="stats-section" data-aos="fade-up">
                        <div className="stats-grid">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="stat-item"
                                    data-aos="zoom-in"
                                    data-aos-delay={index * 150}
                                >
                                    <AnimatedCounter number={stat.number} suffix={stat.suffix} />
                                    <p className="stat-label">
                                        {stat.label}
                                        <br />
                                        <span className="stat-sublabel">{stat.sublabel}</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CREATIVE SECTION */}
                    <div className="creative-section" data-aos="fade-up">
                        <div className="creative-illustration" data-aos="fade-right">
                            <Image
                                className="creative-illustration-img"
                                src={about_creative}
                                alt='about-creative'
                            />
                        </div>

                        <div className="creative-content" data-aos="fade-left">
                            <h2 className="creative-title">Creative Directories</h2>
                            <p className="creative-description">
                                Our Vision Is To Create A Future Where Innovation And Creativity Drive Meaningful Change. We Empower Communities With Sustainable Solutions.
                            </p>
                            <p className="creative-description">
                                Every Project We Undertake Reflects Our Commitment To Building A Smarter, More Connected World.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== WHAT MAKES US DIFFERENT ===== */}
            <div className="wmud-wrapper">
                <div className="wmud-container">
                    <div className="wmud-header" data-aos="fade-down">
                        <h2 className="wmud-title">What Makes Us Different?</h2>
                        <div className="wmud-decoration">
                            <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="3" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
                                <circle cx="20" cy="20" r="8" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
                                <circle cx="20" cy="20" r="13" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
                                <circle cx="20" cy="20" r="18" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
                                <path d="M35 15 Q45 10 55 15" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
                                <path d="M35 20 Q45 15 55 20" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
                                <path d="M35 25 Q45 20 55 25" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
                            </svg>
                        </div>
                    </div>

                    <div className="wmud-grid">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="wmud-card"
                                data-aos="zoom-in-up"
                                data-aos-delay={index * 200}
                            >
                                <div className="wmud-card-icon">{feature.icon}</div>
                                <h3 className="wmud-card-title">{feature.title}</h3>
                                <p className="wmud-card-description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ===== CAROUSEL ===== */}
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
}

/* ===== Animated Counter Component ===== */
function AnimatedCounter({ number, suffix }) {
    const [count, setCount] = useState(0);
    const ref = useRef();
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    let start = 0;
                    const duration = 1500;
                    const stepTime = 16;
                    const step = number / (duration / stepTime);

                    const counter = setInterval(() => {
                        start += step;
                        if (start >= number) {
                            clearInterval(counter);
                            start = number;
                        }
                        setCount(Math.floor(start));
                    }, stepTime);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [number, hasAnimated]);

    return (
        <h2 ref={ref} className="stat-number">
            {count}
            {suffix}
        </h2>
    );
}