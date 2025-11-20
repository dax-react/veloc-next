'use client';

import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "../styles/Home.css";
import footerlogo from '../public/images/footerlogo.png';
import Link from "next/link";
import TitleActivityWatcher from "@/components/TitleActivityWatcher";
const HeroSection = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.aos').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const capabilities = [
    {
      id: 1,
      title: 'Dedicated Team',
      route: '/dedicated-developers', // or '/services/dedicated-team'
      options: ['Frontend Squad', 'Full-Stack Force', 'Backend Crew', 'Single Resource Pro']
    },
    {
      id: 2,
      title: 'Artificial intelligence',
      route: 'services/artificial_intelligent',
      options: ['Machine Learning', 'Deep Learning', 'NLP Solutions', 'Computer Vision']
    },
    {
      id: 3,
      title: 'Blockchain',
      route: 'services/blockchain_development',
      options: ['Smart Contracts', 'DeFi Solutions', 'NFT Development', 'Web3 Integration']
    },
    {
      id: 4,
      title: 'Mobile Development',
      route: 'services/mobile_development',
      options: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps']
    },
    {
      id: 5,
      title: 'Web Development',
      route: 'services/web_development',
      options: ['React Applications', 'Vue.js Projects', 'Angular Solutions', 'Next.js Sites']
    },
    {
      id: 6,
      title: 'Backend Developer',
      route: 'services/backend_development',
      options: ['Node.js APIs', 'Python Backend', 'Java Services', 'Database Design']
    },
    {
      id: 7,
      title: 'Design',
      route: 'services/ui_ux',
      options: ['UI Design', 'UX Research', 'Brand Identity', 'Prototyping']
    }
  ];

  const portfolioItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      category: "Safara",
      title: "Discover trusted professionals and service providers around you, all in one place.",
      subtitle: "Mobile app development",
      textInside: false,
      isShort: false,
      link: "/safara"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
      category: "Gymflex",
      title: "GymFlex provides a solution to this problem by offering a mobile gym subscription service",
      subtitle: "Mobile app development",
      textInside: false,
      isShort: true,
      link: "/gymflex"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&h=300&fit=crop",
      category: "Kids Portal",
      title: "Group Gifting, Wishlists & Goal-Based Boxes all in one sleek platform",
      subtitle: "Mobile app development",
      textInside: false,
      isShort: false,
      link: "/kids-portal"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&h=300&fit=crop",
      category: "Kids Portal",
      title: "Group Gifting, Wishlists & Goal-Based Boxes all in one sleek platform",
      subtitle: "Mobile app development",
      textInside: true,
      isShort: false,
      link: "/kids-portal"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
      category: "Gymflex",
      title: "GymFlex provides a solution to this problem by offering a mobile gym subscription service",
      subtitle: "Mobile app development",
      textInside: true,
      isShort: true,
      link: "/gymflex"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      category: "Safara",
      title: "Discover trusted professionals and service providers around you, all in one place.",
      subtitle: "Mobile app development",
      textInside: true,
      isShort: false,
      link: "/safara"
    }
  ];

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

  const [itemsPerView, setItemsPerView] = useState(3);

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

  return (
    <>
      <TitleActivityWatcher activeTitle="Home" />
      <div className="hero-wrapper">
        <Box className="hero-content">
          <Typography variant="h2" className="hero-title aos fade-up">
            Power Your Business Growth
          </Typography>
          <Typography variant="h2" className="hero-subtitle aos fade-up" data-delay="100">
            With Our Digital Guidance
          </Typography>
          <Typography className="hero-text aos fade-up" data-delay="200">
            Turn your business idea into reality with us. Make your business grow and scalable through Technology.
          </Typography>
          <div className=" aos fade-up">
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
                <span>Let&apos;s Connect</span>
              </button>
            </Link>
          </div>
        </Box>
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

      <div className="process-section">
        <p className="process-label aos fade-up">Our Process</p>
        <h2 className="process-title aos fade-up" data-delay="100">
          We Offer Support Through the<br />
          Whole Digital Product Lifecycle
        </h2>

        <div className="process-container">
          <div className="process-row">
            <div className="process-item aos fade-right" data-delay="200">
              <div className="text-content">
                <div className="number-display">01</div>
                <h3 className="item-title">Pre-Code</h3>
                <ul className="item-list">
                  <li>Define Goals And Measurable Outcomes</li>
                  <li>Prioritize The Right Features And Investments</li>
                  <li>Reduce Risks And Uncertainty</li>
                  <li>Validate Ideas With Real-World Insights</li>
                  <li>Understand Target Users And Market Needs</li>
                </ul>
              </div>
              <div className="image-container">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop" alt="Office workspace" />
              </div>
            </div>

            <div className="process-item aos fade-left" data-delay="300">
              <div className="text-content">
                <div className="number-display">02</div>
                <h3 className="item-title">Development</h3>
                <ul className="item-list">
                  <li>Scalable Web And Mobile Applications</li>
                  <li>Cloud-Native Solutions For Growth</li>
                  <li>Secure And Robust Backend Systems</li>
                  <li>Responsive, Modern Frontend Experiences</li>
                  <li>Agile Methods For Faster Delivery</li>
                </ul>
              </div>
              <div className="image-container right">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop" alt="Team meeting" />
              </div>
            </div>
          </div>

          <div className="divider horizontal"></div>

          <div className="process-row">
            <div className="process-item aos fade-right" data-delay="300">
              <div className="image-container left aos zoom-in" data-delay="200">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop" alt="Design team" />
              </div>
              <div className="text-content">
                <div className="number-display">03</div>
                <h3 className="item-title">Design</h3>
                <ul className="item-list">
                  <li>Build A Strong Brand Identity</li>
                  <li>Create Intuitive, User-Friendly Experiences</li>
                  <li>Align Design With Business And Marketing Goals</li>
                  <li>Simplify Future Workflows And Maintenance</li>
                  <li>Enhance Customer Satisfaction And Engagement</li>
                </ul>
              </div>
            </div>

            <div className="process-item aos fade-left" data-delay="500">
              <div className="image-container aos zoom-in" data-delay="400">
                <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&h=400&fit=crop" alt="Deployment team" />
              </div>
              <div className="text-content">
                <div className="number-display">04</div>
                <h3 className="item-title">Deployment & Beyond</h3>
                <ul className="item-list">
                  <li>Smooth Environment Setup And Automation</li>
                  <li>Secure Code And Database Deployment</li>
                  <li>Rigorous Testing And Quality Validation</li>
                  <li>Continuous Monitoring And Optimization</li>
                  <li>Ongoing Updates And Long-Term Support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="capabilities-section">
        <h3 className="capabilities-label aos fade-up">Our Capabilities</h3>
        <div className="capabilities-container">
          {capabilities.map((item, index) => (
            <div
              key={item.id}
              className={`capability-item ${activeItem === item.id ? 'active' : ''}`}
              data-delay={index * 50}
              onMouseEnter={() => setActiveItem(item.id)}
              onMouseLeave={() => setActiveItem(null)}
              onClick={() => router.push(item.route)}
              style={{ cursor: 'pointer' }}
            >
              <h2 className="capability-title">{item.title}</h2>
              {activeItem === item.id && (
                <div className="capability-options">
                  <div className="options-grid">
                    {item.options.map((option, idx) => (
                      <div
                        key={idx}
                        className="option-box"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="portfolio-wrapper">
        <div className="portfolio-container">
          <div className="portfolio-header">
            <p className="portfolio-subtitle aos fade-up">Our Portfolio</p>
            <h1 className="portfolio-title aos fade-up" data-delay="100">Have a Closer Look</h1>
          </div>

          <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className={`portfolio-card aos zoom-in ${item.textInside ? 'text-inside' : 'text-outside'} ${item.isShort ? 'short-image' : ''}`}
                data-delay={index * 100}
                onClick={() => router.push(item.link)}
                style={{ cursor: "pointer" }}
              >
                <div className="card-image">
                  <img src={item.image} alt={item.category} />
                  {item.textInside && (
                    <div className="card-content-overlay">
                      <p className="card-category">{item.category}</p>
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-subtitle">{item.subtitle}</p>
                    </div>
                  )}
                </div>
                {!item.textInside && (
                  <div className="card-content">
                    <p className="card-category">{item.category}</p>
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-subtitle">{item.subtitle}</p>
                  </div>
                )}
              </div>
            ))}
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

      <div className="hero-wrapper">
        <Box className="hero-content">
          <Typography variant="h2" className="hero-title aos fade-up">
            Let&apos;s Start Building Your
          </Typography>
          <Typography variant="h2" className="hero-subtitle aos fade-up" data-delay="100">
            Brand&apos;s unique Story <span className="together-text">Together</span>
          </Typography>
          <Typography className="hero-text aos fade-up" data-delay="200">
            Tell us about your ideas. Let&apos;s talk about how we can help you build them into brilliant, successful digital products. Let&apos;s talk today!
          </Typography>
          <div className="aos fade-up" data-delay="300">
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
                <span>Let&apos;s Connect</span>
              </button>
            </Link>
          </div>
        </Box>
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

export default HeroSection;