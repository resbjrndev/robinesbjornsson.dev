'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profileLightMode from '../public/assets/images/profileImageLightMode.svg'
import profileDarkMode from '../public/assets/images/profileImageDarkMode.svg'
import headerLightMode from '../public/assets/images/headerLightMode.svg'
import headerDarkMode from '../public/assets/images/headerDarkMode.svg'
import lightModeToggle from '../public/assets/images/lightModeToggle.svg'
import darkModeToggle from '../public/assets/images/darkModeToggle.svg'
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
        backgroundColor: darkMode ? '#0f172a' : '#f8fafc',
        color: darkMode ? 'white' : '#111827',
        background: darkMode ? 'linear-gradient(to bottom right, #0f172a, #1e293b, #0f172a)' : 'linear-gradient(to bottom right, #f9fafb, #ffffff, #eff6ff)'
      }}>
      {/* Header */}
      <header className="flex justify-between items-start">
        <h1 className={`font-semibold ${darkMode ? 'text-teal-400' : 'text-blue-600'}`} style={{ fontSize: '16px', marginTop: '32px', marginLeft: '32px' }}>
          robinesbjornsson.dev
        </h1>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="relative overflow-hidden transition-all duration-300 hover:scale-110"
          style={{
            marginTop: '32px',
            marginRight: '32px',
            width: '72px',
            height: '36px',
            borderRadius: '18px',
            backgroundColor: 'transparent',
            border: `2px solid ${darkMode ? '#ffffff' : '#3b82f6'}`,
            cursor: 'pointer'
          }}
          aria-label="Toggle dark mode"
        >
          {/* Sliding Circle */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: darkMode ? '39px' : '3px',
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: 'transparent',
              border: `2px solid ${darkMode ? '#ffffff' : '#3b82f6'}`,
              transition: 'left 0.3s ease-in-out, border-color 0.3s ease-in-out',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: 'translateY(-50%)'
            }}
          >
            {/* SVG Icon in Circle */}
            <Image
              src={darkMode ? darkModeToggle : lightModeToggle}
              alt={darkMode ? 'Dark mode' : 'Light mode'}
              width={20}
              height={20}
              style={{
                filter: darkMode ? 'brightness(0) saturate(100%) invert(100%)' : 'brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(204deg) brightness(97%) contrast(97%)'
              }}
            />
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
            {/* Animated Profile Image Container */}
            <div
              className="profile-image-container"
              style={{
                width: '320px',
                height: '320px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
                // border: `3px solid ${darkMode ? '#2dd4bf' : '#3b82f6'}`,
                // borderRadius: '50%',
                // animation: 'morph 8s infinite ease-in-out'
              }}
            >
              {/* Placeholder for your custom image */}
              <div className={`w-full h-full flex items-center justify-center text-8xl ${darkMode ? 'text-teal-400' : 'text-blue-500'}`}>
                {/* Replace this SVG with your custom image */}
                <Image
                  src={darkMode ? profileDarkMode : profileLightMode}
                  alt="Robin"
                  width={250}
                  height={250}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABA..." // tiny base64 image
                  style={{
                    transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
                    opacity: imageTransition ? 0 : 1,
                    transform: imageTransition ? 'scale(0.95)' : 'scale(1)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="content-section">
          {/* Handwritten Style Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-0"
          >
            <Image
              src={darkMode ? headerDarkMode : headerLightMode}
              alt="Robin"
              width={200}
              height={80}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABA..." // tiny base64 image
              className="header-image"
              style={{
                transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
                opacity: imageTransition ? 0 : 1,
                transform: imageTransition ? 'scale(0.95)' : 'scale(1)',
                display: 'block',
                marginBottom: '-10px'
              }}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-lg mb-6 ${darkMode ? 'text-white' : 'text-gray-700'}`}
          >
            I&apos;m a Frontend Engineer focused on React & TypeScript.
            I build fast, accessible products with clean
            architectures and delightful micro-interactions.
          </motion.p>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-16 mb-8"
          >
            <a
              href="https://www.linkedin.com/in/robinesbjornsson/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold transition-colors"
              style={{
                color: darkMode ? 'white' : '#2563eb',
                textDecoration: 'none',
                marginRight: '2.4rem',
                fontWeight: 'bold'
              }}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/robinesbjornsson?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold transition-colors"
              style={{
                color: darkMode ? 'white' : '#2563eb',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
            >
              GitHub
            </a>
          </motion.div>

          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`space-y-4 text-base leading-relaxed ${darkMode ? 'text-white' : 'text-gray-700'}`}
          >
      
          </motion.div>
        </div>
      </main>

      {/* CSS for animations and responsive layout */}
      <style jsx>{`
        .main-container {
          display: grid;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          min-height: calc(100vh - 120px);
          padding: 1rem;

          /* Mobile first - stack vertically */
          grid-template-columns: 1fr;
          grid-template-rows: auto auto;
          gap: 0rem;
        }

        .profile-section {
          justify-self: center;
          margin-right: 0;
        }

        .content-section {
          justify-self: center;
          max-width: 500px;
          margin-top: -20rem;
        }

        .header-image {
          margin-top: 0;
        }

        /* Desktop - side by side */
        @media (min-width: 768px) {
          .main-container {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            gap: 4rem;
            padding: 2rem;
          }

          .profile-section {
            justify-self: end;
            margin-right: -5rem;
          }

          .content-section {
            justify-self: start;
            margin-top: 0;
          }
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