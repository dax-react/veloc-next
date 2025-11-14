// app/contact/page.js or pages/contact.js (depending on your Next.js version)
'use client'; // Required for App Router if using client-side features

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';
import emailjs from 'emailjs-com';

// Import images - adjust paths based on your project structure
import footerlogo from '@/public/images/footerlogo.png';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  useEffect(() => {
    document.title = "Contact Us";
  }, []);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const portalId = "244252598";
    const formGuid = "fb621206-3269-4871-9cb1-04c7feadf7ef";
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

    const data = {
      fields: [
        { name: "firstname", value: formData.name },
        { name: "email", value: formData.email },
        { name: "phone", value: formData.phone },
        { name: "subject", value: formData.subject },
        { name: "message", value: formData.message },
      ],
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      await emailjs.send(
        "service_n4sxm91",
        "template_76yd6o8",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        "xaklfWfIfvCP76y0o"
      );

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert("HubSpot submission failed, but EmailJS sent successfully.");
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <div className="contact-wrapper">
        <style jsx>{`
.contact-wrapper {
  min-height: 100vh;
  padding: 20px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background: #fafafa;
}

.contact-main-title {
  font-size: 60px;
  font-weight: 800;
  text-align: center;
  margin: 0 0 0 0;
  color: #000000;
  letter-spacing: -1px;
}

/* ==============================
   GRID LAYOUT (Desktop)
   ============================== */
.contact-grid {
  background: linear-gradient(135deg, #e8e5f5 0%, #f0edf7 25%, #f5f3f8 50%, #faf8f9 75%, #fef5ef 100%);
  padding: 50px;
  max-width: 1330px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 140px;
  align-items: start;
  border-radius: 16px;
}

/* ==============================
   LEFT SECTION (INFO)
   ============================== */
.contact-info-section {
  padding-top: 10px;
}

.contact-info-title {
  font-family: Segoe UI;
  font-size: 38px;
  font-weight: 700;
  margin: 0 0 16px 0;
  color: #000000;
}

.contact-info-description {
  font-family: Segoe UI;
  font-size: 15px;
  line-height: 1.65;
  color: #4a4a4a;
  margin: 0 0 50px 0;
}

.contact-info-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.contact-info-item {
  display: flex;
  gap: 16px;
  align-items: center;
}

.contact-icon-circle {
  width: 50px;
  height: 50px;
  min-width: 50px;
  border-radius: 50%;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
}

.contact-icon-circle:hover {
  transform: scale(1.08);
  background-color: #2b2768;
}

.contact-icon-circle:hover :global(svg) {
  color: #fff;
}

.contact-info-text {
  font-family: Segoe UI;
  font-size: 16px;
  color: #2d2d2d;
  line-height: 1.6;
}

.contact-phone-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.contact-phone-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  color: #2d2d2d;
}

.contact-flag {
  width: 20px;
  height: 14px;
  display: inline-block;
  background-size: cover;
  background-position: center;
  border-radius: 2px;
  flex-shrink: 0;
}

.contact-flag-india {
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"%3E%3Crect fill="%23FF9933" width="900" height="600"/%3E%3Crect fill="%23fff" y="200" width="900" height="200"/%3E%3Crect fill="%23138808" y="400" width="900" height="200"/%3E%3Ccircle cx="450" cy="300" r="80" fill="%23000080"/%3E%3Ccircle cx="450" cy="300" r="70" fill="%23fff"/%3E%3Ccircle cx="450" cy="300" r="10" fill="%23000080"/%3E%3C/svg%3E');
}

.contact-flag-usa {
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7410 3900"%3E%3Cpath fill="%23B22234" d="M0 0h7410v3900H0z"/%3E%3Cpath stroke="%23fff" stroke-width="300" d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"/%3E%3Cpath fill="%233C3B6E" d="M0 0h2964v2100H0z"/%3E%3C/svg%3E');
}

/* ==============================
   RIGHT SECTION (FORM)
   ============================== */
.contact-form-container {
  padding: 45px 40px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
}

.contact-form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.contact-form-group,
.contact-form-group-full {
  display: flex;
  flex-direction: column;
}

.contact-form-label {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #1a1a1a;
}

.contact-form-input,
.contact-form-textarea {
  padding: 14px 18px;
  font-size: 15px;
  border: 1px solid #e6e6e6;
  outline: none;
  transition: all 0.2s ease;
  background-color: #ffffff;
  color: #2d2d2d;
  font-family: inherit;
  border-radius: 6px;
}

.contact-form-input::placeholder,
.contact-form-textarea::placeholder {
  color: #b8b8b8;
}

.contact-form-input:focus,
.contact-form-textarea:focus {
  border-color: #2b2768;
  box-shadow: 0 0 0 3px rgba(43, 39, 104, 0.08);
}

.contact-form-textarea {
  resize: vertical;
  min-height: 140px;
}

.contact-submit-btn {
  width: 100%;
  padding: 16px;
  font-size: 17px;
  font-weight: 600;
  color: #ffffff;
  background-color: #2b2768;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  margin-top:3vh;
}

.contact-submit-btn:hover {
  background-color: #1f1b4d;
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(43, 39, 104, 0.3);
}

.contact-submit-btn:active {
  transform: translateY(0);
}

/* ==============================
   RESPONSIVENESS
   ============================== */

/* Large tablets (≤1200px) */
@media (max-width: 1200px) {
  .contact-grid {
    gap: 80px;
    grid-template-columns: 350px 1fr;
  }

  .contact-main-title {
    font-size: 52px;
  }
}

/* Tablets (≤992px) */
@media (max-width: 992px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 60px;
    padding: 40px;
  }

  .contact-form-row {
    grid-template-columns: 1fr;
  }

  .contact-main-title {
    font-size: 46px;
  }

  .contact-form-container {
    padding: 35px 25px;
  }
}

/* Mobile landscape (≤768px) */
@media (max-width: 768px) {
  .contact-main-title {
    font-size: 38px;
    margin-bottom: 50px;
  }

  .contact-grid {
    padding: 30px 20px;
  }

  .contact-form-container {
    padding: 30px 20px;
  }

  .contact-info-title {
    font-size: 32px;
  }

  .contact-info-description {
    margin-bottom: 35px;
  }
}

/* Small mobile (≤480px) */
@media (max-width: 480px) {
  .contact-main-title {
    font-size: 32px;
  }

  .contact-info-title {
    font-size: 28px;
  }

  .contact-grid {
    padding: 25px 15px;
    gap: 40px;
  }

  .contact-form-container {
    padding: 25px 15px;
  }

  .contact-icon-circle {
    width: 42px;
    height: 42px;
  }
}
        `}</style>

        <div>
          <h1 className="contact-main-title" style={{ padding: '8vh' }}>Contact us</h1>
        </div>
        <div className="contact-grid">
          <div className="contact-info-section">
            <h2 className="contact-info-title">Get In Touch</h2>
            <p className="contact-info-description">
              We&apos;d love to hear from you! Whether you have a project in mind, a question about our services, or just want to say hello — feel free to reach out.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-icon-circle">
                  <Mail size={22} color="#1a1a1a" strokeWidth={2} />
                </div>
                <div className="contact-info-text">
                  info@veloc.in
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-circle">
                  <MapPin size={22} color="#1a1a1a" strokeWidth={2} />
                </div>
                <div className="contact-info-text">
                  A-1, Golden City, Aspire Road, Mota<br />
                  Varachha, Surat - 395004
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-circle">
                  <Phone size={22} color="#1a1a1a" strokeWidth={2} />
                </div>
                <div className="contact-info-text">
                  <div className="contact-phone-list">
                    <div className="contact-phone-item">
                      <span className="contact-flag contact-flag-india"></span>
                      <span>+91 97123 72394</span>
                    </div>
                    <div className="contact-phone-item">
                      <span className="contact-flag contact-flag-usa"></span>
                      <span>+1 (415) 409-8951</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label className="contact-form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Eg. John deo"
                    value={formData.name}
                    onChange={handleChange}
                    className="contact-form-input"
                    required
                  />
                </div>

                <div className="contact-form-group">
                  <label className="contact-form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Eg. Johndeo@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="contact-form-input"
                    required
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label className="contact-form-label">Phone No.</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Eg. (+91) 000 000 0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="contact-form-input"
                    required
                  />
                </div>

                <div className="contact-form-group">
                  <label className="contact-form-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Eg. Website Development"
                    value={formData.subject}
                    onChange={handleChange}
                    className="contact-form-input"
                    required
                  />
                </div>
              </div>

              <div className="contact-form-group-full">
                <label className="contact-form-label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-form-textarea"
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="dd-carousel-container">
        <style jsx>{`
          .dd-carousel-container {
            overflow: hidden;
            padding: 40px 0;
            background: #f9f9f9;
          }
          
          .dd-carousel {
            display: flex;
            width: 100%;
          }
          
          .dd-carousel-track {
            display: flex;
            gap: 60px;
            animation: scroll 20s linear infinite;
          }
          
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
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