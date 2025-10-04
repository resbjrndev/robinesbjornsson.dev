'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profileLightMode from '../public/assets/images/profileImageLightMode.svg'
import profileDarkMode from '../public/assets/images/profileImageDarkMode.svg'
import headerLightMode from '../public/assets/images/headerLightMode.svg'
import headerDarkMode from '../public/assets/images/headerDarkMode.svg'
import lightModeToggle from '../public/assets/images/lightModeToggle.svg'
import darkModeToggle from '../public/assets/images/darkModeToggle.svg'
import fejs from '../public/assets/images/fejs.png'
import fejsDarkMode from '../public/assets/images/fejsdarkmode.png'
import linkedinIcon from '../public/assets/images/linkedin-big-logo.svg'
import Image from 'next/image';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [imageTransition, setImageTransition] = useState(false);

  // Load saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  // Save theme preference and apply to document
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    console.log('Current darkMode:', darkMode, 'Setting to:', !darkMode);
    setImageTransition(true);
    setTimeout(() => {
      setDarkMode(!darkMode);
      setTimeout(() => setImageTransition(false), 50);
    }, 250);
  };

  return (
    <div
      className="min-h-screen transition-colors duration-500"
      style={{
        backgroundColor: darkMode ? '#1a1a2e' : '#ffffff',
        color: darkMode ? 'white' : '#111827',
        display: 'flex',
        flexDirection: 'column'
      }}>
      {/* Header */}
      <header
        className="flex justify-between items-center"
        style={{
          backgroundColor: darkMode ? '#16213e' : '#0000ff',
          padding: '1.5rem 2rem',
          position: 'relative'
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-bebas-neue)',
            fontSize: '20px',
            color: 'white',
            fontWeight: '400',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            margin: 0
          }}
        >
          robinesbjornsson.dev
        </h1>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="relative overflow-hidden transition-all duration-300 hover:scale-110"
          style={{
            width: '60px',
            height: '32px',
            borderRadius: '99px',
            backgroundColor: 'transparent',
            border: `2px solid ${darkMode ? '#ffffff' : '#ffffff'}`,
            cursor: 'pointer'
          }}
          aria-label="Toggle dark mode"
        >
          {/* Sliding Circle with Emoji */}
          <div
            style={{
              position: 'absolute',
              top: '0px',
              left: darkMode ? '28px' : '0px',
              width: '30px',
              height: '28px',
              borderRadius: '50%',
              border: `0px solid ${darkMode ? '#ffffff' : '#ffffff'}`,
              backgroundColor: 'transparent',
              transition: 'left 0.3s ease-in-out',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '19px'
            }}
          >
            {darkMode ? '🌙' : '☀️'}
          </div>
        </button>
      </header>

      {/* Main Content */}
      <main
        className="main-container"
      >
        {/* Profile Image Section */}
        <div className="profile-section">
          <div className="relative">
            {/* Animated Profile Image Container with Border */}
            <div
              className="profile-image-wrapper"
              style={{
                width: '320px',
                height: '320px',
                position: 'relative'
              }}
            >
              {/* Animated Border */}
              <div
                className="profile-border"
                style={{
                  position: 'absolute',
                  inset: 0,
                  border: `4px solid ${darkMode ? '#16213e' : '#0000ff'}`,
                  animation: 'morph 8s infinite ease-in-out',
                  zIndex: 2,
                  pointerEvents: 'none'
                }}
              />

              {/* Image with Mask */}
              <div
                className="profile-image-mask"
                style={{
                  position: 'absolute',
                  inset: '4px',
                  overflow: 'hidden',
                  animation: 'morph 8s infinite ease-in-out',
                  zIndex: 1
                }}
              >
                <Image
                  src={darkMode ? fejsDarkMode : fejs}
                  alt="Robin"
                  fill
                  style={{
                    objectFit: 'cover',
                    transition: 'opacity 0.5s ease-in-out',
                    opacity: imageTransition ? 0 : 1
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="content-section">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h2
              style={{
                fontFamily: 'var(--font-bebas-neue)',
                fontSize: '72px',
                fontWeight: '400',
                color: darkMode ? '#60a5fa' : '#0000ff',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                letterSpacing: '2px'
              }}
            >
              I&apos;M ROBIN
            </h2>
          </motion.div>

          {/* About Me */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${darkMode ? 'text-gray-300' : 'text-gray-800'}`}
            style={{
              fontSize: '16px',
              lineHeight: '1.6',
              maxWidth: '600px',
              marginTop: '0.5rem',
              marginBottom: '1.5rem'
            }}
          >
            I&apos;m a Frontend Engineer focused on React & TypeScript. I build fast, accessible products with clean architectures and delightful micro-interactions.
          </motion.p>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              maxWidth: '600px'
            }}
          >
            <div
              className={`${darkMode ? 'text-gray-300' : 'text-gray-800'}`}
              style={{
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span>💼</span>
              <span>Fullstack Developer at Osstell</span>
            </div>
            <div
              className={`${darkMode ? 'text-gray-300' : 'text-gray-800'}`}
              style={{
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span>📍</span>
              <span>Gothenburg, Sweden</span>
            </div>
            <a
              href="/assets/images/RobinEsbjornsson_CV_English.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-bebas-neue)',
                fontSize: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
                color: darkMode ? '#60a5fa' : '#0000ff',
                letterSpacing: '1px',
                transition: 'opacity 0.3s ease',
                marginTop: '0.5rem'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <span>📄</span>
              <span>VIEW MY RESUME</span>
            </a>
          </motion.div>

        </div>
      </main>

      {/* Projects Section */}
      <section
        style={{
          padding: '2rem 2rem 4rem 2rem'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontFamily: 'var(--font-bebas-neue)',
              fontSize: '48px',
              fontWeight: '400',
              color: darkMode ? '#60a5fa' : '#0000ff',
              textAlign: 'center',
              marginBottom: '3rem',
              letterSpacing: '2px'
            }}
          >
            PROJECTS
          </motion.h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              maxWidth: '900px',
              margin: '0 auto'
            }}
          >
            {/* Project 1 - Kanban Board */}
            <motion.a
              href="https://task-board-iim8mjdy9-resbjrndevs-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                backgroundColor: darkMode ? '#16213e' : 'white',
                borderRadius: '12px',
                padding: '2rem',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                border: `2px solid ${darkMode ? '#16213e' : '#e5e7eb'}`
              }}
              className="project-card"
            >
              <h3
                style={{
                  fontFamily: 'var(--font-bebas-neue)',
                  fontSize: '32px',
                  color: darkMode ? '#60a5fa' : '#0000ff',
                  margin: 0,
                  letterSpacing: '1px'
                }}
              >
                KANBAN BOARD APP
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: darkMode ? '#d1d5db' : '#4b5563',
                  margin: 0
                }}
              >
                A task management application with drag-and-drop functionality for organizing projects.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                <span style={{
                  fontSize: '12px',
                  padding: '0.25rem 0.75rem',
                  backgroundColor: darkMode ? '#60a5fa' : '#0000ff',
                  color: 'white',
                  borderRadius: '12px'
                }}>React</span>
                <span style={{
                  fontSize: '12px',
                  padding: '0.25rem 0.75rem',
                  backgroundColor: darkMode ? '#60a5fa' : '#0000ff',
                  color: 'white',
                  borderRadius: '12px'
                }}>TypeScript</span>
              </div>
            </motion.a>

            {/* Project 2 - Flashy */}
            <motion.a
              href="https://flashy-ten-iota.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                backgroundColor: darkMode ? '#16213e' : 'white',
                borderRadius: '12px',
                padding: '2rem',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                border: `2px solid ${darkMode ? '#16213e' : '#e5e7eb'}`
              }}
              className="project-card"
            >
              <h3
                style={{
                  fontFamily: 'var(--font-bebas-neue)',
                  fontSize: '32px',
                  color: darkMode ? '#60a5fa' : '#0000ff',
                  margin: 0,
                  letterSpacing: '1px'
                }}
              >
                Flashcard Language App
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: darkMode ? '#d1d5db' : '#4b5563',
                  margin: 0
                }}
              >
                A language learning app that helps you master new words through interactive flashcards.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                <span style={{
                  fontSize: '12px',
                  padding: '0.25rem 0.75rem',
                  backgroundColor: darkMode ? '#60a5fa' : '#0000ff',
                  color: 'white',
                  borderRadius: '12px'
                }}>React</span>
                <span style={{
                  fontSize: '12px',
                  padding: '0.25rem 0.75rem',
                  backgroundColor: darkMode ? '#60a5fa' : '#0000ff',
                  color: 'white',
                  borderRadius: '12px'
                }}>UX Design</span>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: darkMode ? '#16213e' : '#0000ff',
          padding: '1.5rem 2rem',
          marginTop: 'auto'
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem'
          }}
        >
          {/* Social Icons - Left */}
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: darkMode ? '#16213e' : 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease',
                textDecoration: 'none'
              }}
              className="footer-icon"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill={darkMode ? 'white' : '#0000ff'} aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/robinesbjornsson/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: darkMode ? '#16213e' : 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease',
                textDecoration: 'none'
              }}
              className="footer-icon"
            >
              <Image
                src={linkedinIcon}
                alt="LinkedIn"
                width={24}
                height={24}
                style={{
                  filter: darkMode ? 'brightness(0) saturate(100%) invert(100%)' : 'brightness(0) saturate(100%) invert(11%) sepia(100%) saturate(7426%) hue-rotate(245deg) brightness(89%) contrast(143%)'
                }}
              />
            </a>
          </div>

          {/* Contact Information - Right */}
          <div style={{ textAlign: 'right' }}>
         
            <p style={{ color: 'white', fontSize: '14px', margin: '0 0 0.25rem 0' }}>
              <a href="mailto:robin.esbjornsson@hotmail.com" style={{ color: 'white', textDecoration: 'none' }}>
                robin.esbjornsson@hotmail.com
              </a>
            </p>
            <p style={{ color: 'white', fontSize: '14px', margin: '0' }}>
              <a href="tel:+1234567890" style={{ color: 'white', textDecoration: 'none' }}>
                +46 721 92 33 58
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* CSS for animations and responsive layout */}
      <style jsx>{`
        .main-container {
          display: grid;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          min-height: calc(100vh - 200px);
          padding: 2rem 1rem;
          flex: 1;

          /* Mobile first - stack vertically */
          grid-template-columns: 1fr;
          grid-template-rows: auto auto;
          gap: 2rem;
        }

        .profile-section {
          justify-self: center;
          margin-right: 0;
        }

        .content-section {
          justify-self: center;
          max-width: 600px;
        }

        /* Desktop - side by side */
        @media (min-width: 1024px) {
          .main-container {
            grid-template-columns: auto 1fr;
            grid-template-rows: auto;
            gap: 4rem;
            padding: 4rem 2rem;
          }

          .profile-section {
            justify-self: end;
            margin-right: 2rem;
          }

          .content-section {
            justify-self: start;
          }
        }

        .footer-icon:hover {
          transform: scale(1.1);
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0, 0, 255, 0.15);
        }

        @keyframes morph {
          0%, 100% {
            border-radius: 50%;
          }
          25% {
            border-radius: 40% 60% 60% 40% / 60% 40% 60% 40%;
          }
          50% {
            border-radius: 30% 70% 70% 30% / 70% 30% 70% 30%;
          }
          75% {
            border-radius: 40% 60% 60% 40% / 60% 40% 60% 40%;
          }
        }
      `}</style>
    </div>
  );
}