'use client';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  scrollToSection: (sectionId: string) => void;
}

export default function MobileMenu({ isOpen, onClose, scrollToSection }: MobileMenuProps) {
  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 998,
          animation: 'fadeIn 0.3s ease-in-out'
        }}
        aria-hidden="true"
      />

      {/* Dropdown menu - matching nav bar styling */}
      <div
        className="mobile-dropdown-menu"
        style={{
          position: 'fixed',
          top: '90px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 40px)',
          maxWidth: '600px',
          borderRadius: '24px',
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          zIndex: 999,
          padding: '24px',
          animation: 'slideDown 0.3s ease-out'
        }}
      >
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center'
          }}
        >
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('about');
            }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '17px',
              fontWeight: '500',
              color: '#ccd6f6',
              textDecoration: 'none',
              padding: '14px 24px',
              borderRadius: '16px',
              transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
              width: '100%',
              textAlign: 'center',
              cursor: 'pointer'
            }}
            className="mobile-menu-link"
          >
            About
          </a>
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('experience');
            }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '17px',
              fontWeight: '500',
              color: '#ccd6f6',
              textDecoration: 'none',
              padding: '14px 24px',
              borderRadius: '16px',
              transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
              width: '100%',
              textAlign: 'center',
              cursor: 'pointer'
            }}
            className="mobile-menu-link"
          >
            Experience
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('projects');
            }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '17px',
              fontWeight: '500',
              color: '#ccd6f6',
              textDecoration: 'none',
              padding: '14px 24px',
              borderRadius: '16px',
              transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
              width: '100%',
              textAlign: 'center',
              cursor: 'pointer'
            }}
            className="mobile-menu-link"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '17px',
              fontWeight: '500',
              color: '#ccd6f6',
              textDecoration: 'none',
              padding: '14px 24px',
              borderRadius: '16px',
              transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
              width: '100%',
              textAlign: 'center',
              cursor: 'pointer'
            }}
            className="mobile-menu-link"
          >
            Contact
          </a>

          {/* Divider */}
          <div
            style={{
              width: '100%',
              height: '1px',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              margin: '8px 0'
            }}
          />

          <a
            href="https://www.linkedin.com/in/robinesbjornsson/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '17px',
              fontWeight: '500',
              color: '#ccd6f6',
              textDecoration: 'none',
              padding: '14px 24px',
              borderRadius: '16px',
              transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
              width: '100%',
              textAlign: 'center',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
            className="mobile-menu-link"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </>
  );
}
