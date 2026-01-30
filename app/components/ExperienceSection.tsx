'use client';

import { motion } from 'framer-motion';

interface ExperienceSectionProps {
  activeCompany: string;
  setActiveCompany: (company: string) => void;
}

export default function ExperienceSection({ activeCompany, setActiveCompany }: ExperienceSectionProps) {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '120px 20px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <div className="glass-section">
      <h2
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '36px',
          fontWeight: '600',
          color: '#ffffff',
          marginBottom: '40px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        <span style={{ color: '#70B5FF' }}>02.</span> Where I&apos;ve Worked
        <div
          style={{
            height: '1px',
            flex: 1,
            backgroundColor: '#233554',
            maxWidth: '300px',
            marginLeft: '20px'
          }}
        />
      </h2>

      <div className="experience-container">
        <div className="company-tabs">
          {['Devies', 'Osstell', 'Ebbot', 'HiQ', 'Decerno', 'TietoEVRY'].map((company) => (
            <button
              key={company}
              onClick={() => setActiveCompany(company)}
              style={{
                background: 'none',
                border: 'none',
                padding: '12px 20px',
                textAlign: 'left',
                fontFamily: "'Inter', sans-serif",
                fontSize: '15px',
                fontWeight: activeCompany === company ? '600' : '400',
                color: activeCompany === company ? '#ffffff' : '#c8d0e8',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                backgroundColor: 'transparent'
              }}
              className={`company-tab-button ${activeCompany === company ? 'active' : ''}`}
            >
              {company}
            </button>
          ))}
        </div>

        <div style={{ flex: 1 }} className="job-details">
          {activeCompany === 'Devies' && (
            <div>
              <h3 style={{ fontSize: '22px', color: '#ffffff', marginBottom: '5px' }}>
                Front-end Developer <span style={{ color: '#70B5FF' }}>@ Devies</span>
              </h3>
              <p style={{ fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace", fontSize: '13px', color: '#c8d0e8', marginBottom: '25px' }}>
                November 2025 - Present
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ color: '#c8d0e8', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                  Designed and implemented core features for a fleet management platform with a strong focus on clarity, performance and usability
                </li>
                <li style={{ color: '#c8d0e8', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                  Built interactive data visualizations and reusable UI components in React using component-driven development
                </li>
                <li style={{ color: '#c8d0e8', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                  Collaborated closely with stakeholders to deliver robust, user-centered solutions
                </li>
              </ul>
            </div>
          )}

          {activeCompany === 'Osstell' && (
            <div>
              <h3 style={{ fontSize: '22px', color: '#ffffff', marginBottom: '5px' }}>
                Fullstack Developer <span style={{ color: '#70B5FF' }}>@ Osstell</span>
              </h3>
              <p style={{ fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace", fontSize: '13px', color: '#c8d0e8', marginBottom: '25px' }}>
                April 2025 - Present
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ color: '#c8d0e8', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                  Built and shipped web and mobile features in React, TypeScript, and React Native
                </li>
                <li style={{ color: '#c8d0e8', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                  Developed and integrated secure REST APIs and authentication flows
                </li>
                <li style={{ color: '#c8d0e8', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                  Spearhead company-wide accessibility initiatives
                </li>
              </ul>
            </div>
          )}

          {activeCompany === 'Ebbot' && (
            <div>
              <h3 style={{ fontSize: '22px', color: '#ffffff', marginBottom: '5px' }}>
                Fullstack Developer <span style={{ color: '#70B5FF' }}>@ Ebbot</span>
              </h3>
              <p style={{ fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace", fontSize: '13px', color: '#c8d0e8', marginBottom: '25px' }}>
                May 2024 - April 2025
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ color: '#c8d0e8', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                  Led development and optimization of the company&apos;s core platform with TypeScript, React, and Node.js in a fast-paced environment
                </li>
                <li style={{ color: '#c8d0e8', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                  Translated user research and feedback into thoughtful UX improvements across key product areas
                </li>
                <li style={{ color: '#c8d0e8', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                  Drove modernization initiatives and collaborated closely with product managers and designers to shape new features
                </li>
              </ul>
            </div>
          )}

          {activeCompany === 'HiQ' && (
            <div>
              <h3 style={{ fontSize: '22px', color: '#ffffff', marginBottom: '5px' }}>
                Frontend Developer <span style={{ color: '#70B5FF' }}>@ HiQ</span>
              </h3>
              <p style={{ fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace", fontSize: '13px', color: '#c8d0e8', marginBottom: '25px' }}>
                June 2022 - May 2024
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ color: '#c8d0e8', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                  Built and launched enterprise-grade React/TypeScript applications for clients including Ericsson and Renault Trucks
                </li>
                <li style={{ color: '#c8d0e8', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                  Implemented accessibility features and patterns to ensure compliance with WCAG 2.1 standards
                </li>
                <li style={{ color: '#c8d0e8', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                  Worked in agile, cross-functional teams, collaborating with designers, backend developers, and QA to deliver robust solutions
                </li>
              </ul>
            </div>
          )}

          {activeCompany === 'Decerno' && (
            <div>
              <h3 style={{ fontSize: '22px', color: '#ffffff', marginBottom: '5px' }}>
                Frontend Developer <span style={{ color: '#70B5FF' }}>@ Decerno</span>
              </h3>
              <p style={{ fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace", fontSize: '13px', color: '#c8d0e8', marginBottom: '25px' }}>
                January 2022 - June 2022
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ color: '#c8d0e8', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                  Developed key responsive features for client applications, focusing on usability and stability
                </li>
                <li style={{ color: '#c8d0e8', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                  Worked with and improved established QA processes that improved testing coverage and reduced platform issues
                </li>
                <li style={{ color: '#c8d0e8', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                  Designed and implemented advanced React components while gaining consulting experience in enterprise environments
                </li>
              </ul>
            </div>
          )}

          {activeCompany === 'TietoEVRY' && (
            <div>
              <h3 style={{ fontSize: '22px', color: '#ffffff', marginBottom: '5px' }}>
                UX Designer <span style={{ color: '#70B5FF' }}>@ TietoEVRY</span>
              </h3>
              <p style={{ fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace", fontSize: '13px', color: '#c8d0e8', marginBottom: '25px' }}>
                June 2019 - April 2020
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ color: '#c8d0e8', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                  Led user testing initiatives and transformed findings into actionable interface updates and redesigns
                </li>
                <li style={{ color: '#c8d0e8', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                  Collaborated with developers to operationalize UX concepts and ensure consistency across multi-platform interfaces
                </li>
                <li style={{ color: '#c8d0e8', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                  Developed and sustained design systems, facilitated workshops, and assisted stakeholders in embracing user-centered methodologies
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      </div>
    </motion.section>
  );
}
