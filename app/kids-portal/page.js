"use client";

import { useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { ArrowForwardTwoTone } from "@mui/icons-material";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/Portfolio.css";
import { useRouter } from "next/navigation";
import TitleActivityWatcher from "@/components/TitleActivityWatcher";
export default function KidsPortalPage() {
    const images = [
        { id: 1, url: "/images/kids1.png", alt: "Image 1" },
        { id: 2, url: "/images/kids2.png", alt: "Image 2" },
        { id: 3, url: "/images/kids3.png", alt: "Image 3" },
        { id: 4, url: "/images/kids4.png", alt: "Image 4" },
        { id: 5, url: "/images/kids5.png", alt: "Image 5" },
        { id: 6, url: "/images/kids6.png", alt: "Image 6" },
        { id: 7, url: "/images/kids7.png", alt: "Image 7" },
    ];
    const router = useRouter();
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            easing: "ease-in-out",
        });
    }, []);
    useEffect(() => {
        document.title = "Kids Portal";
    }, []);
    return (
        <>
            <TitleActivityWatcher activeTitle="Kids Portal" />
            <div className="background-about">
                <Box className="project-wrapper">
                    <Box className="project-container">
                        {/* Title */}
                        <Typography
                            variant="h4"
                            className="project-title"
                            data-aos="fade-down"
                        >
                            Kids Portal Game App (Web Design)
                        </Typography>

                        {/* Description */}
                        <Typography
                            variant="body2"
                            className="project-description"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Kids Portal is a fun, educational, and interactive web game platform
                            designed for children. It combines learning and entertainment with
                            beautiful UI, engaging graphics, and smooth animations.
                        </Typography>

                        {/* Details */}
                        <Grid
                            container
                            className="project-details"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <Grid item xs={4} className="detail-item">
                                <Typography className="detail-heading">Date</Typography>
                                <Typography className="detail-value">2021</Typography>
                            </Grid>
                            <Grid item xs={4} className="detail-item">
                                <Typography className="detail-heading">Client</Typography>
                                <Typography className="detail-value">Liquid Theme</Typography>
                            </Grid>
                            <Grid item xs={4} className="detail-item">
                                <Typography className="detail-heading">Category</Typography>
                                <Typography className="detail-value">Web App</Typography>
                            </Grid>
                        </Grid>

                        {/* Video Section */}
                        <Box className="video-box" data-aos="zoom-in" data-aos-delay="300">
                            <video
                                className="project-video"
                                src="/videos/kidsportal1.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{
                                    width: "100%",
                                    borderRadius: "16px",
                                    marginTop: "24px",
                                }}
                            />
                        </Box>
                    </Box>
                </Box>

                {/* Description Section */}
                <div className="kids-portal-wrapper">
                    <div className="kids-portal-container">
                        <h2 className="kids-portal-title" data-aos="fade-right">
                            Kids Portal Game App (Web Design)
                        </h2>

                        <div className="kids-portal-description">
                            {[100, 200, 300].map((delay, idx) => (
                                <p key={idx} data-aos="fade-up" data-aos-delay={delay}>
                                    Kids Portal is a user-friendly, gamified platform built for kids to
                                    learn while having fun. It offers a colorful interface, smooth
                                    navigation, and interactive challenges.
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Image Gallery */}
                <div style={{ 'padding': '40px 20px' }}>
                    <div className="image-grid">
                        {/* Left Section */}
                        <div className="left-section">
                            <div className="image-wrapper small" data-aos="fade-right" data-aos-delay="100">
                                <img src={images[0].url} alt={images[0].alt} />
                            </div>
                            <div className="image-wrapper large" data-aos="fade-right" data-aos-delay="200">
                                <img src={images[1].url} alt={images[1].alt} />
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="right-section">
                            <div className="image-wrapper small" data-aos="fade-left" data-aos-delay="100">
                                <img src={images[2].url} alt={images[2].alt} style={{ margin: "10px" }} />
                            </div>
                            <div className="image-wrapper medium" data-aos="fade-left" data-aos-delay="200">
                                <img src={images[3].url} alt={images[3].alt} />
                            </div>
                            <div className="image-wrapper last-medium" data-aos="fade-left" data-aos-delay="500">
                                <img src={images[6].url} alt={images[6].alt} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Profile Section */}
                <div className="profile-container">
                    <div className="profile-card" data-aos="flip-left" data-aos-duration="1200">
                        <div className="profile-header">
                            <img
                                src="/images/profile.jpg"
                                alt="Saif Al Balushi"
                                className="profile-image"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            />
                            <h2 className="profile-name" data-aos="fade-up" data-aos-delay="300">
                                Saif Al Balushi
                            </h2>
                        </div>

                        <div className="profile-content">
                            <p className="profile-text" data-aos="fade-up" data-aos-delay="400">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. It has survived not only five centuries, but also the leap
                                into electronic typesetting, remaining essentially unchanged.
                            </p>

                            <p className="profile-title" data-aos="fade-up" data-aos-delay="500">
                                - Founder of Kids Portal Game
                            </p>
                        </div>
                    </div>
                </div>

                {/* Hero Section */}
                <div className="hero-container">
                    <div className="hero-content" data-aos="fade-up" data-aos-duration="1200">
                        <h1 className="hero-title" data-aos="fade-down" data-aos-delay="100">
                            Smitle
                        </h1>
                        <button className="hero-button" data-aos="zoom-in" data-aos-delay="300" onClick={() => router.push('/smitle')}>
                            Next
                            <ArrowForwardTwoTone />
                        </button>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="hero-wrapper-shopify">
                <div className="hero-content">
                    <Typography variant="h2" className="hero-title">
                        Let&apos;s Start Building Your
                    </Typography>
                    <Typography variant="h2" className="hero-subtitle" data-delay="100">
                        Brand&apos;s unique Story{" "}
                        <span
                            style={{
                                fontFamily: "Space Grotesk, sans-serif",
                                fontWeight: 400,
                                fontStyle: "normal",
                                fontSize: "96px",
                                lineHeight: "110px",
                                letterSpacing: "-0.03em",
                                textAlign: "center",
                                color: "rgba(66, 48, 196, 1)",
                            }}
                        >
                            Together
                        </span>
                    </Typography>
                    <Typography className="hero-text" data-delay="200">
                        Tell us about your ideas. Let&apos;s talk about how we can help you build them into
                        brilliant, successful digital products. Let&apos;s talk today!
                    </Typography>
                    <div data-delay="300">
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
                            <span style={{ color: "#fff" }}>Let&apos;s Connect</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Carousel */}
            <div className="carousel-container">
                <div className="carousel">
                    <div className="carousel-track">
                        <img src="/images/footerlogo.png" alt="Trusted Logos" />
                        <img src="/images/footerlogo.png" alt="Trusted Logos" />
                    </div>
                </div>
            </div>
        </>
    );
}
