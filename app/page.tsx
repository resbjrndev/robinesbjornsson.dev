'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navigation from './components/Navigation';
import MobileMenu from './components/MobileMenu';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import backgroundImage from '../public/assets/images/pexels-naveed-nizami-3102824-8166913.jpg';
import './page.css';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeCompany, setActiveCompany] = useState('Devies');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    if (mobileMenuOpen) {
      // Calculate scrollbar width before hiding it
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      style={{
        backgroundColor: '#020c1b',
        color: '#8892b0',
        minHeight: '100vh',
        position: 'relative'
      }}
    >
      {/* Background Image - optimized with Next.js Image */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      >
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          quality={85}
          placeholder="blur"
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            filter: 'blur(3px)',
            transform: 'scale(1.02)'
          }}
        />
        {/* Dark overlay for better text readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(2, 12, 27, 0.5)',
            pointerEvents: 'none'
          }}
        />
      </div>
            <Navigation
        scrollToTop={scrollToTop}
        scrollToSection={scrollToSection}
        onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        isMenuOpen={mobileMenuOpen}
      />

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        scrollToSection={scrollToSection}
      />


      <main style={{ paddingTop: '70px', position: 'relative', zIndex: 1 }}>
        <AboutSection darkMode={darkMode} />
        <ExperienceSection
          activeCompany={activeCompany}
          setActiveCompany={setActiveCompany}
        />
        <ProjectsSection />
        <ContactSection />
      </main>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Footer />
      </div>
    </div>
  );
}
