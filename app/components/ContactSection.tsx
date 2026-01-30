'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
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
      <div className="glass-section" style={{ width: '100%' }}>
      <p style={{ fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace", fontSize: '16px', color: '#70B5FF', marginBottom: '20px' }}>
        04. What&apos;s Next?
      </p>
      <h2 style={{ fontSize: '60px', fontWeight: '600', color: '#ffffff', marginBottom: '20px' }}>
        Get In Touch
      </h2>
      <p style={{ fontSize: '18px', color: '#c8d0e8', marginBottom: '50px', lineHeight: '1.5' }}>
        My inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
      </p>

      <div>
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
      </div>
    </motion.section>
  );
}
