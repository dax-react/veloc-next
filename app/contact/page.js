// app/contact/page.js or pages/contact.js (depending on your Next.js version)
'use client'; // Required for App Router if using client-side features

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TitleActivityWatcher from "@/components/TitleActivityWatcher";
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

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Contact Us";
  }, []);

  // Form validation function
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name should contain only letters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Phone number must be at least 10 digits';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message must not exceed 1000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      toast.error('Please fix the errors in the form', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    setIsSubmitting(true);

    const portalId = "244252598";
    const formGuid = "fb621206-3269-4871-9cb1-04c7feadf7ef";
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

    const data = {
      fields: [
        { name: "firstname", value: formData.name.trim() },
        { name: "email", value: formData.email.trim() },
        { name: "phone", value: formData.phone.trim() },
        { name: "subject", value: formData.subject.trim() },
        { name: "message", value: formData.message.trim() },
      ],
    };

    try {
      // Submit to HubSpot
      const hubspotResponse = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // Submit to EmailJS
      const emailResponse = await emailjs.send(
        "service_n4sxm91",
        "template_76yd6o8",
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        },
        "xaklfWfIfvCP76y0o"
      );

      if (hubspotResponse.ok && emailResponse.status === 200) {
        toast.success(`Message sent successfully! We'll get back to you soon.`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else if (emailResponse.status === 200) {
        toast.success('✅ Message sent via email successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        throw new Error('Both submissions failed');
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);

      if (error.text) {
        // EmailJS specific error
        toast.error('Failed to send email. Please try again or contact us directly.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else if (error.message.includes('Failed to fetch')) {
        toast.error('Network error. Please check your connection and try again.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.error('Something went wrong. Please try again later.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <TitleActivityWatcher activeTitle="Contact Us" />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

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

.contact-form-input.error,
.contact-form-textarea.error {
  border-color: #dc3545;
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

.contact-form-input.error:focus,
.contact-form-textarea.error:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.15);
}

.contact-form-textarea {
  resize: vertical;
  min-height: 140px;
}

.error-message {
  color: #dc3545;
  font-size: 13px;
  margin-top: 5px;
  font-weight: 500;
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
  margin-top: 3vh;
}

.contact-submit-btn:hover:not(:disabled) {
  background-color: #1f1b4d;
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(43, 39, 104, 0.3);
}

.contact-submit-btn:active:not(:disabled) {
  transform: translateY(0);
}

.contact-submit-btn:disabled {
  background-color: #9e9e9e;
  cursor: not-allowed;
  opacity: 0.7;
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
            <form onSubmit={handleSubmit} noValidate>
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label className="contact-form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Eg. John deo"
                    value={formData.name}
                    onChange={handleChange}
                    className={`contact-form-input ${errors.name ? 'error' : ''}`}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="contact-form-group">
                  <label className="contact-form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Eg. Johndeo@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`contact-form-input ${errors.email ? 'error' : ''}`}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
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
                    className={`contact-form-input ${errors.phone ? 'error' : ''}`}
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>

                <div className="contact-form-group">
                  <label className="contact-form-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Eg. Website Development"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`contact-form-input ${errors.subject ? 'error' : ''}`}
                  />
                  {errors.subject && <span className="error-message">{errors.subject}</span>}
                </div>
              </div>

              <div className="contact-form-group-full">
                <label className="contact-form-label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`contact-form-textarea ${errors.message ? 'error' : ''}`}
                  placeholder="Tell us about your project..."
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="contact-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
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