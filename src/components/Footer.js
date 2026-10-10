import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              INTERIORVIZ<span>STUDIO</span>
            </div>
            <p className="footer-tagline">
              Thoughtful interiors for slower mornings, long dinners, and all
              the little moments in between.
            </p>
            <div className="footer-tools">
              <span className="tool-badge">Residential</span>
              <span className="tool-badge">Hospitality</span>
              <span className="tool-badge">Styling</span>
            </div>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#services">Space planning</a>
              </li>
              <li>
                <a href="#services">Interior design</a>
              </li>
              <li>
                <a href="#services">Materials & finishes</a>
              </li>
              <li>
                <a href="#services">Bespoke details</a>
              </li>
              <li>
                <a href="#services">Interior styling</a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Let's Connect</h4>
            <p>Ready to make a little more room for living?</p>
            <a
              href="mailto:interiorvizstudio@gmail.com"
              className="footer-email"
            >
              interiorvizstudio@gmail.com
            </a>
            <div className="social-links">
              <a
                href="https://www.behance.net/sadiqsaifi9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.433 12.062c0-4.386-3.564-7.951-7.95-7.951S4.532 7.676 4.532 12.062c0 2.214.977 4.213 2.574 5.664V24h-2v-6.276H2V12.062c0-1.155.938-2.092 2.093-2.092h2.584V6.388h2.084v3.582h2.506c-.097-1.451-.62-2.665-1.67-3.573 2.174-.293 4.145-.438 5.877-.438 2.748 0 5.167 1.154 6.801 3.102.362.425.684.908.955 1.443.28.553.48 1.153.522 1.821h2.035c-.047-1.93-.89-3.49-2.472-4.522C20.53 16.115 20.433 14.064 20.433 12.062z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://dribbble.com/sadiq-saifi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dribbble"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.324c-.281-.054-.563-.103-.85-.103-1.995 0-3.678 1.024-4.608 2.724 1.78-1.81 4.06-2.92 6.59-2.92 1.1 0 2.27.07 3.24.21.05.46.08.9.08 1.38 0 2.28-.6 3.09-2.31a8.64 8.64 0 0 0-1.54-4.53c.03-.24.05-.47.05-.7 0-3.82-3.04-6.85-6.76-6.85-1.54 0-2.85.64-3.82 1.72a7.14 7.14 0 0 0-2.07 5.58c0 1.06.15 2.09.4 3.05 1.77-.34 3.32-1.08 4.61-2.22z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} InteriorViz Studio. All rights reserved.</p>
          <p className="footer-note">Made with care, from room to room</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
