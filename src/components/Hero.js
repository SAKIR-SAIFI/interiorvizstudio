import React from 'react';
import { media } from './portfolioAssets';

const heroImage = media.find((item) => item.folder === 'lobby' && !item.isPdf)
  || media.find((item) => !item.isPdf);

const Hero = () => (
  <section id="home" className="hero">
    <div className="container hero-layout">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Thoughtful interior design
        </div>
        <h1 className="hero-title">
          A more <span className="highlight">considered</span> way to live.
        </h1>
        <p className="hero-subtitle">
          Warm, timeless interiors shaped around the way you live. From the first sketch to the final finishing touch.
        </p>
        <div className="hero-actions">
          <a href="#portfolio" className="btn btn-primary">
            Explore the work <span aria-hidden="true">↗</span>
          </a>
          <a href="#about" className="text-link">Meet the designer <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-qualities" aria-label="Design focus">
          <span>Residential</span>
          <span>Hospitality</span>
          <span>Workspaces</span>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-image-frame">
          {heroImage && (
            <img
              src={heroImage.src}
              alt="A warm, layered interior from the design portfolio"
              className="hero-image"
              fetchPriority="high"
            />
          )}
          <div className="hero-image-caption">
            <span>Spaces with soul</span>
            <span>01 / 16</span>
          </div>
        </div>
        <div className="hero-note">
          <span className="hero-note-mark" aria-hidden="true">✳</span>
          <span>Made for<br />everyday living</span>
        </div>
        <span className="hero-vertical-label">INTERIORS · OBJECTS · LIGHT</span>
      </div>
    </div>
    <a href="#about" className="hero-scroll" aria-label="Scroll to about section">
      <span />
    </a>
  </section>
);

export default Hero;
