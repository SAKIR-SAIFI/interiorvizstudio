import React from 'react';
import { media } from './portfolioAssets';

const aboutImage = media.find((item) => item.folder === 'foyer' && !item.isPdf)
  || media.find((item) => item.folder === 'bedroom' && !item.isPdf);

const designPrinciples = [
  ['01', 'Listen first', 'A good room begins with the people who use it.'],
  ['02', 'Choose with care', 'Natural textures, honest materials, lasting pieces.'],
  ['03', 'Make it personal', 'The small details that make a space feel like yours.'],
];

const About = () => (
  <section id="about" className="about section-space">
    <div className="container about-grid">
      <div className="about-image">
        <div className="image-wrapper">
          {aboutImage && (
            <img
              src={aboutImage.src}
              alt="A thoughtfully detailed entryway from the portfolio"
              loading="lazy"
            />
          )}
          <div className="about-image-caption">
            <span>Spaces that welcome you in</span>
            <span>Interior study</span>
          </div>
        </div>
        <span className="about-image-number" aria-hidden="true">I.</span>
      </div>

      <div className="about-content">
        <span className="section-tag">The approach</span>
        <h2 className="section-title">Good design is felt, <span className="highlight">not just seen.</span></h2>
        <p className="about-text">
          The best interiors bring beauty and everyday life into balance. Each space starts with a conversation—about routines, treasured pieces, and the feeling you want to come home to.
        </p>
        <p className="about-text">
          From considered layouts to tactile finishes and thoughtful lighting, every choice works together to create a home that feels effortless, personal, and enduring.
        </p>

        <div className="about-skills">
          <h3>Design, with intention</h3>
          <div className="principles-list">
            {designPrinciples.map(([number, title, description]) => (
              <div className="principle-item" key={number}>
                <span className="principle-number">{number}</span>
                <div>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
