"use client";

import { useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { ArrowForwardTwoTone } from "@mui/icons-material";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/Portfolio.css";
import { useRouter } from "next/navigation";

export default function Smitle() {
    const images = [
        { id: 1, url: "/images/smitle1.png", alt: "Image 1" },
        { id: 2, url: "/images/smitle2.png", alt: "Image 2" },
        { id: 3, url: "/images/smitle3.png", alt: "Image 3" },
        { id: 4, url: "/images/smitle4.png", alt: "Image 4" },
        { id: 5, url: "/images/smitl51.png", alt: "Image 5" },
        { id: 6, url: "/images/safara6.png", alt: "Image 6" },
        { id: 7, url: "/images/gymflex5.png", alt: "Image 7" },
    ];
    const router = useRouter();
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <>
            <div className="background-about">
                <Box className="project-wrapper">
                    <Box className="project-container">
                        {/* Title */}
                        <Typography variant="h4" className="project-title" data-aos="fade-down">
                            Smitle App
                        </Typography>

                        {/* Description */}
                        <Typography
                            variant="body2"
                            className="project-description"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            SmartShop is a simple and user-friendly mobile shopping app designed to make
                            online buying easier. With clean UI, fast navigation, and secure payment
                            options, it allows users to browse products, add them to cart, and complete
                            their purchase within minutes.
                        </Typography>

                        {/* Details */}
                        <Grid container className="project-details" data-aos="fade-up" data-aos-delay="200">
                            <Grid item xs={4} className="detail-item">
                                <Typography className="detail-heading">Date</Typography>
                                <Typography className="detail-value">2020</Typography>
                            </Grid>
                            <Grid item xs={4} className="detail-item">
                                <Typography className="detail-heading">Client</Typography>
                                <Typography className="detail-value">liquid theme</Typography>
                            </Grid>
                            <Grid item xs={4} className="detail-item">
                                <Typography className="detail-heading">Category</Typography>
                                <Typography className="detail-value">Mobile app</Typography>
                            </Grid>
                        </Grid>

                        {/* Video */}
                        <Box className="video-box" data-aos="zoom-in" data-aos-delay="300">
                            <video
                                className="project-video"
                                src="/videos/safara.mp4"
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
                            Smitle App
                        </h2>

                        <div className="kids-portal-description">
                            {[100, 200, 300].map((delay, idx) => (
                                <p key={idx} data-aos="fade-up" data-aos-delay={delay}>
                                    SmartShop is a simple and user-friendly mobile shopping app designed to
                                    make online buying easier. With clean UI, fast navigation, and secure
                                    payment options, it allows users to browse products, add them to cart, and
                                    complete their purchase within minutes.
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Image Grid */}
                <div style={{ 'padding': '40px 20px' }}>
                    <div className="image-grid">
                        <div className="left-section">
                            <div className="image-wrapper small" data-aos="fade-right" data-aos-delay="100">
                                <img src={images[0].url} alt={images[0].alt} />
                            </div>
                            <div className="image-wrapper large" data-aos="fade-right" data-aos-delay="200">
                                <img src={images[1].url} alt={images[1].alt} />
                            </div>
                        </div>

                        <div className="right-section">
                            <div className="image-wrapper small" data-aos="fade-left" data-aos-delay="100">
                                <img src={images[2].url} alt={images[2].alt} />
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
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                            </p>
                            <p className="profile-title" data-aos="fade-up" data-aos-delay="500">
                                - Founder of Kids portal game
                            </p>
                        </div>
                    </div>
                </div>

                {/* Hero Section */}
                <div className="hero-container" style={{ 'height': '80%' }}>
                    <div className="hero-content" data-aos="fade-up" data-aos-duration="1200">
                        <h1 className="hero-title" data-aos="fade-down" data-aos-delay="100">
                            Safara
                        </h1>
                        <button className="hero-button" data-aos="zoom-in" data-aos-delay="300" onClick={() => router.push('/safara')}>
                            Next
                            <ArrowForwardTwoTone />
                        </button>
                    </div>
                </div>
            </div>

            {/* Final CTA Section */}
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
                    <div className="container" data-delay="300">
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

            {/* Footer Logos */}
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
