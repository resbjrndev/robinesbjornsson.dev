'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import fejs from '../public/assets/images/fejs.png'
import fejsDarkMode from '../public/assets/images/fejsdarkmode.png'
import Image from 'next/image';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [imageTransition, setImageTransition] = useState(false);
  const [activeSection, setActiveSection] = useState('');
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

  const toggleDarkMode = () => {
    setImageTransition(true);
    setTimeout(() => {
      setDarkMode(!darkMode);
      setTimeout(() => setImageTransition(false), 50);
    }, 250);
  };

  // Scroll detection for header shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for section detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

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
        {/* Logo - Hexagonal SVG with "B" */}
        <button
          onClick={scrollToTop}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            transition: 'transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)'
          }}
          className="logo-button"
          aria-label="Scroll to top"
        >
          <svg width="45" height="45" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon
              points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
              stroke="#64ffda"
              strokeWidth="3"
              fill="none"
            />
            <text
              x="50"
              y="67"
              fontFamily="'SF Mono', 'Fira Code', 'JetBrains Mono', monospace"
              fontSize="50"
              fill="#64ffda"
              textAnchor="middle"
              fontWeight="600"
            >
              B
            </text>
          </svg>
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
            <span style={{ color: '#64ffda' }}>01.</span> About
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
            <span style={{ color: '#64ffda' }}>02.</span> Experience
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
            <span style={{ color: '#64ffda' }}>03.</span> Work
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
            <span style={{ color: '#64ffda' }}>04.</span> Contact
          </a>
          <a
            href="/RobinEsbjornsson_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
              fontSize: '13px',
              color: '#64ffda',
              textDecoration: 'none',
              border: '1px solid #64ffda',
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
            justifyContent: 'space-between'
          }}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <div
            style={{
              width: '100%',
              height: '2px',
              backgroundColor: '#64ffda',
              transform: mobileMenuOpen ? 'rotate(45deg) translate(7px, 7px)' : 'none',
              transition: 'all 0.3s ease-in-out'
            }}
          />
          <div
            style={{
              width: '100%',
              height: '2px',
              backgroundColor: '#64ffda',
              opacity: mobileMenuOpen ? 0 : 1,
              transition: 'all 0.3s ease-in-out'
            }}
          />
          <div
            style={{
              width: '100%',
              height: '2px',
              backgroundColor: '#64ffda',
              transform: mobileMenuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none',
              transition: 'all 0.3s ease-in-out'
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
          backgroundColor: 'rgba(10, 25, 47, 0.95)',
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
            height: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
          aria-label="Close menu"
        >
          <div
            style={{
              width: '100%',
              height: '2px',
              backgroundColor: '#64ffda',
              transform: 'rotate(45deg) translate(7px, 7px)',
              transition: 'all 0.3s ease-in-out'
            }}
          />
          <div
            style={{
              width: '100%',
              height: '2px',
              backgroundColor: '#64ffda',
              opacity: 0,
              transition: 'all 0.3s ease-in-out'
            }}
          />
          <div
            style={{
              width: '100%',
              height: '2px',
              backgroundColor: '#64ffda',
              transform: 'rotate(-45deg) translate(7px, -7px)',
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
            <span style={{ color: '#64ffda', display: 'block', marginBottom: '5px' }}>01.</span>
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
            <span style={{ color: '#64ffda', display: 'block', marginBottom: '5px' }}>02.</span>
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
            <span style={{ color: '#64ffda', display: 'block', marginBottom: '5px' }}>03.</span>
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
            <span style={{ color: '#64ffda', display: 'block', marginBottom: '5px' }}>04.</span>
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
              color: '#64ffda',
              textDecoration: 'none',
              border: '1px solid #64ffda',
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
            color: '#8892b0',
            transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)'
          }}
          className="social-icon"
          aria-label="GitHub"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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
          className="social-icon"
          aria-label="Instagram"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#8892b0',
            transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)'
          }}
          className="social-icon"
          aria-label="Twitter"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
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
          className="social-icon"
          aria-label="LinkedIn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a
          href="https://codepen.io"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#8892b0',
            transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)'
          }}
          className="social-icon"
          aria-label="CodePen"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 8.182l-.018-.087-.017-.05c-.01-.024-.018-.05-.03-.075-.003-.018-.015-.034-.02-.05l-.035-.067-.03-.05-.044-.06-.046-.045-.06-.045-.046-.03-.06-.044-.044-.04-.015-.02L12.58.19c-.347-.232-.796-.232-1.142 0L.453 7.502l-.015.015-.044.035-.06.05-.038.04-.05.056-.037.045-.05.06c-.02.017-.03.03-.03.046l-.05.06-.02.06c-.02.01-.02.04-.03.07l-.01.05C0 8.12 0 8.15 0 8.18v7.497c0 .044.003.09.01.135l.01.046c.005.03.01.06.02.086l.015.05c.01.027.016.053.027.075l.022.05c.01.025.02.045.034.067l.03.05.03.03.01.015.03.03c.01.015.023.03.035.04l.012.01.045.04.015.02.045.03.045.03.015.02.05.03.035.03.013.01.06.03.01.01.05.026.02.014.03.01.013.01.06.025.01.01.05.02.01.01.06.02.01.01.05.02.01.006.05.015.037.015.02.01.05.015.02.006.026.015.05.01c.03.01.06.014.09.02l.04.01c.03.006.06.01.092.012l.05.01.05.01.064.005.044.005c.04.005.08.005.118.005L12 16.01l11.09 7.257c.175.117.38.176.587.176.206 0 .412-.06.587-.177.347-.23.563-.618.563-1.04V8.18zm-1.18 6.93l-2.664-1.78 2.664-1.78v3.56zm-10.82 3.78L3.04 13.78l9.134-6.1 9.134 6.1-9.134 6.11-9.134-6.11zm10.82-7.47L12 5.365l-10.82 7.057L12 19.48l10.82-7.057zM1.18 8.24v3.56L3.844 10 1.18 8.24z"/>
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

      {/* Fixed Right Email */}
      <div
        style={{
          position: 'fixed',
          right: '40px',
          bottom: '0px',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px'
        }}
        className="email-sidebar"
      >
        <a
          href="mailto:robin.esbjornsson@hotmail.com"
          style={{
            fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
            fontSize: '12px',
            color: '#8892b0',
            textDecoration: 'none',
            writingMode: 'vertical-rl',
            letterSpacing: '0.1em',
            transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)'
          }}
          className="email-link"
        >
          robin.esbjornsson@hotmail.com
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
        {/* Hero Section */}
        <section
          style={{
            minHeight: 'calc(100vh - 70px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '0 20px'
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
              fontSize: '16px',
              color: '#64ffda',
              marginBottom: '30px'
            }}
          >
            Hi, my name is
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontSize: 'clamp(40px, 8vw, 80px)',
              fontWeight: '400',
              fontFamily: 'var(--font-bebas-neue), Bebas Neue, sans-serif',
              color: '#ccd6f6',
              margin: '0 0 10px 0',
              lineHeight: '1.1',
              whiteSpace: 'nowrap',
              letterSpacing: '0.02em'
            }}
          >
            Robin Esbjörnsson.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              fontSize: 'clamp(40px, 8vw, 80px)',
              fontWeight: '400',
              fontFamily: 'var(--font-bebas-neue), Bebas Neue, sans-serif',
              color: '#8892b0',
              margin: '0 0 20px 0',
              lineHeight: '1.1',
              letterSpacing: '0.02em'
            }}
          >
            I build things for the web.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              fontSize: '20px',
              color: '#8892b0',
              maxWidth: '540px',
              marginBottom: '50px',
              lineHeight: '1.3'
            }}
          >
            I'm an experienced fullstack developer with a passion for creating engaging and accessible user experiences. My work focuses on building robust, scalable applications using modern web technologies.
          </motion.p>
        </section>

        {/* About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '80px 20px',
            minHeight: '90vh',
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
            <span style={{ color: '#64ffda' }}>01.</span> About Me
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

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '80px' }} className="about-content">
            <div className="about-text">
              <p
                style={{
                  fontSize: '18px',
                  color: '#8892b0',
                  marginBottom: '15px',
                  lineHeight: '1.6'
                }}
              >
                I'm an experienced fullstack developer with a passion for creating engaging and accessible user experiences. My work focuses on building robust, scalable applications using modern web technologies, with particular attention to accessibility standards and best practices.
              </p>
              <p
                style={{
                  fontSize: '18px',
                  color: '#8892b0',
                  marginBottom: '15px',
                  lineHeight: '1.6'
                }}
              >
                Currently, I work as a Fullstack Developer at <span style={{ color: '#64ffda' }}>Osstell</span>, where I build and ship web and mobile features using <span style={{ color: '#64ffda' }}>React</span>, <span style={{ color: '#64ffda' }}>TypeScript</span>, and <span style={{ color: '#64ffda' }}>React Native</span>. I maintain shared component libraries, integrate secure REST APIs, and spearhead company-wide accessibility initiatives to improve usability for all users.
              </p>
              <p
                style={{
                  fontSize: '18px',
                  color: '#8892b0',
                  marginBottom: '15px',
                  lineHeight: '1.6'
                }}
              >
                My experience spans various environments — from working with enterprise clients like <span style={{ color: '#64ffda' }}>Ericsson</span> and <span style={{ color: '#64ffda' }}>Renault Trucks</span> to developing quality assurance tools and implementing WCAG 2.1 compliance features.
              </p>
              <p
                style={{
                  fontSize: '18px',
                  color: '#8892b0',
                  marginBottom: '20px',
                  lineHeight: '1.6'
                }}
              >
                Here are a few technologies I've been working with recently:
              </p>
              <ul
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, minmax(140px, 200px))',
                  gap: '0 10px',
                  padding: 0,
                  margin: 0,
                  listStyle: 'none',
                  fontSize: '13px',
                  fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace"
                }}
              >
                <li style={{ color: '#8892b0', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#64ffda' }}>▹</span>
                  JavaScript (ES6+)
                </li>
                <li style={{ color: '#8892b0', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#64ffda' }}>▹</span>
                  TypeScript
                </li>
                <li style={{ color: '#8892b0', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#64ffda' }}>▹</span>
                  React
                </li>
                <li style={{ color: '#8892b0', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#64ffda' }}>▹</span>
                  Next.js
                </li>
                <li style={{ color: '#8892b0', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#64ffda' }}>▹</span>
                  Node.js
                </li>
                <li style={{ color: '#8892b0', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#64ffda' }}>▹</span>
                  React Native
                </li>
              </ul>
            </div>

            {/* Profile Image with Animated Border */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }} className="about-image">
              <div
                className="profile-image-wrapper"
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '300px'
                }}
              >
                {/* Animated Border */}
                <div
                  className="profile-border"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    border: '3px solid #0a192f',
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
                      opacity: imageTransition ? 0 : 1
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
            padding: '80px 20px',
            minHeight: '90vh',
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
            <span style={{ color: '#64ffda' }}>02.</span> Where I've Worked
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
                  borderLeft: `2px solid ${activeCompany === 'Osstell' ? '#64ffda' : '#233554'}`,
                  padding: '10px 16px',
                  textAlign: 'left',
                  fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
                  fontSize: '14px',
                  color: activeCompany === 'Osstell' ? '#64ffda' : '#8892b0',
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
                  borderLeft: `2px solid ${activeCompany === 'Ebbot' ? '#64ffda' : '#233554'}`,
                  padding: '10px 16px',
                  textAlign: 'left',
                  fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
                  fontSize: '14px',
                  color: activeCompany === 'Ebbot' ? '#64ffda' : '#8892b0',
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
                  borderLeft: `2px solid ${activeCompany === 'HiQ' ? '#64ffda' : '#233554'}`,
                  padding: '10px 16px',
                  textAlign: 'left',
                  fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
                  fontSize: '14px',
                  color: activeCompany === 'HiQ' ? '#64ffda' : '#8892b0',
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
                  borderLeft: `2px solid ${activeCompany === 'Decerno' ? '#64ffda' : '#233554'}`,
                  padding: '10px 16px',
                  textAlign: 'left',
                  fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
                  fontSize: '14px',
                  color: activeCompany === 'Decerno' ? '#64ffda' : '#8892b0',
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
                  borderLeft: `2px solid ${activeCompany === 'TietoEVRY' ? '#64ffda' : '#233554'}`,
                  padding: '10px 16px',
                  textAlign: 'left',
                  fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
                  fontSize: '14px',
                  color: activeCompany === 'TietoEVRY' ? '#64ffda' : '#8892b0',
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
                    Fullstack Developer <span style={{ color: '#64ffda' }}>@ Osstell</span>
                  </h3>
                  <p style={{ fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace", fontSize: '13px', color: '#8892b0', marginBottom: '25px' }}>
                    April 2025 - Present
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ color: '#8892b0', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#64ffda' }}>▹</span>
                      Built and shipped web and mobile features in React, TypeScript, and React Native
                    </li>
                    <li style={{ color: '#8892b0', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#64ffda' }}>▹</span>
                      Developed and integrated secure REST APIs and authentication flows
                    </li>
                    <li style={{ color: '#8892b0', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#64ffda' }}>▹</span>
                      Spearhead company-wide accessibility initiatives
                    </li>
                  </ul>
                </div>
              )}

              {activeCompany === 'Ebbot' && (
                <div>
                  <h3 style={{ fontSize: '22px', color: '#ccd6f6', marginBottom: '5px' }}>
                    Fullstack Developer <span style={{ color: '#64ffda' }}>@ Ebbot</span>
                  </h3>
                  <p style={{ fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace", fontSize: '13px', color: '#8892b0', marginBottom: '25px' }}>
                    May 2024 - April 2025
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ color: '#8892b0', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#64ffda' }}>▹</span>
                      Led development and optimization of the company's core platform with TypeScript, React, and Node.js in a fast-paced environment
                    </li>
                    <li style={{ color: '#8892b0', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#64ffda' }}>▹</span>
                      Translated user research and feedback into thoughtful UX improvements across key product areas
                    </li>
                    <li style={{ color: '#8892b0', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#64ffda' }}>▹</span>
                      Drove modernization initiatives and collaborated closely with product managers and designers to shape new features
                    </li>
                  </ul>
                </div>
              )}

              {activeCompany === 'HiQ' && (
                <div>
                  <h3 style={{ fontSize: '22px', color: '#ccd6f6', marginBottom: '5px' }}>
                    Frontend Developer <span style={{ color: '#64ffda' }}>@ HiQ</span>
                  </h3>
                  <p style={{ fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace", fontSize: '13px', color: '#8892b0', marginBottom: '25px' }}>
                    June 2022 - May 2024
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ color: '#8892b0', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#64ffda' }}>▹</span>
                      Built and launched enterprise-grade React/TypeScript applications for clients including Ericsson and Renault Trucks
                    </li>
                    <li style={{ color: '#8892b0', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#64ffda' }}>▹</span>
                      Implemented accessibility features and patterns to ensure compliance with WCAG 2.1 standards
                    </li>
                    <li style={{ color: '#8892b0', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#64ffda' }}>▹</span>
                      Worked in agile, cross-functional teams, collaborating with designers, backend developers, and QA to deliver robust solutions
                    </li>
                  </ul>
                </div>
              )}

              {activeCompany === 'Decerno' && (
                <div>
                  <h3 style={{ fontSize: '22px', color: '#ccd6f6', marginBottom: '5px' }}>
                    Frontend Developer <span style={{ color: '#64ffda' }}>@ Decerno</span>
                  </h3>
                  <p style={{ fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace", fontSize: '13px', color: '#8892b0', marginBottom: '25px' }}>
                    January 2022 - June 2022
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ color: '#8892b0', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#64ffda' }}>▹</span>
                      Developed key responsive features for client applications, focusing on usability and stability
                    </li>
                    <li style={{ color: '#8892b0', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#64ffda' }}>▹</span>
                      Worked with and improved established QA processes that improved testing coverage and reduced platform issues
                    </li>
                    <li style={{ color: '#8892b0', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#64ffda' }}>▹</span>
                      Designed and implemented advanced React components while gaining consulting experience in enterprise environments
                    </li>
                  </ul>
                </div>
              )}

              {activeCompany === 'TietoEVRY' && (
                <div>
                  <h3 style={{ fontSize: '22px', color: '#ccd6f6', marginBottom: '5px' }}>
                    UX Designer <span style={{ color: '#64ffda' }}>@ TietoEVRY</span>
                  </h3>
                  <p style={{ fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace", fontSize: '13px', color: '#8892b0', marginBottom: '25px' }}>
                    June 2019 - April 2020
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ color: '#8892b0', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#64ffda' }}>▹</span>
                      Led user testing initiatives and transformed findings into actionable interface updates and redesigns
                    </li>
                    <li style={{ color: '#8892b0', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#64ffda' }}>▹</span>
                      Collaborated with developers to operationalize UX concepts and ensure consistency across multi-platform interfaces
                    </li>
                    <li style={{ color: '#8892b0', fontSize: '18px', lineHeight: '1.6', marginBottom: '10px', paddingLeft: '30px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#64ffda' }}>▹</span>
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
            padding: '80px 20px',
            minHeight: '90vh'
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
            <span style={{ color: '#64ffda' }}>03.</span> Some Things I've Built
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
          <div style={{ marginTop: '50px' }}>
            <a
              href="https://kanban-steel.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                marginBottom: '40px',
                textDecoration: 'none',
                transition: 'transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)'
              }}
              className="project-card"
            >
              <h3 style={{ fontSize: '24px', color: '#ccd6f6', marginBottom: '10px' }}>
                Kanban Board App →
              </h3>
              <p style={{ fontSize: '18px', color: '#8892b0', marginBottom: '15px', lineHeight: '1.4' }}>
                A task management application with drag-and-drop functionality for organizing projects.
              </p>
              <div style={{ display: 'flex', gap: '15px', fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace", fontSize: '13px' }}>
                <span style={{ color: '#8892b0' }}>React</span>
                <span style={{ color: '#8892b0' }}>TypeScript</span>
              </div>
            </a>

            <a
              href="https://flashy-ten-iota.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                textDecoration: 'none',
                transition: 'transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)'
              }}
              className="project-card"
            >
              <h3 style={{ fontSize: '24px', color: '#ccd6f6', marginBottom: '10px' }}>
                Flashcard Language App →
              </h3>
              <p style={{ fontSize: '18px', color: '#8892b0', marginBottom: '15px', lineHeight: '1.4' }}>
                A language learning app that helps you master new words through interactive flashcards.
              </p>
              <div style={{ display: 'flex', gap: '15px', fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace", fontSize: '13px' }}>
                <span style={{ color: '#8892b0' }}>React</span>
                <span style={{ color: '#8892b0' }}>UX Design</span>
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
          <p style={{ fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace", fontSize: '16px', color: '#64ffda', marginBottom: '20px' }}>
            04. What's Next?
          </p>
          <h2 style={{ fontSize: '60px', fontWeight: '600', color: '#ccd6f6', marginBottom: '20px' }}>
            Get In Touch
          </h2>
          <p style={{ fontSize: '18px', color: '#8892b0', marginBottom: '50px', lineHeight: '1.5' }}>
            Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a
            href="mailto:robin.esbjornsson@hotmail.com"
            style={{
              fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
              fontSize: '14px',
              color: '#64ffda',
              textDecoration: 'none',
              border: '1px solid #64ffda',
              padding: '20px 28px',
              borderRadius: '4px',
              transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)'
            }}
            className="cta-button"
          >
            Say Hello
          </a>
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
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
          <a
            href="mailto:robin.esbjornsson@hotmail.com"
            style={{
              fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
              fontSize: '14px',
              color: '#8892b0',
              textDecoration: 'none',
              display: 'block',
              marginBottom: '20px'
            }}
          >
            robin.esbjornsson@hotmail.com
          </a>
        </div>
        Designed & Built by Robin Esbjörnsson
      </footer>

      {/* CSS */}
      <style jsx>{`
        /* Logo hover effect */
        .logo-button:hover {
          transform: scale(1.05);
        }

        .logo-button:focus {
          outline: 2px solid #64ffda;
          outline-offset: 4px;
        }

        /* Desktop nav link hover */
        .nav-link:hover {
          color: #64ffda !important;
        }

        .nav-link:focus {
          outline: 2px solid #64ffda;
          outline-offset: 4px;
        }

        /* Resume button hover */
        .resume-button:hover {
          background-color: rgba(100, 255, 218, 0.1);
          transform: translateY(-2px);
        }

        .resume-button:focus {
          outline: 2px solid #64ffda;
          outline-offset: 4px;
        }

        /* Mobile menu items hover */
        .mobile-menu-item:hover {
          color: #64ffda !important;
        }

        .mobile-menu-item:focus {
          outline: 2px solid #64ffda;
          outline-offset: 4px;
        }

        /* Mobile resume button hover */
        .mobile-resume-button:hover {
          background-color: rgba(100, 255, 218, 0.1);
        }

        .mobile-resume-button:focus {
          outline: 2px solid #64ffda;
          outline-offset: 4px;
        }

        /* Social icons hover */
        .social-icon:hover {
          color: #64ffda;
          transform: translateY(-3px);
        }

        .social-icon:focus {
          outline: 2px solid #64ffda;
          outline-offset: 4px;
        }

        /* Email link hover */
        .email-link:hover {
          color: #64ffda;
          transform: translateY(-3px);
        }

        .email-link:focus {
          outline: 2px solid #64ffda;
          outline-offset: 4px;
        }

        /* CTA button hover */
        .cta-button:hover {
          background-color: rgba(100, 255, 218, 0.1);
          transform: translateY(-2px);
        }

        .cta-button:focus {
          outline: 2px solid #64ffda;
          outline-offset: 4px;
        }

        /* Project card hover */
        .project-card:hover {
          transform: translateY(-5px);
        }

        /* Mobile social icon hover */
        .mobile-social-icon:hover {
          color: #64ffda;
        }

        .mobile-social-icon:focus {
          outline: 2px solid #64ffda;
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
            order: 1;
          }

          .about-image {
            order: 2;
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
