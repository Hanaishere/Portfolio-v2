import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [glitchText, setGlitchText] = useState('ANUSHREE BOSE');

  // Glitch effect for hero text
  useEffect(() => {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const originalText = 'ANUSHREE BOSE';
    let glitchInterval;

    const startGlitch = () => {
      let iterations = 0;
      glitchInterval = setInterval(() => {
        setGlitchText(prev =>
          originalText.split('').map((char, index) => {
            if (index < iterations) {
              return originalText[index];
            }
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          }).join('')
        );

        iterations += 1 / 3;

        if (iterations >= originalText.length) {
          clearInterval(glitchInterval);
          setGlitchText(originalText);
        }
      }, 50);
    };

    startGlitch();
    const glitchTimer = setInterval(startGlitch, 8000);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(glitchTimer);
    };
  }, []);

  const projects = [
  {
    title: 'ROOM-E0',
    description:
      'A full-stack accommodation platform that helps users discover PGs, hostels, and rentals with smart search, detailed listings, and nearby location insights.',
    tech: ['Spring Boot', 'React', 'MySQL'],
    color: 'var(--neon-pink)',
    github: 'https://github.com/Hanaishere/Roomeo-Frontend'
  },

  {
    title: 'SERENE FLOWS',
    description:
      'A tool to convert youtube music video mixes into custom spotify playlists.',
    tech: ['React', 'Spring Boot', 'OAuth 2.0'],
    color: 'var(--neon-cyan)',
    github: 'https://github.com/Hanaishere/SereneFlows'
  },

  {
    title: 'PIXEL PORTFOLIO',
    description:
      'This very website! A nostalgic journey through retro gaming aesthetics with modern tech.',
    tech: ['React', 'Framer Motion', 'CSS'],
    color: 'var(--neon-yellow)',
    github: 'https://github.com/Hanaishere/Portfolio-v2'
  },

  {
    title: 'ZERO NET',
    description:
      'A blockchain based carbon exchange and trading platform',
    tech: ['Blockchain', 'Web3', 'MongoDB', 'Node JS'],
    color: 'var(--neon-green)',
    github: 'https://github.com/Hanaishere/CarbonCredit-ZeroNet'
  }
];

  const achievements = [
    { icon: '🏆', title: 'HIGH SCORE', desc: '400+ LeetCode Problems' },
    { icon: '⭐', title: 'COMBO MASTER', desc: 'Hackthon Finalists' },
    { icon: '🎮', title: 'LEVEL 99', desc: 'Full Stack Developer' },
    { icon: '💎', title: 'RARE DROP', desc: '200+ github commits & Open Source Contributor' }
  ];

  const links = [
    { name: 'GitHub', url: 'https://github.com/Hanaishere', icon: '👾', color: 'var(--neon-purple)' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anushree-bose-100106298/', icon: '💼', color: 'var(--neon-cyan)' },
   { name: 'X', url: 'https://x.com/hana_codes', icon: '📟', color: 'var(--neon-yellow)' },
      { name: 'LeetCode', url: 'https://leetcode.com/u/hana_anushreebose05/', icon: '🎯', color: 'var(--neon-yellow)' },

    { name: 'Email', url: 'mailto:boseanushree004@gmail.com', icon: '📧', color: 'var(--neon-pink)' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <div className="app">
      {/* Floating particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="insert-coin"
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >
          WELCOME TO MY WORLD
        </motion.div>

        <motion.h1
          className="hero-title pixel-text neon-glow"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            delay: 0.2
          }}
        >
          {glitchText}
        </motion.h1>

        <motion.div
          className="hero-subtitle arcade-text"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="typing-text">SOFTWARE DEVELOPER // PIXELS * LOGIC * INNOVATION</span>
        </motion.div>
        {/* Hero Buttons */}
<motion.div
  className="hero-buttons"
  initial={{ y: 30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.7 }}
>
  <motion.a
    href="#about"
    className="arcade-button hero-btn"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    START GAME
  </motion.a>

  <motion.a
    href="#projects"
    className="arcade-button hero-btn secondary"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    VIEW QUESTS
  </motion.a>

  <motion.a
    href="https://drive.google.com/file/d/1uoPo4gOkiXdx4RkNmjQE8-cJmINszCn7/view?usp=drive_link"
    target="_blank"
    className="arcade-button hero-btn"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    DOWNLOAD CV
  </motion.a>
</motion.div>
        <motion.div
          className="score-display"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="score-item">
            <span className="score-label">LEVEL</span>
            <span className="score-value">Undergrad</span>
          </div>
          <div className="score-item">
            <span className="score-label">XP</span>
            <motion.span
              className="score-value"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              Java + React + AI
            </motion.span>
          </div>
          <div className="score-item">
            <span className="score-label">Active Quests</span>
            <span className="score-value">Building Projects</span>
          </div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="about section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 id="about"
        className="section-title pixel-text" variants={itemVariants}>
          <span className="title-bracket">{'[ '}</span>
          ABOUT ME
          <span className="title-bracket">{' ]'}</span>
        </motion.h2>

        <motion.div 
        className="about-content arcade-card" variants={itemVariants}>
          <p className="arcade-text">
            Welcome to my digital arcade! I'm a passionate developer who loves crafting
            pixel-perfect experiences and building robust applications. With a controller
            in one hand and a keyboard in the other, I navigate through the realms of
            modern web development while keeping the spirit of retro gaming alive.
          </p>
          <p className="arcade-text">
            My journey in tech is like a never-ending game - always learning new mechanics,
            defeating bugs like final bosses, and leveling up my skills. Whether it's
            React, Node.js, or the latest framework, I'm always ready for the next challenge!
          </p>
        </motion.div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="projects section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 id="projects"
        className="section-title pixel-text" variants={itemVariants}>
          <span className="title-bracket">{'[ '}</span>
          QUESTS
          <span className="title-bracket">{' ]'}</span>
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card arcade-card"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotate: [0, -1, 1, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="project-header">
                <h3 className="pixel-text project-title" style={{ color: project.color }}>
                  {project.title}
                </h3>
                <motion.div
                  className="project-icon"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                >
                  ⚡
                </motion.div>
              </div>

              <p className="arcade-text project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="tech-tag pixel-text"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <motion.button
                className="arcade-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                VISIT
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        className="achievements section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 className="section-title pixel-text" variants={itemVariants}>
          <span className="title-bracket">{'[ '}</span>
          ACHIEVEMENTS
          <span className="title-bracket">{' ]'}</span>
        </motion.h2>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="achievement-card arcade-card"
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { type: 'spring', stiffness: 300 }
              }}
            >
              <motion.div
                className="achievement-icon"
                animate={{
                  rotateY: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                {achievement.icon}
              </motion.div>
              <h3 className="pixel-text achievement-title">{achievement.title}</h3>
              <p className="arcade-text achievement-desc">{achievement.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Links Section */}
      <motion.section
        className="links section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 className="section-title pixel-text" variants={itemVariants}>
          <span className="title-bracket">{'[ '}</span>
          CONNECT
          <span className="title-bracket">{' ]'}</span>
        </motion.h2>

        <div className="links-grid">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-card arcade-card"
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
              style={{ borderColor: link.color }}
            >
              <motion.div
                className="link-icon"
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              >
                {link.icon}
              </motion.div>
              <span className="pixel-text link-name" style={{ color: link.color }}>
                {link.name}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* Other/Fun Facts Section */}
      <motion.section
        className="other section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 className="section-title pixel-text" variants={itemVariants}>
          <span className="title-bracket">{'[ '}</span>
          BONUS STAGE
          <span className="title-bracket">{' ]'}</span>
        </motion.h2>

        <motion.div className="other-content arcade-card" variants={itemVariants}>
          <div className="fun-facts">
            <motion.div
              className="fact-item"
              whileHover={{ x: 10 }}
            >
              <span className="fact-icon">🎮</span>
              <span className="arcade-text">Favorite Game: The Legend of Zelda</span>
            </motion.div>
            <motion.div
              className="fact-item"
              whileHover={{ x: 10 }}
            >
              <span className="fact-icon">☕</span>
              <span className="arcade-text">Fuel: Coffee + Energy Drinks</span>
            </motion.div>
            <motion.div
              className="fact-item"
              whileHover={{ x: 10 }}
            >
              <span className="fact-icon">🌙</span>
              <span className="arcade-text">Coding Hours: 10 PM - 4 AM</span>
            </motion.div>
            <motion.div
              className="fact-item"
              whileHover={{ x: 10 }}
            >


              <span className="fact-icon">🎵</span>

              <span className="arcade-text">
  
  Check out my Playlist ---
  <a
    href="https://open.spotify.com/playlist/4oDOUsDuBQE3tCWlkJHUzG"
    target="_blank"
    rel="noopener noreferrer"
    className="spotify-link"
  >
    Link
  </a>
</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="footer-content pixel-text"
          animate={{
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >
          GAME OVER? PRESS START TO CONTINUE
        </motion.div>
        <div className="arcade-text footer-copyright">
          © 2026 ANUSHREE BOSE • CRAFTED WITH ♥ AND PIXELS
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
