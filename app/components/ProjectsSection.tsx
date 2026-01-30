'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
  return (
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
      <div className="glass-section">
      <h2
        style={{
          fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
          fontSize: '32px',
          fontWeight: '600',
          color: '#ffffff',
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

      <div style={{ marginTop: '50px', display: 'grid', gap: '30px' }}>
        <a
          href="https://kanban-steel.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            textDecoration: 'none',
            backgroundColor: 'rgba(17, 34, 64, 0.6)',
            padding: '30px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
            cursor: 'pointer'
          }}
          className="project-card"
        >
          <h3 style={{ fontSize: '24px', color: '#ffffff', marginBottom: '15px', fontWeight: '600' }}>
            Kanban Board App →
          </h3>
          <p style={{ fontSize: '16px', color: '#c8d0e8', marginBottom: '20px', lineHeight: '1.6' }}>
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
            backgroundColor: 'rgba(17, 34, 64, 0.6)',
            padding: '30px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
            cursor: 'pointer'
          }}
          className="project-card"
        >
          <h3 style={{ fontSize: '24px', color: '#ffffff', marginBottom: '15px', fontWeight: '600' }}>
            Flashcard Language App →
          </h3>
          <p style={{ fontSize: '16px', color: '#c8d0e8', marginBottom: '20px', lineHeight: '1.6' }}>
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
      </div>
    </motion.section>
  );
}
