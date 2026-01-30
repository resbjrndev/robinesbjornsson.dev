'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import fejs from '../../public/assets/images/fejs.png';
import fejsDarkMode from '../../public/assets/images/fejsdarkmode.png';

interface AboutSectionProps {
  darkMode: boolean;
}

export default function AboutSection({ darkMode }: AboutSectionProps) {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '100px 20px 80px',
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
        <span style={{ color: '#70B5FF' }}>01.</span> About Me
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

      <div className="about-content">
        <div className="about-text">
          <div style={{ marginBottom: '10px' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '16px',
                color: '#70B5FF',
                marginBottom: '5px'
              }}
            >
              Hi, my name is
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                fontSize: 'clamp(35px, 6vw, 60px)',
                fontWeight: '600',
                fontFamily: 'Inter, sans-serif',
                color: '#ffffff',
                margin: '0',
                lineHeight: '1.1',
                letterSpacing: '-0.02em'
              }}
            >
              Robin Esbjörnsson.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              fontSize: '18px',
              color: '#c8d0e8',
              marginBottom: '20px',
              lineHeight: '1.7'
            }}
          >
            I&apos;m an experienced fullstack developer with a passion for creating engaging and accessible user experiences. My work focuses on building robust, scalable applications using modern web technologies, with particular attention to accessibility standards and best practices.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
              fontSize: '18px',
              color: '#c8d0e8',
              marginBottom: '20px',
              lineHeight: '1.7'
            }}
          >
            Currently, I work as a Fullstack Developer at <span style={{ color: '#70B5FF' }}>Devies</span>, where I build and ship web features using <span style={{ color: '#70B5FF' }}>React</span>, <span style={{ color: '#70B5FF' }}>TypeScript</span>, and <span style={{ color: '#70B5FF' }}>React Native</span>.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{
              fontSize: '18px',
              color: '#c8d0e8',
              marginBottom: '20px',
              lineHeight: '1.7'
            }}
          >
            My experience spans various environments, from working with enterprise clients like <span style={{ color: '#70B5FF' }}>Ericsson</span> and <span style={{ color: '#70B5FF' }}>Renault Trucks</span> to developing web platforms at product companies.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            style={{
              fontSize: '18px',
              color: '#c8d0e8',
              marginBottom: '15px',
              lineHeight: '1.7'
            }}
          >
            Here are a few technologies I&apos;ve been working with recently:
          </motion.p>
          <motion.ul
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(140px, 200px))',
              gap: '0 10px',
              padding: 0,
              margin: 0,
              listStyle: 'none',
              fontSize: '17px',
              fontFamily: "'Inter', sans-serif"
            }}
          >
            <li style={{ color: '#c8d0e8', paddingLeft: '20px', position: 'relative', marginBottom: '8px' }}>
              <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
              JavaScript (ES6+)
            </li>
            <li style={{ color: '#c8d0e8', paddingLeft: '20px', position: 'relative', marginBottom: '8px' }}>
              <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
              TypeScript
            </li>
            <li style={{ color: '#c8d0e8', paddingLeft: '20px', position: 'relative', marginBottom: '8px' }}>
              <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
              React
            </li>
            <li style={{ color: '#c8d0e8', paddingLeft: '20px', position: 'relative', marginBottom: '8px' }}>
              <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
              Next.js
            </li>
            <li style={{ color: '#c8d0e8', paddingLeft: '20px', position: 'relative', marginBottom: '8px' }}>
              <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
              Node.js
            </li>
            <li style={{ color: '#c8d0e8', paddingLeft: '20px', position: 'relative', marginBottom: '8px' }}>
              <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
              React Native
            </li>
          </motion.ul>
        </div>

        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }} className="about-image">
          <div
            className="profile-image-wrapper"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '300px'
            }}
          >
            <div
              className="profile-border"
              style={{
                position: 'absolute',
                inset: 0,
                border: 'none',
                borderRadius: '55% 45% 45% 55% / 55% 45% 55% 45%',
                animation: 'morph 18s infinite ease-in-out',
                zIndex: 2,
                pointerEvents: 'none'
              }}
            />

            <div
              className="profile-image-mask"
              style={{
                position: 'relative',
                borderRadius: '55% 45% 45% 55% / 55% 45% 55% 45%',
                overflow: 'hidden',
                animation: 'morph 18s infinite ease-in-out'
              }}
            >
              <Image
                src={darkMode ? fejsDarkMode : fejs}
                alt="Robin Esbjörnsson"
                width={300}
                height={300}
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  transition: 'opacity 0.5s ease-in-out',
                  opacity: 1
                }}
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </motion.section>
  );
}
