import React from 'react';

const services = [
  {
    id: '01',
    category: '01 / PLAN',
    title: 'Space planning',
    description: 'Thoughtful layouts that make each room feel open, intuitive, and easy to live in.',
    features: ['Furniture layouts', 'Room flow', 'Storage planning'],
  },
  {
    id: '02',
    category: '02 / SHAPE',
    title: 'Interior design',
    description: 'A cohesive design direction, bringing architecture, furnishings, and details together.',
    features: ['Concept direction', 'Furniture & lighting', 'Design details'],
  },
  {
    id: '03',
    category: '03 / SELECT',
    title: 'Materials & finishes',
    description: 'A layered palette of colors, surfaces, and textures chosen to feel right for your home.',
    features: ['Color palettes', 'Material selection', 'Finish schedules'],
  },
  {
    id: '04',
    category: '04 / CREATE',
    title: 'Bespoke details',
    description: 'Made-to-measure pieces and considered joinery that make the most of every corner.',
    features: ['Custom cabinetry', 'Made-to-measure', 'Decorative details'],
  },
  {
    id: '05',
    category: '05 / FINISH',
    title: 'Interior styling',
    description: 'The final layer: art, objects, textiles, and finishing touches that bring a room to life.',
    features: ['Art & accessories', 'Textiles', 'Final room styling'],
  },
  {
    id: '06',
    category: '06 / GUIDE',
    title: 'Design consultation',
    description: 'Clear, practical direction for a room refresh or a project that needs a fresh perspective.',
    features: ['In-home guidance', 'Design reviews', 'Shopping direction'],
  },
];

const process = [
  ['01', 'Get to know you', 'We talk through your space, routines, references, and priorities.'],
  ['02', 'Find the direction', 'A clear concept brings together layout, color, materials, and mood.'],
  ['03', 'Refine the details', 'We develop the design and make thoughtful selections for each room.'],
  ['04', 'Bring it to life', 'The pieces come together, finishing with the details that make it yours.'],
];

const Services = () => (
  <section id="services" className="services section-space">
    <div className="container">
      <div className="section-header section-header-split">
        <div>
          <span className="section-tag">How I can help</span>
          <h2 className="section-title">From first thought<br />to <span className="highlight">finishing touch.</span></h2>
        </div>
        <p className="section-intro">Whether you are beginning with a blank room or refining the details, each service is shaped around your home and the way you want to live.</p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article key={service.id} className="service-card">
            <span className="service-index">{service.id}</span>
            <div className="service-tool">{service.category}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature) => (
                <li key={feature}><span aria-hidden="true">↗</span>{feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="process-section">
        <div className="process-heading">
          <span className="section-tag">A simple process</span>
          <h3 className="process-title">Good things take <span className="highlight">shape together.</span></h3>
        </div>
        <div className="process-steps">
          {process.map(([number, title, description]) => (
            <article className="process-step" key={number}>
              <span className="step-number">{number}</span>
              <div className="step-content">
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Services;
