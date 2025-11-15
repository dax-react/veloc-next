'use client';

import { useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { ArrowForwardTwoTone } from "@mui/icons-material";
import "../../styles/Portfolio.css";

// Import static assets from public/
import safara1 from "@/public/images/safara1 copy.png";
import safara2 from "@/public/images/safara2 copy.png";
import safara3 from "@/public/images/safara3 copy.png";
import safara4 from "@/public/images/safara4 copy.png";
import safara5 from "@/public/images/safara5 copy.png";
import safara6 from "@/public/images/safara6 copy.png";
import safara7 from "@/public/images/safara7 copy.png";
import profile from "@/public/images/profile.jpg";
import footerlogo from "@/public/images/footerlogo.png";
import { useRouter } from "next/navigation";

export default function Safara() {
    const video = "/videos/safara.mp4";
    const router = useRouter();
    const images = [
        { id: 1, url: safara1, alt: "Image 1" },
        { id: 3, url: safara3, alt: "Image 3" },
        { id: 2, url: safara2, alt: "Image 2" },
        { id: 4, url: safara4, alt: "Image 4" },
        { id: 5, url: safara5, alt: "Image 5" },
        { id: 6, url: safara6, alt: "Image 6" },
        { id: 7, url: safara7, alt: "Image 7" },
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            easing: "ease-in-out",
        });
    }, []);
    useEffect(() => {
        document.title = "Safara";
    }, []);
    return (
        <>
            <div className="background-about">
                <Box className="project-wrapper">
                    <Box className="project-container">
                        {/* Title */}
                        <Typography
                            variant="h4"
                            className="project-title"
                            data-aos="fade-down"
                        >
                            Safara Mobile App
                        </Typography>

                        {/* Description */}
                        <Typography
                            variant="body2"
                            className="project-description"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            SmartShop is a simple and user-friendly mobile shopping app
                            designed to make online buying easier. With clean UI, fast
                            navigation, and secure payment options, it allows users to browse
                            products, add them to cart, and complete their purchase within
                            minutes.
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
                                <Typography className="detail-value">2020</Typography>
                            </Grid>
                            <Grid item xs={4} className="detail-item">
                                <Typography className="detail-heading">Client</Typography>
                                <Typography className="detail-value">Liquid Theme</Typography>
                            </Grid>
                            <Grid item xs={4} className="detail-item">
                                <Typography className="detail-heading">Category</Typography>
                                <Typography className="detail-value">Mobile App</Typography>
                            </Grid>
                        </Grid>

                        {/* Video Section */}
                        <Box className="video-box" data-aos="zoom-in" data-aos-delay="300">
                            <video
                                className="project-video"
                                src={video}
                                autoPlay
                                loop
                                muted
                                playsInline
                            />

                        </Box>
                    </Box>
                </Box>

                {/* Kids Portal Section */}
                <div className="kids-portal-wrapper">
                    <div className="kids-portal-container">
                        <h2 className="kids-portal-title" data-aos="fade-right">
                            Safara Mobile App
                        </h2>

                        <div className="kids-portal-description">
                            {[1, 2, 3].map((i) => (
                                <p key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                                    SmartShop is a simple and user-friendly mobile shopping app
                                    designed to make online buying easier. With clean UI, fast
                                    navigation, and secure payment options, it allows users to
                                    browse products, add them to cart, and complete their
                                    purchase within minutes.
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Image Grid Section */}
                <div style={{ 'padding': '40px 20px' }}>
                    <div className="image-grid">
                        <div className="left-section">
                            <div
                                className="image-wrapper small"
                                data-aos="fade-right"
                                data-aos-delay="100"
                            >
                                <Image src={images[0].url} alt={images[0].alt} />
                            </div>
                            <div
                                className="image-wrapper large"
                                data-aos="fade-right"
                                data-aos-delay="200"
                            >
                                <Image src={images[1].url} alt={images[1].alt} />
                            </div>
                        </div>

                        <div className="right-section">
                            <div
                                className="image-wrapper small"
                                data-aos="fade-left"
                                data-aos-delay="100"
                            >
                                <Image src={images[2].url} alt={images[2].alt} />
                            </div>

                            <div
                                className="image-wrapper medium"
                                data-aos="fade-left"
                                data-aos-delay="200"
                            >
                                <Image src={images[3].url} alt={images[3].alt} />
                            </div>

                            <div
                                className="image-wrapper last-medium"
                                data-aos="fade-left"
                                data-aos-delay="500"
                            >
                                <Image src={images[6].url} alt={images[6].alt} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Profile Section */}
                <div className="profile-container">
                    <div className="profile-card" data-aos="flip-left" data-aos-duration="1200">
                        <div className="profile-header">
                            <Image
                                src={profile}
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
                                industry. Lorem Ipsum has been the industry&apos;s standard dummy text
                                ever since the 1500s.
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
                            Gymflex
                        </h1>
                        <button
                            className="hero-button"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                            onClick={() => router.push('/gymflex')}
                        >
                            Next <ArrowForwardTwoTone />
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer CTA */}
            <div className="hero-wrapper-shopify">
                <div className="hero-content">
                    <Typography variant="h2" className="hero-title">
                        Let&apos;s Start Building Your
                    </Typography>
                    <Typography variant="h2" className="hero-subtitle" data-delay="100">
                        Brand&apos;s Unique Story{" "}
                        <span
                            style={{
                                fontFamily: "Space Grotesk, sans-serif",
                                fontWeight: 400,
                                fontSize: "96px",
                                lineHeight: "110px",
                                color: "rgba(66, 48, 196, 1)",
                            }}
                        >
                            Together
                        </span>
                    </Typography>
                    <Typography className="hero-text" data-delay="200">
                        Tell us about your ideas. Let&apos;s talk about how we can help you build them
                        into brilliant, successful digital products. Let&apos;s talk today!
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

            {/* Carousel */}
            <div className="carousel-container">
                <div className="carousel">
                    <div className="carousel-track">
                        <Image src={footerlogo} alt="Trusted Logos Duplicate" />
                        <Image src={footerlogo} alt="Trusted Logos Duplicate" />
                    </div>
                </div>
            </div>
        </>
    );
}
