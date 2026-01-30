'use client';

import Image from 'next/image';
import profileImage from '../../public/assets/images/fejsdarkmode.png';

interface NavigationProps {
  scrollToTop: () => void;
  scrollToSection: (sectionId: string) => void;
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

export default function Navigation({
  scrollToTop,
  scrollToSection,
  onMenuToggle,
  isMenuOpen
}: NavigationProps) {
  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className="main-nav"
        style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          animation: 'slideDown 0.6s ease-out'
        }}
      >
        <div
          className="nav-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            padding: '12px 24px',
            borderRadius: '50px',
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
          }}
        >
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="logo-button"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px 8px',
              borderRadius: '25px',
              transition: 'all 0.3s ease'
            }}
          >
            <Image
              src={profileImage}
              alt="Robin Esbjörnsson"
              width={32}
              height={32}
              style={{ borderRadius: '50%' }}
            />
            <span
              className="nav-name"
              style={{
                color: '#ccd6f6',
                fontWeight: 500,
                fontSize: '15px',
                whiteSpace: 'nowrap'
              }}
            >
              Robin Esbjörnsson
            </span>
          </button>

          {/* Desktop Nav Links */}
          <div className="nav-links-desktop">
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
              className="nav-link-pill"
            >
              About
            </a>
            <a
              href="#experience"
              onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}
              className="nav-link-pill"
            >
              Experience
            </a>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
              className="nav-link-pill"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              className="nav-link-pill"
            >
              Contact
            </a>
            <a
              href="https://www.linkedin.com/in/robinesbjornsson/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link-pill nav-link-icon"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={onMenuToggle}
            className="hamburger-menu-pill"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '10px',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              position: 'relative',
              flexShrink: 0
            }}
          >
            <div style={{
              position: 'absolute',
              width: '22px',
              height: '2px',
              backgroundColor: '#70B5FF',
              transform: isMenuOpen ? 'rotate(45deg)' : 'translateY(-6px)',
              transition: 'all 0.3s ease',
              transformOrigin: 'center'
            }} />
            <div style={{
              position: 'absolute',
              width: '22px',
              height: '2px',
              backgroundColor: '#70B5FF',
              opacity: isMenuOpen ? 0 : 1,
              transition: 'all 0.3s ease'
            }} />
            <div style={{
              position: 'absolute',
              width: '22px',
              height: '2px',
              backgroundColor: '#70B5FF',
              transform: isMenuOpen ? 'rotate(-45deg)' : 'translateY(6px)',
              transition: 'all 0.3s ease',
              transformOrigin: 'center'
            }} />
          </button>
        </div>
      </nav>
    </>
  );
}
