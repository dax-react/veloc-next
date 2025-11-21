"use client";
import { useEffect } from "react";
import { useParams, useRouter, notFound } from "next/navigation";
import { Box, Typography, Grid } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/Portfolio.css";
import "@/styles/Home.css";
import { ArrowForwardTwoTone } from "@mui/icons-material";
import TitleActivityWatcher from "@/components/TitleActivityWatcher";
import { getProjectBySlug, getNextProject } from "@/data/projects";

export default function ProjectPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug;

    // Get project data based on slug
    const project = getProjectBySlug(slug);
    const nextProjectData = project ? getNextProject(slug) : null;

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            easing: "ease-in-out",
        });
    }, []);

    useEffect(() => {
        if (project) {
            document.title = project.title;
        }
    }, [project]);

    // Handle 404 if project not found
    if (!project) {
        notFound();
    }

    const handleNextProject = () => {
        if (project.nextProject) {
            router.push(`/projects/${project.nextProject}`);
        }
    };

    return (
        <>
            <TitleActivityWatcher activeTitle={project.title} />
            <div className="background-about">
                <Box className="project-wrapper">
                    <Box className="project-container">
                        {/* Title */}
                        <Typography variant="h4" className="project-title" data-aos="fade-down">
                            {project.title}
                        </Typography>

                        {/* Description */}
                        <Typography
                            variant="body2"
                            className="project-description"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            {project.description}
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
                                <Typography className="detail-value">{project.date}</Typography>
                            </Grid>
                            <Grid item xs={4} className="detail-item">
                                <Typography className="detail-heading">Client</Typography>
                                <Typography className="detail-value">{project.client}</Typography>
                            </Grid>
                            <Grid item xs={4} className="detail-item">
                                <Typography className="detail-heading">Category</Typography>
                                <Typography className="detail-value">{project.category}</Typography>
                            </Grid>
                        </Grid>

                        {/* Video Section */}
                        <Box className="video-box" data-aos="zoom-in" data-aos-delay="300">
                            <video
                                className="project-video"
                                src={project.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        </Box>
                    </Box>
                </Box>

                {/* Detailed Description Section */}
                <div className="kids-portal-wrapper">
                    <div className="kids-portal-container">
                        <h2 className="kids-portal-title" data-aos="fade-right">
                            {project.title}
                        </h2>

                        <div className="kids-portal-description">
                            {project.detailedDescription.map((paragraph, index) => (
                                <p
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-delay={(index + 1) * 100}
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Images Grid */}
                <div style={{ padding: "40px 20px" }}>
                    <div className="image-grid">
                        <div className="left-section">
                            {project.images[0] && (
                                <div
                                    className="image-wrapper small"
                                    data-aos="fade-right"
                                    data-aos-delay="100"
                                >
                                    <img src={project.images[0].url} alt={project.images[0].alt} />
                                </div>
                            )}
                            {project.images[1] && (
                                <div
                                    className="image-wrapper large"
                                    data-aos="fade-right"
                                    data-aos-delay="200"
                                >
                                    <img src={project.images[1].url} alt={project.images[1].alt} />
                                </div>
                            )}
                        </div>

                        <div className="right-section">
                            {project.images[2] && (
                                <div
                                    className="image-wrapper small"
                                    data-aos="fade-left"
                                    data-aos-delay="100"
                                >
                                    <img
                                        src={project.images[2].url}
                                        alt={project.images[2].alt}
                                        style={{ margin: "10px" }}
                                    />
                                </div>
                            )}
                            {project.images[3] && (
                                <div
                                    className="image-wrapper medium"
                                    data-aos="fade-left"
                                    data-aos-delay="200"
                                >
                                    <img src={project.images[3].url} alt={project.images[3].alt} />
                                </div>
                            )}
                            {project.images[6] && (
                                <div
                                    className="image-wrapper last-medium"
                                    data-aos="fade-left"
                                    data-aos-delay="500"
                                >
                                    <img src={project.images[6].url} alt={project.images[6].alt} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Profile Section */}
                <div className="profile-container">
                    <div
                        className="profile-card"
                        data-aos="flip-left"
                        data-aos-duration="1200"
                    >
                        <div className="profile-header">
                            <img
                                src={project.profile.image}
                                alt={project.profile.name}
                                className="profile-image"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            />
                            <h2
                                className="profile-name"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                {project.profile.name}
                            </h2>
                        </div>

                        <div className="profile-content">
                            <p
                                className="profile-text"
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                {project.profile.text}
                            </p>

                            <p
                                className="profile-title"
                                data-aos="fade-up"
                                data-aos-delay="500"
                            >
                                {project.profile.title}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Next Project Hero Section */}
                {nextProjectData && (
                    <div className="hero-container">
                        <div
                            className="hero-content"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            <h1 className="hero-title" data-aos="fade-down" data-aos-delay="100">
                                {nextProjectData.title}
                            </h1>
                            <button
                                className="hero-button"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                                onClick={handleNextProject}
                            >
                                Next
                                <ArrowForwardTwoTone />
                            </button>
                        </div>
                    </div>
                )}
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
                                verticalAlign: "middle",
                                color: "rgba(66, 48, 196, 1)",
                            }}
                        >
                            Together
                        </span>
                    </Typography>
                    <Typography className="hero-text" data-delay="200">
                        Tell us about your ideas. Let&apos;s talk about how we can help you
                        build them into brilliant, successful digital products. Let&apos;s
                        talk today!
                    </Typography>
                    <div>
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
                        <img src={project.footerLogo} alt="Trusted Logos" />
                        <img src={project.footerLogo} alt="Trusted Logos Duplicate" />
                    </div>
                </div>
            </div>
        </>
    );
}