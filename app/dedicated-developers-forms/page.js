'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaCode, FaCog, FaLayerGroup, FaMobileAlt, FaDatabase, FaLink, FaEdit } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import emailjs from 'emailjs-com';
import Image from 'next/image';
import dedicated_team from '../../public/images/dedicated team.png'
import dedicated_dev from '../../public/images/dedicated developer.png'
const MultiStepForm = () => {
    const router = useRouter();

    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        teamType: '',
        teamLevel: '',
        pricing: '',
        focusArea: '',
        role: '',
        tech: '',
        developerLevel: '',
        minPrice: '',
        maxPrice: '',
        startWindow: 'ASAP',
        duration: '1-3 month',
        hoursPerMonth: '176',
        budget: '',
        skills: '',
        name: '',
        company: '',
        email: '',
        phone: '',
        additionalInfo: ''
    });

    const handleTeamTypeSelect = (type, hours, pricing) => {
        setFormData({ ...formData, teamType: type, pricing: pricing, teamTypeDetails: hours });
        setCurrentStep(2);
    };

    const handleRoleSelect = (role) => {
        setFormData({ ...formData, role: role });
        setCurrentStep(3);
    };

    const handleTechSelect = (tech) => {
        setFormData({ ...formData, tech: tech });
        setCurrentStep(4);
    };

    const handleLevelSelect = (level, minPrice, maxPrice) => {
        setFormData({ ...formData, developerLevel: level, minPrice: minPrice, maxPrice: maxPrice });
        setCurrentStep(5);
    };

    const handleTeamLevelSelect = (level, price) => {
        setFormData({ ...formData, teamLevel: level, pricing: price });
        setCurrentStep(3);
    };

    const handleFocusAreaSelect = (area) => {
        setFormData({ ...formData, focusArea: area });
        setCurrentStep(4);
    };

    const handleContinue = () => {
        const maxStep = formData.teamType === 'Dedicated Developer' ? 8 : 7;
        if (currentStep < maxStep) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleEditStep = (step) => {
        setCurrentStep(step);
    };

    const isStep4Valid = () => {
        return formData.startWindow && formData.duration && formData.hoursPerMonth;
    };

    const isStep5Valid = () => {
        return formData.budget.trim() !== '';
    };

    const isStep6Valid = () => {
        return formData.name.trim() !== '' &&
            formData.company.trim() !== '' &&
            formData.email.trim() !== '';
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRadioChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const portalId = "244252598";
        const formId = "45972b40-6205-4bcd-94c2-45218c16056b";
        const hubspotEndpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

        const fields = Object.keys(formData).map((key) => ({
            name: key,
            value: formData[key],
        }));

        const payload = {
            fields,
            context: {
                pageUri: window.location.href,
                pageName: document.title,
            },
        };

        try {
            // Submit to HubSpot
            const response = await fetch(hubspotEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            // Send Email via EmailJS
            await emailjs.send(
                "service_n4sxm91",
                "template_i6q1796",
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    company: formData.company,
                    teamType: formData.teamType,
                    teamLevel: formData.teamLevel,
                    developerLevel: formData.developerLevel,
                    role: formData.role,
                    tech: formData.tech,
                    focusArea: formData.focusArea,
                    startWindow: formData.startWindow,
                    duration: formData.duration,
                    hoursPerMonth: formData.hoursPerMonth,
                    budget: formData.budget,
                    minPrice: formData.minPrice,
                    maxPrice: formData.maxPrice,
                    pricing: formData.pricing,
                    skills: formData.skills,
                    additionalInfo: formData.additionalInfo || "No additional info provided.",
                    pageName: document.title,
                    pageUri: window.location.href,
                },
                "xaklfWfIfvCP76y0o"
            );

            if (response.ok) {
                console.log("✅ Submitted to HubSpot and EmailJS:", formData);
                alert("Form submitted successfully!");

                setFormData({
                    teamType: "",
                    teamLevel: "",
                    pricing: "",
                    focusArea: "",
                    role: "",
                    tech: "",
                    developerLevel: "",
                    minPrice: "",
                    maxPrice: "",
                    startWindow: "ASAP",
                    duration: "1-3 month",
                    hoursPerMonth: "176",
                    budget: "",
                    skills: "",
                    name: "",
                    company: "",
                    email: "",
                    phone: "",
                    additionalInfo: "",
                });

                router.push("/");
            } else {
                console.error("❌ HubSpot error:", response.statusText);
                alert("HubSpot submission failed, but email was sent successfully.");
            }
        } catch (err) {
            console.error("Submission error:", err);
            alert("Error submitting form. Please try again.");
        }
    };

    const renderProgressBar = () => {
        const totalSteps = formData.teamType === 'Dedicated Developer' ? 7 : 6;
        return (
            <div style={styles.progressContainer}>
                {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
                    <div
                        key={step}
                        style={{
                            ...styles.progressBar,
                            ...(step <= currentStep ? styles.progressBarActive : {})
                        }}
                    ></div>
                ))}
            </div>
        );
    };

    const focusAreaOptions = [
        { icon: <FaCode size={28} />, label: 'Frontend' },
        { icon: <FaCog size={28} />, label: 'Backend' },
        { icon: <FaLayerGroup size={28} />, label: 'Full-stack' },
        { icon: <FaMobileAlt size={28} />, label: 'Mobile' },
        { icon: <FaDatabase size={28} />, label: 'Data/AI' },
        { icon: <FaLink size={28} />, label: 'Blockchain' },
    ];

    const renderStep1 = () => (
        <div style={styles.stepContent}>
            <div style={styles.optionsContainer}>
                <div style={styles.optionCard} onClick={() => handleTeamTypeSelect('Dedicated team (POD)', '200 hrs + PM + QA - $4K - $10K/mo')}>
                    <div style={styles.illustration}>
                        <Image src={dedicated_team} alt="dd team" style={{ 'width': '70%' }} />
                    </div>
                    <h3 style={styles.optionTitle}>Dedicated team (POD)</h3>
                    <p style={styles.optionDetails}>200 hrs + PM + QA - $4K - $10K/mo</p>
                </div>

                <div style={styles.optionCard} onClick={() => {
                    setFormData({ ...formData, teamType: 'Dedicated Developer', teamTypeDetails: '176 hrs' });
                    setCurrentStep(2);
                }}>
                    <div style={styles.illustration}>
                        <Image src={dedicated_dev} alt="dd team" style={{ 'width': '70%' }} />
                    </div>
                    <h3 style={styles.optionTitle}>Dedicated Developer</h3>
                    <p style={styles.optionDetails}>176 hrs - $2992-$7040/mo</p>
                </div>
            </div>
        </div>
    );

    const renderStep2 = () => (
        <div style={styles.stepContent}>
            <div style={styles.optionsContainerThree}>
                <div style={styles.optionCard} onClick={() => handleTeamLevelSelect('Junior Team', '$4000/mo')}>
                    <div style={styles.icon}>🌱</div>
                    <h3 style={styles.optionTitle}>Junior Team</h3>
                    <p style={styles.optionSubtitle}>One pod, guided by PM/QA</p>
                    <p style={styles.optionPrice}>$4000/mo</p>
                </div>

                <div style={styles.optionCard} onClick={() => handleTeamLevelSelect('Mid team', '$7,500/mo')}>
                    <div style={styles.icon}>🌿</div>
                    <h3 style={styles.optionTitle}>Mid team</h3>
                    <p style={styles.optionSubtitle}>Stronger velocity & code discipline</p>
                    <p style={styles.optionPrice}>$7,500/mo</p>
                </div>

                <div style={styles.optionCard} onClick={() => handleTeamLevelSelect('Senior team', '$13,500/mo')}>
                    <div style={styles.icon}>🌳</div>
                    <h3 style={styles.optionTitle}>Senior team</h3>
                    <p style={styles.optionSubtitle}>Best for complex systems</p>
                    <p style={styles.optionPrice}>$13,500/mo</p>
                </div>
            </div>
            <p style={styles.infoText}>All include PM + QA, sprint ceremonies, and backup coverage.</p>
        </div>
    );

    const renderStep3 = () => (
        <div style={styles.stepContent}>
            <h3 style={styles.sectionTitle}>Primary focus area</h3>
            <div style={styles.optionsContainer}>
                {focusAreaOptions.map((option) => (
                    <div key={option.label} style={styles.iconOption} onClick={() => handleFocusAreaSelect(option.label)}>
                        <div style={styles.iconBox}>
                            {option.icon}
                        </div>
                        <p style={styles.iconOptionText}>{option.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderRoleStep = () => (
        <div style={styles.stepContent}>
            <h3 style={styles.sectionTitle}>Pick the role you need</h3>
            <div style={styles.roleGrid}>
                <div style={styles.roleCard} onClick={() => handleRoleSelect('Frontend')}>
                    <div style={styles.roleIcon}>
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <rect x="10" y="15" width="40" height="30" rx="2" stroke="#333" strokeWidth="2" />
                            <path d="M15 20 L20 25 L15 30" stroke="#5b5bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <line x1="25" y1="20" x2="30" y2="30" stroke="#5b5bff" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <p style={styles.roleLabel}>Frontend</p>
                </div>

                <div style={styles.roleCard} onClick={() => handleRoleSelect('Backend')}>
                    <div style={styles.roleIcon}>
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <rect x="15" y="15" width="30" height="30" rx="2" stroke="#333" strokeWidth="2" />
                            <circle cx="25" cy="25" r="3" fill="#5b5bff" />
                            <circle cx="35" cy="25" r="3" fill="#5b5bff" />
                            <circle cx="25" cy="35" r="3" fill="#5b5bff" />
                            <circle cx="35" cy="35" r="3" fill="#5b5bff" />
                        </svg>
                    </div>
                    <p style={styles.roleLabel}>Backend</p>
                </div>

                <div style={styles.roleCard} onClick={() => handleRoleSelect('Mobile')}>
                    <div style={styles.roleIcon}>
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <rect x="20" y="10" width="20" height="40" rx="3" stroke="#333" strokeWidth="2" />
                            <circle cx="30" cy="45" r="2" fill="#5b5bff" />
                            <line x1="25" y1="15" x2="35" y2="15" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <p style={styles.roleLabel}>Mobile</p>
                </div>

                <div style={styles.roleCard} onClick={() => handleRoleSelect('DevOps')}>
                    <div style={styles.roleIcon}>
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <circle cx="20" cy="30" r="8" stroke="#333" strokeWidth="2" />
                            <circle cx="40" cy="30" r="8" stroke="#333" strokeWidth="2" />
                            <path d="M28 30 L32 30" stroke="#5b5bff" strokeWidth="2" />
                            <path d="M26 26 L34 34" stroke="#5b5bff" strokeWidth="2" />
                            <path d="M26 34 L34 26" stroke="#5b5bff" strokeWidth="2" />
                        </svg>
                    </div>
                    <p style={styles.roleLabel}>DevOps</p>
                </div>

                <div style={styles.roleCard} onClick={() => handleRoleSelect('QA')}>
                    <div style={styles.roleIcon}>
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <rect x="15" y="15" width="25" height="25" rx="2" stroke="#333" strokeWidth="2" />
                            <circle cx="45" cy="35" r="8" stroke="#333" strokeWidth="2" />
                            <path d="M50 40 L55 45" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                            <path d="M20 25 L25 30 L33 22" stroke="#5b5bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <p style={styles.roleLabel}>QA</p>
                </div>

                <div style={styles.roleCard} onClick={() => handleRoleSelect('Data/AI')}>
                    <div style={styles.roleIcon}>
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <rect x="15" y="20" width="10" height="20" fill="#5b5bff" opacity="0.3" />
                            <rect x="28" y="15" width="10" height="25" fill="#5b5bff" opacity="0.5" />
                            <rect x="41" y="10" width="10" height="30" fill="#5b5bff" />
                            <line x1="10" y1="40" x2="55" y2="40" stroke="#333" strokeWidth="2" />
                        </svg>
                    </div>
                    <p style={styles.roleLabel}>Data/AI</p>
                </div>

                <div style={styles.roleCard} onClick={() => handleRoleSelect('Blockchain')}>
                    <div style={styles.roleIcon}>
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <rect x="12" y="22" width="12" height="12" rx="1" stroke="#333" strokeWidth="2" />
                            <rect x="30" y="22" width="12" height="12" rx="1" stroke="#333" strokeWidth="2" />
                            <rect x="48" y="22" width="12" height="12" rx="1" stroke="#333" strokeWidth="2" />
                            <line x1="24" y1="28" x2="30" y2="28" stroke="#5b5bff" strokeWidth="2" />
                            <line x1="42" y1="28" x2="48" y2="28" stroke="#5b5bff" strokeWidth="2" />
                        </svg>
                    </div>
                    <p style={styles.roleLabel}>Blockchain</p>
                </div>
            </div>
        </div>
    );


    const renderTechStep = () => (
        <div style={styles.stepContent}>
            <h3 style={styles.sectionTitle}>Select the tech</h3>
            <div style={styles.techGrid}>
                <div style={styles.techCard} onClick={() => handleTechSelect('React')}>
                    <div style={styles.techIconBox}>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <circle cx="25" cy="25" r="4" fill="#61DAFB" />
                            <ellipse cx="25" cy="25" rx="18" ry="8" stroke="#61DAFB" strokeWidth="2" fill="none" />
                            <ellipse cx="25" cy="25" rx="18" ry="8" stroke="#61DAFB" strokeWidth="2" fill="none" transform="rotate(60 25 25)" />
                            <ellipse cx="25" cy="25" rx="18" ry="8" stroke="#61DAFB" strokeWidth="2" fill="none" transform="rotate(120 25 25)" />
                        </svg>
                    </div>
                    <p style={styles.techLabel}>React</p>
                </div>

                <div style={styles.techCard} onClick={() => handleTechSelect('Next.js')}>
                    <div style={styles.techIconBox}>
                        <div style={{ height: '50px', borderRadius: '50%', fontSize: '50px', fontWeight: 'bold' }}><RiNextjsFill style={{ 'height': '50px' }} /></div>
                    </div>
                    <p style={styles.techLabel}>Next.js</p>
                </div>

                <div style={styles.techCard} onClick={() => handleTechSelect('Node.js')}>
                    <div style={styles.techIconBox}>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <path d="M25 5 L45 15 L45 35 L25 45 L5 35 L5 15 Z" fill="#68A063" stroke="#68A063" strokeWidth="2" />
                        </svg>
                    </div>
                    <p style={styles.techLabel}>Node.js</p>
                </div>

                <div style={styles.techCard} onClick={() => handleTechSelect('Python / FastAPI')}>
                    <div style={styles.techIconBox}>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <path d="M15 20 Q15 10 25 10 Q35 10 35 20 L35 30 Q35 40 25 40 Q15 40 15 30 Z" fill="#3776AB" />
                            <circle cx="20" cy="17" r="2" fill="#FFD43B" />
                            <circle cx="30" cy="33" r="2" fill="#FFD43B" />
                        </svg>
                    </div>
                    <p style={styles.techLabel}>Python / FastAPI</p>
                </div>

                <div style={styles.techCard} onClick={() => handleTechSelect('AI / LLMs')}>
                    <div style={styles.techIconBox}>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <circle cx="25" cy="25" r="15" stroke="#9333EA" strokeWidth="2" />
                            <circle cx="25" cy="25" r="3" fill="#9333EA" />
                            <circle cx="15" cy="20" r="2" fill="#9333EA" />
                            <circle cx="35" cy="20" r="2" fill="#9333EA" />
                            <circle cx="20" cy="35" r="2" fill="#9333EA" />
                            <circle cx="30" cy="35" r="2" fill="#9333EA" />
                            <line x1="25" y1="25" x2="15" y2="20" stroke="#9333EA" strokeWidth="1.5" />
                            <line x1="25" y1="25" x2="35" y2="20" stroke="#9333EA" strokeWidth="1.5" />
                            <line x1="25" y1="25" x2="20" y2="35" stroke="#9333EA" strokeWidth="1.5" />
                            <line x1="25" y1="25" x2="30" y2="35" stroke="#9333EA" strokeWidth="1.5" />
                        </svg>
                    </div>
                    <p style={styles.techLabel}>AI / LLMs</p>
                </div>

                <div style={styles.techCard} onClick={() => handleTechSelect('Laravel / PHP')}>
                    <div style={styles.techIconBox}>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <path d="M10 35 L15 15 L25 25 L35 15 L40 35" stroke="#FF2D20" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        </svg>
                    </div>
                    <p style={styles.techLabel}>Laravel / PHP</p>
                </div>

                <div style={styles.techCard} onClick={() => handleTechSelect('Flutter')}>
                    <div style={styles.techIconBox}>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <path d="M30 10 L15 25 L20 30 L40 10 Z" fill="#02569B" />
                            <path d="M20 30 L15 35 L25 45 L30 40 L20 30" fill="#02569B" opacity="0.7" />
                        </svg>
                    </div>
                    <p style={styles.techLabel}>Flutter</p>
                </div>

                <div style={styles.techCard} onClick={() => handleTechSelect('Blockchain')}>
                    <div style={styles.techIconBox}>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <path d="M25 10 L35 20 L25 30 L15 20 Z" fill="#000" stroke="#000" strokeWidth="2" />
                            <path d="M25 20 L35 30 L25 40 L15 30 Z" fill="#000" opacity="0.6" stroke="#000" strokeWidth="2" />
                        </svg>
                    </div>
                    <p style={styles.techLabel}>Blockchain</p>
                </div>
            </div>
        </div>
    );

    const renderLevelStep = () => (
        <div style={styles.stepContent}>
            <div style={styles.levelGrid}>
                <div style={styles.levelCard} onClick={() => handleLevelSelect('Junior', '$2,992', '$4,400')}>
                    <div style={styles.levelEmoji}>🌱</div>
                    <h3 style={styles.levelTitle}>Junior</h3>
                </div>

                <div style={styles.levelCard} onClick={() => handleLevelSelect('Mid Level', '$4,400', '$6,160')}>
                    <div style={styles.levelEmoji}>💡</div>
                    <h3 style={styles.levelTitle}>Mid Level</h3>
                </div>

                <div style={styles.levelCard} onClick={() => handleLevelSelect('Senior', '$7,040', '')}>
                    <div style={styles.levelEmoji}>💎</div>
                    <h3 style={styles.levelTitle}>Senior</h3>
                </div>

                <div style={styles.levelCard} onClick={() => handleLevelSelect('Team lead', '$7,040', '')}>
                    <div style={styles.levelEmoji}>🏆</div>
                    <h3 style={styles.levelTitle}>Team lead</h3>
                </div>
            </div>
            <p style={styles.pricingText}>Normal: $2,992–$4,400 · Advance: $4,400–$6,160 · Advance Plus: $7,040 (Tech Lead)</p>
        </div>
    );

    const renderStep4 = () => (
        <div style={styles.stepContent}>
            <div style={styles.formRowVertical}>
                <div style={styles.formGroup}>
                    <div style={styles.formGroupHeader}>
                        <h3 style={styles.formGroupTitle}>Start window</h3>
                    </div>
                    <div style={styles.radioGroup}>
                        {['ASAP', 'Next Week', '2-3 Week', '4-6 Week'].map((option) => (
                            <label key={option} style={styles.radioOption}>
                                <input
                                    type="radio"
                                    name="startWindow"
                                    value={option}
                                    checked={formData.startWindow === option}
                                    onChange={(e) => handleRadioChange('startWindow', e.target.value)}
                                    style={styles.radioInput}
                                />
                                <span style={styles.radioLabel}>{option}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div style={styles.formGroup}>
                    <div style={styles.formGroupHeader}>
                        <h3 style={styles.formGroupTitle}>Duration</h3>
                    </div>
                    <div style={styles.radioGroup}>
                        {['1-3 month', '3-6 month', '6+ month', 'Unsure/ Need Advise'].map((option) => (
                            <label key={option} style={styles.radioOption}>
                                <input
                                    type="radio"
                                    name="duration"
                                    value={option}
                                    checked={formData.duration === option}
                                    onChange={(e) => handleRadioChange('duration', e.target.value)}
                                    style={styles.radioInput}
                                />
                                <span style={styles.radioLabel}>{option}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div style={styles.formGroup}>
                    <div style={styles.formGroupHeader}>
                        <h3 style={styles.formGroupTitle}>Hours/Month</h3>
                    </div>
                    <div style={styles.radioGroup}>
                        {['176', '200', '250', 'Custom'].map((option) => (
                            <label key={option} style={styles.radioOption}>
                                <input
                                    type="radio"
                                    name="hoursPerMonth"
                                    value={option}
                                    checked={formData.hoursPerMonth === option}
                                    onChange={(e) => handleRadioChange('hoursPerMonth', e.target.value)}
                                    style={styles.radioInput}
                                />
                                <span style={styles.radioLabel}>{option}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
            <p style={styles.infoText}>Teams default to 250 hrs; individual developers are 176 hrs by default.</p>
        </div>
    );

    const renderStep5 = () => (
        <div style={styles.stepContent}>
            <div style={styles.formRowTwo}>
                <div style={styles.inputGroup}>
                    <label style={styles.inputLabel}>
                        Budget (monthly, USD)
                    </label>
                    <input
                        type="text"
                        name="budget"
                        placeholder="$4,000-$13,500 (Teams) - $3000-$7040 (Devs)"
                        value={formData.budget}
                        onChange={handleInputChange}
                        style={styles.input}
                    />
                </div>

                <div style={styles.inputGroup}>
                    <label style={styles.inputLabel}>
                        Must-have skills (optional)
                    </label>
                    <input
                        type="text"
                        name="skills"
                        placeholder="E.G. Next.js, fastAPI, Postgres, AWS"
                        value={formData.skills}
                        onChange={handleInputChange}
                        style={styles.input}
                    />
                </div>
            </div>
        </div>
    );

    const renderStep6 = () => (
        <div style={styles.stepContent}>
            <div style={styles.formRowTwo}>
                <div style={styles.inputGroup}>
                    <label style={styles.inputLabel}>
                        Your Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="John Deo"
                        value={formData.name}
                        onChange={handleInputChange}
                        style={styles.input}
                    />
                </div>

                <div style={styles.inputGroup}>
                    <label style={styles.inputLabel}>
                        Company
                    </label>
                    <input
                        type="text"
                        name="company"
                        placeholder="Amazon"
                        value={formData.company}
                        onChange={handleInputChange}
                        style={styles.input}
                    />
                </div>

                <div style={styles.inputGroup}>
                    <label style={styles.inputLabel}>
                        Work email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="johnDeo@gmail.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        style={styles.input}
                    />
                </div>

                <div style={styles.inputGroup}>
                    <label style={styles.inputLabel}>Phone (optional)</label>
                    <PhoneInput
                        country={"us"}
                        value={formData.phone}
                        onChange={(value) =>
                            handleInputChange({ target: { name: "phone", value: `+${value}` } })
                        }
                        inputStyle={{
                            width: "100%",
                            height: "48px",
                            borderRadius: "8px",
                            border: "1px solid #ccc",
                            fontSize: "16px",
                        }}
                        buttonStyle={{
                            border: "none",
                            background: "transparent",
                        }}
                        dropdownStyle={{
                            zIndex: 9999,
                        }}
                        enableSearch={true}
                    />
                </div>
            </div>

            <div style={styles.inputGroupFull}>
                <label style={styles.inputLabel}>
                    Anything else we should know?
                </label>
                <textarea
                    name="additionalInfo"
                    placeholder="Write Here"
                    rows="4"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    style={{ ...styles.input, resize: 'vertical', width: '95%' }}
                ></textarea>
            </div>
        </div>
    );

    const renderStep7 = () => (
        <div style={styles.stepContent}>
            <div style={styles.summary}>
                <div style={styles.summaryItem}>
                    <div style={styles.summaryHeader}>
                        <span style={styles.stepNumber}>1</span>
                        <div style={styles.summaryContent}>
                            <strong style={styles.summaryTitle}>{formData.teamType}</strong>
                            <span style={styles.summaryDetails}>{formData.teamTypeDetails}</span>
                        </div>
                    </div>
                    <button style={styles.editBtn} onClick={() => handleEditStep(1)}>
                        <FaEdit size={18} />
                    </button>
                </div>

                {formData.teamType === 'Dedicated team (POD)' && (
                    <>
                        <div style={styles.summaryItem}>
                            <div style={styles.summaryHeader}>
                                <span style={styles.stepNumber}>2</span>
                                <div style={styles.summaryContent}>
                                    <strong style={styles.summaryTitle}>{formData.teamLevel}</strong>
                                    <span style={styles.summaryDetails}>Stronger velocity & code discipline</span>
                                    <span style={styles.priceTag}>{formData.pricing}</span>
                                </div>
                            </div>
                            <button style={styles.editBtn} onClick={() => handleEditStep(2)}>
                                <FaEdit size={18} />
                            </button>
                        </div>

                        <div style={styles.summaryItem}>
                            <div style={styles.summaryHeader}>
                                <span style={styles.stepNumber}>3</span>
                                <div style={styles.summaryContent}>
                                    <strong style={styles.summaryTitle}>Primary focus area</strong>
                                    <span style={styles.summaryDetails}>{formData.focusArea}</span>
                                </div>
                            </div>
                            <button style={styles.editBtn} onClick={() => handleEditStep(3)}>
                                <FaEdit size={18} />
                            </button>
                        </div>
                    </>
                )}

                {formData.teamType === 'Dedicated Developer' && (
                    <>
                        <div style={styles.summaryItem}>
                            <div style={styles.summaryHeader}>
                                <span style={styles.stepNumber}>2</span>
                                <div style={styles.summaryContent}>
                                    <strong style={styles.summaryTitle}>Role</strong>
                                    <span style={styles.summaryDetails}>{formData.role}</span>
                                </div>
                            </div>
                            <button style={styles.editBtn} onClick={() => handleEditStep(2)}>
                                <FaEdit size={18} />
                            </button>
                        </div>

                        <div style={styles.summaryItem}>
                            <div style={styles.summaryHeader}>
                                <span style={styles.stepNumber}>3</span>
                                <div style={styles.summaryContent}>
                                    <strong style={styles.summaryTitle}>Technology</strong>
                                    <span style={styles.summaryDetails}>{formData.tech}</span>
                                </div>
                            </div>
                            <button style={styles.editBtn} onClick={() => handleEditStep(3)}>
                                <FaEdit size={18} />
                            </button>
                        </div>

                        <div style={styles.summaryItem}>
                            <div style={styles.summaryHeader}>
                                <span style={styles.stepNumber}>4</span>
                                <div style={styles.summaryContent}>
                                    <strong style={styles.summaryTitle}>Level</strong>
                                    <span style={styles.summaryDetails}>{formData.developerLevel}</span>
                                    {formData.maxPrice && <span style={styles.priceTag}>{formData.minPrice} - {formData.maxPrice}</span>}
                                    {!formData.maxPrice && <span style={styles.priceTag}>{formData.minPrice}+</span>}
                                </div>
                            </div>
                            <button style={styles.editBtn} onClick={() => handleEditStep(4)}>
                                <FaEdit size={18} />
                            </button>
                        </div>
                    </>
                )}

                <div style={styles.summaryItem}>
                    <div style={styles.summaryHeader}>
                        <span style={styles.stepNumber}>{formData.teamType === 'Dedicated Developer' ? '5' : '4'}</span>
                        <div style={styles.summaryContent}>
                            <div><strong>Start window:</strong> {formData.startWindow}</div>
                            <div><strong>Duration:</strong> {formData.duration}</div>
                            <div><strong>Hours/Month:</strong> {formData.hoursPerMonth}</div>
                        </div>
                    </div>
                    <button style={styles.editBtn} onClick={() => handleEditStep(formData.teamType === 'Dedicated Developer' ? 5 : 4)}>
                        <FaEdit size={18} />
                    </button>
                </div>

                <div style={styles.summaryItem}>
                    <div style={styles.summaryHeader}>
                        <span style={styles.stepNumber}>{formData.teamType === 'Dedicated Developer' ? '6' : '5'}</span>
                        <div style={styles.summaryContent}>
                            <div><strong>Budget:</strong> {formData.budget || '-'}</div>
                            <div><strong>Skills:</strong> {formData.skills || '-'}</div>
                        </div>
                    </div>
                    <button style={styles.editBtn} onClick={() => handleEditStep(formData.teamType === 'Dedicated Developer' ? 6 : 5)}>
                        <FaEdit size={18} />
                    </button>
                </div>

                <div style={styles.summaryItem}>
                    <div style={styles.summaryHeader}>
                        <span style={styles.stepNumber}>{formData.teamType === 'Dedicated Developer' ? '7' : '6'}</span>
                        <div style={styles.summaryContent}>
                            <div><strong>Name:</strong> {formData.name}</div>
                            <div><strong>Company:</strong> {formData.company}</div>
                            <div><strong>Email:</strong> {formData.email}</div>
                            <div><strong>Phone:</strong> {formData.phone || '-'}</div>
                            {formData.additionalInfo && <div><strong>Additional Info:</strong> {formData.additionalInfo}</div>}
                        </div>
                    </div>
                    <button style={styles.editBtn} onClick={() => handleEditStep(formData.teamType === 'Dedicated Developer' ? 7 : 6)}>
                        <FaEdit size={18} />
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div style={styles.container}>
            <div style={styles.formCard}>
                <h1 style={styles.formTitle}>Get a personalized quote</h1>

                {renderProgressBar()}

                {currentStep === 1 && renderStep1()}
                {formData.teamType === 'Dedicated team (POD)' && currentStep === 2 && renderStep2()}
                {formData.teamType === 'Dedicated team (POD)' && currentStep === 3 && renderStep3()}
                {formData.teamType === 'Dedicated Developer' && currentStep === 2 && renderRoleStep()}
                {formData.teamType === 'Dedicated Developer' && currentStep === 3 && renderTechStep()}
                {formData.teamType === 'Dedicated Developer' && currentStep === 4 && renderLevelStep()}
                {((formData.teamType === 'Dedicated team (POD)' && currentStep === 4) || (formData.teamType === 'Dedicated Developer' && currentStep === 5)) && renderStep4()}
                {((formData.teamType === 'Dedicated team (POD)' && currentStep === 5) || (formData.teamType === 'Dedicated Developer' && currentStep === 6)) && renderStep5()}
                {((formData.teamType === 'Dedicated team (POD)' && currentStep === 6) || (formData.teamType === 'Dedicated Developer' && currentStep === 7)) && renderStep6()}
                {((formData.teamType === 'Dedicated team (POD)' && currentStep === 7) || (formData.teamType === 'Dedicated Developer' && currentStep === 8)) && renderStep7()}

                <div style={styles.buttonContainer}>
                    {currentStep > 1 && ((formData.teamType === 'Dedicated team (POD)' && currentStep < 7) || (formData.teamType === 'Dedicated Developer' && currentStep < 8)) && (
                        <button style={styles.btnBack} onClick={handleBack}>
                            Back
                        </button>
                    )}

                    {((formData.teamType === 'Dedicated team (POD)' && currentStep < 4) || (formData.teamType === 'Dedicated Developer' && currentStep < 5)) && (
                        <button style={styles.btnSecondary}>
                            Book a Call
                        </button>
                    )}

                    {((formData.teamType === 'Dedicated team (POD)' && currentStep === 4) || (formData.teamType === 'Dedicated Developer' && currentStep === 5)) && (
                        <>
                            <button style={styles.btnSecondary}>
                                Book a Call
                            </button>
                            <button
                                style={{
                                    ...styles.btnPrimary,
                                    ...(isStep4Valid() ? {} : styles.btnDisabled)
                                }}
                                onClick={handleContinue}
                                disabled={!isStep4Valid()}
                            >
                                Next
                            </button>
                        </>
                    )}

                    {((formData.teamType === 'Dedicated team (POD)' && currentStep === 5) || (formData.teamType === 'Dedicated Developer' && currentStep === 6)) && (
                        <>
                            <button style={styles.btnSecondary}>
                                Book a Call
                            </button>
                            <button
                                style={{
                                    ...styles.btnPrimary,
                                    ...(isStep5Valid() ? {} : styles.btnDisabled)
                                }}
                                onClick={handleContinue}
                                disabled={!isStep5Valid()}
                            >
                                Next
                            </button>
                        </>
                    )}

                    {((formData.teamType === 'Dedicated team (POD)' && currentStep === 6) || (formData.teamType === 'Dedicated Developer' && currentStep === 7)) && (
                        <>
                            <button style={styles.btnSecondary}>
                                Book a Call
                            </button>
                            <button
                                style={{
                                    ...styles.btnPrimary,
                                    ...(isStep6Valid() ? {} : styles.btnDisabled)
                                }}
                                onClick={handleContinue}
                                disabled={!isStep6Valid()}
                            >
                                Next
                            </button>
                        </>
                    )}

                    {((formData.teamType === 'Dedicated team (POD)' && currentStep === 7) || (formData.teamType === 'Dedicated Developer' && currentStep === 8)) && (
                        <>
                            <button style={styles.btnBack} onClick={handleBack}>
                                Back
                            </button>
                            <button style={styles.btnPrimary} onClick={handleSubmit}>
                                Send
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '5vw 4vw',
        boxSizing: 'border-box',
        flexWrap: 'wrap',
    },
    formCard: {
        background: 'white',
        borderRadius: '16px',
        padding: '5vw',
        maxWidth: '1100px',
        width: '100%',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
        boxSizing: 'border-box',
    },
    formTitle: {
        textAlign: 'center',
        color: '#1a1a4d',
        fontSize: 'clamp(22px, 3vw, 32px)',
        marginBottom: '40px',
        fontWeight: '700',
        lineHeight: 1.2,
    },
    progressContainer: {
        display: 'flex',
        gap: '10px',
        marginBottom: '50px',
        flexWrap: 'wrap',
    },
    progressBar: {
        flex: 1,
        height: '8px',
        backgroundColor: '#e0e0e0',
        borderRadius: '4px',
        transition: 'background-color 0.3s ease',
    },
    progressBarActive: {
        backgroundColor: '#5b5bff',
    },
    stepContent: {
        marginBottom: '40px',
        minHeight: '200px',
    },
    optionsContainer: {
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    optionsContainerThree: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '24px',
        marginBottom: '20px',
    },
    optionCard: {
        background: '#f8f9fc',
        borderRadius: '16px',
        padding: '35px 25px',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        flex: '1',
        minWidth: '240px',
        maxWidth: '350px',
        border: '2px solid transparent',
        boxSizing: 'border-box',
    },
    illustration: {
        marginBottom: '24px',
        display: 'flex',
        justifyContent: 'center',
    },
    optionTitle: {
        color: '#1a1a4d',
        fontSize: 'clamp(16px, 2vw, 20px)',
        marginBottom: '10px',
        fontWeight: '600',
    },
    optionDetails: {
        color: '#666',
        fontSize: 'clamp(13px, 1.5vw, 14px)',
        marginTop: '10px',
    },
    optionSubtitle: {
        color: '#666',
        fontSize: 'clamp(14px, 1.5vw, 15px)',
        margin: '12px 0',
    },
    optionPrice: {
        color: '#5b5bff',
        fontSize: 'clamp(18px, 2.5vw, 22px)',
        fontWeight: '700',
        marginTop: '18px',
    },
    icon: {
        fontSize: 'clamp(40px, 6vw, 52px)',
        marginBottom: '18px',
    },
    sectionTitle: {
        textAlign: 'center',
        color: '#1a1a4d',
        fontSize: 'clamp(18px, 2.3vw, 22px)',
        marginBottom: '35px',
        fontWeight: '600',
    },
    iconOption: {
        background: '#f8f9fc',
        borderRadius: '16px',
        padding: '30px',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        border: '2px solid transparent',
    },
    iconBox: {
        width: '70px',
        height: '70px',
        margin: '0 auto 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'white',
        borderRadius: '12px',
        border: '2px solid #e8e8f0',
        color: '#5b5bff',
    },
    iconOptionText: {
        color: '#1a1a4d',
        fontWeight: '600',
        fontSize: '15px',
    },
    formRowVertical: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '30px',
    },
    formRowTwo: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
    },
    formGroup: {
        background: '#f8f9fc',
        borderRadius: '16px',
        padding: '24px',
        border: '2px solid #e8e8f0',
        boxSizing: 'border-box',
    },
    formGroupHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '20px',
        flexWrap: 'wrap',
    },
    formGroupTitle: {
        color: '#1a1a4d',
        fontSize: '17px',
        fontWeight: '600',
        margin: 0,
    },
    radioGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
    },
    radioOption: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        cursor: 'pointer',
        padding: '10px 0',
        flexWrap: 'wrap',
    },
    radioInput: {
        width: '20px',
        height: '20px',
        cursor: 'pointer',
        accentColor: '#5b5bff',
    },
    radioLabel: {
        color: '#333',
        fontSize: '15px',
        fontWeight: '500',
    },
    inputGroup: {
        marginBottom: '24px',
    },
    inputGroupFull: {
        marginBottom: '24px',
        gridColumn: '1 / -1',
    },
    inputLabel: {
        display: 'flex',
        alignItems: 'center',
        color: '#1a1a4d',
        fontSize: '15px',
        fontWeight: '600',
        marginBottom: '10px',
    },
    input: {
        width: '100%',
        padding: '14px 16px',
        border: '2px solid #e8e8f0',
        borderRadius: '10px',
        fontSize: '15px',
        fontFamily: 'inherit',
        transition: 'border-color 0.3s ease',
        outline: 'none',
        boxSizing: 'border-box',
    },
    infoText: {
        textAlign: 'center',
        color: '#666',
        fontSize: '14px',
        marginTop: '30px',
        fontStyle: 'italic',
        padding: '0 10px',
    },
    buttonContainer: {
        display: 'flex',
        gap: '16px',
        justifyContent: 'center',
        marginTop: '40px',
        flexWrap: 'wrap',
    },
    btnBack: {
        padding: '16px 45px',
        border: '2px solid #5b5bff',
        borderRadius: '10px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        minWidth: '140px',
        background: 'white',
        color: '#5b5bff',
        flex: '1 1 auto',
    },
    btnPrimary: {
        padding: '16px 45px',
        border: 'none',
        borderRadius: '10px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        minWidth: '140px',
        background: '#f0f0ff',
        color: '#5b5bff',
        flex: '1 1 auto',
    },
    btnSecondary: {
        padding: '16px 45px',
        border: '2px solid #5b5bff',
        borderRadius: '10px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        minWidth: '140px',
        background: '#5b5bff',
        color: '#fff',
        flex: '1 1 auto',
    },
    btnDisabled: {
        opacity: 0.5,
        cursor: 'not-allowed',
    },
    summary: {
        display: 'flex',
        flexDirection: 'column',
        gap: '18px',
    },
    summaryItem: {
        background: '#f8f9fc',
        borderRadius: '12px',
        padding: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        border: '2px solid #e8e8f0',
        flexWrap: 'wrap',
        gap: '10px',
    },
    summaryHeader: {
        display: 'flex',
        gap: '18px',
        flex: 1,
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    stepNumber: {
        background: '#5b5bff',
        color: 'white',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '15px',
        fontWeight: '700',
        flexShrink: 0,
    },
    summaryContent: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        flex: 1,
    },
    summaryTitle: {
        color: '#1a1a4d',
        fontSize: '16px',
        fontWeight: '600',
    },
    summaryDetails: {
        color: '#666',
        fontSize: '14px',
    },
    priceTag: {
        color: '#5b5bff',
        fontWeight: '700',
        fontSize: '16px',
        marginTop: '4px',
    },
    editBtn: {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '8px',
        transition: 'transform 0.2s ease, color 0.2s ease',
        color: '#5b5bff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    roleGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginTop: '30px',
    },
    roleCard: {
        background: '#f8f9fc',
        borderRadius: '16px',
        padding: '30px 20px',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        border: '2px solid transparent',
    },
    roleIcon: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '15px',
    },
    roleLabel: {
        color: '#1a1a4d',
        fontSize: '15px',
        fontWeight: '600',
        margin: 0,
    },
    techGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '20px',
        marginTop: '30px',
    },
    techCard: {
        background: '#f8f9fc',
        borderRadius: '16px',
        padding: '25px 15px',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        border: '2px solid transparent',
    },
    techIconBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '15px',
        height: '50px',
    },
    techLabel: {
        color: '#1a1a4d',
        fontSize: '14px',
        fontWeight: '600',
    },
    levelGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '20px',
        marginTop: '30px',
    },
    levelCard: {
        background: '#f8f9fc',
        borderRadius: '16px',
        padding: '40px 20px',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        border: '2px solid transparent',
    },
    levelEmoji: {
        fontSize: '50px',
        marginBottom: '15px',
    },
    levelTitle: {
        color: '#1a1a4d',
        fontSize: '18px',
        fontWeight: '600',
        margin: 0,
    },
    pricingText: {
        textAlign: 'center',
        color: '#666',
        fontSize: '14px',
        marginTop: '30px',
    },
};

export default MultiStepForm;