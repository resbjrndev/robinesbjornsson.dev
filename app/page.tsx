'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import fejs from '../public/assets/images/fejs.png'
import fejsDarkMode from '../public/assets/images/fejsdarkmode.png'
import Image from 'next/image';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  // const [imageTransition, setImageTransition] = useState(false);
  // const [activeSection, setActiveSection] = useState('');
  const [activeCompany, setActiveCompany] = useState('Osstell');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Load saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    } else {
      setDarkMode(false);
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

  // const toggleDarkMode = () => {
  //   setImageTransition(true);
  //   setTimeout(() => {
  //     setDarkMode(!darkMode);
  //     setTimeout(() => setImageTransition(false), 50);
  //   }, 250);
  // };

  // Scroll detection for header shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for section detection (disabled, unused)
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setActiveSection(entry.target.id);
  //         }
  //       });
  //     },
  //     { threshold: 0.3 }
  //   );
  //
  //   const sections = document.querySelectorAll('section[id]');
  //   sections.forEach((section) => observer.observe(section));
  //
  //   return () => sections.forEach((section) => observer.unobserve(section));
  // }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close menu on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      style={{
        backgroundColor: '#0a192f',
        color: '#8892b0',
        minHeight: '100vh',
        position: 'relative'
      }}
    >
      {/* Navigation */}
      <nav
        className="main-nav"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '70px',
          backgroundColor: 'rgba(10, 25, 47, 0.85)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 50px',
          boxShadow: scrolled ? '0 10px 30px -10px rgba(2, 12, 27, 0.7)' : 'none',
          transition: 'box-shadow 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)'
        }}
      >
        {/* Logo - Text */}
        <button
          onClick={scrollToTop}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            transition: 'transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
            fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
            fontSize: '16px',
            fontWeight: '600',
            color: '#ccd6f6'
          }}
          className="logo-button"
          aria-label="Scroll to top"
        >
          robinesbjornsson.dev
        </button>

        {/* Desktop Navigation Items */}
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }} className="nav-menu">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
            style={{
              fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
              fontSize: '13px',
              color: '#ccd6f6',
              textDecoration: 'none',
              transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
              cursor: 'pointer'
            }}
            className="nav-link"
          >
            <span style={{ color: '#70B5FF' }}>01.</span> About
          </a>
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('experience');
            }}
            style={{
              fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
              fontSize: '13px',
              color: '#ccd6f6',
              textDecoration: 'none',
              transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
              cursor: 'pointer'
            }}
            className="nav-link"
          >
            <span style={{ color: '#70B5FF' }}>02.</span> Experience
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
            style={{
              fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
              fontSize: '13px',
              color: '#ccd6f6',
              textDecoration: 'none',
              transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
              cursor: 'pointer'
            }}
            className="nav-link"
          >
            <span style={{ color: '#70B5FF' }}>03.</span> Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            style={{
              fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
              fontSize: '13px',
              color: '#ccd6f6',
              textDecoration: 'none',
              transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
              cursor: 'pointer'
            }}
            className="nav-link"
          >
            <span style={{ color: '#70B5FF' }}>04.</span> Contact
          </a>
          <a
            href="/RobinEsbjornsson_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
              fontSize: '13px',
              color: '#70B5FF',
              textDecoration: 'none',
              border: '1px solid #70B5FF',
              padding: '12px 16px',
              borderRadius: '4px',
              transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
              cursor: 'pointer'
            }}
            className="resume-button"
          >
            Resume
          </a>
        </div>

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="hamburger-menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '5px',
            zIndex: 1001,
            position: 'relative',
            width: '30px',
            height: '24px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '6px'
          }}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <div
            style={{
              width: '100%',
              height: '2px',
              backgroundColor: '#70B5FF',
              transform: mobileMenuOpen ? 'rotate(45deg) translateY(4px)' : 'none',
              transition: 'all 0.3s ease-in-out',
              transformOrigin: 'center'
            }}
          />
          <div
            style={{
              width: '100%',
              height: '2px',
              backgroundColor: '#70B5FF',
              opacity: mobileMenuOpen ? 0 : 1,
              transition: 'all 0.3s ease-in-out'
            }}
          />
          <div
            style={{
              width: '100%',
              height: '2px',
              backgroundColor: '#70B5FF',
              transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-4px)' : 'none',
              transition: 'all 0.3s ease-in-out',
              transformOrigin: 'center'
            }}
          />
        </button>
      </nav>

      {/* Blur Overlay for Mobile Menu */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '40vw',
            height: '100vh',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            zIndex: 998,
            transition: 'opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)'
          }}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Overlay */}
      <aside
        className="mobile-menu-overlay"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '60vw',
          height: '100vh',
          backgroundColor: '#0a192f',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '30px',
          zIndex: 999,
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
          boxShadow: mobileMenuOpen ? '-10px 0 30px rgba(2, 12, 27, 0.7)' : 'none'
        }}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Close Button */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'absolute',
            top: '25px',
            right: '25px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '5px',
            width: '30px',
            height: '30px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          aria-label="Close menu"
        >
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '2px',
              backgroundColor: '#70B5FF',
              transform: 'rotate(45deg)',
              transition: 'all 0.3s ease-in-out'
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '2px',
              backgroundColor: '#70B5FF',
              transform: 'rotate(-45deg)',
              transition: 'all 0.3s ease-in-out'
            }}
          />
        </button>

        {/* Mobile Menu Items with Stagger Animation */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
              setMobileMenuOpen(false);
            }}
            style={{
              fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
              fontSize: '18px',
              color: '#ccd6f6',
              textDecoration: 'none',
              transition: 'color 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '0.1s',
              lineHeight: '1.5'
            }}
            className="mobile-menu-item"
          >
            <span style={{ color: '#70B5FF', display: 'block', marginBottom: '5px' }}>01.</span>
            About
          </a>
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('experience');
              setMobileMenuOpen(false);
            }}
            style={{
              fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
              fontSize: '18px',
              color: '#ccd6f6',
              textDecoration: 'none',
              transition: 'color 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '0.2s',
              lineHeight: '1.5'
            }}
            className="mobile-menu-item"
          >
            <span style={{ color: '#70B5FF', display: 'block', marginBottom: '5px' }}>02.</span>
            Experience
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
              setMobileMenuOpen(false);
            }}
            style={{
              fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
              fontSize: '18px',
              color: '#ccd6f6',
              textDecoration: 'none',
              transition: 'color 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '0.3s',
              lineHeight: '1.5'
            }}
            className="mobile-menu-item"
          >
            <span style={{ color: '#70B5FF', display: 'block', marginBottom: '5px' }}>03.</span>
            Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
              setMobileMenuOpen(false);
            }}
            style={{
              fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
              fontSize: '18px',
              color: '#ccd6f6',
              textDecoration: 'none',
              transition: 'color 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '0.4s',
              lineHeight: '1.5'
            }}
            className="mobile-menu-item"
          >
            <span style={{ color: '#70B5FF', display: 'block', marginBottom: '5px' }}>04.</span>
            Contact
          </a>
          <a
            href="/RobinEsbjornsson_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
              fontSize: '13px',
              color: '#70B5FF',
              textDecoration: 'none',
              border: '1px solid #70B5FF',
              padding: '12px 16px',
              borderRadius: '4px',
              marginTop: '20px',
              transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '0.5s',
              width: 'max-content'
            }}
            className="mobile-resume-button"
          >
            Resume
          </a>
        </div>
      </aside>

      {/* Fixed Left Social Links */}
      <div
        style={{
          position: 'fixed',
          left: '40px',
          bottom: '0px',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px'
        }}
        className="social-sidebar"
      >
        <a
          href="https://github.com/resbjrndev"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#ccd6f6',
            transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)'
          }}
          className="social-icon"
          aria-label="GitHub"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/resbjrn/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#ccd6f6',
            transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)'
          }}
          className="social-icon"
          aria-label="Instagram"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/robinesbjornsson/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#ccd6f6',
            transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)'
          }}
          className="social-icon"
          aria-label="LinkedIn"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        <div
          style={{
            width: '1px',
            height: '90px',
            backgroundColor: '#8892b0'
          }}
        />
      </div>



      {/* Main Content */}
      <main style={{ paddingTop: '70px' }}>
        {/* About Section - Now includes hero content */}
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
          <h2
            style={{
              fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
              fontSize: '32px',
              fontWeight: '600',
              color: '#ccd6f6',
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

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '60px', alignItems: 'start' }} className="about-content">
            <div className="about-text">
              {/* Hero content moved here */}
              <div style={{ marginBottom: '10px' }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  style={{
                    fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
                    fontSize: '14px',
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
                    color: '#ccd6f6',
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
                  fontSize: '16px',
                  color: '#8892b0',
                  marginBottom: '20px',
                  lineHeight: '1.6'
                }}
              >
                I&apos;m an experienced fullstack developer with a passion for creating engaging and accessible user experiences. My work focuses on building robust, scalable applications using modern web technologies, with particular attention to accessibility standards and best practices.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{
                  fontSize: '16px',
                  color: '#8892b0',
                  marginBottom: '20px',
                  lineHeight: '1.6'
                }}
              >
                Currently, I work as a Fullstack Developer at <span style={{ color: '#70B5FF' }}>Osstell</span>, where I build and ship web and mobile features using <span style={{ color: '#70B5FF' }}>React</span>, <span style={{ color: '#70B5FF' }}>TypeScript</span>, and <span style={{ color: '#70B5FF' }}>React Native</span>.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                style={{
                  fontSize: '16px',
                  color: '#8892b0',
                  marginBottom: '20px',
                  lineHeight: '1.6'
                }}
              >
                My experience spans various environments, from working with enterprise clients like <span style={{ color: '#70B5FF' }}>Ericsson</span> and <span style={{ color: '#70B5FF' }}>Renault Trucks</span> to developing web platforms at product companies.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                style={{
                  fontSize: '16px',
                  color: '#8892b0',
                  marginBottom: '15px',
                  lineHeight: '1.6'
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
                  fontSize: '16px',
                  fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace"
                }}
              >
                <li style={{ color: '#8892b0', paddingLeft: '20px', position: 'relative', marginBottom: '8px' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                  JavaScript (ES6+)
                </li>
                <li style={{ color: '#8892b0', paddingLeft: '20px', position: 'relative', marginBottom: '8px' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                  TypeScript
                </li>
                <li style={{ color: '#8892b0', paddingLeft: '20px', position: 'relative', marginBottom: '8px' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                  React
                </li>
                <li style={{ color: '#8892b0', paddingLeft: '20px', position: 'relative', marginBottom: '8px' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                  Next.js
                </li>
                <li style={{ color: '#8892b0', paddingLeft: '20px', position: 'relative', marginBottom: '8px' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                  Node.js
                </li>
                <li style={{ color: '#8892b0', paddingLeft: '20px', position: 'relative', marginBottom: '8px' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                  React Native
                </li>
              </motion.ul>
            </div>

            {/* Profile Image - Right side on desktop, top on mobile */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }} className="about-image">
              <div
                className="profile-image-wrapper"
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '300px'
                }}
              >
                {/* Animated Border - Hidden for seamless blend */}
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

                {/* Image with Mask */}
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
        </motion.section>

        {/* Experience Section */}
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
          <h2
            style={{
              fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
              fontSize: '32px',
              fontWeight: '600',
              color: '#ccd6f6',
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

          <div style={{ display: 'flex', gap: '30px', marginTop: '40px', alignItems: 'flex-start' }} className="experience-container">
            {/* Company tabs */}
            <div style={{ display: 'flex', flexDirection: 'column', minWidth: '120px' }} className="company-tabs">
              <button
                onClick={() => setActiveCompany('Osstell')}
                style={{
                  background: 'none',
                  border: 'none',
                  borderLeft: `2px solid ${activeCompany === 'Osstell' ? '#70B5FF' : '#233554'}`,
                  padding: '10px 16px',
                  textAlign: 'left',
                  fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
                  fontSize: '16px',
                  color: activeCompany === 'Osstell' ? '#70B5FF' : '#8892b0',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                  backgroundColor: activeCompany === 'Osstell' ? 'rgba(100, 255, 218, 0.1)' : 'transparent'
                }}
              >
                Osstell
              </button>
              <button
                onClick={() => setActiveCompany('Ebbot')}
                style={{
                  background: 'none',
                  border: 'none',
                  borderLeft: `2px solid ${activeCompany === 'Ebbot' ? '#70B5FF' : '#233554'}`,
                  padding: '10px 16px',
                  textAlign: 'left',
                  fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
                  fontSize: '16px',
                  color: activeCompany === 'Ebbot' ? '#70B5FF' : '#8892b0',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                  backgroundColor: activeCompany === 'Ebbot' ? 'rgba(100, 255, 218, 0.1)' : 'transparent'
                }}
              >
                Ebbot
              </button>
              <button
                onClick={() => setActiveCompany('HiQ')}
                style={{
                  background: 'none',
                  border: 'none',
                  borderLeft: `2px solid ${activeCompany === 'HiQ' ? '#70B5FF' : '#233554'}`,
                  padding: '10px 16px',
                  textAlign: 'left',
                  fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
                  fontSize: '16px',
                  color: activeCompany === 'HiQ' ? '#70B5FF' : '#8892b0',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                  backgroundColor: activeCompany === 'HiQ' ? 'rgba(100, 255, 218, 0.1)' : 'transparent'
                }}
              >
                HiQ
              </button>
              <button
                onClick={() => setActiveCompany('Decerno')}
                style={{
                  background: 'none',
                  border: 'none',
                  borderLeft: `2px solid ${activeCompany === 'Decerno' ? '#70B5FF' : '#233554'}`,
                  padding: '10px 16px',
                  textAlign: 'left',
                  fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
                  fontSize: '16px',
                  color: activeCompany === 'Decerno' ? '#70B5FF' : '#8892b0',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                  backgroundColor: activeCompany === 'Decerno' ? 'rgba(100, 255, 218, 0.1)' : 'transparent'
                }}
              >
                Decerno
              </button>
              <button
                onClick={() => setActiveCompany('TietoEVRY')}
                style={{
                  background: 'none',
                  border: 'none',
                  borderLeft: `2px solid ${activeCompany === 'TietoEVRY' ? '#70B5FF' : '#233554'}`,
                  padding: '10px 16px',
                  textAlign: 'left',
                  fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
                  fontSize: '16px',
                  color: activeCompany === 'TietoEVRY' ? '#70B5FF' : '#8892b0',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                  backgroundColor: activeCompany === 'TietoEVRY' ? 'rgba(100, 255, 218, 0.1)' : 'transparent'
                }}
              >
                TietoEVRY
              </button>
            </div>

            {/* Job details */}
            <div style={{ flex: 1 }} className="job-details">
              {activeCompany === 'Osstell' && (
                <div>
                  <h3 style={{ fontSize: '22px', color: '#ccd6f6', marginBottom: '5px' }}>
                    Fullstack Developer <span style={{ color: '#70B5FF' }}>@ Osstell</span>
                  </h3>
                  <p style={{ fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace", fontSize: '13px', color: '#8892b0', marginBottom: '25px' }}>
                    April 2025 - Present
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ color: '#8892b0', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                      Built and shipped web and mobile features in React, TypeScript, and React Native
                    </li>
                    <li style={{ color: '#8892b0', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                      Developed and integrated secure REST APIs and authentication flows
                    </li>
                    <li style={{ color: '#8892b0', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                      Spearhead company-wide accessibility initiatives
                    </li>
                  </ul>
                </div>
              )}

              {activeCompany === 'Ebbot' && (
                <div>
                  <h3 style={{ fontSize: '22px', color: '#ccd6f6', marginBottom: '5px' }}>
                    Fullstack Developer <span style={{ color: '#70B5FF' }}>@ Ebbot</span>
                  </h3>
                  <p style={{ fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace", fontSize: '13px', color: '#8892b0', marginBottom: '25px' }}>
                    May 2024 - April 2025
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ color: '#8892b0', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                      Led development and optimization of the company&apos;s core platform with TypeScript, React, and Node.js in a fast-paced environment
                    </li>
                    <li style={{ color: '#8892b0', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                      Translated user research and feedback into thoughtful UX improvements across key product areas
                    </li>
                    <li style={{ color: '#8892b0', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                      Drove modernization initiatives and collaborated closely with product managers and designers to shape new features
                    </li>
                  </ul>
                </div>
              )}

              {activeCompany === 'HiQ' && (
                <div>
                  <h3 style={{ fontSize: '22px', color: '#ccd6f6', marginBottom: '5px' }}>
                    Frontend Developer <span style={{ color: '#70B5FF' }}>@ HiQ</span>
                  </h3>
                  <p style={{ fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace", fontSize: '13px', color: '#8892b0', marginBottom: '25px' }}>
                    June 2022 - May 2024
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ color: '#8892b0', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                      Built and launched enterprise-grade React/TypeScript applications for clients including Ericsson and Renault Trucks
                    </li>
                    <li style={{ color: '#8892b0', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                      Implemented accessibility features and patterns to ensure compliance with WCAG 2.1 standards
                    </li>
                    <li style={{ color: '#8892b0', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                      Worked in agile, cross-functional teams, collaborating with designers, backend developers, and QA to deliver robust solutions
                    </li>
                  </ul>
                </div>
              )}

              {activeCompany === 'Decerno' && (
                <div>
                  <h3 style={{ fontSize: '22px', color: '#ccd6f6', marginBottom: '5px' }}>
                    Frontend Developer <span style={{ color: '#70B5FF' }}>@ Decerno</span>
                  </h3>
                  <p style={{ fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace", fontSize: '13px', color: '#8892b0', marginBottom: '25px' }}>
                    January 2022 - June 2022
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ color: '#8892b0', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                      Developed key responsive features for client applications, focusing on usability and stability
                    </li>
                    <li style={{ color: '#8892b0', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                      Worked with and improved established QA processes that improved testing coverage and reduced platform issues
                    </li>
                    <li style={{ color: '#8892b0', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                      Designed and implemented advanced React components while gaining consulting experience in enterprise environments
                    </li>
                  </ul>
                </div>
              )}

              {activeCompany === 'TietoEVRY' && (
                <div>
                  <h3 style={{ fontSize: '22px', color: '#ccd6f6', marginBottom: '5px' }}>
                    UX Designer <span style={{ color: '#70B5FF' }}>@ TietoEVRY</span>
                  </h3>
                  <p style={{ fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace", fontSize: '13px', color: '#8892b0', marginBottom: '25px' }}>
                    June 2019 - April 2020
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ color: '#8892b0', fontSize: 'px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                      Led user testing initiatives and transformed findings into actionable interface updates and redesigns
                    </li>
                    <li style={{ color: '#8892b0', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                      Collaborated with developers to operationalize UX concepts and ensure consistency across multi-platform interfaces
                    </li>
                    <li style={{ color: '#8892b0', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#70B5FF' }}>▹</span>
                      Developed and sustained design systems, facilitated workshops, and assisted stakeholders in embracing user-centered methodologies
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '120px 20px',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <h2
            style={{
              fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
              fontSize: '32px',
              fontWeight: '600',
              color: '#ccd6f6',
              marginBottom: '40px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <span style={{ color: '#70B5FF' }}>03.</span> Some Things I&apos;ve Built
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

          {/* Project Cards */}
          <div style={{ marginTop: '50px', display: 'grid', gap: '30px' }}>
            <a
              href="https://kanban-steel.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                textDecoration: 'none',
                backgroundColor: '#112240',
                padding: '30px',
                borderRadius: '8px',
                border: '1px solid #233554',
                transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                cursor: 'pointer'
              }}
              className="project-card"
            >
              <h3 style={{ fontSize: '24px', color: '#ccd6f6', marginBottom: '15px', fontWeight: '600' }}>
                Kanban Board App →
              </h3>
              <p style={{ fontSize: '16px', color: '#8892b0', marginBottom: '20px', lineHeight: '1.6' }}>
                A task management application with drag-and-drop functionality for organizing projects.
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <span style={{
                  fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
                  fontSize: '12px',
                  color: '#70B5FF',
                  backgroundColor: 'rgba(112, 181, 255, 0.1)',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  border: '1px solid rgba(112, 181, 255, 0.2)'
                }}>
                  React
                </span>
                <span style={{
                  fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
                  fontSize: '12px',
                  color: '#70B5FF',
                  backgroundColor: 'rgba(112, 181, 255, 0.1)',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  border: '1px solid rgba(112, 181, 255, 0.2)'
                }}>
                  TypeScript
                </span>
              </div>
            </a>

            <a
              href="https://flashy-ten-iota.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                textDecoration: 'none',
                backgroundColor: '#112240',
                padding: '30px',
                borderRadius: '8px',
                border: '1px solid #233554',
                transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                cursor: 'pointer'
              }}
              className="project-card"
            >
              <h3 style={{ fontSize: '24px', color: '#ccd6f6', marginBottom: '15px', fontWeight: '600' }}>
                Flashcard Language App →
              </h3>
              <p style={{ fontSize: '16px', color: '#8892b0', marginBottom: '20px', lineHeight: '1.6' }}>
                A language learning app that helps you master new words through interactive flashcards.
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <span style={{
                  fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
                  fontSize: '12px',
                  color: '#70B5FF',
                  backgroundColor: 'rgba(112, 181, 255, 0.1)',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  border: '1px solid rgba(112, 181, 255, 0.2)'
                }}>
                  React
                </span>
                <span style={{
                  fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
                  fontSize: '12px',
                  color: '#70B5FF',
                  backgroundColor: 'rgba(112, 181, 255, 0.1)',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  border: '1px solid rgba(112, 181, 255, 0.2)'
                }}>
                  UX Design
                </span>
              </div>
            </a>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '80px 20px',
            minHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <p style={{ fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace", fontSize: '16px', color: '#70B5FF', marginBottom: '20px' }}>
            04. What&apos;s Next?
          </p>
          <h2 style={{ fontSize: '60px', fontWeight: '600', color: '#ccd6f6', marginBottom: '20px' }}>
            Get In Touch
          </h2>
          <p style={{ fontSize: '18px', color: '#8892b0', marginBottom: '50px', lineHeight: '1.5' }}>
            My inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>







    <div >
          <a
            href="mailto:robin.esbjornsson@hotmail.com"
            style={{
              fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
              fontSize: '18px',
              color: '#ffffff',
              textDecoration: 'none',
              letterSpacing: '0.1em',
              transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)'
            }}
            className="email-link"
          >
            robin.esbjornsson@hotmail.com
          </a>
      
              <p
            style={{
              fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
              fontSize: '18px',
              color: '#ffffff',
              textDecoration: 'none',
              letterSpacing: '0.1em',
              transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)'
            }}
          >
            +46 721 92 33 58
          </p>
    </div>

        </motion.section>
      </main>

      {/* Footer */}
      <footer
        style={{
          padding: '15px',
          textAlign: 'center',
          fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
          fontSize: '12px',
          color: '#8892b0'
        }}
      >
        {/* Mobile Social Links */}
        <div className="mobile-social-links" style={{ display: 'none', marginBottom: '30px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '20px' }}>
            <a
              href="https://github.com/resbjrndev"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#8892b0',
                transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)'
              }}
              className="mobile-social-icon"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/robinesbjornsson/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#8892b0',
                transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)'
              }}
              className="mobile-social-icon"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#8892b0',
                transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)'
              }}
              className="mobile-social-icon"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
          <a
            href="mailto:robin.esbjornsson@hotmail.com"
            style={{
              fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
              fontSize: '18px',
              color: '#fffff',
              textDecoration: 'none',
              display: 'block',
              marginBottom: '20px'
            }}
          >
            robin.esbjornsson@hotmail.com
          </a>
        </div>
  Designed &amp; Built by Robin Esbjörnsson
      </footer>

      {/* CSS */}
      <style jsx>{`
        /* Logo hover effect */
        .logo-button:hover {
          transform: scale(1.05);
        }

        .logo-button:focus {
          outline: 2px solid #70B5FF;
          outline-offset: 4px;
        }

        /* Desktop nav link hover */
        .nav-link:hover {
          color: #70B5FF !important;
        }

        .nav-link:focus {
          outline: 2px solid #70B5FF;
          outline-offset: 4px;
        }

        /* Resume button hover */
        .resume-button:hover {
          background-color: rgba(100, 255, 218, 0.1);
          transform: translateY(-2px);
        }

        .resume-button:focus {
          outline: 2px solid #70B5FF;
          outline-offset: 4px;
        }

        /* Mobile menu items hover */
        .mobile-menu-item:hover {
          color: #70B5FF !important;
        }

        .mobile-menu-item:focus {
          outline: 2px solid #70B5FF;
          outline-offset: 4px;
        }

        /* Mobile resume button hover */
        .mobile-resume-button:hover {
          background-color: rgba(100, 255, 218, 0.1);
        }

        .mobile-resume-button:focus {
          outline: 2px solid #70B5FF;
          outline-offset: 4px;
        }

        /* Social icons hover */
        .social-icon:hover {
          color: #70B5FF;
          transform: translateY(-3px);
        }

        .social-icon:focus {
          outline: 2px solid #70B5FF;
          outline-offset: 4px;
        }

        /* Email link hover */
        .email-link:hover {
          color: #70B5FF;
          transform: translateY(-3px);
        }

        .email-link:focus {
          outline: 2px solid #70B5FF;
          outline-offset: 4px;
        }

        /* CTA button hover */
        .cta-button:hover {
          background-color: rgba(100, 255, 218, 0.1);
          transform: translateY(-2px);
        }

        .cta-button:focus {
          outline: 2px solid #70B5FF;
          outline-offset: 4px;
        }

        /* Project card hover */
        .project-card:hover {
          transform: translateY(-5px);
          border-color: #70B5FF !important;
          box-shadow: 0 20px 30px -10px rgba(2, 12, 27, 0.7);
        }

        /* Mobile social icon hover */
        .mobile-social-icon:hover {
          color: #70B5FF;
        }

        .mobile-social-icon:focus {
          outline: 2px solid #70B5FF;
          outline-offset: 4px;
        }

        /* Profile image animation */
        @keyframes morph {
          0% {
            border-radius: 55% 45% 45% 55% / 55% 45% 55% 45%;
          }
          14% {
            border-radius: 45% 55% 50% 50% / 50% 60% 40% 50%;
          }
          28% {
            border-radius: 50% 50% 40% 60% / 45% 55% 45% 55%;
          }
          42% {
            border-radius: 60% 40% 55% 45% / 50% 50% 50% 50%;
          }
          57% {
            border-radius: 45% 55% 60% 40% / 55% 45% 60% 40%;
          }
          71% {
            border-radius: 50% 50% 45% 55% / 40% 60% 45% 55%;
          }
          85% {
            border-radius: 40% 60% 55% 45% / 55% 45% 50% 50%;
          }
          100% {
            border-radius: 55% 45% 45% 55% / 55% 45% 55% 45%;
          }
        }

        /* Responsive breakpoints */
        @media (max-width: 1080px) {
          .social-sidebar,
          .email-sidebar {
            display: none !important;
          }
        }

        @media (max-width: 767px) {
          .main-nav {
            padding-left: 25px !important;
            padding-right: 25px !important;
          }

          .nav-menu {
            display: none !important;
          }

          .hamburger-menu {
            display: flex !important;
          }

          .about-content {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          .about-text {
            order: 2;
          }

          .about-image {
            order: 1;
            justify-content: center !important;
          }

          .experience-container {
            flex-direction: column !important;
            gap: 20px !important;
          }

          .company-tabs {
            flex-direction: row !important;
            overflow-x: auto !important;
            min-width: 100% !important;
            border-bottom: 2px solid #233554 !important;
            padding-bottom: 0 !important;
            -webkit-overflow-scrolling: touch !important;
          }

          .company-tabs button {
            border-left: none !important;
            border-bottom: 2px solid transparent !important;
            white-space: nowrap !important;
            padding: 12px 20px !important;
            background-color: transparent !important;
          }

          .mobile-social-links {
            display: block !important;
          }

          main section {
            padding-left: 25px !important;
            padding-right: 25px !important;
            padding-top: 60px !important;
            padding-bottom: 60px !important;
          }
        }
      `}</style>
    </div>
  );
}
